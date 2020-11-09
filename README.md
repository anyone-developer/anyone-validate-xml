# anyone-validate-xml

![nightly-build](https://github.com/anyone-developer/anyone-validate-xml/workflows/nightly-build/badge.svg)
![release-build](https://github.com/anyone-developer/anyone-validate-xml/workflows/release-build/badge.svg)
![release-test](https://github.com/anyone-developer/anyone-validate-xml/workflows/release-test/badge.svg)
[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B21065%2Fgit%40github.com%3Aanyone-developer%2Fanyone-validate-xml.git.svg?type=small)](https://app.fossa.com/projects/custom%2B21065%2Fgit%40github.com%3Aanyone-developer%2Fanyone-validate-xml.git?ref=badge_small)
[![DependaBot](https://badgen.net/github/dependabot/anyone-developer/anyone-validate-xml)](https://github.com/anyone-developer/anyone-validate-xml/network/updates)
![version](https://badgen.net/npm/v/@anyone-developer/anyone-validate-xml)
![license](https://badgen.net/github/license/anyone-developer/anyone-validate-xml)
[![Build Status](https://travis-ci.org/anyone-developer/anyone-validate-xml.svg?branch=main)](https://travis-ci.org/anyone-developer/anyone-validate-xml)
[![XO code style](https://badgen.net/xo/status/chalk)](https://github.com/xojs/xo)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/anyone-developer/anyone-validate-xml.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/anyone-developer/anyone-validate-xml/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/anyone-developer/anyone-validate-xml.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/anyone-developer/anyone-validate-xml/context:javascript)
[![DeepScan grade](https://deepscan.io/api/teams/11532/projects/14440/branches/269275/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=11532&pid=14440&bid=269275)

This GitHub action helps you to validate the file structure as you expected. The validate rule will follow the brace-expansion. For a more official definition, please refer to https://www.gnu.org/software/bash/manual/bash.html#Brace-Expansion

*If you like my module, please buy me a coffee.*

*More and more tiny and useful GitHub action modules are on the way. Please donate to me. I accept a part-time job contract. if you need, please contact me: zhang_nan_163@163.com*

## Inputs

### `brace-expansion`

**Required** brace-expansion of the expected directory structure.

### `ignore-files`

the files you want to ignore. split with a comma.

### `ignore-directories`

the directories you want to ignore. split with a comma.

### `read-path`

the path that you assign to read.

### `render-layout`

render diff result with \'vertical\' or \'horizontal\'

## Outputs

### `output`

the output of execution.

## Other way usages

### `From NPM for programmatic use`

- create a 'demo' folder
- **npm init** to create your nodejs package
- copy 'sample_folder' to demo
- **npm install anyone-validate-xml** to install module
- create 'index.js' and copy code below:

```javascript

const {avfs} = require('anyone-validate-xml');

avfs.setRenderLayout('horizontal').diff(
  './sample_folder',
  '{x/p,y/f,{a,b/{ba1,ba2,bb1,bb2},c,d}/{a.qa.config,b.prd.config}}',
  'README.md',
  '.git'
).then(resolve => {
  console.info(resolve.diff);
  return resolve.diff;
}, error => {
  if (error.name && error.message) {
    console.error(`error message: ${error.message}`);
  }

  return error.message;
});

```

here is repl.it online editor: https://repl.it/@EdwardRoshan/anyone-validate-xml-demo

- **node index.js** to run it

<img src="https://raw.githubusercontent.com/anyone-developer/anyone-validate-xml/main/misc/module.png" width="500">


### `From NPM for using as a command-line app`

- **npm install -g anyone-validate-xml** to install gobally
- **anyone-validate-xml -r './sample_folder' -b '{a,b/{ba1,ba2,bb1,bb2},c,d}/{a.qa.config,b.prd.config}' -I ".git" -i "README.md"** to use your bash to execute it.
- you would get same result with above screenshot

## Example usage

```yml
uses: anyone-developer/anyone-validate-xml@main
with:
  brace-expansion: '{a,b/{ba1,ba2,bb1,bb2},c,d}/{a.qa.config,b.prd.config}'
  ignore-files: 'README.md'
  ignore-directories: '.git'
  read-path: 'sample_folder'
  render-layout: 'horizontal'
```

## Fossa Report

[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B21065%2Fgit%40github.com%3Aanyone-developer%2Fanyone-validate-xml.git.svg?type=large)](https://app.fossa.com/projects/custom%2B21065%2Fgit%40github.com%3Aanyone-developer%2Fanyone-validate-xml.git?ref=badge_large)

## Donation

PalPal: https://paypal.me/nzhang4

<img src="https://raw.githubusercontent.com/anyone-developer/anyone-validate-xml/main/misc/alipay.JPG" width="500">

<img src="https://raw.githubusercontent.com/anyone-developer/anyone-validate-xml/main/misc/webchat_pay.JPG" width="500">


