export interface Blip {
  title: string;
  description: string;
  license: string;
  ring: keyof typeof Rings;
  quadrant: keyof typeof Quadrants;
  projects: string[];
  slug: string;
}

export const Quadrants = {
  tools: "Tools",
  techniques: "Techniques",
  platforms: "Platforms",
  "languages-and-frameworks": "Languages & Frameworks",
} as const;

export const allQuadrants = Object.keys(Quadrants);

export const Rings = {
  adopt: "Adopt",
  trial: "Trial",
  assess: "Assess",
  hold: "Hold",
} as const;

export const allRings = Object.keys(Rings);
