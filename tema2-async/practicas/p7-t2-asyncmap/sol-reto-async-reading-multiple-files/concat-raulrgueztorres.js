#!/usr/bin/env node

const async = require('async');
const fs = require('fs');
const program = require('commander');

function collect(value, previous) {
  return previous.concat([value]);
}

program.option('-o, --output <output>', 'Fichero para guardar la concatenacion', 'concat.txt');
program.option('-c, --collect <value>', 'repeatable value', collect, []);
program.parse(process.argv);

const output = program.output;

async.filter(program.collect, function(filePath, callback){
    fs.access(filePath, function(err) {
        callback(null, !err);
    });
}, function(err, results) {

    if (program.collect.length != results.length
        || program.collect.every(function(u, i) {
            return u !== results[i];
        })
    ) {
        throw Error("Some files does not exists");     
    }
});

async.map(program.collect, fs.readFile, function(err, results) {
    fs.writeFile(output, results.toString(), (err) => {
        if(err)
        {
            throw err;
        }
        console.log("File Saved!");
    });
});

