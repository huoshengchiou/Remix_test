import {
  Link,
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  import_react_router_dom
} from "/build/_shared/chunk-VO4QFITP.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:C:\Users\2004115\Desktop\remix_run\app\root.jsx?browser
init_react();

// app/root.jsx
init_react();

// app/styles/global.css
var global_default = "/build/_assets/global-VWR6DYBI.css";

// app/root.jsx
var links = () => [{ rel: "stylesheet", href: global_default }];
var meta = () => {
  const description = "cool remix";
  const keywords = "remix,react";
  return { description, keywords };
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null)));
}
var Document = ({ children, title = null }) => {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, title || "my remix blog"), /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
};
var Layout = ({ children }) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", {
    className: "nav"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/",
    className: "logo"
  }, "Remix"), /* @__PURE__ */ React.createElement(Link, {
    to: "/posts",
    className: "logo"
  }, "Posts")), /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, children));
};
var ErrorBoundary = ({ error }) => {
  console.log(error);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, " ", /* @__PURE__ */ React.createElement("h1", null, "Error"))));
};
export {
  ErrorBoundary,
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-AUFYXYCM.js.map
