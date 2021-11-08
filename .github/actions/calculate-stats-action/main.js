const core = require("@actions/core");
const fs = require('fs');

try {
    const fileContent = core.getInput("log-file-content");
    const content = JSON.parse(fileContent);
    const passes = content.stats.passes;
    const fails = content.stats.failures;

    const status = fails > 0 ? "FAIL" : "PASS";
    console.log(`status is ${status}`);
    core.setOutput("stats-output", status);

} catch(error) {
    try {
        const fileContent = core.getInput("log-file-content");
        const content = JSON.parse(fileContent);
        const testPasses = content.numPassedTests;
        const testFails = content.numFailedTests; 

        const status = testFails > 0 ? "FAIL" : "PASS";
        console.log(`status is ${status}`);
        core.setOutput("stats-output", status);

    } catch(error) {
        core.setFailed(error.message);
        console.log(`Error parsing JSON string: ${error}`);
    }
}