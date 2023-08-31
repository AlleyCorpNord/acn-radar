import Project from "./Project";

export interface Blip {
  title: string;
  link: string;
  description: string;
  opinion: string;
  license: string;
  ring: keyof typeof Rings;
  quadrant: keyof typeof Quadrants;
  businessModel: (keyof typeof BusinessModel)[];
  projectIds: string[];
  projects?: Project[];
  slug: string;
}

export const Quadrants = {
  tools: "Tools",
  techniques: "Techniques",
  platforms: "Platforms",
  "languages-and-frameworks": "Language/Frameworks",
} as const;

export const allQuadrants = Object.keys(Quadrants);

export const Rings = {
  adopt: "Adopt",
  trial: "Trial",
  assess: "Assess",
  hold: "Hold",
} as const;

export const allRings = Object.keys(Rings);

export const BusinessModel = {
  "open-source": "Open Source",
  "free-tier": "Free Tier",
  "start-up-program": "Start Up program",
  saas: "SaaS",
  "on-premise": "On Premise",
} as const;

export const allBusinessModels = Object.keys(BusinessModel);
