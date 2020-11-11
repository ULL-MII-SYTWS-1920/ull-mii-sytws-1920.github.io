#!/usr/bin/env node

const async = require('async');
const fs = require('fs');
const program = require('commander');

function collect(value, previous) {
  return previous.concat([value]);
}

program.version(require("./package.json").version);
program.option('-o, --output <output>', 'Fichero para guardar la concatenacion', 'concat.txt');
program.option('-f, --file <value>', 'Fichero a leer. Se puede repetir', collect, []);
program.parse(process.argv);

const output = program.output;

if (!program.file || program.file.length < 1) {
    console.error('You must specify at least one file to concat');
    program.help();
}

try {
    async.filter(
        program.file, 
        (f, cb) => {
          fs.access(f, fs.constants.R_OK, (err) => {
              if (err) console.log(`Can't read file "${f}"`);
              let r = (err ? false : true);
              
              cb(null, r);
             }
           );
        }, 
        (err, results) => {
          if (results.length !== program.file.length) {
            console.error("Exiting!");
            process.exit(0);
          }
            
        }
    );
} catch(e) {
    console.error(e);
}

async.map(program.file, fs.readFile, function(errReading, results) {
    if (errReading) throw errReading;
    let r = results.join('');
    fs.writeFile(output, r, (errWriting) => {
        if(errWriting) throw errWriting;  
        console.log(`File Saved! at "${program.output}"`);
    });
});

