import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

const SYSTEM_PROMPT = `You are EcoFusion AI, an intelligent assistant integrated into an aquaponics farm management system. You have REAL-TIME ACCESS to the system's data including:

- Zones (tanks, grow beds, biodigesters)
- Sensor readings (temperature, pH, dissolved oxygen, ammonia, humidity)
- Fish inventory (species, quantity, weight, age, status)
- Plant inventory (crops, varieties, quantity, growth stage)
- Harvests and sales data
- Alert thresholds for each zone's parameters

You can SET, UPDATE, or REMOVE alert thresholds when the user requests. To do this, include a command block in your response using this exact format:

[COMMAND:SET_ALERT]
zone: <zone name or partial match>
parameter: <temperature|ph|dissolvedO2|ammonia|humidity>
min: <number or null>
max: <number or null>
level: <info|warning|critical>
[/COMMAND]

[COMMAND:REMOVE_ALERT]
zone: <zone name>
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

Always explain what you're doing in natural language AND include the command block. The command will be executed automatically.`;

// Parse commands from AI response
function parseCommands(text: string): Array<{ type: string; params: Record<string, string | null> }> {
  const commands: Array<{ type: string; params: Record<string, string | null> }> = [];

  const setAlertRegex = /\[COMMAND:SET_ALERT\]([\s\S]*?)\[\/COMMAND\]/g;
  const removeAlertRegex = /\[COMMAND:REMOVE_ALERT\]([\s\S]*?)\[\/COMMAND\]/g;

  let match;

  while ((match = setAlertRegex.exec(text)) !== null) {
    const content = match[1];
    const params: Record<string, string | null> = {};

    const zoneMatch = content.match(/zone:\s*(.+)/i);
    const paramMatch = content.match(/parameter:\s*(.+)/i);
    const minMatch = content.match(/min:\s*(.+)/i);
    const maxMatch = content.match(/max:\s*(.+)/i);
    const levelMatch = content.match(/level:\s*(.+)/i);

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

    const zoneMatch = content.match(/zone:\s*(.+)/i);
    const paramMatch = content.match(/parameter:\s*(.+)/i);

    if (zoneMatch) params.zone = zoneMatch[1].trim();
    if (paramMatch) params.parameter = paramMatch[1].trim().toLowerCase();

    commands.push({ type: 'REMOVE_ALERT', params });
  }

  return commands;
}

// Find zone by name (scoped to user)
async function findZone(zoneName: string, userId: string) {
  let zone = await prisma.zone.findFirst({
    where: {
      userId,
      OR: [
        { name: { contains: zoneName, mode: 'insensitive' } },
        { id: zoneName },
      ],
    },
  });
  return zone;
}

// Execute commands
async function executeCommands(commands: Array<{ type: string; params: Record<string, string | null> }>, userId: string) {
  const results: string[] = [];

  for (const cmd of commands) {
    if (cmd.type === 'SET_ALERT') {
      const zone = await findZone(cmd.params.zone || '', userId);
      if (!zone) {
        results.push(`Could not find zone: ${cmd.params.zone}`);
        continue;
      }

      const parameter = cmd.params.parameter;
      const validParams = ['temperature', 'ph', 'dissolvedo2', 'ammonia', 'humidity'];
      if (!parameter || !validParams.includes(parameter.toLowerCase())) {
        results.push(`Invalid parameter: ${parameter}`);
        continue;
      }

      const paramName = parameter === 'dissolvedo2' ? 'dissolvedO2' : parameter;

      try {
        await prisma.zoneAlertThreshold.upsert({
          where: {
            zoneId_parameter: { zoneId: zone.id, parameter: paramName },
          },
          update: {
            minValue: cmd.params.min ? parseFloat(cmd.params.min) : null,
            maxValue: cmd.params.max ? parseFloat(cmd.params.max) : null,
            alertLevel: cmd.params.level || 'warning',
            enabled: true,
          },
          create: {
            zoneId: zone.id,
            parameter: paramName,
            minValue: cmd.params.min ? parseFloat(cmd.params.min) : null,
            maxValue: cmd.params.max ? parseFloat(cmd.params.max) : null,
            alertLevel: cmd.params.level || 'warning',
            enabled: true,
          },
        });
        results.push(`✓ Alert set for ${paramName} in ${zone.name}`);
      } catch (error) {
        results.push(`Failed to set alert: ${error}`);
      }
    } else if (cmd.type === 'REMOVE_ALERT') {
      const zone = await findZone(cmd.params.zone || '', userId);
      if (!zone) {
        results.push(`Could not find zone: ${cmd.params.zone}`);
        continue;
      }

      try {
        await prisma.zoneAlertThreshold.delete({
          where: {
            zoneId_parameter: { zoneId: zone.id, parameter: cmd.params.parameter || '' },
          },
        });
        results.push(`✓ Alert removed for ${cmd.params.parameter} in ${zone.name}`);
      } catch (error) {
        results.push(`Alert not found or already removed`);
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

async function getSystemData(userId: string) {
  const [
    zones,
    recentReadings,
    fishStock,
    plantCrops,
    recentHarvests,
    salesInventory,
    growthParameters,
    alertThresholds
  ] = await Promise.all([
    prisma.zone.findMany({ where: { userId }, orderBy: { name: 'asc' } }),
    prisma.sensorReading.findMany({
      where: { zone: { userId } },
      include: { zone: true },
      orderBy: { timestamp: 'desc' },
      take: 50
    }),
    prisma.fishStock.findMany({
      where: { userId },
      include: { zone: true },
      orderBy: { dateAdded: 'desc' }
    }),
    prisma.plantCrop.findMany({
      where: { userId },
      include: { zone: true },
      orderBy: { plantedDate: 'desc' }
    }),
    prisma.harvest.findMany({
      where: { userId },
      include: { fishStock: true, plantCrop: true },
      orderBy: { harvestDate: 'desc' },
      take: 10
    }),
    prisma.salesInventory.findMany({
      where: { userId, status: 'available' },
      orderBy: { addedDate: 'desc' }
    }),
    prisma.growthParameter.findMany({ where: { userId } }),
    prisma.zoneAlertThreshold.findMany({
      where: { zone: { userId } },
      include: { zone: true },
      orderBy: { parameter: 'asc' }
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
    const byZone = new Map();
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
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { message, history } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const systemData = await getSystemData(session.user.id);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    const chatHistory = history?.map((msg: { role: string; content: string }) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }],
    })) || [];

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
        ...chatHistory,
      ],
    });

    const result = await chat.sendMessage(message);
    const responseText = result.response.text();

    // Parse and execute any commands
    const commands = parseCommands(responseText);
    let executionResults: string[] = [];

    if (commands.length > 0) {
      executionResults = await executeCommands(commands, session.user.id);
    }

    // Clean response and add execution results
    let finalResponse = cleanResponse(responseText);
    if (executionResults.length > 0) {
      finalResponse += '\n\n**System Actions:**\n' + executionResults.join('\n');
    }

    return NextResponse.json({
      message: finalResponse,
      model: 'gemini-2.0-flash',
      actionsExecuted: commands.length,
    });
  } catch (error) {
    console.error('AI intelligence error:', error);
    return NextResponse.json({ error: 'Failed to get AI response' }, { status: 500 });
  }
}
