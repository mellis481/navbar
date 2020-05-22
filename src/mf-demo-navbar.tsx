import * as React from "react";
import * as ReactDOM from "react-dom";
import Root from "./root.component";
import "./set-public-path";
import singleSpaReact = require("single-spa-react");

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  domElementGetter,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;

function domElementGetter() {
  let shouldCreateNew = false;
  let el = document.getElementById("mf-navbar");
  if (!el) {
    shouldCreateNew = true;
    el = document.createElement("nav");
    el.id = "mf-navbar";
  }
  el.className = "navbar navbar-dark bg-dark navbar-expand-lg";
  if (shouldCreateNew) {
    document.body.appendChild(el);
  }
  return el;
}
