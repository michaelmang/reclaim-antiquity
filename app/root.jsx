import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";

import styles from "./tailwind.css";

export function meta() {
  return { title: "Reclaim Antiquity" };
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col justify-between h-screen bg-primary text-black font-body">
        {typeof window !== 'undefined' && window.location.pathname !== '/' && <header>
          <div className="flex justify-between w-full p-6">
            <div className="flex flex-col space-y-1">
              <Link className="font-decorative lowercase" to="/">Reclaim Antiquity</Link>
            </div>
          </div>
        </header>}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
        <footer className="mt-10 flex items-center bg-black p-8 w-full text-white">
          <div>Created by Michael Mangialardi</div>
        </footer>
      </body>
    </html>
  );
}
