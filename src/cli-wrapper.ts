
import args from 'args';
import Args from './types/args';
import avx from './avx';
import chalk from 'chalk';

export function parseArgumentsIntoOptions(rawArgs: string[]): Args {
	args
		.option('file-extension', '[Required] file extension that you want to read. such as "config" or "xml". split with comma.')
		.option('ignore-files', 'the files you want to ignore. split with comma.')
		.option('ignore-directories', 'the directories you want to ignore. split with comma.')
		.option('read-path', 'the path that you assign to read.');

	return args.parse(rawArgs);
}

export default function cli(rawArgs: string[]) {
	const options: Args = parseArgumentsIntoOptions(rawArgs);
	if (options.fileExtension) {
		avx(options.fileExtension.split(',')
			, options.ignoreFiles.split(',')
			, options.ignoreDirectories.split(',')
			, options.readPath).then(result => {
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
	} else {
		args.showHelp();
	}
}

