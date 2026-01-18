import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

const SYSTEM_PROMPT = `You are EcoFusion AI, an intelligent assistant integrated into an aquaponics farm management system. You have REAL-TIME ACCESS to the system's data including:

- Zones (tanks, grow beds, biodigesters)
- Sensor readings (temperature, pH, dissolved oxygen, ammonia, humidity)
- Fish inventory (species, quantity, weight, age, status)
- Plant inventory (crops, varieties, quantity, growth stage)
- Growth logs (fish weight changes, plant health scores)
- Harvests (what's been harvested, quantities, quality grades)
- Sales inventory and recent sales

When the user asks questions, use the CURRENT SYSTEM DATA provided below to give specific, actionable answers. Reference actual zone names, species, quantities, and readings from the data.

Be proactive about identifying:
1. Potential issues (pH out of range, high ammonia, slow growth)
2. Optimization opportunities (harvest timing, feeding adjustments)
3. Correlations between readings and outcomes

Always reference specific data points when making recommendations.`;

async function getSystemData() {
  // Fetch all system data in parallel
  const [
    zones,
    recentReadings,
    fishStock,
    plantCrops,
    recentFishGrowth,
    recentPlantGrowth,
    recentHarvests,
    salesInventory,
    recentSales,
    growthParameters
  ] = await Promise.all([
    prisma.zone.findMany({
      orderBy: { name: 'asc' }
    }),
    prisma.sensorReading.findMany({
      include: { zone: true },
      orderBy: { timestamp: 'desc' },
      take: 50
    }),
    prisma.fishStock.findMany({
      include: { zone: true },
      orderBy: { dateAdded: 'desc' }
    }),
    prisma.plantCrop.findMany({
      include: { zone: true },
      orderBy: { plantedDate: 'desc' }
    }),
    prisma.fishGrowthLog.findMany({
      include: { fishStock: true },
      orderBy: { recordedAt: 'desc' },
      take: 20
    }),
    prisma.plantGrowthLog.findMany({
      include: { plantCrop: true },
      orderBy: { recordedAt: 'desc' },
      take: 20
    }),
    prisma.harvest.findMany({
      include: { fishStock: true, plantCrop: true },
      orderBy: { harvestDate: 'desc' },
      take: 20
    }),
    prisma.salesInventory.findMany({
      where: { status: 'available' },
      orderBy: { addedDate: 'desc' }
    }),
    prisma.sale.findMany({
      include: { items: true },
      orderBy: { saleDate: 'desc' },
      take: 10
    }),
    prisma.growthParameter.findMany()
  ]);

  // Format data for AI context
  let context = '\n\n=== CURRENT SYSTEM DATA ===\n';

  // Zones summary
  context += '\n## ZONES\n';
  if (zones.length === 0) {
    context += 'No zones configured yet.\n';
  } else {
    zones.forEach(zone => {
      context += `- ${zone.name} (${zone.type}): Status ${zone.status}\n`;
    });
  }

  // Latest sensor readings by zone
  context += '\n## LATEST SENSOR READINGS\n';
  if (recentReadings.length === 0) {
    context += 'No sensor readings available.\n';
  } else {
    const readingsByZone = new Map();
    recentReadings.forEach(r => {
      if (!readingsByZone.has(r.zoneId)) {
        readingsByZone.set(r.zoneId, r);
      }
    });
    readingsByZone.forEach((reading, zoneId) => {
      const zoneName = reading.zone?.name || zoneId;
      context += `- ${zoneName}: `;
      const metrics = [];
      if (reading.temperature !== null) metrics.push(`Temp: ${reading.temperature}°C`);
      if (reading.ph !== null) metrics.push(`pH: ${reading.ph}`);
      if (reading.dissolvedO2 !== null) metrics.push(`DO: ${reading.dissolvedO2} mg/L`);
      if (reading.ammonia !== null) metrics.push(`Ammonia: ${reading.ammonia} ppm`);
      if (reading.humidity !== null) metrics.push(`Humidity: ${reading.humidity}%`);
      context += metrics.join(', ') + ` (${reading.timestamp.toISOString()})\n`;
    });
  }

  // Fish inventory
  context += '\n## FISH INVENTORY\n';
  if (fishStock.length === 0) {
    context += 'No fish stock recorded.\n';
  } else {
    fishStock.forEach(fish => {
      context += `- ${fish.species} in ${fish.zone?.name || 'Unknown Zone'}: ${fish.quantity} fish`;
      if (fish.avgWeight) context += `, avg ${fish.avgWeight}g`;
      if (fish.ageWeeks) context += `, ${fish.ageWeeks} weeks old`;
      context += `, status: ${fish.status}`;
      if (fish.expectedHarvest) context += `, expected harvest: ${fish.expectedHarvest.toISOString().split('T')[0]}`;
      context += '\n';
    });
  }

  // Plant inventory
  context += '\n## PLANT INVENTORY\n';
  if (plantCrops.length === 0) {
    context += 'No plant crops recorded.\n';
  } else {
    plantCrops.forEach(plant => {
      context += `- ${plant.cropType}${plant.variety ? ` (${plant.variety})` : ''} in ${plant.zone?.name || 'Unknown Zone'}: ${plant.quantity} plants`;
      context += `, planted: ${plant.plantedDate.toISOString().split('T')[0]}`;
      context += `, status: ${plant.status}`;
      if (plant.expectedHarvest) context += `, expected harvest: ${plant.expectedHarvest.toISOString().split('T')[0]}`;
      context += '\n';
    });
  }

  // Recent growth logs
  if (recentFishGrowth.length > 0) {
    context += '\n## RECENT FISH GROWTH LOGS\n';
    recentFishGrowth.slice(0, 5).forEach(log => {
      context += `- ${log.fishStock?.species || 'Unknown'}: ${log.avgWeight}g avg weight`;
      if (log.mortality > 0) context += `, ${log.mortality} mortality`;
      if (log.feedUsed) context += `, ${log.feedUsed}kg feed`;
      context += ` (${log.recordedAt.toISOString().split('T')[0]})\n`;
    });
  }

  if (recentPlantGrowth.length > 0) {
    context += '\n## RECENT PLANT GROWTH LOGS\n';
    recentPlantGrowth.slice(0, 5).forEach(log => {
      context += `- ${log.plantCrop?.cropType || 'Unknown'}:`;
      if (log.heightCm) context += ` ${log.heightCm}cm height`;
      if (log.healthScore) context += `, health: ${log.healthScore}/10`;
      if (log.losses > 0) context += `, ${log.losses} losses`;
      context += ` (${log.recordedAt.toISOString().split('T')[0]})\n`;
    });
  }

  // Recent harvests
  context += '\n## RECENT HARVESTS\n';
  if (recentHarvests.length === 0) {
    context += 'No harvests recorded yet.\n';
  } else {
    recentHarvests.slice(0, 5).forEach(h => {
      const source = h.fishStock?.species || h.plantCrop?.cropType || 'Unknown';
      context += `- ${source}: ${h.quantity} ${h.unit}`;
      if (h.quality) context += `, Grade ${h.quality}`;
      context += `, ${h.destination} (${h.harvestDate.toISOString().split('T')[0]})\n`;
    });
  }

  // Sales inventory
  context += '\n## AVAILABLE FOR SALE\n';
  if (salesInventory.length === 0) {
    context += 'No items currently available for sale.\n';
  } else {
    salesInventory.forEach(item => {
      context += `- ${item.productName}: ${item.quantity} ${item.unit} @ $${item.unitPrice}/${item.unit}\n`;
    });
  }

  // Recent sales summary
  context += '\n## RECENT SALES SUMMARY\n';
  if (recentSales.length === 0) {
    context += 'No sales recorded yet.\n';
  } else {
    const totalRevenue = recentSales.reduce((sum, s) => sum + s.total, 0);
    context += `- Last ${recentSales.length} sales: $${totalRevenue.toFixed(2)} total revenue\n`;
    recentSales.slice(0, 3).forEach(sale => {
      context += `  - ${sale.saleDate.toISOString().split('T')[0]}: $${sale.total.toFixed(2)}`;
      if (sale.customerName) context += ` to ${sale.customerName}`;
      context += '\n';
    });
  }

  // Growth parameters (for reference)
  if (growthParameters.length > 0) {
    context += '\n## GROWTH PARAMETER TEMPLATES\n';
    growthParameters.forEach(param => {
      context += `- ${param.species}${param.variety ? ` (${param.variety})` : ''}: ${param.growingDays} days to maturity`;
      if (param.optimalTempMin && param.optimalTempMax) {
        context += `, optimal temp: ${param.optimalTempMin}-${param.optimalTempMax}°C`;
      }
      if (param.optimalPh) context += `, optimal pH: ${param.optimalPh}`;
      context += '\n';
    });
  }

  context += '\n=== END SYSTEM DATA ===\n';

  return context;
}

export async function POST(request: Request) {
  try {
    // Auth check disabled for testing
    // const session = await auth();
    // if (!session?.user?.id) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    const { message, history } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Get current system data
    const systemData = await getSystemData();

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    // Build chat history
    const chatHistory = history?.map((msg: { role: string; content: string }) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }],
    })) || [];

    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: 'You are an AI assistant. Here are your instructions:\n\n' + SYSTEM_PROMPT + systemData }],
        },
        {
          role: 'model',
          parts: [{ text: 'I understand. I am EcoFusion AI with full access to your aquaponics system data. I can see your zones, sensor readings, fish inventory, plant crops, growth logs, harvests, and sales data. I\'m ready to help you monitor, optimize, and troubleshoot your operation. What would you like to know?' }],
        },
        ...chatHistory,
      ],
    });

    const result = await chat.sendMessage(message);
    const response = result.response.text();

    return NextResponse.json({
      message: response,
      model: 'gemini-2.0-flash',
    });
  } catch (error) {
    console.error('AI intelligence error:', error);
    return NextResponse.json({ error: 'Failed to get AI response' }, { status: 500 });
  }
}
