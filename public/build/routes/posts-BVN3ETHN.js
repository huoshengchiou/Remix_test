import {
  import_react_router_dom,
  useLoaderData
} from "/build/_shared/chunk-VO4QFITP.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:C:\Users\2004115\Desktop\remix_run\app\routes\posts.jsx?browser
init_react();

// app/routes/posts.jsx
init_react();
var posts = () => {
  const { posts: posts2 } = useLoaderData();
  console.log({ posts: posts2 });
  return /* @__PURE__ */ React.createElement("div", null, "out ", /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null));
};
var posts_default = posts;
export {
  posts_default as default
};
//# sourceMappingURL=/build/routes/posts-BVN3ETHN.js.map
