import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Get the first user to associate data with
  const user = await prisma.user.findFirst();

  if (!user) {
    console.log('No user found. Please create a user first.');
    return;
  }

  // Farm data belongs to an organization, so seed into the user's own.
  const membership = await prisma.membership.findFirst({
    where: { userId: user.id },
    orderBy: { createdAt: 'asc' },
  });
  if (!membership) {
    console.log('User has no organization membership. Run the organization migration first.');
    return;
  }
  const organizationId = membership.organizationId;

  console.log(`Seeding data for user: ${user.name} (${user.email})`);

  // Create Zones
  const zoneA = await prisma.zone.upsert({
    where: { id: 'zone-a' },
    update: {},
    create: {
      id: 'zone-a',
      userId: user.id,
      organizationId,
      name: 'Zone A - Main Tank',
      type: 'aquaculture',
      status: 'active',
    },
  });

  const zoneB = await prisma.zone.upsert({
    where: { id: 'zone-b' },
    update: {},
    create: {
      id: 'zone-b',
      userId: user.id,
      organizationId,
      name: 'Zone B - Grow Beds',
      type: 'hydroponics',
      status: 'active',
    },
  });

  const zoneC = await prisma.zone.upsert({
    where: { id: 'zone-c' },
    update: {},
    create: {
      id: 'zone-c',
      userId: user.id,
      organizationId,
      name: 'Zone C - Nursery',
      type: 'aquaculture',
      status: 'active',
    },
  });

  console.log('Created zones:', zoneA.name, zoneB.name, zoneC.name);

  // Create Sensor Readings
  const now = new Date();

  await prisma.sensorReading.createMany({
    data: [
      {
        zoneId: zoneA.id,
        temperature: 26.5,
        ph: 7.2,
        dissolvedO2: 6.8,
        ammonia: 0.02,
        humidity: 65,
        timestamp: now,
      },
      {
        zoneId: zoneB.id,
        temperature: 24.0,
        ph: 6.5,
        dissolvedO2: 7.2,
        ammonia: 0.01,
        humidity: 78,
        timestamp: now,
      },
      {
        zoneId: zoneC.id,
        temperature: 27.0,
        ph: 7.0,
        dissolvedO2: 7.0,
        ammonia: 0.03,
        humidity: 70,
        timestamp: now,
      },
    ],
  });

  console.log('Created sensor readings');

  // Create Fish Stock
  const tilapia = await prisma.fishStock.upsert({
    where: { id: 'fish-tilapia-1' },
    update: {},
    create: {
      id: 'fish-tilapia-1',
      userId: user.id,
      organizationId,
      zoneId: zoneA.id,
      species: 'Tilapia',
      quantity: 500,
      avgWeight: 350,
      ageWeeks: 16,
      status: 'growing',
      expectedHarvest: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      notes: 'Main production batch',
    },
  });

  const catfish = await prisma.fishStock.upsert({
    where: { id: 'fish-catfish-1' },
    update: {},
    create: {
      id: 'fish-catfish-1',
      userId: user.id,
      organizationId,
      zoneId: zoneC.id,
      species: 'Catfish',
      quantity: 200,
      avgWeight: 180,
      ageWeeks: 8,
      status: 'growing',
      expectedHarvest: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000), // 60 days from now
      notes: 'Fingerlings batch',
    },
  });

  console.log('Created fish stock:', tilapia.species, catfish.species);

  // Create Fish Growth Logs
  await prisma.fishGrowthLog.createMany({
    data: [
      {
        fishStockId: tilapia.id,
        avgWeight: 320,
        mortality: 2,
        feedUsed: 15,
        notes: 'Good growth rate',
        recordedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      },
      {
        fishStockId: tilapia.id,
        avgWeight: 350,
        mortality: 0,
        feedUsed: 18,
        notes: 'Excellent growth',
        recordedAt: now,
      },
    ],
  });

  console.log('Created fish growth logs');

  // Create Plant Crops
  const lettuce = await prisma.plantCrop.upsert({
    where: { id: 'plant-lettuce-1' },
    update: {},
    create: {
      id: 'plant-lettuce-1',
      userId: user.id,
      organizationId,
      zoneId: zoneB.id,
      cropType: 'Lettuce',
      variety: 'Butterhead',
      quantity: 200,
      plantedDate: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000), // 21 days ago
      expectedHarvest: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
      status: 'growing',
      location: 'Bed 1-4',
      notes: 'Ready for harvest soon',
    },
  });

  const basil = await prisma.plantCrop.upsert({
    where: { id: 'plant-basil-1' },
    update: {},
    create: {
      id: 'plant-basil-1',
      userId: user.id,
      organizationId,
      zoneId: zoneB.id,
      cropType: 'Basil',
      variety: 'Genovese',
      quantity: 100,
      plantedDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 14 days ago
      expectedHarvest: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
      status: 'growing',
      location: 'Bed 5-6',
    },
  });

  console.log('Created plant crops:', lettuce.cropType, basil.cropType);

  // Create Plant Growth Logs
  await prisma.plantGrowthLog.createMany({
    data: [
      {
        plantCropId: lettuce.id,
        heightCm: 15,
        healthScore: 9,
        losses: 3,
        notes: 'Strong growth',
        recordedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      },
      {
        plantCropId: lettuce.id,
        heightCm: 22,
        healthScore: 9,
        losses: 0,
        notes: 'Heads forming nicely',
        recordedAt: now,
      },
    ],
  });

  console.log('Created plant growth logs');

  // Create Growth Parameters
  await prisma.growthParameter.upsert({
    where: { id: 'param-tilapia' },
    update: {},
    create: {
      id: 'param-tilapia',
      userId: user.id,
      organizationId,
      type: 'fish',
      species: 'Tilapia',
      growingDays: 180,
      harvestWeight: 500,
      optimalTempMin: 25,
      optimalTempMax: 30,
      optimalPh: 7.0,
      expectedYield: 0.5,
      yieldUnit: 'kg',
      notes: 'Optimal for warm water aquaponics',
    },
  });

  await prisma.growthParameter.upsert({
    where: { id: 'param-lettuce' },
    update: {},
    create: {
      id: 'param-lettuce',
      userId: user.id,
      organizationId,
      type: 'plant',
      species: 'Lettuce',
      variety: 'Butterhead',
      seedlingDays: 7,
      growingDays: 28,
      harvestWeight: 200,
      optimalTempMin: 18,
      optimalTempMax: 24,
      optimalPh: 6.5,
      expectedYield: 1,
      yieldUnit: 'heads',
    },
  });

  console.log('Created growth parameters');

  // Create a Harvest
  const harvest = await prisma.harvest.create({
    data: {
      userId: user.id,
      organizationId,
      type: 'plant',
      plantCropId: lettuce.id,
      quantity: 50,
      unit: 'heads',
      quality: 'A',
      destination: 'inventory',
      harvestDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      notes: 'First batch from current planting',
    },
  });

  console.log('Created harvest');

  // Create Sales Inventory
  await prisma.salesInventory.create({
    data: {
      userId: user.id,
      organizationId,
      productName: 'Butterhead Lettuce',
      productType: 'produce',
      quantity: 50,
      unit: 'heads',
      unitPrice: 3.50,
      harvestId: harvest.id,
      status: 'available',
    },
  });

  await prisma.salesInventory.create({
    data: {
      userId: user.id,
      organizationId,
      productName: 'Fresh Tilapia',
      productType: 'fish',
      quantity: 25,
      unit: 'kg',
      unitPrice: 12.00,
      status: 'available',
    },
  });

  console.log('Created sales inventory');

  // Create a Sale
  const sale = await prisma.sale.create({
    data: {
      userId: user.id,
      organizationId,
      customerName: 'Green Market Co.',
      customerEmail: 'orders@greenmarket.com',
      subtotal: 87.50,
      tax: 7.00,
      total: 94.50,
      paymentMethod: 'invoice',
      status: 'completed',
      saleDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    },
  });

  await prisma.saleItem.create({
    data: {
      saleId: sale.id,
      productName: 'Butterhead Lettuce',
      quantity: 25,
      unit: 'heads',
      unitPrice: 3.50,
      total: 87.50,
    },
  });

  console.log('Created sale');

  console.log('\n✅ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
