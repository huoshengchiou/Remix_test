import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, Link } from "remix";

import globalStyleUrl from "~/styles/global.css";
//搭配上面component動態放入link meta
export const links = () => [{ rel: "stylesheet", href: globalStyleUrl }];

export const meta = () => {
  const description = "cool remix";
  const keywords = "remix,react";
  return { description, keywords };
};
//root component
export default function App() {
  return (
    <Document>
      <Layout>
        {/* route component插入位置 */}
        <Outlet />
      </Layout>
    </Document>
  );
}

const Document = ({ children, title = null }) => {
  return (
    <html lang="en">
      <head>
        <title>{title || "my remix blog"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {/* 在code改變時，直接對頁面reload */}
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
};

const Layout = ({ children }) => {
  return (
    <>
      <nav className="nav">
        <Link to="/" className="logo">
          Remix
        </Link>
        <Link to="/posts" className="logo">
          Posts
        </Link>
      </nav>
      <div className="wrapper">{children}</div>
    </>
  );
};
//錯誤處理畫面
export const ErrorBoundary = ({ error }) => {
  console.log(error);
  return (
    <div>
      <Document>
        <Layout>
          <h1>Error</h1>
        </Layout>
      </Document>
    </div>
  );
};
