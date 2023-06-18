import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testMatch: ["tests/windows.test.ts"],
    use: {
        headless: false,
        screenshot: "on",
        video: "on",
        launchOptions: {
            slowMo: 1500
        }
    },
    retries: 0,
    reporter: [["dot"], ["json", {
        outputFile: "jsonReports/jsonReport.json"}], 
        ["html", {
        open: "never"
    }]]
};


export default config;