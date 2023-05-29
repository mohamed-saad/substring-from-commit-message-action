const core = require('@actions/core');
const github = require('@actions/github');

try {
  // inputs
  const pattern = core.getInput('pattern-to-search');
  const message = core.getInput('message');
  console.log(`Received pattern: ${pattern}`);
  console.log(`Received message: ${message}`);
  
  // matching
  const regExpConstructor = new RegExp(pattern, 'gi'); 
  let matches = message.match(pattern);
  let result = "null";
  if (matches) {
    result = matches[0];
    console.log("Found match: " + result);
  } else {
    console.log("Nothing found");
  }
  
  // outputs
  core.setOutput("match", result);  
} catch (error) {
  // failure
  core.setFailed(error.message);
}