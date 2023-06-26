import React, { FC } from "react";
import { BlipDetails } from "../../src/components/BlipDetails";
import { MantineProvider, useMantineTheme } from "@mantine/core";

const REACT_VERSION = React.version;

const FunctionalBlipTemplate: FC<{ props: any }> = (props) => {
  console.dir("before use theme");
  const theme = useMantineTheme();
  console.dir("after use theme");

  // @ts-ignore
  const blip = props.entry.getIn(["data"]).toJS();
  console.dir(blip);
  console.log("REACT_VERSION", REACT_VERSION);
  console.log("theme", theme);

  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <BlipDetails blip={blip} />
    </MantineProvider>
  );
};

export default FunctionalBlipTemplate;

// @ts-ignore
CMS.registerPreviewTemplate("blip", FunctionalBlipTemplate);
