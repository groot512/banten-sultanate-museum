import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";
// @ts-expect-error JS plugin alongside the TS vite config
import { appEnvPlugin } from "./scripts/app-env-plugin.mjs";

const pages = process.env.GITHUB_PAGES === "1";
const pagesBase = "/banten-sultanate-museum/";

// `0.0.0.0:8080` is the live-preview contract — don't change host/port.
// The dev server starts once `src/router.tsx` and `src/routes/` exist — see
// AGENTS.md § "First scaffold".
export default defineConfig(({ command, isPreview }) => ({
  base: pages ? pagesBase : "/",
  server: {
    host: "0.0.0.0",
    port: 8080,
    strictPort: true,
  },
  preview: {
    host: "127.0.0.1",
    port: 8081,
    strictPort: true,
  },
  resolve: { tsconfigPaths: true },
  plugins: [
    // Dev-only /__app-env, read by scripts/check-auth-invariant.mjs.
    appEnvPlugin(),
    tailwindcss(),
    tanstackStart(
      pages
        ? {
            prerender: { enabled: true, crawlLinks: true },
            pages: [
              { path: "/" },
              { path: "/history" },
              { path: "/artifacts" },
              { path: "/sites" },
              { path: "/plan" },
            ],
          }
        : {},
    ),
    ...(command === "build" || isPreview
      ? pages
        ? []
        : [
          nitro({ preset: "vercel" }),
        ]
      : []),
    viteReact(),
  ],
}));
