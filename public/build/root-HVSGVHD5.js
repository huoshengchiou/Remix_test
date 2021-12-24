import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  import_react_router_dom
} from "/build/_shared/chunk-XXZOVCAU.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:C:\Users\2004115\Desktop\remix_run\app\root.jsx?browser
init_react();

// app/root.jsx
init_react();
function meta() {
  return { title: "New Remix App" };
}
function App() {
  return /* @__PURE__ */ React.createElement(Ducument, null, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null));
}
var Ducument = ({ children, title = null }) => {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, title || "my remix blog"), /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
};
export {
  App as default,
  meta
};
//# sourceMappingURL=/build/root-HVSGVHD5.js.map
