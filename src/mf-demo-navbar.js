import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import root from "react-shadow";
import Root from "./root.component";
import "./set-public-path";

const styles = require("!!to-string-loader!css-loader!./styles.css");

class WrappedRoot extends React.Component {
  render() {
    return (
      <root.div mode="open">
        <div className="mf-demo-navbar">
          <style type="text/css">{styles}</style>
          <Root />
        </div>
      </root.div>
    );
  }
}

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: WrappedRoot,
});

export const { bootstrap, mount, unmount } = lifecycles;
