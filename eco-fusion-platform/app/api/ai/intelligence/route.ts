import { NextResponse } from 'next/server';
import { z } from 'zod';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { activeOrg } from '@/lib/api-access';
import { canAdminister, type OrgContext } from '@/lib/tenancy';
import { prisma } from '@/lib/prisma';
import { checkRateLimit } from '@/lib/rate-limit';
import { readJson } from '@/lib/validation/request';
import { aiRateLimited, chatHistory, chatMessage } from '@/lib/validation/fields';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

const chatSchema = z.object({
  message: chatMessage,
  history: chatHistory,
});

/** Messages one person may send the assistant in an hour. */
const AI_LIMIT = { interval: 60 * 60 * 1000, maxRequests: 60 };

/** Most commands one reply may carry. Anything past this is ignored. */
const MAX_COMMANDS = 10;

const SYSTEM_PROMPT = `You are EcoFusion AI, an intelligent assistant integrated into an aquaponics farm management system. You have REAL-TIME ACCESS to the system's data including:

- Zones (tanks, grow beds, biodigesters)
- Sensor readings (temperature, pH, dissolved oxygen, ammonia, humidity)
- Fish inventory (species, quantity, weight, age, status)
- Plant inventory (crops, varieties, quantity, growth stage)
- Harvests and sales data
- Alert thresholds for each zone's parameters

You can SET, UPDATE, or REMOVE alert thresholds when the user requests. To do this, include a command block in your response using this exact format:

[COMMAND:SET_ALERT]
zone: <exact zone name>
parameter: <temperature|ph|dissolvedO2|ammonia|humidity>
min: <number or null>
max: <number or null>
level: <info|warning|critical>
[/COMMAND]

[COMMAND:REMOVE_ALERT]
zone: <exact zone name>
parameter: <parameter name>
[/COMMAND]

Examples:
- User: "Set temperature alert for Zone A, warn if above 30C"
  Your response includes:
  [COMMAND:SET_ALERT]
  zone: Zone A
  parameter: temperature
  min: null
  max: 30
  level: warning
  [/COMMAND]

- User: "Alert me if pH drops below 6.5 in the main tank, make it critical"
  [COMMAND:SET_ALERT]
  zone: Main Tank
  parameter: ph
  min: 6.5
  max: null
  level: critical
  [/COMMAND]

Always use the zone's name exactly as it appears in the data below. Always explain what you're doing in natural language AND include the command block. The command will be executed automatically.`;

type Command = { type: 'SET_ALERT' | 'REMOVE_ALERT'; params: Record<string, string | null> };

// Parse commands from AI response
function parseCommands(text: string): Command[] {
  const commands: Command[] = [];

  const setAlertRegex = /\[COMMAND:SET_ALERT\]([\s\S]*?)\[\/COMMAND\]/g;
  const removeAlertRegex = /\[COMMAND:REMOVE_ALERT\]([\s\S]*?)\[\/COMMAND\]/g;

  let match;

  while ((match = setAlertRegex.exec(text)) !== null) {
    const content = match[1];
    const params: Record<string, string | null> = {};

    const zoneMatch = content.match(/zone:[ \t]*(.*)/i);
    const paramMatch = content.match(/parameter:[ \t]*(.*)/i);
    const minMatch = content.match(/min:[ \t]*(.*)/i);
    const maxMatch = content.match(/max:[ \t]*(.*)/i);
    const levelMatch = content.match(/level:[ \t]*(.*)/i);

    if (zoneMatch) params.zone = zoneMatch[1].trim();
    if (paramMatch) params.parameter = paramMatch[1].trim().toLowerCase();
    if (minMatch) params.min = minMatch[1].trim().toLowerCase() === 'null' ? null : minMatch[1].trim();
    if (maxMatch) params.max = maxMatch[1].trim().toLowerCase() === 'null' ? null : maxMatch[1].trim();
    if (levelMatch) params.level = levelMatch[1].trim().toLowerCase();

    commands.push({ type: 'SET_ALERT', params });
  }

  while ((match = removeAlertRegex.exec(text)) !== null) {
    const content = match[1];
    const params: Record<string, string | null> = {};

    const zoneMatch = content.match(/zone:[ \t]*(.*)/i);
    const paramMatch = content.match(/parameter:[ \t]*(.*)/i);

    if (zoneMatch) params.zone = zoneMatch[1].trim();
    if (paramMatch) params.parameter = paramMatch[1].trim().toLowerCase();

    commands.push({ type: 'REMOVE_ALERT', params });
  }

  return commands.slice(0, MAX_COMMANDS);
}

/** Parameter names as the model writes them (lower-cased), to how they are stored. */
const PARAMETERS: Record<string, string> = {
  temperature: 'temperature',
  ph: 'ph',
  dissolvedo2: 'dissolvedO2',
  ammonia: 'ammonia',
  humidity: 'humidity',
};

const ALERT_LEVELS = new Set(['info', 'warning', 'critical']);

/** The stored name of a parameter, or null when it is not one. */
function parameterName(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const key = raw.trim().toLowerCase();
  return Object.prototype.hasOwnProperty.call(PARAMETERS, key) ? PARAMETERS[key] : null;
}

/**
 * A limit from the model's text. Absent and "null" mean none; anything else
 * must be a finite number in a sensor's range, or the command is refused.
 */
function parseLimit(
  raw: string | null | undefined
): { ok: true; value: number | null } | { ok: false } {
  if (raw === null || raw === undefined || raw.trim() === '') return { ok: true, value: null };
  const value = Number(raw.trim());
  if (!Number.isFinite(value) || Math.abs(value) > 1_000_000) return { ok: false };
  return { ok: true, value };
}

/**
 * The one zone of this business with exactly this name (ignoring case), or
 * with this id. A blank name matches nothing, and a name two zones share is
 * refused rather than guessed at.
 */
async function findZone(
  zoneName: string | null | undefined,
  organizationId: string
): Promise<{ zone: { id: string; name: string } | null; reason: string }> {
  const name = zoneName?.trim() ?? '';
  if (!name || name.length > 200) return { zone: null, reason: 'No zone was named' };

  const matches = await prisma.zone.findMany({
    where: {
      organizationId,
      OR: [
        { name: { equals: name, mode: 'insensitive' } },
        { id: name },
      ],
    },
    select: { id: true, name: true },
    take: 2,
  });
  if (matches.length === 0) return { zone: null, reason: `Could not find zone: ${name}` };
  if (matches.length > 1) {
    return { zone: null, reason: `More than one zone is called ${name}, so nothing was changed` };
  }
  return { zone: matches[0], reason: '' };
}

// Execute commands
async function executeCommands(commands: Command[], ctx: OrgContext): Promise<string[]> {
  // Alert limits are configuration, and configuration belongs to the people
  // who run the business. Nothing is changed, and the reply says why.
  if (!canAdminister(ctx)) {
    return ['No changes were made: only an owner, supervisor or manager can change alert limits.'];
  }

  const results: string[] = [];

  for (const cmd of commands) {
    const parameter = parameterName(cmd.params.parameter);
    if (!parameter) {
      results.push(`Invalid parameter: ${cmd.params.parameter ?? '(none)'}`);
      continue;
    }

    const { zone, reason } = await findZone(cmd.params.zone, ctx.organizationId);
    if (!zone) {
      results.push(reason);
      continue;
    }

    if (cmd.type === 'SET_ALERT') {
      const min = parseLimit(cmd.params.min);
      const max = parseLimit(cmd.params.max);
      if (!min.ok || !max.ok) {
        results.push(`Alert for ${parameter} in ${zone.name} not set: the limits must be numbers`);
        continue;
      }
      if (min.value === null && max.value === null) {
        results.push(`Alert for ${parameter} in ${zone.name} not set: give a minimum or a maximum`);
        continue;
      }
      if (min.value !== null && max.value !== null && min.value > max.value) {
        results.push(`Alert for ${parameter} in ${zone.name} not set: the minimum is above the maximum`);
        continue;
      }
      const level = cmd.params.level?.trim() || 'warning';
      if (!ALERT_LEVELS.has(level)) {
        results.push(
          `Alert for ${parameter} in ${zone.name} not set: the level must be info, warning or critical`
        );
        continue;
      }

      try {
        await prisma.zoneAlertThreshold.upsert({
          where: {
            zoneId_parameter: { zoneId: zone.id, parameter },
          },
          update: {
            minValue: min.value,
            maxValue: max.value,
            alertLevel: level,
            enabled: true,
          },
          create: {
            zoneId: zone.id,
            parameter,
            minValue: min.value,
            maxValue: max.value,
            alertLevel: level,
            enabled: true,
          },
        });
        results.push(`✓ Alert set for ${parameter} in ${zone.name}`);
      } catch (error) {
        console.error('AI intelligence: failed to set an alert threshold:', error);
        results.push(`Could not set the alert for ${parameter} in ${zone.name}. Please try again.`);
      }
    } else {
      try {
        const { count } = await prisma.zoneAlertThreshold.deleteMany({
          where: { zoneId: zone.id, parameter, zone: { organizationId: ctx.organizationId } },
        });
        results.push(
          count > 0
            ? `✓ Alert removed for ${parameter} in ${zone.name}`
            : 'Alert not found or already removed'
        );
      } catch (error) {
        console.error('AI intelligence: failed to remove an alert threshold:', error);
        results.push(`Could not remove the alert for ${parameter} in ${zone.name}. Please try again.`);
      }
    }
  }

  return results;
}

// Remove command blocks from response for cleaner output
function cleanResponse(text: string): string {
  return text
    .replace(/\[COMMAND:SET_ALERT\][\s\S]*?\[\/COMMAND\]/g, '')
    .replace(/\[COMMAND:REMOVE_ALERT\][\s\S]*?\[\/COMMAND\]/g, '')
    .trim();
}

async function getSystemData(organizationId: string) {
  // The business's data, whoever entered it, and a bounded amount of each so
  // the prompt stays a sensible size however large the business grows.
  const [
    zones,
    recentReadings,
    fishStock,
    plantCrops,
    growthParameters,
    alertThresholds
  ] = await Promise.all([
    prisma.zone.findMany({
      where: { organizationId },
      orderBy: { name: 'asc' },
      select: { id: true, name: true, type: true, status: true },
      take: 100,
    }),
    prisma.sensorReading.findMany({
      where: { zone: { organizationId } },
      include: { zone: { select: { name: true } } },
      orderBy: { timestamp: 'desc' },
      take: 50
    }),
    prisma.fishStock.findMany({
      where: { organizationId },
      include: { zone: { select: { name: true } } },
      orderBy: { dateAdded: 'desc' },
      take: 100,
    }),
    prisma.plantCrop.findMany({
      where: { organizationId },
      include: { zone: { select: { name: true } } },
      orderBy: { plantedDate: 'desc' },
      take: 100,
    }),
    prisma.growthParameter.findMany({
      where: { organizationId },
      take: 100,
    }),
    prisma.zoneAlertThreshold.findMany({
      where: { zone: { organizationId } },
      include: { zone: { select: { name: true } } },
      orderBy: { parameter: 'asc' },
      take: 500,
    })
  ]);

  let context = '\n\n=== CURRENT SYSTEM DATA ===\n';

  // Zones
  context += '\n## ZONES\n';
  if (zones.length === 0) {
    context += 'No zones configured.\n';
  } else {
    zones.forEach(zone => {
      context += `- ${zone.name} (ID: ${zone.id}, Type: ${zone.type}): ${zone.status}\n`;
    });
  }

  // Alert Thresholds
  context += '\n## CURRENT ALERT THRESHOLDS\n';
  if (alertThresholds.length === 0) {
    context += 'No alerts configured yet.\n';
  } else {
    const byZone = new Map<string, typeof alertThresholds>();
    alertThresholds.forEach(t => {
      const name = t.zone?.name || t.zoneId;
      if (!byZone.has(name)) byZone.set(name, []);
      byZone.get(name)!.push(t);
    });
    byZone.forEach((thresholds, zoneName) => {
      context += `\n${zoneName}:\n`;
      thresholds.forEach(t => {
        const range = [];
        if (t.minValue !== null) range.push(`min: ${t.minValue}`);
        if (t.maxValue !== null) range.push(`max: ${t.maxValue}`);
        context += `  - ${t.parameter}: ${range.join(', ')} [${t.alertLevel}] ${t.enabled ? '✓' : '✗'}\n`;
      });
    });
  }

  // Sensor Readings
  context += '\n## LATEST SENSOR READINGS\n';
  if (recentReadings.length === 0) {
    context += 'No readings available.\n';
  } else {
    const byZone = new Map<string, (typeof recentReadings)[number]>();
    recentReadings.forEach(r => {
      if (!byZone.has(r.zoneId)) byZone.set(r.zoneId, r);
    });
    byZone.forEach((r) => {
      const name = r.zone?.name || r.zoneId;
      const metrics = [];
      if (r.temperature !== null) metrics.push(`Temp: ${r.temperature}°C`);
      if (r.ph !== null) metrics.push(`pH: ${r.ph}`);
      if (r.dissolvedO2 !== null) metrics.push(`DO: ${r.dissolvedO2} mg/L`);
      if (r.ammonia !== null) metrics.push(`Ammonia: ${r.ammonia} ppm`);
      if (r.humidity !== null) metrics.push(`Humidity: ${r.humidity}%`);
      context += `- ${name}: ${metrics.join(', ')}\n`;
    });
  }

  // Fish
  context += '\n## FISH INVENTORY\n';
  if (fishStock.length === 0) {
    context += 'No fish stock.\n';
  } else {
    fishStock.forEach(f => {
      context += `- ${f.species} in ${f.zone?.name}: ${f.quantity} fish, avg ${f.avgWeight}g, ${f.status}\n`;
    });
  }

  // Plants
  context += '\n## PLANT INVENTORY\n';
  if (plantCrops.length === 0) {
    context += 'No plant crops.\n';
  } else {
    plantCrops.forEach(p => {
      context += `- ${p.cropType} in ${p.zone?.name}: ${p.quantity} plants, ${p.status}\n`;
    });
  }

  // Growth parameters for reference
  if (growthParameters.length > 0) {
    context += '\n## OPTIMAL PARAMETERS (Reference)\n';
    growthParameters.forEach(g => {
      context += `- ${g.species}: Temp ${g.optimalTempMin}-${g.optimalTempMax}°C, pH ${g.optimalPh}\n`;
    });
  }

  context += '\n=== END DATA ===\n';
  return context;
}

export async function POST(request: Request) {
  try {
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const body = await readJson(request, chatSchema);
    if (!body.ok) return body.response;
    const { message, history } = body.data;

    // Every message is paid for, so each person has an hourly allowance.
    const limit = await checkRateLimit(`ai-intel:${ctx.userId}`, AI_LIMIT);
    if (!limit.success) return aiRateLimited();

    const systemData = await getSystemData(ctx.organizationId);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    const turns = history.map((turn) => ({
      role: turn.role,
      parts: [{ text: turn.content }],
    }));

    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: SYSTEM_PROMPT + systemData }],
        },
        {
          role: 'model',
          parts: [{ text: 'I understand. I am EcoFusion AI with access to your aquaponics system data. I can monitor your zones, readings, inventory, and manage alert thresholds. How can I help?' }],
        },
        ...turns,
      ],
    });

    const result = await chat.sendMessage(message);
    const responseText = result.response.text();

    // Parse and execute any commands
    const commands = parseCommands(responseText);
    const executionResults = commands.length > 0 ? await executeCommands(commands, ctx) : [];

    // Clean response and add execution results
    let finalResponse = cleanResponse(responseText);
    if (executionResults.length > 0) {
      finalResponse += '\n\n**System Actions:**\n' + executionResults.join('\n');
    }

    return NextResponse.json({
      message: finalResponse,
      model: 'gemini-2.0-flash',
      actionsExecuted: canAdminister(ctx) ? commands.length : 0,
    });
  } catch (error) {
    console.error('AI intelligence error:', error);
    return NextResponse.json({ error: 'Failed to get AI response' }, { status: 500 });
  }
}
