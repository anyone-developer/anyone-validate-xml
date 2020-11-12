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
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/anyone-developer/anyone-validate-xml)

This action helps you to validate XML syntax in a specified directory. And write back with formatted content. read file recursively with specified file extensions.

*If you like my module, please buy me a coffee.*

*More and more tiny and useful GitHub action modules are on the way. Please donate to me. I accept a part-time job contract. if you need, please contact me: zhang_nan_163@163.com*

## Inputs

### `read-path`

**Required** the path that you assign to read.

### `ignore-files`

the files you want to ignore. split with a comma.

### `ignore-directories`

the directories you want to ignore. split with a comma.

### `file-extension`

file extension that you want to read. such as "config" or "xml". split with comma.

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

```typescript
import avx from 'anyone-validate-xml';

avx(['.config', 'xml'], ['README.md'], ['c'], 'sample_folder').then(result => {
	const succeed = result.filter(i => i?.formatted);
	const failed = result.filter(i => i?.err);

	if (succeed?.length > 0) {
		console.info(`[${chalk.greenBright.bgYellowBright.bold('Succeed')}]`);
		succeed.forEach(v => {
			console.info(chalk.greenBright(`path: ${v.path}`));
		});
	}

	if (succeed?.length > 0 && failed?.length > 0) {
		console.log(`---------😀${chalk.gray.bold('Happy Delimiter')}😀---------`);
	}

	if (failed?.length > 0) {
		console.error(`[${chalk.redBright.bgRedBright.bold('Failed')}]`);
		failed.forEach(v => {
			console.error(chalk.greenBright(`path: ${v.path} msg: ${v.err?.message}`));
		});
	}
}).catch(error => console.error(error));
```

- **node index.js** to run it

### `From NPM for using as a command-line app`

- **npm install -g anyone-validate-xml** to install gobally
- **anyone-validate-xml -r 'sample_folder' -f '.config,.xml' -I ".git" -i "README.md"** to use your bash to execute it.

## Example usage

```yml
uses: anyone-developer/anyone-validate-xml@main
with:
  file-extension: '.config,.xml'
  ignore-files: 'README.md'
  ignore-directories: '.git'
  read-path: 'sample_folder'
```

## Fossa Report

[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B21065%2Fgit%40github.com%3Aanyone-developer%2Fanyone-validate-xml.git.svg?type=large)](https://app.fossa.com/projects/custom%2B21065%2Fgit%40github.com%3Aanyone-developer%2Fanyone-validate-xml.git?ref=badge_large)

## Donation

PalPal: https://paypal.me/nzhang4

<img src="https://raw.githubusercontent.com/anyone-developer/anyone-validate-xml/main/misc/alipay.JPG" width="500">

<img src="https://raw.githubusercontent.com/anyone-developer/anyone-validate-xml/main/misc/webchat_pay.JPG" width="500">


