// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // This file configures Vite to run a React app with fast refresh.
// export default defineConfig({
//   plugins: [react()],
// });

// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  publicDir: "public",
  resolve: {
    dedupe: ["react", "react-dom"],
    alias: {
      react: path.resolve("./node_modules/react"),
      "react-dom": path.resolve("./node_modules/react-dom"),
    },
  },
});
