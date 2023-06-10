import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testMatch: ["tests/basicinteractions.test.ts"],
    use: {
        headless: false,
        screenshot: "only-on-failure",
        video: "retain-on-failure"
    },
    retries: 0,
    reporter: [["dot"], ["json", {
        outputFile: "jsonReports/jsonReport.json"}], 
        ["html", {
        open: "never"
    }]]
};


export default config;