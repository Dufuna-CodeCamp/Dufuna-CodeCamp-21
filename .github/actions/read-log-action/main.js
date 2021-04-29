const core = require("@actions/core");
const github = require("@actions/github");
const fs = require('fs');

token = core.getInput("repo-token");
const octokitClient = github.getOctokit(token);
const filePath = core.getInput('path-to-log-file');
const owner = github.context.repo.owner;
const repo = github.context.repo.repo;
const pull_number = github.context.payload.number;

async function checkLogExistenceInPR({ owner, repo, pull_number, path }) {
    try {
        let fileList = await octokitClient.pulls.listFiles({
            owner: owner,
            repo: repo,
            pull_number: pull_number
        });

        let files = fileList.data;

        for (var i = 0; i < files.length; i++) {
            console.log(files[i].filename);
            if (files[i].filename === path) {
                return true;
            }
        }
        return false
    } catch(error) {
        core.setFailed(error.message);
        return false;
    }
}

function getContent() {

    try {
        fs.readFile(filePath, 'utf8', (error, data) => {
            core.setOutput("log-file-content", data)
        });
    
    } catch(error) {
        core.setFailed(error.message);
    }
}

function callCheck() {
    checkLogExistenceInPR({ 
        owner: owner, 
        repo: repo,
        pull_number: pull_number,
        path: filePath
    }).then( async doesExist => {
        if (doesExist) {
            getContent()
        } else {
            try {
                await octokitClient.pulls.createReview({
                    owner: owner,
                    repo: repo,
                    pull_number: pull_number,
                    body: "There is no log file present in this pull request. Please ensure that you run the tests locally.",
                    event: "REQUEST_CHANGES"
                });
                throw new Error("Build failed because no log file is present, changes are requested!");
            }  catch(error) {
                core.setFailed(error.message);
            }
        } 
    })
}

callCheck();
