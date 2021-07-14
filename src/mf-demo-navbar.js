import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
import "./set-public-path";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  domElementGetter,
});

export const { bootstrap, mount, unmount } = lifecycles;

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
