import React, { type FC } from "react";
import { Blip } from "../hooks/useBlip";

interface BlipProps {
  blip: Blip;
}

export const BlipDetails: FC<BlipProps> = ({ blip }) => {
  return (
    <div>
      <div>
        <strong>Title</strong>&nbsp;
        {blip.title}
      </div>
      <div>
        <strong>Slug:</strong>&nbsp;
        {blip.slug}
      </div>
      <div>
        <strong>Quadrant:</strong>&nbsp;
        {blip.quadrant}
      </div>
      <div>
        <strong>Ring:</strong>&nbsp;
        {blip.ring}
      </div>
      <div>
        <strong>Description:</strong>&nbsp;
        {blip.description}
      </div>
      <div>
        <strong>License:</strong>&nbsp;
        {blip.license}
      </div>
    </div>
  );
};
