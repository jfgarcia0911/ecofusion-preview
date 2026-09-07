// Historic defaults for EcoFusion's own seven silos.
//
// Business units live in the BusinessUnit table now, one set per organization,
// seeded from these values by the 20260908090000_add_organizations migration.
// Nothing in the app reads this array any more; it is kept as the reference for
// what a new farm starts with.

import { Fish, Leaf, Wind, Droplets, GraduationCap, ChefHat, Sun } from "lucide-react";

export const BUSINESS_PHASES = [
    {
        id: "aquaculture",
        title: "1. Aquaculture",
        description: "Fish production and rearing (Tilapia, Catfish)",
        icon: Fish,
        color: "from-blue-400 to-blue-600",
        accent: "text-blue-400"
    },
    {
        id: "plant-production",
        title: "2. Plant Production",
        description: "Hydroponic vegetation using aquaponic nutrients",
        icon: Leaf,
        color: "from-green-400 to-emerald-600",
        accent: "text-green-400"
    },
    {
        id: "methane-gas",
        title: "3. Methane Gas",
        description: "Biodigestion for methane energy production",
        icon: Wind,
        color: "from-gray-400 to-gray-600",
        accent: "text-gray-400"
    },
    {
        id: "fertilizer",
        title: "4. Bio-Fertilizer",
        description: "Organic fertilizer production from digestive waste",
        icon: Droplets,
        color: "from-amber-600 to-yellow-600",
        accent: "text-amber-500"
    },
    {
        id: "training-center",
        title: "5. Training Center",
        description: "Event space rental and educational programs",
        icon: GraduationCap,
        color: "from-purple-400 to-purple-600",
        accent: "text-purple-400"
    },
    {
        id: "restaurant",
        title: "6. Farm-to-Table",
        description: "On-site restaurant using fresh produce",
        icon: ChefHat,
        color: "from-orange-400 to-red-500",
        accent: "text-orange-400"
    },
    {
        id: "solar-energy",
        title: "7. Solar & Efficiency",
        description: "Renewable energy and greenhouse temp regulation",
        icon: Sun,
        color: "from-yellow-300 to-orange-400",
        accent: "text-yellow-300"
    },
];
