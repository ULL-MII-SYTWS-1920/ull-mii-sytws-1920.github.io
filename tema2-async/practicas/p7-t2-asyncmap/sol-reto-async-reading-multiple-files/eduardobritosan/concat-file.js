#!/usr/bin/env node
'use strict';
const fs = require("fs");
const program = require('commander');
const async = require('async');
function file(value, previous){
  return previous.concat([value]);
}

program
    .option('-f, --file <value>', 'set directories to watch', file, [])

program.parse(process.argv);

//Pregunta 1
async.map(program.file, fs.readFile, function(err, results){
    if(err != null) {
        console.log("Caught error: " + String(err));
        return;
    }
    else
        console.log(results.toString().replace(/,/g, " "));
});