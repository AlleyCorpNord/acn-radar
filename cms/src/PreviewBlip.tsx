import { Component, LegacyRef, createRef } from "react";
import { BaseUrl } from "../../src/types/Constants";

class BlipTemplate extends Component {
  [x: string]: any;
  iRef: LegacyRef<HTMLIFrameElement> | undefined;

  constructor(props) {
    super(props);
    this.iRef = createRef();

    this.state = {
      size: { width: 0, height: 0 },
    };

    // @ts-ignore
    this.props.window.addEventListener("resize", () => {
      this.updateSizeState();
    });
  }

  updateSizeState() {
    // @ts-ignore
    this.setState((state, _props) => {
      return {
        ...state,
        size: {
          // @ts-ignore
          width: this.props.window.innerWidth - 16,
          // @ts-ignore
          height: this.props.window.innerHeight - 20,
        },
      };
    });
  }

  handleLoad = () => {
    // @ts-ignore
    const blip = this.props.entry.getIn(["data"]).toJS();

    setTimeout(() => {
      this.updateSizeState();
      // @ts-ignore
      this.iRef?.current?.contentWindow?.postMessage(blip, "*");
    }, 100);
  };

  render() {
    // @ts-ignore
    const blip = this.props.entry.getIn(["data"]).toJS();

    // @ts-ignore
    this.iRef?.current?.contentWindow?.postMessage(blip, "*");

    return (
      <iframe
        style={{ border: "none" }}
        src={`${BaseUrl}/templates/blip`}
        // @ts-ignore
        width={this.state.size.width}
        // @ts-ignore
        height={this.state.size.height}
        ref={this.iRef}
        onLoad={this.handleLoad}
      />
    );
  }
}

export default BlipTemplate;

// @ts-ignore
CMS.registerPreviewTemplate("blip", BlipTemplate);
