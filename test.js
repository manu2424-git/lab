const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function runTest() {
    let driver = await new Builder()
        .forBrowser('chrome')
        .build();
        
    try {
        const filePath = path.resolve(__dirname, 'index.html');
        await driver.get(`file://${filePath}`);   
        
        let title = await driver.getTitle();
        console.log(`Loaded page successfully. Title: ${title}`);
        
        // Add your test steps here
        await sleep(2000); 
    } catch (error) {
        console.error('An error occurred during the test:', error);
    } finally {
        await driver.quit();
    }
}

// Call the function at the very bottom
runTest();
