import { ReactNode } from "react";
import { IconTool, IconHelicopterLanding, IconCode, IconGoGame } from "@tabler/icons-react";
import { Quadrants, Rings } from "./Blip";

export const QuadrantAccessory: Record<keyof typeof Quadrants, ReactNode> = {
  tools: <IconTool size="1.2rem" />,
  platforms: <IconHelicopterLanding size="1.2rem" />,
  "languages-and-frameworks": <IconCode size="1.2rem" />,
  techniques: <IconGoGame size="1.2rem" />,
};

export const RingColor: Record<keyof typeof Rings, string> = {
  adopt: "green",
  trial: "violet",
  assess: "gray",
  hold: "red",
};
