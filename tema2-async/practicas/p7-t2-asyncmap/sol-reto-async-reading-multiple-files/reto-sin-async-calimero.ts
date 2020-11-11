import fs from 'fs';
import program from 'commander';
import * as pkg from '../../package.json';

const { version, description } = pkg;

export default () => {
  program
    .version(version)
    .description(description)
    .option(
      '-f, --file <value>',
      'file to read',
      (value, previous) => previous.concat([value]),
      []
    )
    .option('-o, --output <file>', 'output file', 'concat.out')
    .parse(process.argv);

  if (!program.file || program.file.length < 1) {
    console.error('You must specify at least one file to concat');
    process.exit(1);
  }

  let counter = 0;
  const concatResult: string[] = [];

  const writeOutputFile = () => {
    fs.writeFile(program.output, concatResult.join(''), err => {
      if (err) {
        console.error(
          `Error writting to output file '${program.output}': ${err.message}`
        );
        process.exit(1);
      }

      console.log(`Concat saved on ${program.output}`);
    });
  };

  program.file.forEach((file: string) => {
    fs.readFile(file, (err, result) => {
      if (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
      }

      concatResult.push(result.toString());

      if (++counter === program.file.length) {
        writeOutputFile();
      }
    });
  });
};
