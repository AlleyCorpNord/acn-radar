import React, { useEffect, useState } from "react";
import { BlipDetails } from "../../components/BlipDetails";
import { Blip } from "../../types/Blip";
import { Drawer } from "@mantine/core";

const BlipPreview = () => {
  const [data, setData] = useState<Blip | undefined>();

  useEffect(() => {
    window.addEventListener("message", (e: MessageEvent) => {
      console.log(e.data);
      setData(e.data);
    });
  }, []);

  return (
    <>
      {(data && (
        <Drawer
          opened={true}
          position="right"
          size="xl"
          onClose={() => {}}
          overlayProps={{ opacity: 0.5, blur: 4 }}
        >
          <div style={{ paddingRight: 48 }}>
            <BlipDetails blip={data} />
          </div>
        </Drawer>
      )) ??
        "No preview data provided"}
    </>
  );
};

export default BlipPreview;
