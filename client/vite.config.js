import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// This file configures Vite to run a React app with fast refresh.
export default defineConfig({
  plugins: [react()],
});
