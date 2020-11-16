import * as core from '@actions/core';
import avx from './src/avx';
import chalk from 'chalk';

const fileExtension = core.getInput('file-extension') ?? [];
const ignoreFiles = core.getInput('ignore-files') ?? [];
const ignoreDirectories = core.getInput('ignore-directories') ?? [];
const readPath = core.getInput('read-path') ?? './';

avx(fileExtension.split(','),
	ignoreFiles.split(','),
	ignoreDirectories.split(','),
	readPath).then(result => {
	const succeed = result.filter(i => i?.formatted);
	const failed = result.filter(i => i?.err);

	if (succeed?.length > 0) {
		console.info(`[${chalk.greenBright.bgYellowBright.bold('Succeed')}]`);
		succeed.forEach(v => {
			console.info(chalk.greenBright(`path: ${v.path}`));
		});
		core.setOutput('output', succeed);
	}

	if (succeed?.length > 0 && failed?.length > 0) {
		console.log(`---------😀${chalk.gray.bold('Happy Delimiter')}😀---------`);
	}

	if (failed?.length > 0) {
		console.error(`[${chalk.redBright.bgRedBright.bold('Failed')}]`);
		failed.forEach(v => {
			console.error(chalk.greenBright(`path: ${v.path} msg: ${v.err?.message}`));
		});
		core.setFailed(new Error(failed.map(i => i?.err?.message).reduce((a, b) => `${a}\n${b}`)));
	}
}).catch(error => console.error(error));
