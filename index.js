const core = require('@actions/core');
const github = require('@actions/github');

try {
  const pattern = core.getInput('pattern-to-search');
  const message = core.getInput('message');
  console.log(`Received pattern ${pattern}!`);
  console.log(`Received message ${message}!`);
  console.log(`^^^^^^^^^^^^^^^^^^^^^^^^^^^`)
  console.log(message.match(pattern));
  console.log(`---------------------------`)
  core.setOutput("match", "heeeeee");
} catch (error) {
  core.setFailed(error.message);
}