const core = require('@actions/core');
const {avfs} = require('./src/avfs.js');

global.logger = core;

avfs.setRenderLayout(core.getInput('render-layout')).diff(
  core.getInput('read-path'),
  core.getInput('brace-expansion'),
  core.getInput('ignore-files'),
  core.getInput('ignore-directories')
).then(resolve => {
  this.exitCode = core.ExitCode.Success;
  global.logger.info(resolve.diff);
  return resolve.diff;
}, error => {
  this.exitCode = core.ExitCode.Failure;
  if (error.name && error.message) {
    global.logger.setFailed(`error message: ${error.message}`);
  }

  return error.message;
}).then(output => {
  global.logger.setOutput(output);
  return this.exitCode;
});
