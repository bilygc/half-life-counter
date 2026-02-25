export interface TimelineEvent {
  year: number;
  date: string;
  title: string;
  description: string;
  type: "release" | "leak" | "rumor" | "valve" | "community";
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: 1998,
    date: "November 19, 1998",
    title: "Half-Life Released",
    description: "Valve's debut title changes the FPS genre forever with its seamless narrative and scripted sequences.",
    type: "release",
  },
  {
    year: 2003,
    date: "October 4, 2003",
    title: "Half-Life 2 Source Code Leak",
    description: "A hacker accesses Valve's internal network and leaks the source code, forcing a significant delay of the game.",
    type: "leak",
  },
  {
    year: 2004,
    date: "November 16, 2004",
    title: "Half-Life 2 Released",
    description: "After years of anticipation and a major leak, Gordon Freeman returns in a masterpiece of physics and storytelling.",
    type: "release",
  },
  {
    year: 2006,
    date: "June 1, 2006",
    title: "Half-Life 2: Episode One Released",
    description: "The first in a planned trilogy of episodic sequels, shifting the focus to Alyx Vance as a companion.",
    type: "release",
  },
  {
    year: 2007,
    date: "October 10, 2007",
    title: "Half-Life 2: Episode Two Released",
    description: "The Orange Box releases, ending on the infamous cliffhanger that has kept fans waiting for decades.",
    type: "release",
  },
  {
    year: 2008,
    date: "May 2008",
    title: "Concept Art Leaks",
    description: "Early concept art for Episode Three surfaced, showing Advisor designs and snowy environments.",
    type: "leak",
  },
  {
    year: 2012,
    date: "June 2012",
    title: "Gabe Newell on 'Ricochet 2'",
    description: "In a podcast interview, Gabe uses 'Ricochet 2' as a code name to acknowledge they are working on something fans want.",
    type: "valve",
  },
  {
    year: 2016,
    date: "July 2016",
    title: "Valve News Network Leaks",
    description: "Tyler McVicker starts reporting on 'HLVR', the project that would eventually become Half-Life: Alyx.",
    type: "leak",
  },
  {
    year: 2017,
    date: "August 25, 2017",
    title: "Epistle 3",
    description: "Former Valve writer Marc Laidlaw publishes a 'fanfic' that is clearly the intended plot for Episode Three.",
    type: "community",
  },
  {
    year: 2019,
    date: "November 21, 2019",
    title: "Half-Life: Alyx Announced",
    description: "Thirteen years after Episode Two, Valve officially announces a new full-length Half-Life game for VR.",
    type: "valve",
  },
  {
    year: 2020,
    date: "March 23, 2020",
    title: "Half-Life: Alyx Released",
    description: "A triumphant return to City 17 that proves Valve still has the 'Half-Life magic', concluding with a massive twist.",
    type: "release",
  },
  {
    year: 2021,
    date: "January 2021",
    title: "Gabe Newell: 'We have games in development'",
    description: "Gabe confirms in an interview that Alyx's success has re-energized Valve to create more single-player experiences.",
    type: "valve",
  },
  {
    year: 2023,
    date: "August 2023",
    title: "SteamDB 'HL3' Mentions",
    description: "App-level updates in SteamDB reference mysterious projects that the community immediately links to Half-Life.",
    type: "leak",
  },
  {
    year: 2024,
    date: "May 2024",
    title: "Deadlock Leaks",
    description: "Footage of Valve's new hero shooter 'Deadlock' leaks, containing assets that many suspect are shared with HL3 development.",
    type: "leak",
  },
  {
    year: 2024,
    date: "August 2024",
    title: "Project White Sands",
    description: "A voice actor's resume lists 'Project White Sands' (a Valve project), a name associated with the area where Black Mesa is located.",
    type: "rumor",
  },
  {
    year: 2025,
    date: "February 2025",
    title: "Source 2 Engine Updates",
    description: "Continuous updates to the Source 2 engine include references to advanced destruction and single-player NPCs.",
    type: "valve",
  }
];
