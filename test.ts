import avx from './src/avx';
import chalk from 'chalk';

avx(['.config', 'xml'], ['README.md'], ['c'], 'sample_folder').then(result => {
	console.info(`[${chalk.greenBright.bgYellowBright.bold('Succeed')}]`);
	const succeed = result.filter(i => i?.formatted);
	succeed.forEach(v => {
		console.info(chalk.greenBright(`path: ${v.path}`));
	});

	console.log(`---------😀${chalk.gray.bold('Happy Divider')}😀---------`);

	console.error(`[${chalk.redBright.bgRedBright.bold('Failed')}]`);
	const failed = result.filter(i => i?.err);
	failed.forEach(v => {
		console.error(chalk.greenBright(`path: ${v.path} msg: ${v.err?.message}`));
	});
}).catch(error => console.error(error));
