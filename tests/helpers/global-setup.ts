import { type FullConfig } from "@playwright/test";
import path from "path";
import fs from "fs";

export default async function globalSetup(config: FullConfig) {
  console.log(`[INFO] Starting the Global setup...`);
  if (process.env.RUNNER?.toUpperCase() === "LOCAL") {
    console.log(`[INFO]  Detecting the local runs...`);
    const resultsDir = path.resolve(process.cwd(), "allure-results");
    console.log(`>> Allure results directory: ${resultsDir}`);

    if (fs.existsSync(resultsDir)) {
      fs.rmSync(resultsDir, { recursive: true, force: true });
    }
  }
  console.log(`[INFO] Completed the Global setup...`);

  // All other one-off tasks go here..
}
