import { ReactNode } from "react";
import { IconTool, IconHelicopterLanding, IconCode, IconGoGame } from "@tabler/icons-react";
import { Quadrants, Rings } from "./Blip";

export const QuadrantAccessory: Record<keyof typeof Quadrants, ReactNode> = {
  tools: <IconTool size={19} />,
  platforms: <IconHelicopterLanding size={19} />,
  "languages-and-frameworks": <IconCode size={19} />,
  techniques: <IconGoGame size={19} />,
};

export const RingColor: Record<keyof typeof Rings, string> = {
  adopt: "green",
  trial: "violet",
  assess: "gray",
  hold: "red",
};
