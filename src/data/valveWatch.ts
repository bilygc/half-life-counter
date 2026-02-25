export interface ValveActivity {
    id: number;
    icon: string;
    label: string;
    title: string;
    detail: string;
    date: string;
    url: string | null;
}

export const valveActivities: ValveActivity[] = [
    {
        id: 1,
        icon: "💼",
        label: "Job Posting",
        title: "Level Designer — Narrative Single-Player",
        detail: "Valve is hiring for narrative-driven single-player level design experiences.",
        date: "Oct 2023",
        url: "https://www.valvesoftware.com/en/jobs",
    },
    {
        id: 2,
        icon: "🔧",
        label: "Engine Update",
        title: "Source 2: Destruction & NPC Systems",
        detail: "Continuous updates to Source 2 reference advanced destruction physics and single-player NPC behavior.",
        date: "Feb 2025",
        url: null,
    },
    {
        id: 3,
        icon: "📊",
        label: "SteamDB",
        title: "HLX App — Frequent Depot Updates",
        detail: "A mysterious SteamDB app codenamed 'HLX' continues to receive regular depot updates.",
        date: "Ongoing",
        url: "https://steamdb.info/",
    },
    {
        id: 4,
        icon: "🎙️",
        label: "Statement",
        title: "Gabe Newell: 'We Have Games in Dev'",
        detail: "Gabe confirmed Valve has multiple titles in development following Half-Life: Alyx's success.",
        date: "Jan 2021",
        url: null,
    },
    {
        id: 5,
        icon: "🕵️",
        label: "Personnel",
        title: "Project White Sands — Voice Actor Resume",
        detail: "A voice actor listed 'Project White Sands' (Valve) on their resume — a location near Black Mesa.",
        date: "Aug 2024",
        url: null,
    },
    {
        id: 6,
        icon: "🎮",
        label: "Release",
        title: "Deadlock Enters Early Access",
        detail: "Valve's hero shooter shares core Source 2 tech and assets that may overlap with HL3 development.",
        date: "2024",
        url: null,
    },
];
