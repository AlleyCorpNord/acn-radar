import React, { useEffect, useState } from "react";
import { BlipDetails } from "../../components/BlipDetails";
import { Blip } from "../../types/Blip";

const BlipPreview = () => {
  const [data, setData] = useState<Blip | undefined>();

  useEffect(() => {
    window.addEventListener("message", (e: MessageEvent) => {
      console.log(e.data);
      setData(e.data);
    });
  }, []);

  return <>{(data && <BlipDetails blip={data} />) ?? "💩"}</>;
};

export default BlipPreview;
