import { ReactNode } from "react";
import { Tool, HelicopterLanding, Code, GoGame } from "tabler-icons-react";
import { Quadrants, Rings } from "./Blip";

export const QuadrantAccessory: Record<keyof typeof Quadrants, ReactNode> = {
  tools: <Tool size="1.2rem" />,
  platforms: <HelicopterLanding size="1.2rem" />,
  "languages-and-frameworks": <Code size="1.2rem" />,
  techniques: <GoGame size="1.2rem" />,
};

export const RingColor: Record<keyof typeof Rings, string> = {
  adopt: "green",
  trial: "violet",
  assess: "gray",
  hold: "red",
};
