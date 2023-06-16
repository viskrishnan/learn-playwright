import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testMatch: ["tests/alerts.test.ts"],
    use: {
        headless: false,
        screenshot: "on",
        video: "on"
    },
    retries: 0,
    reporter: [["dot"], ["json", {
        outputFile: "jsonReports/jsonReport.json"}], 
        ["html", {
        open: "never"
    }]]
};


export default config;