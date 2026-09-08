/**
 * Training Courses Seed Script
 *
 * Seeds the database with required safety and compliance training courses
 * for running an indoor aquaponics business.
 *
 * Usage: npx tsx scripts/seed-training-courses.ts
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface QuizQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
}

interface LessonData {
    title: string;
    description?: string;
    type: 'text' | 'video' | 'quiz' | 'interactive';
    content?: string;
    duration: number;
    questions?: QuizQuestion[];
}

interface CourseData {
    code: string;
    title: string;
    description: string;
    category: string;
    duration: number;
    isRequired: boolean;
    renewalDays: number | null;
    passScore: number;
    sortOrder: number;
    lessons: LessonData[];
}

const TRAINING_COURSES: CourseData[] = [
    // ========================================
    // OSHA & GENERAL SAFETY COURSES
    // ========================================
    {
        code: 'OSHA-001',
        title: 'OSHA General Workplace Safety',
        description: 'Comprehensive overview of OSHA regulations and general workplace safety principles. Covers worker rights, employer responsibilities, hazard recognition, and reporting procedures required for all employees.',
        category: 'safety',
        duration: 120,
        isRequired: true,
        renewalDays: 365,
        passScore: 80,
        sortOrder: 1,
        lessons: [
            {
                title: 'Introduction to OSHA',
                type: 'text',
                duration: 15,
                content: `# Introduction to OSHA

## What is OSHA?

The Occupational Safety and Health Administration (OSHA) is a federal agency that ensures safe and healthful working conditions for workers by setting and enforcing standards and providing training, outreach, education, and assistance.

## OSHA's Mission

OSHA's mission is to ensure that employers provide employees with an environment free from recognized hazards, such as:
- Exposure to toxic chemicals
- Excessive noise levels
- Mechanical dangers
- Heat or cold stress
- Unsanitary conditions

## Your Rights as a Worker

Under OSHA law, you have the right to:

1. **Working conditions that do not pose a risk of serious harm**
2. **Receive information and training** about workplace hazards
3. **Review records** of work-related injuries and illnesses
4. **File a complaint** asking OSHA to inspect your workplace
5. **Use your rights** without retaliation or discrimination

## The General Duty Clause

Section 5(a)(1) of the OSH Act requires employers to provide a workplace "free from recognized hazards that are causing or are likely to cause death or serious physical harm."

This applies even when there is no specific OSHA standard covering a hazard.`
            },
            {
                title: 'Hazard Recognition',
                type: 'text',
                duration: 20,
                content: `# Hazard Recognition in the Workplace

## Types of Workplace Hazards

### 1. Physical Hazards
- Slippery floors and walking surfaces
- Unguarded machinery
- Electrical hazards
- Noise and vibration
- Temperature extremes

### 2. Chemical Hazards
- Toxic substances
- Corrosive materials
- Flammable liquids
- Dust and fumes

### 3. Biological Hazards
- Bacteria and viruses
- Mold and fungi
- Animal and plant materials
- Bloodborne pathogens

### 4. Ergonomic Hazards
- Repetitive motions
- Improper lifting
- Poor workstation design
- Prolonged standing or sitting

### 5. Psychosocial Hazards
- Workplace stress
- Violence
- Harassment
- Shift work

## The Hazard Recognition Process

1. **Identify** potential hazards through inspection
2. **Assess** the risk level of each hazard
3. **Control** hazards using the hierarchy of controls
4. **Monitor** effectiveness of controls
5. **Review** and update as conditions change`
            },
            {
                title: 'Reporting and Documentation',
                type: 'text',
                duration: 15,
                content: `# Reporting Hazards and Incidents

## Why Reporting Matters

Prompt reporting of hazards and incidents:
- Prevents future injuries
- Identifies patterns and trends
- Ensures compliance with OSHA regulations
- Protects your legal rights

## What to Report

### Report Immediately:
- All work-related injuries
- Near-miss incidents
- Unsafe conditions
- Equipment malfunctions
- Missing or damaged safety equipment

### OSHA Recordkeeping Requirements

Employers must record:
- Work-related fatalities (within 8 hours)
- Inpatient hospitalizations (within 24 hours)
- Amputations (within 24 hours)
- Loss of an eye (within 24 hours)

## How to Report

1. **Notify your supervisor immediately**
2. **Complete an incident report form**
3. **Document details**: date, time, location, witnesses
4. **Seek medical attention if needed**
5. **Follow up on corrective actions**

## Protection from Retaliation

OSHA's Whistleblower Protection Program prohibits employers from retaliating against employees who:
- Report injuries or unsafe conditions
- File OSHA complaints
- Participate in OSHA inspections
- Exercise any rights under the OSH Act`
            },
            {
                title: 'OSHA Safety Assessment',
                type: 'quiz',
                duration: 15,
                questions: [
                    {
                        id: 'osha-q1',
                        question: 'What is the primary mission of OSHA?',
                        options: [
                            'To fine employers for violations',
                            'To ensure safe and healthful working conditions',
                            'To investigate workplace accidents only',
                            'To provide health insurance to workers'
                        ],
                        correctAnswer: 1
                    },
                    {
                        id: 'osha-q2',
                        question: 'Within how many hours must an employer report a work-related fatality to OSHA?',
                        options: ['24 hours', '48 hours', '8 hours', '72 hours'],
                        correctAnswer: 2
                    },
                    {
                        id: 'osha-q3',
                        question: 'Which of the following is NOT a type of workplace hazard?',
                        options: ['Physical hazards', 'Chemical hazards', 'Financial hazards', 'Ergonomic hazards'],
                        correctAnswer: 2
                    },
                    {
                        id: 'osha-q4',
                        question: 'What should you do first when you identify a workplace hazard?',
                        options: [
                            'Ignore it if it seems minor',
                            'Try to fix it yourself immediately',
                            'Report it to your supervisor',
                            'Wait to see if anyone gets hurt'
                        ],
                        correctAnswer: 2
                    },
                    {
                        id: 'osha-q5',
                        question: 'The General Duty Clause requires employers to:',
                        options: [
                            'Provide free lunch to employees',
                            'Maintain a workplace free from recognized hazards',
                            'Pay overtime for all hours worked',
                            'Provide annual raises to all employees'
                        ],
                        correctAnswer: 1
                    }
                ]
            }
        ]
    },

    {
        code: 'SAFE-001',
        title: 'Hazard Communication (HazCom)',
        description: 'Understanding Safety Data Sheets (SDS), chemical labeling requirements, and proper handling of hazardous materials. Required OSHA training for all employees who may be exposed to hazardous chemicals.',
        category: 'safety',
        duration: 90,
        isRequired: true,
        renewalDays: 365,
        passScore: 80,
        sortOrder: 2,
        lessons: [
            {
                title: 'Introduction to HazCom',
                type: 'text',
                duration: 15,
                content: `# Hazard Communication Standard

## What is HazCom?

The Hazard Communication Standard (HCS) is an OSHA regulation (29 CFR 1910.1200) requiring chemical manufacturers and employers to communicate hazards through:
- Labels on containers
- Safety Data Sheets (SDS)
- Employee training

## Why HazCom Matters in Aquaponics

In indoor aquaponics, you may work with:
- **pH adjusters** (acids and bases)
- **Nutrient solutions** (concentrated fertilizers)
- **Sanitizers and disinfectants**
- **Pest control products**
- **Water treatment chemicals**

Understanding these chemicals protects you and your coworkers.

## The Right to Know

Every employee has the right to know:
- What hazardous chemicals are in your workplace
- What the health and physical hazards are
- How to protect yourself
- What to do in an emergency`
            },
            {
                title: 'Understanding Chemical Labels',
                type: 'text',
                duration: 20,
                content: `# Reading Chemical Labels

## GHS Label Elements

The Globally Harmonized System (GHS) requires six elements on labels:

### 1. Product Identifier
The name or number used to identify the chemical.

### 2. Signal Word
- **DANGER**: More severe hazards
- **WARNING**: Less severe hazards

### 3. Hazard Statements
Describe the nature and degree of hazard:
- "Causes severe skin burns and eye damage"
- "Harmful if swallowed"
- "May cause respiratory irritation"

### 4. Precautionary Statements
Four types:
- **Prevention**: Steps to minimize exposure
- **Response**: Emergency actions
- **Storage**: Safe storage requirements
- **Disposal**: Proper disposal methods

### 5. Supplier Identification
Name, address, and phone number of manufacturer/importer.

### 6. Pictograms
Standard symbols indicating hazard types:
- Flame (flammable)
- Skull and crossbones (acute toxicity)
- Corrosion (corrosive)
- Exclamation mark (irritant)
- Health hazard (serious health effects)
- Environment (environmental hazard)`
            },
            {
                title: 'Safety Data Sheets (SDS)',
                type: 'text',
                duration: 20,
                content: `# Safety Data Sheets

## What is an SDS?

A Safety Data Sheet is a 16-section document providing detailed information about a chemical's hazards and safe handling.

## The 16 SDS Sections

1. **Identification** - Product name and recommended use
2. **Hazard Identification** - All hazards and label elements
3. **Composition** - Ingredients and concentrations
4. **First-Aid Measures** - Emergency treatment
5. **Fire-Fighting Measures** - Extinguishing methods
6. **Accidental Release** - Spill cleanup procedures
7. **Handling and Storage** - Safe practices
8. **Exposure Controls/PPE** - Protective equipment needed
9. **Physical and Chemical Properties** - Appearance, odor, pH, etc.
10. **Stability and Reactivity** - Chemical stability info
11. **Toxicological Information** - Health effects
12. **Ecological Information** - Environmental impact
13. **Disposal Considerations** - Proper disposal
14. **Transport Information** - Shipping requirements
15. **Regulatory Information** - Applicable regulations
16. **Other Information** - Revision date, etc.

## Accessing SDS

- SDS must be readily accessible during work shifts
- Know where SDS are located in your facility
- Review SDS before working with new chemicals`
            },
            {
                title: 'HazCom Assessment',
                type: 'quiz',
                duration: 15,
                questions: [
                    {
                        id: 'hazcom-q1',
                        question: 'What signal word indicates a more severe hazard?',
                        options: ['WARNING', 'CAUTION', 'DANGER', 'NOTICE'],
                        correctAnswer: 2
                    },
                    {
                        id: 'hazcom-q2',
                        question: 'How many sections are in a Safety Data Sheet?',
                        options: ['8', '12', '16', '20'],
                        correctAnswer: 2
                    },
                    {
                        id: 'hazcom-q3',
                        question: 'Which SDS section contains first-aid information?',
                        options: ['Section 2', 'Section 4', 'Section 8', 'Section 11'],
                        correctAnswer: 1
                    },
                    {
                        id: 'hazcom-q4',
                        question: 'A pictogram showing a flame indicates the chemical is:',
                        options: ['Corrosive', 'Flammable', 'Toxic', 'An irritant'],
                        correctAnswer: 1
                    }
                ]
            }
        ]
    },

    {
        code: 'ELEC-001',
        title: 'Electrical Safety',
        description: 'Electrical safety principles for working in environments with pumps, lighting systems, and water. Covers hazard recognition, safe work practices, and emergency procedures for electrical incidents.',
        category: 'safety',
        duration: 90,
        isRequired: true,
        renewalDays: 365,
        passScore: 80,
        sortOrder: 3,
        lessons: [
            {
                title: 'Electrical Hazards Overview',
                type: 'text',
                duration: 20,
                content: `# Electrical Hazards in Aquaponics

## Why Electrical Safety is Critical

Aquaponics facilities combine two dangerous elements:
- **Water** (excellent conductor of electricity)
- **Electrical equipment** (pumps, lights, heaters, controls)

This combination creates unique electrical hazards that require constant vigilance.

## Common Electrical Equipment

In an aquaponics facility, you'll encounter:
- Water pumps and aerators
- LED/HID grow lights
- Heaters and chillers
- Control panels and timers
- Sensors and monitors

## Types of Electrical Hazards

### 1. Electrocution
Fatal shock from contact with electrical current. Even low voltage can be deadly in wet conditions.

### 2. Electrical Burns
Can occur from arc flash, contact with energized equipment, or current passing through the body.

### 3. Arc Flash/Blast
Explosive release of energy during an electrical fault. Can cause severe burns, hearing damage, and physical trauma.

### 4. Fire
Faulty wiring, overloaded circuits, or damaged equipment can ignite fires.

## Factors Affecting Shock Severity

- **Voltage level**
- **Current amount**
- **Path through body**
- **Duration of contact**
- **Moisture conditions**`
            },
            {
                title: 'Safe Work Practices',
                type: 'text',
                duration: 20,
                content: `# Electrical Safe Work Practices

## General Safety Rules

1. **Never work on live equipment** unless absolutely necessary
2. **Always assume equipment is energized** until verified
3. **Keep electrical equipment dry**
4. **Use GFCI protection** for all outlets near water
5. **Report damaged cords and equipment immediately**

## Working Near Water

### Critical Precautions:
- Keep electrical connections above water level
- Use weatherproof/waterproof enclosures
- Ensure all outlets have GFCI protection
- Never handle electrical equipment with wet hands
- Keep extension cords away from wet areas

## Inspecting Equipment

Before use, check for:
- Damaged insulation or exposed wires
- Cracked or broken plugs
- Missing ground pins
- Burn marks or discoloration
- Unusual odors (burning smell)
- Tripped circuit breakers

## What NOT to Do

- Don't overload outlets or circuits
- Don't use damaged equipment
- Don't bypass safety devices
- Don't run cords under rugs or through water
- Don't pull plugs by the cord
- Don't ignore warning signs`
            },
            {
                title: 'Emergency Response',
                type: 'text',
                duration: 15,
                content: `# Electrical Emergency Response

## If Someone is Being Electrocuted

### STOP - Don't touch them!
You could become a victim too.

### Steps to Take:
1. **Turn off power** at the circuit breaker or disconnect switch
2. If you can't turn off power, **call 911 immediately**
3. If power is off, check for responsiveness
4. Begin CPR if trained and the person is unresponsive
5. Treat for shock - keep them warm and lying down
6. Watch for burns - there may be entry and exit wounds

## Reporting Electrical Incidents

Always report:
- Electric shocks (even minor ones)
- Near misses
- Damaged equipment
- Tripped GFCIs or breakers
- Unusual sounds or smells from equipment

## Fire Response

If electrical fire occurs:
1. **Do NOT use water** on electrical fires
2. Use a Class C fire extinguisher
3. If safe, disconnect power
4. Evacuate if fire is spreading
5. Call 911`
            },
            {
                title: 'Electrical Safety Assessment',
                type: 'quiz',
                duration: 15,
                questions: [
                    {
                        id: 'elec-q1',
                        question: 'What type of protection should all outlets near water have?',
                        options: ['Surge protector', 'GFCI', 'Timer', 'Extension cord'],
                        correctAnswer: 1
                    },
                    {
                        id: 'elec-q2',
                        question: 'If you see someone being electrocuted, what should you do FIRST?',
                        options: [
                            'Pull them away from the source',
                            'Call 911',
                            'Turn off the power source',
                            'Start CPR immediately'
                        ],
                        correctAnswer: 2
                    },
                    {
                        id: 'elec-q3',
                        question: 'What type of fire extinguisher should be used on electrical fires?',
                        options: ['Class A', 'Class B', 'Class C', 'Class D'],
                        correctAnswer: 2
                    },
                    {
                        id: 'elec-q4',
                        question: 'Which of the following is a sign of damaged electrical equipment?',
                        options: [
                            'Clean cord insulation',
                            'Burning smell',
                            'Properly grounded plug',
                            'Working indicator lights'
                        ],
                        correctAnswer: 1
                    }
                ]
            }
        ]
    },

    {
        code: 'WATER-001',
        title: 'Water Safety & Handling',
        description: 'Safe practices for working around tanks, sumps, and water systems. Covers drowning prevention, water quality hazards, and proper tank maintenance procedures.',
        category: 'safety',
        duration: 75,
        isRequired: true,
        renewalDays: 365,
        passScore: 80,
        sortOrder: 4,
        lessons: [
            {
                title: 'Water Hazards in Aquaponics',
                type: 'text',
                duration: 15,
                content: `# Water Safety Fundamentals

## Water Hazards in Indoor Aquaponics

### Drowning Risks
- Large fish tanks
- Sumps and reservoirs
- Flood tables during operation

### Slip and Fall Hazards
- Wet floors around tanks
- Algae growth on surfaces
- Water spills during maintenance

### Water Quality Hazards
- Ammonia exposure
- Bacterial contamination
- Chemical treatment residues

## Prevention Measures

### Physical Barriers
- Tank covers where appropriate
- Guardrails around large systems
- Non-slip flooring and mats

### Safe Practices
- Never work alone around large tanks
- Maintain clear walkways
- Clean up spills immediately
- Use proper drainage systems`
            },
            {
                title: 'Tank Maintenance Safety',
                type: 'text',
                duration: 20,
                content: `# Safe Tank Maintenance

## Before Starting Work

1. **Notify coworkers** of your activities
2. **Turn off electrical equipment** when working in/near water
3. **Gather all tools and materials** before beginning
4. **Wear appropriate PPE** (gloves, boots, eye protection)

## Working in and Around Tanks

### Never:
- Lean over tank edges without support
- Use unstable platforms or ladders
- Work alone on large tank maintenance
- Wear loose clothing that could get caught

### Always:
- Use stable, non-slip platforms
- Maintain three points of contact on ladders
- Have a spotter when reaching into deep tanks
- Keep electrical cords away from water

## Draining and Cleaning

- **Verify drains are clear** before starting
- **Beware of slippery surfaces** when tanks are empty
- **Allow proper ventilation** in enclosed spaces
- **Dispose of water properly** according to regulations`
            },
            {
                title: 'Water Safety Assessment',
                type: 'quiz',
                duration: 15,
                questions: [
                    {
                        id: 'water-q1',
                        question: 'What should you do before working in or near large water tanks?',
                        options: [
                            'Work quickly to save time',
                            'Notify coworkers of your activities',
                            'Wear your regular shoes',
                            'Keep electrical equipment running'
                        ],
                        correctAnswer: 1
                    },
                    {
                        id: 'water-q2',
                        question: 'What is a primary cause of slips around aquaponics systems?',
                        options: ['Dry floors', 'Algae growth on surfaces', 'Rubber mats', 'Good lighting'],
                        correctAnswer: 1
                    },
                    {
                        id: 'water-q3',
                        question: 'When working on deep tank maintenance, you should:',
                        options: [
                            'Work alone for efficiency',
                            'Lean over the edge for better reach',
                            'Have a spotter present',
                            'Keep electrical equipment running'
                        ],
                        correctAnswer: 2
                    }
                ]
            }
        ]
    },

    {
        code: 'CHEM-001',
        title: 'Chemical Safety for Aquaponics',
        description: 'Safe handling, storage, and disposal of chemicals used in aquaponics including pH adjusters, nutrients, and sanitizers. Includes spill response procedures.',
        category: 'safety',
        duration: 90,
        isRequired: true,
        renewalDays: 365,
        passScore: 80,
        sortOrder: 5,
        lessons: [
            {
                title: 'Chemicals in Aquaponics',
                type: 'text',
                duration: 20,
                content: `# Chemical Safety in Aquaponics

## Common Chemicals Used

### pH Adjusters
- **Phosphoric acid** (pH down) - Corrosive
- **Potassium hydroxide** (pH up) - Caustic/burns
- **Calcium carbonate** - Dust irritant

### Nutrient Supplements
- **Chelated iron** - Can stain, mild irritant
- **Potassium sulfate** - Dust hazard
- **Calcium nitrate** - Oxidizer

### Sanitizers & Disinfectants
- **Hydrogen peroxide** - Oxidizer, corrosive at high concentrations
- **Chlorine solutions** - Toxic fumes, corrosive
- **Quaternary ammonium compounds** - Irritants

### Water Treatment
- **Dechlorinators** - Generally low hazard
- **Beneficial bacteria** - Low hazard

## General Safety Principles

1. **Read the SDS** before using any chemical
2. **Use the minimum effective amount**
3. **Never mix chemicals** unless specifically instructed
4. **Store chemicals properly** (cool, dry, separated by compatibility)
5. **Wear appropriate PPE** for each chemical`
            },
            {
                title: 'Chemical Handling & Storage',
                type: 'text',
                duration: 20,
                content: `# Safe Chemical Handling

## Before Using Chemicals

1. Read the label and SDS
2. Check for proper ventilation
3. Put on required PPE
4. Prepare for potential spills

## Handling Procedures

### Acids (pH Down)
- Always add acid to water, never water to acid
- Use chemical-resistant gloves and eye protection
- Work in well-ventilated areas
- Have neutralizing agent nearby

### Bases (pH Up)
- Handle with same care as acids
- Avoid contact with skin and eyes
- Rinse exposed areas with large amounts of water

### Concentrates
- Dilute according to instructions
- Never pour concentrates directly into system
- Use dedicated measuring equipment

## Storage Requirements

### General Rules:
- Store in original labeled containers
- Keep in cool, dry location
- Separate incompatible chemicals
- Store acids and bases apart
- Keep oxidizers away from organics
- Ensure secondary containment for liquids`
            },
            {
                title: 'Spill Response',
                type: 'text',
                duration: 15,
                content: `# Chemical Spill Response

## Assess the Situation

1. **Identify the chemical** from container or SDS
2. **Determine the size** of the spill
3. **Check for injuries**
4. **Evaluate if you can safely clean it up**

## Small Spill Response

For minor spills you can safely handle:
1. Put on appropriate PPE
2. Contain the spill with absorbent materials
3. Clean from outside edges toward center
4. Dispose of materials properly
5. Wash the area thoroughly

## Large Spill Response

For major spills or hazardous chemicals:
1. **Evacuate** the immediate area
2. **Alert** coworkers and supervisor
3. **Call** emergency services if needed
4. **Do not** attempt cleanup without proper training/equipment
5. **Ventilate** the area if safe to do so

## Spill Kit Contents

Your facility should have spill kits containing:
- Absorbent pads and pillows
- Neutralizing agents
- PPE (gloves, goggles, apron)
- Disposal bags
- Cleanup instructions`
            },
            {
                title: 'Chemical Safety Assessment',
                type: 'quiz',
                duration: 15,
                questions: [
                    {
                        id: 'chem-q1',
                        question: 'When diluting acid, you should:',
                        options: [
                            'Add water to acid',
                            'Add acid to water',
                            'Mix them together quickly',
                            'It doesnt matter'
                        ],
                        correctAnswer: 1
                    },
                    {
                        id: 'chem-q2',
                        question: 'What should you do FIRST before using any chemical?',
                        options: [
                            'Put on gloves',
                            'Ask a coworker',
                            'Read the label and SDS',
                            'Open the container'
                        ],
                        correctAnswer: 2
                    },
                    {
                        id: 'chem-q3',
                        question: 'How should acids and bases be stored?',
                        options: [
                            'Together on the same shelf',
                            'In the same secondary containment',
                            'Separated from each other',
                            'Mixed together for convenience'
                        ],
                        correctAnswer: 2
                    },
                    {
                        id: 'chem-q4',
                        question: 'For a large chemical spill, your first action should be to:',
                        options: [
                            'Start cleaning immediately',
                            'Evacuate the immediate area',
                            'Pour water on it',
                            'Find the SDS'
                        ],
                        correctAnswer: 1
                    }
                ]
            }
        ]
    },

    {
        code: 'FOOD-001',
        title: 'Food Safety & Sanitation',
        description: 'FSMA-compliant food safety training covering safe handling of produce, sanitation procedures, and contamination prevention for food-producing aquaponics operations.',
        category: 'compliance',
        duration: 120,
        isRequired: true,
        renewalDays: 365,
        passScore: 80,
        sortOrder: 6,
        lessons: [
            {
                title: 'Food Safety Fundamentals',
                type: 'text',
                duration: 20,
                content: `# Food Safety in Aquaponics

## Why Food Safety Matters

Aquaponics produces fresh produce and potentially fish for human consumption. Contamination can cause:
- Foodborne illness outbreaks
- Legal liability
- Business closure
- Harm to consumers

## Common Contamination Sources

### Biological
- Bacteria (E. coli, Salmonella, Listeria)
- Viruses (Norovirus, Hepatitis A)
- Parasites

### Chemical
- Pesticides (should not be used in aquaponics)
- Cleaning agents
- Industrial chemicals

### Physical
- Glass
- Metal fragments
- Plastic pieces
- Insects

## The FDA Food Safety Modernization Act (FSMA)

FSMA shifted focus from responding to contamination to preventing it. Key requirements:
- Preventive controls
- Produce safety standards
- Supplier verification
- Record keeping`
            },
            {
                title: 'Personal Hygiene',
                type: 'text',
                duration: 15,
                content: `# Personal Hygiene for Food Safety

## Handwashing Requirements

Wash hands thoroughly:
- Before starting work
- After using the restroom
- After touching face, hair, or body
- After handling fish or non-food items
- After breaks
- Whenever hands may be contaminated

### Proper Handwashing Technique:
1. Wet hands with clean water
2. Apply soap
3. Scrub all surfaces for at least 20 seconds
4. Rinse thoroughly
5. Dry with single-use towel

## Work Attire

- Wear clean clothing daily
- Hair restraints required
- No jewelry in production areas
- Gloves when handling ready-to-eat produce
- Dedicated footwear for production areas

## Illness Policy

**Do not work with food if you have:**
- Vomiting or diarrhea
- Jaundice
- Sore throat with fever
- Open wounds on hands (unless properly covered)

Report these symptoms to your supervisor immediately.`
            },
            {
                title: 'Harvest & Post-Harvest Handling',
                type: 'text',
                duration: 20,
                content: `# Safe Harvest Practices

## Pre-Harvest Checklist

- Hands washed
- Harvest tools clean and sanitized
- Containers clean and food-grade
- Cooling/storage area ready

## During Harvest

### Do:
- Use clean, sanitized cutting tools
- Place produce in clean containers
- Handle produce gently to minimize damage
- Keep harvested produce off the floor

### Don't:
- Touch your face or hair
- Place produce on dirty surfaces
- Use damaged containers
- Mix different lots without tracking

## Post-Harvest Handling

### Cooling
- Cool produce rapidly to proper temperature
- Leafy greens: 35-40°F (2-4°C)
- Use clean ice if needed

### Washing
- Use potable water only
- Maintain appropriate sanitizer levels
- Change water when visibly dirty
- Document water quality

### Storage
- Store at proper temperatures
- Use FIFO (First In, First Out)
- Separate raw from ready-to-eat
- Check temperatures regularly`
            },
            {
                title: 'Sanitation Procedures',
                type: 'text',
                duration: 20,
                content: `# Facility Sanitation

## Cleaning vs. Sanitizing

**Cleaning**: Removes visible soil and debris
**Sanitizing**: Reduces pathogens to safe levels

You must clean BEFORE sanitizing - sanitizers don't work on dirty surfaces.

## The Cleaning Process

1. **Remove debris** - Sweep, scrape, or rinse
2. **Apply cleaner** - Use appropriate cleaning solution
3. **Scrub** - Physically remove remaining soil
4. **Rinse** - Remove cleaner residue
5. **Sanitize** - Apply sanitizer at correct concentration
6. **Air dry** - Allow surfaces to dry

## Food Contact Surfaces

All surfaces that touch food must be:
- Smooth and non-porous
- Easy to clean
- Cleaned and sanitized regularly
- Made of food-safe materials

## Documentation

Keep records of:
- Daily sanitation activities
- Sanitizer concentrations
- Water quality tests
- Any corrective actions taken`
            },
            {
                title: 'Food Safety Assessment',
                type: 'quiz',
                duration: 15,
                questions: [
                    {
                        id: 'food-q1',
                        question: 'How long should you scrub your hands when washing?',
                        options: ['5 seconds', '10 seconds', '20 seconds', '60 seconds'],
                        correctAnswer: 2
                    },
                    {
                        id: 'food-q2',
                        question: 'What is the proper storage temperature for leafy greens?',
                        options: ['50-55°F', '45-50°F', '35-40°F', '25-30°F'],
                        correctAnswer: 2
                    },
                    {
                        id: 'food-q3',
                        question: 'Before sanitizing a surface, you must first:',
                        options: ['Apply sanitizer', 'Let it air dry', 'Clean it', 'Rinse with hot water'],
                        correctAnswer: 2
                    },
                    {
                        id: 'food-q4',
                        question: 'When should you NOT work with food?',
                        options: [
                            'When you are tired',
                            'When you have diarrhea',
                            'When it is hot outside',
                            'When working alone'
                        ],
                        correctAnswer: 1
                    },
                    {
                        id: 'food-q5',
                        question: 'FIFO stands for:',
                        options: [
                            'First In, First Out',
                            'Fresh Is For Ordering',
                            'Food Inspection For Operations',
                            'Facility Inspection Form Only'
                        ],
                        correctAnswer: 0
                    }
                ]
            }
        ]
    },

    {
        code: 'PPE-001',
        title: 'Personal Protective Equipment (PPE)',
        description: 'Selection, proper use, and maintenance of personal protective equipment including gloves, eye protection, and respiratory equipment.',
        category: 'safety',
        duration: 60,
        isRequired: true,
        renewalDays: 365,
        passScore: 80,
        sortOrder: 7,
        lessons: [
            {
                title: 'Introduction to PPE',
                type: 'text',
                duration: 15,
                content: `# Personal Protective Equipment

## What is PPE?

Personal Protective Equipment (PPE) is equipment worn to minimize exposure to hazards that cause workplace injuries and illnesses.

## PPE in Aquaponics Operations

Common PPE needs:
- **Eye protection**: Chemical handling, maintenance
- **Gloves**: Chemicals, fish handling, harvesting
- **Footwear**: Slip-resistant, waterproof
- **Hearing protection**: Near loud pumps/equipment
- **Respiratory protection**: Dust, chemical fumes

## The Hierarchy of Controls

PPE is the LAST line of defense:
1. **Elimination**: Remove the hazard
2. **Substitution**: Use less hazardous alternative
3. **Engineering controls**: Isolate people from hazard
4. **Administrative controls**: Change work practices
5. **PPE**: Protect the individual worker

PPE should be used when other controls aren't feasible or as additional protection.`
            },
            {
                title: 'Types of PPE',
                type: 'text',
                duration: 20,
                content: `# PPE Selection and Use

## Eye and Face Protection

### Safety Glasses
- Basic impact protection
- Use for general maintenance tasks

### Chemical Splash Goggles
- Seal around eyes
- Required when handling acids, bases, or other chemicals

### Face Shields
- Additional protection over safety glasses
- For high-splash risk activities

## Hand Protection

### Chemical-Resistant Gloves
- Nitrile: Good for most aquaponics chemicals
- Check chemical compatibility before use
- Replace when worn or damaged

### Cut-Resistant Gloves
- For handling sharp materials
- May be required for fish processing

### Waterproof Gloves
- For wet work
- Keep hands dry in tank maintenance

## Foot Protection

### Slip-Resistant Footwear
- Required in wet environments
- Look for high-traction soles

### Waterproof Boots
- For tank work
- Keep feet dry and protected

## Hearing Protection

When noise exceeds 85 dB:
- Earplugs: Disposable or reusable
- Earmuffs: Higher protection levels`
            },
            {
                title: 'PPE Care and Maintenance',
                type: 'text',
                duration: 10,
                content: `# Maintaining Your PPE

## Daily Inspection

Before each use, check for:
- Cracks or damage
- Proper fit
- Clean condition
- All parts present and working

## Cleaning PPE

- Follow manufacturer instructions
- Use appropriate cleaning agents
- Allow to dry completely before storage
- Replace disposable items as needed

## Storage

- Store in clean, dry location
- Keep away from chemicals and direct sunlight
- Use designated storage areas
- Don't share unwashed PPE

## Replacement

Replace PPE when:
- Damaged or worn
- After exposure to chemicals
- No longer fits properly
- Past manufacturer-recommended life span
- After any incident that may have compromised protection`
            },
            {
                title: 'PPE Assessment',
                type: 'quiz',
                duration: 15,
                questions: [
                    {
                        id: 'ppe-q1',
                        question: 'PPE is which level in the hierarchy of controls?',
                        options: ['First (most effective)', 'Second', 'Third', 'Last (least effective)'],
                        correctAnswer: 3
                    },
                    {
                        id: 'ppe-q2',
                        question: 'What type of eye protection should be used when handling chemicals?',
                        options: ['Regular glasses', 'Safety glasses', 'Chemical splash goggles', 'Sunglasses'],
                        correctAnswer: 2
                    },
                    {
                        id: 'ppe-q3',
                        question: 'When should you inspect your PPE?',
                        options: ['Weekly', 'Monthly', 'Before each use', 'Only when damaged'],
                        correctAnswer: 2
                    }
                ]
            }
        ]
    },

    {
        code: 'EMERG-001',
        title: 'Emergency Procedures',
        description: 'Emergency response procedures including evacuation, fire response, medical emergencies, and chemical spill response. Covers facility-specific emergency equipment locations.',
        category: 'safety',
        duration: 75,
        isRequired: true,
        renewalDays: 365,
        passScore: 80,
        sortOrder: 8,
        lessons: [
            {
                title: 'Emergency Preparedness',
                type: 'text',
                duration: 15,
                content: `# Emergency Preparedness

## Know Your Facility

Before an emergency occurs, you should know:
- **Exit locations** - Primary and secondary routes
- **Assembly point** - Where to gather after evacuation
- **Fire extinguisher locations**
- **First aid kit locations**
- **Emergency shut-off locations** - Power, water, gas
- **Emergency contact numbers**

## Types of Emergencies

### In Aquaponics Facilities:
- Fire (electrical, chemical)
- Chemical spills
- Medical emergencies
- Power outages
- Water system failures
- Severe weather

## Emergency Action Plan

Your facility should have a written plan covering:
- Emergency escape procedures and routes
- Procedures for employees who remain to operate critical equipment
- Procedures to account for all employees after evacuation
- Rescue and medical duties
- Alarm systems and how to report emergencies`
            },
            {
                title: 'Fire Response',
                type: 'text',
                duration: 15,
                content: `# Fire Emergency Response

## Upon Discovering a Fire

### R.A.C.E. Protocol:
1. **R**escue - Help anyone in immediate danger (only if safe)
2. **A**larm - Activate fire alarm or call 911
3. **C**onfine - Close doors to slow fire spread
4. **E**vacuate - Leave via nearest safe exit

## Using a Fire Extinguisher

### Only attempt if:
- Fire is small and contained
- You have the right type of extinguisher
- You have a clear escape route
- The room is not filled with smoke

### P.A.S.S. Technique:
1. **P**ull the pin
2. **A**im at base of fire
3. **S**queeze the handle
4. **S**weep side to side

## Fire Extinguisher Types

- **Class A**: Ordinary combustibles (paper, wood)
- **Class B**: Flammable liquids
- **Class C**: Electrical equipment
- **Class D**: Combustible metals

In aquaponics, you'll typically need Class ABC extinguishers.`
            },
            {
                title: 'Medical Emergencies',
                type: 'text',
                duration: 15,
                content: `# Medical Emergency Response

## When Someone is Injured

### Assess the Scene
- Is it safe for you to help?
- Are there ongoing hazards?
- How many people are injured?

### For Serious Injuries:
1. Call 911 or facility emergency number
2. Do not move the person unless in immediate danger
3. Control severe bleeding with direct pressure
4. Stay with the victim until help arrives
5. Be prepared to provide CPR if trained

### For Minor Injuries:
1. Provide first aid as trained
2. Complete an incident report
3. Seek medical evaluation if needed
4. Report to supervisor

## First Aid Kit Locations

Know where first aid supplies are located:
- Main production area
- Office/break room
- Loading area

## Important: You are NOT required to:
- Provide first aid beyond your training
- Risk your own safety
- Perform CPR if not certified`
            },
            {
                title: 'Evacuation Procedures',
                type: 'text',
                duration: 15,
                content: `# Evacuation Procedures

## When to Evacuate

Evacuate immediately when:
- Fire alarm sounds
- Supervisor orders evacuation
- You detect fire or smoke
- Chemical spill you cannot safely handle
- Any situation making the area unsafe

## Evacuation Steps

1. **Stop work immediately**
2. **Leave personal belongings** - Don't delay
3. **Walk - don't run** - Use nearest safe exit
4. **Help others if possible** - Assist those needing help
5. **Go to assembly point** - Do not return inside
6. **Report to supervisor** - Account for your presence

## Special Considerations

### Power Outages:
- Emergency lighting should activate
- Use flashlights if available
- Move carefully in reduced lighting

### If Trapped:
- Close doors between you and the hazard
- Call for help
- Signal rescuers (window, phone)
- Stay low if smoke present

## Assembly Point Procedures

At the assembly point:
- Report to designated person
- Report any missing personnel
- Report any injuries
- Do not leave until released`
            },
            {
                title: 'Emergency Procedures Assessment',
                type: 'quiz',
                duration: 15,
                questions: [
                    {
                        id: 'emerg-q1',
                        question: 'In the R.A.C.E. protocol, what does the "C" stand for?',
                        options: ['Call', 'Confine', 'Cover', 'Control'],
                        correctAnswer: 1
                    },
                    {
                        id: 'emerg-q2',
                        question: 'When using a fire extinguisher, what should you aim at?',
                        options: ['The top of the flames', 'The base of the fire', 'The smoke', 'The ceiling'],
                        correctAnswer: 1
                    },
                    {
                        id: 'emerg-q3',
                        question: 'During evacuation, you should:',
                        options: [
                            'Gather your personal belongings first',
                            'Run to the nearest exit',
                            'Walk to the nearest safe exit',
                            'Wait for everyone else to leave first'
                        ],
                        correctAnswer: 2
                    },
                    {
                        id: 'emerg-q4',
                        question: 'What should you do at the assembly point?',
                        options: [
                            'Leave immediately to go home',
                            'Return inside to get your belongings',
                            'Report to the designated person',
                            'Start cleaning up the emergency'
                        ],
                        correctAnswer: 2
                    }
                ]
            }
        ]
    },

    {
        code: 'FIRST-001',
        title: 'First Aid & CPR Basics',
        description: 'Basic first aid and CPR awareness training. Note: This course provides awareness-level training only. Hands-on certification requires in-person training.',
        category: 'safety',
        duration: 60,
        isRequired: false,
        renewalDays: 730,
        passScore: 80,
        sortOrder: 9,
        lessons: [
            {
                title: 'First Aid Fundamentals',
                type: 'text',
                duration: 15,
                content: `# First Aid Awareness

## What is First Aid?

First aid is the immediate care given to a person who has been injured or suddenly taken ill. It includes:
- Self-help and home care if medical assistance is not available
- Knowing how to get help
- Providing initial care until professional help arrives

## When to Call 911

Call emergency services for:
- Unconsciousness
- Difficulty breathing
- Chest pain
- Severe bleeding
- Serious burns
- Seizures
- Severe allergic reactions
- Any life-threatening condition

## General First Aid Principles

### DO:
- Stay calm
- Ensure scene safety
- Get consent before helping (if conscious)
- Call for help
- Monitor the person until help arrives

### DON'T:
- Move someone with possible spine injury
- Give food or water to unconscious person
- Remove embedded objects
- Exceed your training level`
            },
            {
                title: 'Common Injuries in Aquaponics',
                type: 'text',
                duration: 15,
                content: `# Treating Common Injuries

## Cuts and Scrapes

1. Wash hands before treatment
2. Clean wound with clean water
3. Apply direct pressure to stop bleeding
4. Apply antibiotic ointment
5. Cover with sterile bandage

Seek medical attention if:
- Bleeding won't stop
- Wound is deep or gaping
- Signs of infection develop

## Burns

### For Minor Burns:
1. Cool with cool (not cold) water for 10+ minutes
2. Cover with sterile bandage
3. Take pain reliever if needed

### For Serious Burns:
1. Call 911
2. Do not apply ice, butter, or ointments
3. Cover loosely with sterile cloth
4. Monitor for shock

## Chemical Exposure

### Skin Contact:
1. Remove contaminated clothing
2. Flush with water for 15-20 minutes
3. Refer to SDS for specific treatment
4. Seek medical attention

### Eye Contact:
1. Flush with clean water for 15-20 minutes
2. Hold eyelids open
3. Remove contact lenses if present
4. Seek immediate medical attention`
            },
            {
                title: 'CPR Awareness',
                type: 'text',
                duration: 15,
                content: `# CPR Awareness

## IMPORTANT DISCLAIMER

This is awareness training only. You need hands-on training to be certified in CPR. Contact the American Red Cross or American Heart Association for certification courses.

## What is CPR?

Cardiopulmonary Resuscitation (CPR) is an emergency procedure performed when someone's heart stops beating.

## Hands-Only CPR

For adults who collapse suddenly:
1. Call 911 (or have someone call)
2. Push hard and fast in the center of the chest
3. Continue until help arrives or person recovers

## AED Awareness

### Automated External Defibrillator (AED):
- Found in many public places
- Designed for use by untrained bystanders
- Provides voice prompts
- Analyzes heart rhythm automatically
- Only delivers shock if needed

### Basic AED Steps:
1. Turn on AED
2. Follow voice prompts
3. Attach pads as shown
4. Ensure no one is touching person
5. Allow AED to analyze and deliver shock if indicated

## Getting Certified

Consider taking a certified course:
- American Red Cross
- American Heart Association
- Local community courses

Certification typically requires hands-on practice and testing.`
            },
            {
                title: 'First Aid Assessment',
                type: 'quiz',
                duration: 15,
                questions: [
                    {
                        id: 'first-q1',
                        question: 'For a chemical splash to the eyes, how long should you flush with water?',
                        options: ['1-2 minutes', '5 minutes', '15-20 minutes', '30 seconds'],
                        correctAnswer: 2
                    },
                    {
                        id: 'first-q2',
                        question: 'What should you NOT apply to a burn?',
                        options: ['Cool water', 'Sterile bandage', 'Ice or butter', 'Nothing at first'],
                        correctAnswer: 2
                    },
                    {
                        id: 'first-q3',
                        question: 'When should you move an injured person?',
                        options: [
                            'Always, to make them comfortable',
                            'Only if they are in immediate danger',
                            'Never under any circumstances',
                            'When waiting for emergency services'
                        ],
                        correctAnswer: 1
                    }
                ]
            }
        ]
    },

    {
        code: 'SLIP-001',
        title: 'Slip, Trip & Fall Prevention',
        description: 'Preventing slips, trips, and falls in wet environments. Covers hazard identification, safe walking techniques, and proper housekeeping.',
        category: 'safety',
        duration: 45,
        isRequired: true,
        renewalDays: 365,
        passScore: 80,
        sortOrder: 10,
        lessons: [
            {
                title: 'Understanding Slip, Trip & Fall Hazards',
                type: 'text',
                duration: 15,
                content: `# Slip, Trip & Fall Prevention

## Why This Matters

Slips, trips, and falls are:
- The #1 cause of workplace injuries
- Particularly common in wet environments
- Often preventable with awareness

In aquaponics, you're working with water constantly - this means heightened risk.

## Common Causes

### Slips (loss of traction):
- Wet or oily floors
- Algae growth
- Polished or smooth surfaces
- Loose rugs or mats
- Spills

### Trips (foot strikes object):
- Cables and hoses
- Uneven surfaces
- Poor lighting
- Clutter in walkways
- Open drawers or cabinets

### Falls (from heights):
- Ladders
- Platforms
- Tanks
- Steps without handrails`
            },
            {
                title: 'Prevention Strategies',
                type: 'text',
                duration: 15,
                content: `# Preventing Slips, Trips & Falls

## Housekeeping

- Clean up spills immediately
- Keep walkways clear
- Organize cables and hoses
- Report floor damage
- Remove algae buildup regularly

## Footwear

Wear appropriate footwear:
- Slip-resistant soles
- Proper fit
- Good condition
- Closed-toe in production areas

## Safe Walking Practices

- Walk, don't run
- Take shorter steps on wet surfaces
- Watch where you're stepping
- Use handrails on stairs
- Avoid carrying loads that block vision

## Ladder Safety

When using ladders:
- Inspect before use
- Set up on stable, level surface
- Maintain three points of contact
- Face the ladder when climbing
- Don't overreach
- Never use the top step`
            },
            {
                title: 'Slip, Trip & Fall Assessment',
                type: 'quiz',
                duration: 15,
                questions: [
                    {
                        id: 'slip-q1',
                        question: 'What is the leading cause of workplace injuries?',
                        options: [
                            'Machine accidents',
                            'Slips, trips, and falls',
                            'Chemical exposure',
                            'Electrical shock'
                        ],
                        correctAnswer: 1
                    },
                    {
                        id: 'slip-q2',
                        question: 'On wet surfaces, you should:',
                        options: [
                            'Walk normally',
                            'Run to minimize contact time',
                            'Take shorter steps',
                            'Skip over wet areas'
                        ],
                        correctAnswer: 2
                    },
                    {
                        id: 'slip-q3',
                        question: 'How many points of contact should you maintain on a ladder?',
                        options: ['One', 'Two', 'Three', 'Four'],
                        correctAnswer: 2
                    }
                ]
            }
        ]
    },

    {
        code: 'ERGO-001',
        title: 'Ergonomics & Manual Handling',
        description: 'Proper lifting techniques, workstation ergonomics, and injury prevention for repetitive tasks common in aquaponics operations.',
        category: 'safety',
        duration: 45,
        isRequired: true,
        renewalDays: 365,
        passScore: 80,
        sortOrder: 11,
        lessons: [
            {
                title: 'Manual Handling Basics',
                type: 'text',
                duration: 15,
                content: `# Safe Manual Handling

## Common Tasks in Aquaponics

- Lifting feed bags and supplies
- Moving containers and equipment
- Harvesting and packaging
- Bending over grow beds and tanks

## Proper Lifting Technique

### Before Lifting:
1. Assess the load - Is it too heavy? Get help.
2. Plan your route - Clear path, place to set down
3. Check your grip points

### During the Lift:
1. **Stand close** to the load
2. **Feet apart** for stable base
3. **Bend at the knees**, not the waist
4. **Grip firmly**
5. **Keep load close** to your body
6. **Lift with your legs**, not your back
7. **Move your feet** to turn, don't twist

### Setting Down:
- Lower in reverse order
- Bend knees, keep back straight
- Place load, then release grip`
            },
            {
                title: 'Workstation Ergonomics',
                type: 'text',
                duration: 15,
                content: `# Ergonomic Work Practices

## Repetitive Tasks

Aquaponics involves repetitive motions:
- Planting and harvesting
- Feeding fish
- Monitoring systems
- Packaging products

## Preventing Strain

### Take Breaks:
- Follow work/rest guidelines
- Switch tasks periodically
- Stretch throughout the day

### Posture:
- Maintain neutral spine
- Avoid prolonged bending
- Use knee pads for low work
- Alternate sitting and standing

### Tools and Equipment:
- Use ergonomic tools when available
- Keep tools in good condition
- Use step stools for high work
- Avoid overreaching

## Warning Signs

Pay attention to:
- Persistent pain or discomfort
- Numbness or tingling
- Weakness in hands or arms
- Stiffness

Report symptoms early - early intervention is key.`
            },
            {
                title: 'Ergonomics Assessment',
                type: 'quiz',
                duration: 15,
                questions: [
                    {
                        id: 'ergo-q1',
                        question: 'When lifting, you should bend at the:',
                        options: ['Waist', 'Neck', 'Knees', 'Shoulders'],
                        correctAnswer: 2
                    },
                    {
                        id: 'ergo-q2',
                        question: 'To turn while carrying a load, you should:',
                        options: [
                            'Twist your back',
                            'Move your feet',
                            'Lean to the side',
                            'Reach and turn'
                        ],
                        correctAnswer: 1
                    },
                    {
                        id: 'ergo-q3',
                        question: 'What should you do if you experience persistent pain from repetitive work?',
                        options: [
                            'Ignore it until shift ends',
                            'Work through the pain',
                            'Report it to your supervisor',
                            'Take pain medication and continue'
                        ],
                        correctAnswer: 2
                    }
                ]
            }
        ]
    },

    {
        code: 'LOTO-001',
        title: 'Lockout/Tagout (LOTO)',
        description: 'Procedures for safely de-energizing equipment during maintenance. Covers energy isolation, lock application, and verification procedures.',
        category: 'safety',
        duration: 60,
        isRequired: true,
        renewalDays: 365,
        passScore: 80,
        sortOrder: 12,
        lessons: [
            {
                title: 'Understanding LOTO',
                type: 'text',
                duration: 15,
                content: `# Lockout/Tagout Fundamentals

## What is LOTO?

Lockout/Tagout (LOTO) is a safety procedure that ensures hazardous equipment is properly shut off and cannot be restarted before maintenance or servicing is complete.

## Why LOTO is Critical

Workers are injured when:
- Equipment starts unexpectedly
- Stored energy is released
- Electrical systems are energized

LOTO prevents these injuries.

## Types of Hazardous Energy

### In Aquaponics:
- **Electrical**: Pumps, lights, heaters, controls
- **Hydraulic**: Pressurized water lines
- **Pneumatic**: Air-powered equipment
- **Gravitational**: Elevated tanks, equipment

## Who Needs LOTO Training?

- Anyone who services or maintains equipment
- Anyone who operates equipment being serviced
- Anyone who works in areas where LOTO is used`
            },
            {
                title: 'LOTO Procedures',
                type: 'text',
                duration: 20,
                content: `# The LOTO Process

## Step-by-Step Procedure

### 1. Preparation
- Identify all energy sources
- Notify affected employees
- Gather locks, tags, and equipment

### 2. Shutdown
- Follow normal operating procedures
- Turn off equipment at the operating controls

### 3. Isolation
- Locate all energy isolation points
- Isolate equipment from ALL energy sources
- Disconnect electrical, close valves, block hydraulics

### 4. Application of Locks and Tags
- Apply personal lock to each energy isolation device
- Attach identification tag
- Each worker applies their own lock

### 5. Verification
- Release any stored energy
- Verify equipment cannot be operated
- Try starting the equipment (should not start)
- Confirm zero energy state

### 6. Perform the Work
- Complete maintenance or service
- Keep locks in place until work is done

### 7. Restoration
- Remove tools and materials
- Verify all guards are in place
- Remove locks and tags
- Notify affected employees
- Restore energy`
            },
            {
                title: 'LOTO Assessment',
                type: 'quiz',
                duration: 15,
                questions: [
                    {
                        id: 'loto-q1',
                        question: 'LOTO is required to:',
                        options: [
                            'Speed up maintenance work',
                            'Prevent unexpected startup during maintenance',
                            'Reduce energy costs',
                            'Improve equipment performance'
                        ],
                        correctAnswer: 1
                    },
                    {
                        id: 'loto-q2',
                        question: 'Who should apply a personal lock during LOTO?',
                        options: [
                            'Only the supervisor',
                            'The most experienced worker',
                            'Each worker performing the maintenance',
                            'The safety officer only'
                        ],
                        correctAnswer: 2
                    },
                    {
                        id: 'loto-q3',
                        question: 'What should you do after applying locks but before starting work?',
                        options: [
                            'Begin work immediately',
                            'Verify equipment cannot operate',
                            'Remove the tags',
                            'Notify other shifts'
                        ],
                        correctAnswer: 1
                    }
                ]
            }
        ]
    },

    {
        code: 'EQUIP-001',
        title: 'Equipment Operation & Maintenance',
        description: 'Safe operation and basic maintenance of aquaponics equipment including pumps, aerators, lighting systems, and environmental controls.',
        category: 'operations',
        duration: 90,
        isRequired: true,
        renewalDays: null,
        passScore: 80,
        sortOrder: 13,
        lessons: [
            {
                title: 'Aquaponics Equipment Overview',
                type: 'text',
                duration: 20,
                content: `# Equipment in Indoor Aquaponics

## Critical Systems

### Water Circulation
- **Water Pumps**: Move water through the system
- **Air Pumps/Aerators**: Provide oxygen to fish and roots
- **Sumps**: Collect and distribute water

### Environmental Control
- **Lighting**: Grow lights (LED, HID, fluorescent)
- **HVAC**: Temperature and humidity control
- **Heaters/Chillers**: Water temperature regulation

### Monitoring
- **Sensors**: pH, dissolved oxygen, temperature, EC
- **Controllers**: Automated system management
- **Alarms**: Alert for out-of-range conditions

## Equipment Failure Consequences

System failures can result in:
- Fish death (within hours without oxygen)
- Crop loss (from water or temperature issues)
- Flooding (pump failures)
- Fire hazards (electrical failures)`
            },
            {
                title: 'Safe Equipment Operation',
                type: 'text',
                duration: 20,
                content: `# Operating Equipment Safely

## Before Starting Equipment

1. **Inspect visually** for damage or leaks
2. **Check connections** (electrical, plumbing)
3. **Verify settings** are correct
4. **Clear the area** of obstructions
5. **Ensure guards are in place**

## During Operation

### Monitor for:
- Unusual sounds or vibrations
- Unexpected temperature changes
- Leaks or drips
- Error codes or alarms
- Performance changes

### Never:
- Override safety interlocks
- Operate damaged equipment
- Ignore warning signs
- Leave running equipment unattended (unless designed for it)

## Emergency Shutdown

Know how to perform emergency shutdown for all equipment:
- Location of E-stop buttons
- Main breaker locations
- Valve shutoff locations
- Controller override procedures`
            },
            {
                title: 'Basic Maintenance',
                type: 'text',
                duration: 20,
                content: `# Equipment Maintenance

## Preventive Maintenance

Regular maintenance prevents failures:

### Daily:
- Visual inspection
- Check operating parameters
- Listen for unusual sounds
- Verify alarms are working

### Weekly:
- Clean filters and screens
- Check fluid levels
- Inspect connections
- Test backup systems

### Monthly:
- Deep clean equipment
- Calibrate sensors
- Check belts and bearings
- Review performance trends

## Maintenance Safety

### Always:
- Follow LOTO procedures
- Disconnect power before servicing
- Use appropriate PPE
- Keep maintenance records
- Report issues promptly

### Never:
- Perform maintenance beyond your training
- Skip safety procedures
- Use improper tools
- Ignore manufacturer instructions`
            },
            {
                title: 'Equipment Assessment',
                type: 'quiz',
                duration: 15,
                questions: [
                    {
                        id: 'equip-q1',
                        question: 'How quickly can fish die without proper aeration?',
                        options: ['Within days', 'Within hours', 'Within weeks', 'They adapt quickly'],
                        correctAnswer: 1
                    },
                    {
                        id: 'equip-q2',
                        question: 'Before starting equipment, you should:',
                        options: [
                            'Just turn it on',
                            'Visually inspect for damage',
                            'Call a technician',
                            'Wait for supervisor approval'
                        ],
                        correctAnswer: 1
                    },
                    {
                        id: 'equip-q3',
                        question: 'When should you perform maintenance on powered equipment?',
                        options: [
                            'While it is running to save time',
                            'Only during the day shift',
                            'After following LOTO procedures',
                            'Whenever convenient'
                        ],
                        correctAnswer: 2
                    }
                ]
            }
        ]
    },

    {
        code: 'CONF-001',
        title: 'Confined Space Entry',
        description: 'Safety procedures for entering confined spaces such as large tanks, sumps, and enclosed areas. Covers hazard assessment, atmospheric testing, and rescue procedures.',
        category: 'safety',
        duration: 90,
        isRequired: false,
        renewalDays: 365,
        passScore: 80,
        sortOrder: 14,
        lessons: [
            {
                title: 'Confined Space Basics',
                type: 'text',
                duration: 20,
                content: `# Understanding Confined Spaces

## What is a Confined Space?

A confined space has ALL THREE characteristics:
1. **Large enough** to enter and perform work
2. **Limited entry/exit** - not designed for continuous occupancy
3. **Not designed for continuous occupancy**

## Examples in Aquaponics

- Large fish tanks (when drained)
- Sumps and reservoirs
- Equipment enclosures
- Storage tanks
- Mechanical rooms

## Confined Space Hazards

### Atmospheric Hazards:
- Oxygen deficiency (<19.5%)
- Oxygen enrichment (>23.5%)
- Toxic gases (ammonia, hydrogen sulfide)
- Flammable atmospheres

### Physical Hazards:
- Engulfment (solids or liquids)
- Entrapment
- Electrical
- Moving equipment

## Permit-Required Confined Spaces

Some spaces require a written permit because of:
- Hazardous atmosphere
- Engulfment potential
- Configuration that could trap
- Any other recognized serious hazard`
            },
            {
                title: 'Entry Procedures',
                type: 'text',
                duration: 25,
                content: `# Safe Confined Space Entry

## Pre-Entry Requirements

### 1. Entry Permit
- Completed by authorized supervisor
- Lists hazards and precautions
- Specifies time limit
- Identifies rescue procedures

### 2. Atmospheric Testing
- Test BEFORE entry
- Test throughout entry
- Test at different levels
- Document results

### 3. Ventilation
- Provide forced air if needed
- Continuous monitoring
- Never use pure oxygen

### 4. Personnel
- **Entry Supervisor**: Authorizes entry
- **Attendant**: Stationed outside, monitors entrants
- **Entrant**: Trained workers entering the space
- **Rescue Team**: Available for emergency

## Entry Procedure

1. Complete and sign entry permit
2. Test atmosphere
3. Set up ventilation if needed
4. Position attendant at entry
5. Establish communication
6. Enter with continuous monitoring
7. Exit if conditions change
8. Close permit when complete`
            },
            {
                title: 'Emergency and Rescue',
                type: 'text',
                duration: 20,
                content: `# Confined Space Emergencies

## Warning Signs to Exit Immediately

- Alarm sounds
- Atmospheric readings out of range
- You feel dizzy or ill
- Communication fails
- Attendant signals to exit

## Attendant Responsibilities

The attendant must:
- Know the hazards
- Maintain communication with entrants
- Monitor conditions
- Order exit if needed
- Summon rescue if needed
- NEVER enter the space

## Rescue Procedures

### Non-Entry Rescue (Preferred):
- Retrieve entrant using lifeline/harness
- Does not require rescuer to enter

### Entry Rescue:
- Only by trained rescue team
- Requires SCBA or airline respirators
- Full rescue equipment

## Critical Rule

**NEVER attempt untrained rescue**

Many confined space fatalities are would-be rescuers who entered without proper equipment.`
            },
            {
                title: 'Confined Space Assessment',
                type: 'quiz',
                duration: 15,
                questions: [
                    {
                        id: 'conf-q1',
                        question: 'A confined space has how many defining characteristics?',
                        options: ['Two', 'Three', 'Four', 'Five'],
                        correctAnswer: 1
                    },
                    {
                        id: 'conf-q2',
                        question: 'When should atmospheric testing be done?',
                        options: [
                            'Only when you smell something',
                            'Once at the beginning',
                            'Before and continuously during entry',
                            'Only for permit-required spaces'
                        ],
                        correctAnswer: 2
                    },
                    {
                        id: 'conf-q3',
                        question: 'If an entrant collapses in a confined space, the attendant should:',
                        options: [
                            'Enter immediately to help',
                            'Call for trained rescue help',
                            'Wait to see if they recover',
                            'Ventilate the space first'
                        ],
                        correctAnswer: 1
                    }
                ]
            }
        ]
    },

    {
        code: 'BLOOD-001',
        title: 'Bloodborne Pathogens Awareness',
        description: 'Understanding bloodborne pathogens, exposure prevention, and proper response to blood or bodily fluid exposure incidents.',
        category: 'safety',
        duration: 45,
        isRequired: false,
        renewalDays: 365,
        passScore: 80,
        sortOrder: 15,
        lessons: [
            {
                title: 'Understanding Bloodborne Pathogens',
                type: 'text',
                duration: 15,
                content: `# Bloodborne Pathogens Awareness

## What are Bloodborne Pathogens?

Bloodborne pathogens are infectious microorganisms in blood that can cause disease in humans.

### Key Pathogens:
- **Hepatitis B (HBV)**: Attacks the liver
- **Hepatitis C (HCV)**: Also attacks liver
- **HIV**: Attacks immune system

## Exposure Routes

Pathogens can enter through:
- Open cuts or wounds
- Mucous membranes (eyes, nose, mouth)
- Needle sticks or sharps injuries
- Broken skin (chapped, abraded, acne)

## Workplace Relevance

You might encounter blood or bodily fluids:
- If a coworker is injured
- During first aid situations
- Cleaning up after an incident

## Protection

Universal Precautions: Treat all blood and bodily fluids as if they are infectious.`
            },
            {
                title: 'Prevention and Response',
                type: 'text',
                duration: 15,
                content: `# Preventing Exposure

## Protective Measures

### Engineering Controls:
- Sharps containers
- Handwashing facilities
- Proper first aid kits

### Work Practice Controls:
- Wash hands frequently
- Don't eat or drink in contaminated areas
- Handle sharps carefully
- Clean up spills properly

### PPE:
- Gloves when exposure possible
- Face protection if splashing likely
- Protective clothing if needed

## If Exposed

### Immediate Steps:
1. **Wash the area** thoroughly with soap and water
2. **Flush eyes** with clean water if eye exposure
3. **Report immediately** to supervisor
4. **Seek medical evaluation** promptly
5. **Document** the incident

### Medical Follow-Up:
- Testing may be recommended
- Post-exposure prophylaxis may be available
- Follow healthcare provider instructions`
            },
            {
                title: 'Bloodborne Pathogens Assessment',
                type: 'quiz',
                duration: 15,
                questions: [
                    {
                        id: 'blood-q1',
                        question: 'Universal precautions means treating:',
                        options: [
                            'Only obviously infected materials as hazardous',
                            'All blood and bodily fluids as potentially infectious',
                            'Only blood from known patients as infectious',
                            'No materials as infectious unless tested'
                        ],
                        correctAnswer: 1
                    },
                    {
                        id: 'blood-q2',
                        question: 'If exposed to blood, your first action should be to:',
                        options: [
                            'File paperwork',
                            'Wash the area with soap and water',
                            'Continue working',
                            'Wait until end of shift'
                        ],
                        correctAnswer: 1
                    }
                ]
            }
        ]
    }
];

async function seedTrainingCourses() {
    console.log('Starting training course seed...\n');

    for (const courseData of TRAINING_COURSES) {
        try {
            // EcoFusion's own courses carry no organizationId. They reach a
            // farm by being loaded into it, never by existing.
            const existingCourse = await prisma.trainingCourse.findFirst({
                where: { code: courseData.code, organizationId: null }
            });

            if (existingCourse) {
                console.log(`Course ${courseData.code} already exists, updating...`);

                // Update the course
                await prisma.trainingCourse.update({
                    where: { id: existingCourse.id },
                    data: {
                        title: courseData.title,
                        description: courseData.description,
                        category: courseData.category,
                        duration: courseData.duration,
                        isRequired: courseData.isRequired,
                        renewalDays: courseData.renewalDays,
                        passScore: courseData.passScore,
                        sortOrder: courseData.sortOrder,
                    }
                });

                // Delete existing lessons and recreate
                await prisma.trainingLesson.deleteMany({
                    where: { courseId: existingCourse.id }
                });

                // Create new lessons
                for (let i = 0; i < courseData.lessons.length; i++) {
                    const lesson = courseData.lessons[i];
                    await prisma.trainingLesson.create({
                        data: {
                            courseId: existingCourse.id,
                            title: lesson.title,
                            description: lesson.description,
                            type: lesson.type,
                            content: lesson.content,
                            duration: lesson.duration,
                            sortOrder: i,
                            questions: lesson.questions ? JSON.parse(JSON.stringify(lesson.questions)) : null,
                        }
                    });
                }

                console.log(`  Updated course: ${courseData.title} (${courseData.lessons.length} lessons)`);
            } else {
                // Create new course
                const course = await prisma.trainingCourse.create({
                    data: {
                        code: courseData.code,
                        title: courseData.title,
                        description: courseData.description,
                        category: courseData.category,
                        duration: courseData.duration,
                        isRequired: courseData.isRequired,
                        renewalDays: courseData.renewalDays,
                        passScore: courseData.passScore,
                        sortOrder: courseData.sortOrder,
                    }
                });

                // Create lessons
                for (let i = 0; i < courseData.lessons.length; i++) {
                    const lesson = courseData.lessons[i];
                    await prisma.trainingLesson.create({
                        data: {
                            courseId: course.id,
                            title: lesson.title,
                            description: lesson.description,
                            type: lesson.type,
                            content: lesson.content,
                            duration: lesson.duration,
                            sortOrder: i,
                            questions: lesson.questions ? JSON.parse(JSON.stringify(lesson.questions)) : null,
                        }
                    });
                }

                console.log(`  Created course: ${courseData.title} (${courseData.lessons.length} lessons)`);
            }
        } catch (error) {
            console.error(`  Error processing course ${courseData.code}:`, error);
        }
    }

    console.log('\nTraining course seed complete!');
    console.log(`Total courses: ${TRAINING_COURSES.length}`);

    // Summary of required vs optional
    const required = TRAINING_COURSES.filter(c => c.isRequired);
    const optional = TRAINING_COURSES.filter(c => !c.isRequired);
    console.log(`  Required compliance courses: ${required.length}`);
    console.log(`  Optional courses: ${optional.length}`);
}

seedTrainingCourses()
    .catch((error) => {
        console.error('Seed failed:', error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
