import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If you deploy to GitHub Pages at https://<user>.github.io/<repo>/,
// set base to "/<repo>/" (with slashes). If you deploy to Vercel/Netlify
// or a custom domain, leave it as "./".
export default defineConfig({
  plugins: [react()],
  base: "./",
});
