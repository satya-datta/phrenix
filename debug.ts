import viteConfig from "./vite.config";
import { setupVite } from "./server/vite";
import express from "express";
import { createServer } from "http";

console.log("Debug: node version:", process.version);
console.log("Debug: viteConfig type:", typeof viteConfig);
console.log("Debug: viteConfig keys:", Object.keys(viteConfig || {}));

const app = express();
const server = createServer(app);

try {
    console.log("Debug: Attempting setupVite");
    // We don't actually want to start it fully, just see if it passes the config check
    console.log("Debug: setupVite type:", typeof setupVite);
} catch (e) {
    console.error("Debug Error:", e);
}
