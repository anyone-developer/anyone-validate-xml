
import args from 'args';
import ArgsModel from './types/Args';

export function parseArgumentsIntoOptions(rawArgs: string[]): ArgsModel {
  args
    .option('brace-expansion', '[Required] brace-expansion of expected directory structure.')
    .option('ignore-files', 'the files you want to ignore. split with comma.')
    .option('ignore-directories', 'the directories you want to ignore. split with comma.')
    .option('read-path', 'the path that you assign to read.')
    .option('render-layout', 'render diff result with \'vertical\' or \'horizontal\'');

  return args.parse(rawArgs);
};

export default function cli(rawArgs: string[]) {
  const options: ArgsModel = parseArgumentsIntoOptions(rawArgs);
  if (options.braceExpansion) {
    // avfs.setRenderLayout(options.renderLayout).diff(
    //   options.readPath,
    //   options.braceExpansion,
    //   options.ignoreFiles,
    //   options.ignoreDirectories
    // ).then(resolve => {
    //   console.info(resolve.diff);
    // }, error => {
    //   if (error.name && error.message) {
    //     console.error(`error message: ${error.message}`);
    //   }
    // });
  } else {
    args.showHelp();
  }
}

