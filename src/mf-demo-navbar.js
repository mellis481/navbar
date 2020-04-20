import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
import "./set-public-path";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  domElementGetter
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;

function domElementGetter() {
  let el = document.getElementById("navbar");
  if (!el) {
    el = document.createElement("nav");
    el.id = "navbar";
    el.className = "navbar navbar-dark bg-dark navbar-expand-lg";
    document.body.appendChild(el);
  }
  return el;
}

export const devtools = {
  overlays: {
    selectors: [".root.navBarHeight"],
    options: {
      color: "red"
    }
  }
};