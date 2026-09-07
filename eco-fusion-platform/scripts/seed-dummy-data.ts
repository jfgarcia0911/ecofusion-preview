/**
 * Seeds 10 dummy rows into every table, for UI/API smoke testing.
 *
 * Every row it writes has an id beginning with `seed_` (VerificationToken has
 * no id column, so its rows are tagged by token prefix instead). Nothing else
 * in the database is touched, and `--clear` removes exactly these rows.
 * Re-running is safe: it clears its own rows first, so counts stay at 10.
 *
 * Operational records are attached to the real admin account so they show up in
 * the signed-in UI. Rows constrained to one-per-user (DashboardData,
 * IntegrationSettings) are spread across the dummy users to reach 10.
 *
 *   npm run db:seed-dummy     # create
 *   npm run db:unseed         # remove
 */
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const ADMIN_EMAIL = 'support@llayd.com'
const N = 10
const pad = (i: number) => String(i + 1).padStart(2, '0')
const seq = Array.from({ length: N }, (_, i) => i)

// Fixed base date keeps re-runs deterministic.
const BASE = new Date('2026-09-01T08:00:00.000Z')
const days = (n: number) => new Date(BASE.getTime() + n * 86_400_000)
const hours = (n: number) => new Date(BASE.getTime() + n * 3_600_000)

// Values mirrored from the rows already in the database, so the UI renders
// them the same way it renders real data.
const FISH = ['Tilapia', 'Catfish', 'Trout', 'Barramundi', 'Carp']
const CROPS = [
  ['Lettuce', 'Butterhead'], ['Basil', 'Genovese'], ['Kale', 'Red Russian'],
  ['Spinach', 'Bloomsdale'], ['Mint', 'Spearmint'],
]
// From lib/constants.ts — the only phase ids the UI can route to.
const PHASES = [
  'aquaculture', 'plant-production', 'methane-gas', 'fertilizer',
  'training-center', 'restaurant', 'solar-energy',
]

async function step(label: string, fn: () => Promise<{ count: number }>) {
  const { count } = await fn()
  console.log(`  ${String(count).padStart(2)} x ${label}`)
}

/** Deletes only `seed_`-tagged rows, children before parents. */
async function wipe() {
  const models = [
    'saleItem', 'sale', 'salesInventory', 'harvest', 'plantGrowthLog',
    'plantCrop', 'fishGrowthLog', 'fishStock', 'growthParameter',
    'lessonCompletion', 'courseCompletion', 'courseAssignment',
    'userLmsProgress', 'trainingLesson', 'trainingCourse', 'camera', 'alert',
    'zoneAlertThreshold', 'sensorReading', 'zone', 'phaseSettings',
    'integrationSettings', 'dashboardData', 'notification', 'scheduledTask',
    'schedule', 'employee', 'task', 'session', 'account', 'user',
  ]

  let total = 0
  for (const model of models) {
    const { count } = await (prisma as any)[model].deleteMany({
      where: { id: { startsWith: 'seed_' } },
    })
    total += count
  }
  const { count: vt } = await prisma.verificationToken.deleteMany({
    where: { token: { startsWith: 'seed_' } },
  })
  total += vt
  return total
}

async function seed() {
  const admin = await prisma.user.findUnique({ where: { email: ADMIN_EMAIL } })
  if (!admin) throw new Error(`Admin user ${ADMIN_EMAIL} not found - aborting.`)
  const A = admin.id
  console.log(`Seeding against admin ${ADMIN_EMAIL} (${A})\n`)

  const cleared = await wipe()
  if (cleared) console.log(`Cleared ${cleared} existing seed rows.\n`)

  const userIds = seq.map((i) => `seed_user_${pad(i)}`)
  // Each seeded user owns an organization; farm rows hang off that.
  const orgIdFor = (id: string) => `org_${id}`
  // Owner for one-per-user tables: admin first, then dummy users, to reach 10.
  const owners = [A, ...userIds.slice(0, N - 1)]

  await step('User', () => prisma.user.createMany({
    data: seq.map((i) => ({
      id: userIds[i],
      email: `seed.user${pad(i)}@ecofusion.test`,
      name: `Seed User ${pad(i)}`,
      role: i === 0 ? 'admin' : i < 4 ? 'manager' : 'user',
      onboardingComplete: i % 3 !== 0,
      // No password: these accounts cannot sign in with credentials.
      password: null,
      createdAt: days(i),
    })),
  }))

  await step('Account', () => prisma.account.createMany({
    data: seq.map((i) => ({
      id: `seed_account_${pad(i)}`,
      userId: userIds[i],
      organizationId: orgIdFor(userIds[i]),
      type: 'oauth',
      provider: 'google',
      providerAccountId: `seed-google-${pad(i)}`,
      scope: 'openid email profile',
    })),
  }))

  await step('Session', () => prisma.session.createMany({
    data: seq.map((i) => ({
      id: `seed_session_${pad(i)}`,
      sessionToken: `seed_token_${pad(i)}`,
      userId: userIds[i],
      organizationId: orgIdFor(userIds[i]),
      expires: days(30 + i),
    })),
  }))

  await step('VerificationToken', () => prisma.verificationToken.createMany({
    data: seq.map((i) => ({
      identifier: `seed.user${pad(i)}@ecofusion.test`,
      token: `seed_vt_${pad(i)}`,
      expires: days(1 + i),
    })),
  }))

  // Zones, sensor readings and thresholds are deliberately NOT seeded: the
  // Operations Center is kept to the real zones only. Records that need a zone
  // are spread across whatever real zones exist.
  const realZones = await prisma.zone.findMany({
    where: { userId: A,
      organizationId: orgIdFor(A), id: { not: { startsWith: 'seed_' } } },
    orderBy: { name: 'asc' },
    select: { id: true },
  })
  if (!realZones.length) throw new Error('No real zones found - create one first.')
  const zoneIds = seq.map((i) => realZones[i % realZones.length].id)

  await step('Task', () => prisma.task.createMany({
    data: seq.map((i) => ({
      id: `seed_task_${pad(i)}`,
      userId: A,
      organizationId: orgIdFor(A),
      text: `Seed task ${pad(i)}: ${['Check pH levels', 'Clean filter', 'Inspect pumps', 'Log growth data', 'Order feed'][i % 5]}`,
      completed: i % 4 === 0,
      priority: ['low', 'medium', 'high'][i % 3],
      dueDate: days(i + 2),
      phaseId: PHASES[i % PHASES.length],
      assignee: `Seed User ${pad(i)}`,
    })),
  }))

  const employeeIds = seq.map((i) => `seed_employee_${pad(i)}`)
  await step('Employee', () => prisma.employee.createMany({
    data: seq.map((i) => ({
      id: employeeIds[i],
      userId: A,
      organizationId: orgIdFor(A),
      name: `Seed Employee ${pad(i)}`,
      role: ['Manager', 'Technician', 'Operator', 'Harvester', 'Analyst'][i % 5],
      email: `seed.employee${pad(i)}@ecofusion.test`,
      phone: `555-01${pad(i)}`,
      status: i === 8 ? 'Inactive' : 'Active',
    })),
  }))

  await step('Schedule', () => prisma.schedule.createMany({
    data: seq.map((i) => ({
      id: `seed_schedule_${pad(i)}`,
      adminId: A,
      assigneeId: userIds[i],
      title: `Seed Shift ${pad(i)}`,
      description: 'Routine coverage block',
      dayOfWeek: i % 7,
      startTime: `${String(6 + (i % 8)).padStart(2, '0')}:00`,
      endTime: `${String(14 + (i % 8)).padStart(2, '0')}:00`,
      location: `Seed Location ${pad(i)}`,
      recurring: i % 3 !== 0,
    })),
  }))

  await step('ScheduledTask', () => prisma.scheduledTask.createMany({
    data: seq.map((i) => ({
      id: `seed_scheduled_task_${pad(i)}`,
      creatorId: A,
      assigneeId: userIds[i],
      title: `Seed Scheduled Task ${pad(i)}`,
      description: 'Generated for UI testing',
      scheduledFor: days(i),
      dueDate: days(i + 3),
      priority: ['low', 'medium', 'high'][i % 3],
      status: ['pending', 'in_progress', 'completed'][i % 3],
      zone: `Seed Location ${pad(i)}`,
      completedAt: i % 3 === 2 ? days(i + 1) : null,
    })),
  }))

  await step('Notification', () => prisma.notification.createMany({
    data: seq.map((i) => ({
      id: `seed_notification_${pad(i)}`,
      userId: A,
      organizationId: orgIdFor(A),
      title: `Seed Notification ${pad(i)}`,
      message: `Test message ${pad(i)} for interface verification.`,
      type: ['info', 'task', 'threshold', 'schedule', 'success'][i % 5],
      read: i % 3 === 0,
      link: ['/dashboard', '/academy', '/dashboard/operations'][i % 3],
      createdAt: hours(i * 3),
    })),
  }))

  const courseIds = seq.map((i) => `seed_course_${pad(i)}`)
  await step('TrainingCourse', () => prisma.trainingCourse.createMany({
    data: seq.map((i) => ({
      id: courseIds[i],
      code: `SEED-${pad(i)}`,
      title: `Seed Course ${pad(i)}: ${['Water Quality', 'Fish Health', 'Crop Rotation', 'Equipment Safety', 'Harvest Handling'][i % 5]}`,
      description: `Placeholder course ${pad(i)} used to verify the academy interface.`,
      category: ['safety', 'operations', 'compliance'][i % 3],
      duration: 30 + i * 10,
      isRequired: i % 2 === 0,
      renewalDays: i % 2 === 0 ? 365 : null,
      passScore: 80,
      sortOrder: 100 + i,
    })),
  }))

  const lessonIds = seq.map((i) => `seed_lesson_${pad(i)}`)
  await step('TrainingLesson', () => prisma.trainingLesson.createMany({
    data: seq.map((i) => ({
      id: lessonIds[i],
      courseId: courseIds[i],
      title: `Seed Lesson ${pad(i)}`,
      description: 'Placeholder lesson content.',
      type: ['text', 'video', 'quiz'][i % 3],
      content: `Lesson body ${pad(i)}.`,
      duration: 10 + i * 2,
      sortOrder: i,
      questions: i % 3 === 2
        ? [{ q: `Sample question ${pad(i)}?`, options: ['A', 'B', 'C'], answer: 0 }]
        : undefined,
    })),
  }))

  // Unique on (courseId, assigneeId): 10 distinct courses, same assignee.
  await step('CourseAssignment', () => prisma.courseAssignment.createMany({
    data: seq.map((i) => ({
      id: `seed_assignment_${pad(i)}`,
      courseId: courseIds[i],
      assigneeId: A,
      assignedById: A,
      dueDate: days(14 + i),
      priority: ['normal', 'high'][i % 2],
      notes: 'Seeded assignment',
      status: ['assigned', 'in_progress', 'completed'][i % 3],
    })),
  }))

  await step('CourseCompletion', () => prisma.courseCompletion.createMany({
    data: seq.map((i) => ({
      id: `seed_course_completion_${pad(i)}`,
      courseId: courseIds[i],
      userId: A,
      organizationId: orgIdFor(A),
      completedAt: days(i),
      quizScore: 70 + i * 3,
      passed: 70 + i * 3 >= 80,
      certificateId: `seed_cert_${pad(i)}`,
      expiresAt: days(365 + i),
    })),
  }))

  await step('LessonCompletion', () => prisma.lessonCompletion.createMany({
    data: seq.map((i) => ({
      id: `seed_lesson_completion_${pad(i)}`,
      lessonId: lessonIds[i],
      userId: A,
      organizationId: orgIdFor(A),
      completedAt: days(i),
      quizScore: 75 + i * 2,
      timeSpent: 300 + i * 60,
    })),
  }))

  await step('UserLmsProgress', () => prisma.userLmsProgress.createMany({
    data: seq.map((i) => ({
      id: `seed_lms_progress_${pad(i)}`,
      userId: A,
      organizationId: orgIdFor(A),
      courseId: courseIds[i],
      lessonId: lessonIds[i],
      completed: i % 2 === 0,
      quizScore: 75 + i * 2,
      xpEarned: 50 + i * 10,
      completedAt: i % 2 === 0 ? days(i) : null,
    })),
  }))

  // userId is unique here - spread across admin + dummy users to reach 10.
  await step('DashboardData', () => prisma.dashboardData.createMany({
    data: seq.map((i) => ({
      id: `seed_dashboard_${pad(i)}`,
      userId: owners[i],
      organizationId: orgIdFor(owners[i]),
      totalRevenue: 12500 + i * 1750,
      monthlyRevenue: 2100 + i * 320,
      activeZones: 3 + (i % 5),
      systemEfficiency: 78 + (i % 15),
      alertCount: i % 6,
    })),
  }))

  await step('IntegrationSettings', () => prisma.integrationSettings.createMany({
    data: seq.map((i) => ({
      id: `seed_integration_${pad(i)}`,
      userId: owners[i],
      organizationId: orgIdFor(owners[i]),
      provider: 'gohighlevel',
      // Left null on purpose: a fake ciphertext would fail decryption.
      apiKey: null,
      locationId: `seed-loc-${pad(i)}`,
      isEnabled: false,
    })),
  }))

  const fishIds = seq.map((i) => `seed_fish_${pad(i)}`)
  await step('FishStock', () => prisma.fishStock.createMany({
    data: seq.map((i) => ({
      id: fishIds[i],
      userId: A,
      organizationId: orgIdFor(A),
      zoneId: zoneIds[i],
      species: FISH[i % FISH.length],
      quantity: 150 + i * 45,
      avgWeight: 120 + i * 25,
      ageWeeks: 4 + i * 2,
      dateAdded: days(-60 + i),
      expectedHarvest: days(30 + i * 4),
      status: i === 9 ? 'harvested' : 'growing',
      notes: `Seed batch ${pad(i)}`,
    })),
  }))

  await step('FishGrowthLog', () => prisma.fishGrowthLog.createMany({
    data: seq.map((i) => ({
      id: `seed_fish_log_${pad(i)}`,
      fishStockId: fishIds[i],
      recordedAt: days(i),
      avgWeight: 130 + i * 22,
      mortality: i % 4,
      feedUsed: 2.5 + i * 0.4,
      notes: i % 3 === 0 ? 'Normal growth' : null,
    })),
  }))

  const cropIds = seq.map((i) => `seed_crop_${pad(i)}`)
  await step('PlantCrop', () => prisma.plantCrop.createMany({
    data: seq.map((i) => ({
      id: cropIds[i],
      userId: A,
      organizationId: orgIdFor(A),
      zoneId: zoneIds[i],
      cropType: CROPS[i % CROPS.length][0],
      variety: CROPS[i % CROPS.length][1],
      quantity: 80 + i * 30,
      plantedDate: days(-30 + i),
      expectedHarvest: days(14 + i * 3),
      status: i === 8 ? 'harvested' : 'growing',
      location: `Bed ${i + 1}`,
      notes: `Seed planting ${pad(i)}`,
    })),
  }))

  await step('PlantGrowthLog', () => prisma.plantGrowthLog.createMany({
    data: seq.map((i) => ({
      id: `seed_plant_log_${pad(i)}`,
      plantCropId: cropIds[i],
      recordedAt: days(i),
      heightCm: 5 + i * 2.5,
      healthScore: 70 + (i % 30),
      losses: i % 5,
      notes: i % 2 === 0 ? 'Healthy' : null,
    })),
  }))

  await step('GrowthParameter', () => prisma.growthParameter.createMany({
    data: seq.map((i) => {
      const isFish = i % 2 === 0
      return {
        id: `seed_param_${pad(i)}`,
        userId: A,
      organizationId: orgIdFor(A),
        type: isFish ? 'fish' : 'plant',
        species: isFish ? FISH[i % FISH.length] : CROPS[i % CROPS.length][0],
        variety: isFish ? null : CROPS[i % CROPS.length][1],
        seedlingDays: isFish ? null : 7 + (i % 5),
        growingDays: isFish ? 150 + i * 5 : 25 + i * 2,
        harvestWeight: isFish ? 450 + i * 20 : 180 + i * 10,
        optimalTempMin: isFish ? 24 : 17,
        optimalTempMax: isFish ? 30 : 24,
        optimalPh: 6.5 + (i % 3) * 0.3,
        expectedYield: isFish ? 0.5 : 1,
        yieldUnit: isFish ? 'kg' : 'heads',
        notes: `Seed parameter ${pad(i)}`,
      }
    }),
  }))

  const harvestIds = seq.map((i) => `seed_harvest_${pad(i)}`)
  await step('Harvest', () => prisma.harvest.createMany({
    data: seq.map((i) => {
      const isFish = i % 2 === 0
      return {
        id: harvestIds[i],
        userId: A,
      organizationId: orgIdFor(A),
        harvestDate: days(i),
        type: isFish ? 'fish' : 'plant',
        fishStockId: isFish ? fishIds[i] : null,
        plantCropId: isFish ? null : cropIds[i],
        quantity: 20 + i * 6,
        unit: isFish ? 'kg' : 'heads',
        quality: ['A', 'B', 'premium'][i % 3],
        destination: ['inventory', 'direct-sale'][i % 2],
        notes: `Seed harvest ${pad(i)}`,
      }
    }),
  }))

  const inventoryIds = seq.map((i) => `seed_inventory_${pad(i)}`)
  await step('SalesInventory', () => prisma.salesInventory.createMany({
    data: seq.map((i) => {
      const isFish = i % 2 === 0
      return {
        id: inventoryIds[i],
        userId: A,
      organizationId: orgIdFor(A),
        productName: isFish
          ? `${FISH[i % FISH.length]} Fillet`
          : `${CROPS[i % CROPS.length][1]} ${CROPS[i % CROPS.length][0]}`,
        productType: isFish ? 'fish' : 'produce',
        quantity: 15 + i * 5,
        unit: isFish ? 'kg' : 'heads',
        unitPrice: isFish ? 8.5 + i * 0.5 : 3.5 + i * 0.25,
        harvestId: harvestIds[i],
        addedDate: days(i),
        expiryDate: days(i + 14),
        status: i === 9 ? 'sold_out' : 'available',
      }
    }),
  }))

  const saleIds = seq.map((i) => `seed_sale_${pad(i)}`)
  await step('Sale', () => prisma.sale.createMany({
    data: seq.map((i) => {
      const subtotal = 85 + i * 22.5
      const tax = Number((subtotal * 0.08).toFixed(2))
      const discount = i % 4 === 0 ? 10 : 0
      return {
        id: saleIds[i],
        userId: A,
      organizationId: orgIdFor(A),
        saleDate: days(i),
        customerName: `Seed Customer ${pad(i)}`,
        customerEmail: `seed.customer${pad(i)}@ecofusion.test`,
        customerPhone: `555-02${pad(i)}`,
        subtotal,
        tax,
        discount,
        total: Number((subtotal + tax - discount).toFixed(2)),
        paymentMethod: ['cash', 'card', 'transfer'][i % 3],
        status: i === 7 ? 'pending' : 'completed',
        notes: `Seed sale ${pad(i)}`,
      }
    }),
  }))

  await step('SaleItem', () => prisma.saleItem.createMany({
    data: seq.map((i) => {
      const quantity = 5 + (i % 6)
      const unitPrice = i % 2 === 0 ? 8.5 : 3.5
      return {
        id: `seed_sale_item_${pad(i)}`,
        saleId: saleIds[i],
        inventoryItemId: inventoryIds[i],
        harvestId: harvestIds[i],
        productName: i % 2 === 0
          ? `${FISH[i % FISH.length]} Fillet`
          : `${CROPS[i % CROPS.length][0]}`,
        quantity,
        unit: i % 2 === 0 ? 'kg' : 'heads',
        unitPrice,
        total: Number((quantity * unitPrice).toFixed(2)),
      }
    }),
  }))

  await step('Alert', () => prisma.alert.createMany({
    data: seq.map((i) => ({
      id: `seed_alert_${pad(i)}`,
      userId: A,
      organizationId: orgIdFor(A),
      zoneId: zoneIds[i],
      type: ['water_quality', 'equipment', 'system', 'maintenance', 'inventory'][i % 5],
      severity: ['info', 'warning', 'critical'][i % 3],
      title: `Seed Alert ${pad(i)}`,
      message: `Placeholder alert ${pad(i)} raised for interface testing.`,
      status: i % 3 === 0 ? 'resolved' : 'active',
      assigneeId: employeeIds[i],
      resolvedAt: i % 3 === 0 ? days(i + 1) : null,
      resolvedBy: i % 3 === 0 ? `Seed Employee ${pad(i)}` : null,
      resolution: i % 3 === 0 ? 'Cleared during seed test' : null,
      createdAt: hours(i * 5),
    })),
  }))

  await step('Camera', () => prisma.camera.createMany({
    data: seq.map((i) => ({
      id: `seed_camera_${pad(i)}`,
      userId: A,
      organizationId: orgIdFor(A),
      name: `Seed Camera ${pad(i)}`,
      location: `Seed Location ${pad(i)}`,
      zoneId: zoneIds[i],
      connectionType: i % 2 === 0 ? 'wired' : 'wifi',
      // 192.0.2.0/24 is the reserved documentation range - never a real device.
      rtspUrl: `rtsp://192.0.2.${i + 10}:554/stream1`,
      protocol: 'rtsp',
      brand: ['Hikvision', 'Dahua', 'Reolink'][i % 3],
      model: `SEED-CAM-${pad(i)}`,
      status: i % 3 === 0 ? 'offline' : 'online',
      isEnabled: i !== 6,
      sortOrder: i,
      lastOnline: i % 3 === 0 ? null : hours(-i),
    })),
  }))

  // Unique on (userId, phaseId) and only 7 real phases exist, so the admin
  // takes all 7 and the remaining 3 go to dummy users.
  await step('PhaseSettings', () => prisma.phaseSettings.createMany({
    data: seq.map((i) => ({
      id: `seed_phase_settings_${pad(i)}`,
      userId: i < PHASES.length ? A : userIds[i],
      organizationId: orgIdFor(i < PHASES.length ? A : userIds[i]),
      phaseId: PHASES[i % PHASES.length],
      budgetMonthly: 5000 + i * 750,
      targetRevenue: 12000 + i * 1500,
      alertsEnabled: i % 4 !== 0,
      notifications: i % 3 !== 0,
      notes: `Seed phase settings ${pad(i)}`,
    })),
  }))

  console.log('\nDone. Remove everything with: npm run db:unseed')
}

async function main() {
  if (process.argv.includes('--clear')) {
    const removed = await wipe()
    console.log(`Removed ${removed} seed rows.`)
    return
  }
  await seed()
}

main()
  .catch((e) => {
    console.error(e)
    process.exitCode = 1
  })
  .finally(() => prisma.$disconnect())
