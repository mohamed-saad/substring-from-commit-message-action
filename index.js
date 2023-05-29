const core = require('@actions/core');
const github = require('@actions/github');

try {
  const pattern = core.getInput('pattern-to-search');
  console.log(`Received pattern ${pattern}!`);
  core.setOutput("match", "heeeeee");
} catch (error) {
  core.setFailed(error.message);
}