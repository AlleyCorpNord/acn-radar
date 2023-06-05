export interface Blip {
  title: string;
  description: string;
  license: string;
  ring: "adopt" | "trial" | "assess" | "hold";
  quadrant: "tools" | "techniques" | "platforms" | "languages-and-frameworks";
  projects: string[];
  slug: string;
}

const Quadrants = {
  tools: "Tools",
  techniques: "Techniques",
  platforms: "Platforms",
  "languages-and-frameworks": "Languages & Frameworks",
} as const;
