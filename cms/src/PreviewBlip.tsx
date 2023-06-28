import React, { Component, FC, LegacyRef, createRef, useRef } from "react";
import ReactDOM from "react-dom";
import { BlipDetails } from "../../src/components/BlipDetails";
import { MantineProvider, useMantineTheme } from "@mantine/core";

class BlipTemplate extends Component {
  iRef: LegacyRef<HTMLIFrameElement> | undefined;

  constructor(props) {
    super(props);
    this.iRef = createRef();
    this.state = { blip: props.entry.getIn(["data"]).toJS() };
  }

  handleLoad = () => {
    // @ts-ignore
    const { entry } = this.props;
    // @ts-ignore
    const blip = this.state.blip;

    setTimeout(() => {
      // @ts-ignore
      this.iRef?.current?.contentWindow?.postMessage(blip, "*");
    }, 100);
  };

  render() {
    // @ts-ignore
    const blip = this.props.entry.getIn(["data"]).toJS();
    // @ts-ignore
    this.iRef?.current?.contentWindow?.postMessage(blip, "*");
    console.dir(this.props);
    // @ts-ignore

    const window = this.props.window;
    console.log(window);

    return (
      <iframe
        src={"http://localhost:3000/blips/preview"}
        width={window.innerWidth}
        height={window.innerHeight}
        ref={this.iRef}
        onLoad={this.handleLoad}
      />
    );
  }
}

export default BlipTemplate;

// @ts-ignore
CMS.registerPreviewTemplate("blip", BlipTemplate);
