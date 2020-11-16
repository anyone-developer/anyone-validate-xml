import avx from './src/avx';
import chalk from 'chalk';

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
