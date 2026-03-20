export interface HypeFactor {
    id: number;
    name: string;
    icon: string;
    description: string;
    weight: number;        // 0–100 contribution to overall hype
    status: "rising" | "stable" | "declining";
    lastUpdate: string;
}

export const hypeFactors: HypeFactor[] = [
    {
        id: 1,
        name: "SteamDB Activity",
        icon: "📊",
        description: "The mysterious 'HLX' app continues receiving frequent depot updates on SteamDB, suggesting active development.",
        weight: 85,
        status: "rising",
        lastUpdate: "Mar 2026",
    },
    {
        id: 2,
        name: "Valve Hiring Spree",
        icon: "💼",
        description: "Multiple job listings for narrative single-player level designers and Source 2 engine programmers.",
        weight: 78,
        status: "stable",
        lastUpdate: "Jan 2026",
    },
    {
        id: 3,
        name: "Insider Leaks",
        icon: "🕵️",
        description: "Project White Sands confirmed via voice actor resume. Code references found in Deadlock assets.",
        weight: 72,
        status: "rising",
        lastUpdate: "Feb 2026",
    },
    {
        id: 4,
        name: "Gabe Newell Signals",
        icon: "🎙️",
        description: "Gabe confirmed multiple games in development. Recent interviews hint at 'something fans have waited for.'",
        weight: 65,
        status: "stable",
        lastUpdate: "Dec 2025",
    },
    {
        id: 5,
        name: "Source 2 Evolution",
        icon: "🔧",
        description: "Destruction physics, advanced NPC AI, and photogrammetry tools — all hallmarks of a next-gen singleplayer experience.",
        weight: 80,
        status: "rising",
        lastUpdate: "Mar 2026",
    },
    {
        id: 6,
        name: "Community Momentum",
        icon: "🔥",
        description: "r/HalfLife subreddit activity surging. YouTube analysis videos hitting millions of views weekly.",
        weight: 70,
        status: "rising",
        lastUpdate: "Mar 2026",
    },
    {
        id: 7,
        name: "Years Since HL:Alyx",
        icon: "⏳",
        description: "6 years since Half-Life: Alyx. Valve's average dev cycle suggests a release window is approaching.",
        weight: 60,
        status: "stable",
        lastUpdate: "Mar 2026",
    },
    {
        id: 8,
        name: "Industry Chatter",
        icon: "📡",
        description: "Multiple game journalists and insiders have hinted at a Valve announcement in upcoming gaming events.",
        weight: 55,
        status: "declining",
        lastUpdate: "Nov 2025",
    },
];

export function computeHypeLevel(factors: HypeFactor[]): number {
    if (factors.length === 0) return 0;
    const totalWeight = factors.reduce((sum, f) => sum + f.weight, 0);
    return Math.round(totalWeight / factors.length);
}

export function getHypeClassification(score: number): { label: string; color: string } {
    if (score >= 80) return { label: "CRITICAL", color: "#ff2222" };
    if (score >= 65) return { label: "HIGH", color: "#ff8800" };
    if (score >= 50) return { label: "ELEVATED", color: "#ffbb00" };
    if (score >= 35) return { label: "MODERATE", color: "#44cc44" };
    return { label: "LOW", color: "#2288ff" };
}
