const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
    try {
        var token = core.getInput("repo-token");
        const pr = github.context.payload;
        if (!pr) {
            throw new Error("Event payload is missing `pull_request`");
        }
        
        const octokitClient = github.getOctokit(token);

        var pull = await octokitClient.pulls.get({
            owner: github.context.repo.owner,
            repo: github.context.repo.repo,
            pull_number: pr.number,
        });
        const pr_title = pull.data.title;

        let re = new RegExp('\[[A-Z]+-[0-9]+\]');
        if (!re.test(pr_title)) {
            await octokitClient.pulls.createReview({
                owner: github.context.repo.owner,
                repo: github.context.repo.repo,
                pull_number: pr.number,
                body: "The PR title does not match the required format!",
                event: "REQUEST_CHANGES"
            });
            core.debug(`Not approv`)
            throw new Error("Build failed pr title is wrong, changes are requested!")
        }
    } catch(error) {
        core.setFailed(error.message);
    }
}

run();