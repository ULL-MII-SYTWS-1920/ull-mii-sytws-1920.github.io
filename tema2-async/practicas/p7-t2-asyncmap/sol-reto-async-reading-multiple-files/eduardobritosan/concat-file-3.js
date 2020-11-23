#!/usr/bin/env node
const fs = require("fs");
const program = require('commander');

program
    .option('-f, --file <value>', 'set directories to watch', file, [])
    .option('-o, --output <salida>', 'output')

program.parse(process.argv);

function file(value, previous){
    return previous.concat([value]);
}

//Pregunta 3

function asyncMap(coll, iteratee, finalCallback){
    let arrayValues = []
    let counter = {i:0};
    coll.forEach((element, index) => {
        iterateeReadFile(element, iteratee, arrayValues, index, counter, coll.length, finalCallback);
    });
}

function iterateeReadFile(item, cb, arrayOfParent, loopIndex, counter, collSize, finalCallback){
    cb(item, (err, data) => {
        if (err){
            finalCallback(err, null)
        }
        arrayOfParent[loopIndex] = data;
        counter.i += 1;
        console.log(counter.i); 
        if(counter.i == collSize){
            finalCallback(null, arrayOfParent)
        }
    });
}



asyncMap(program.file, fs.readFile, function(err, results) {
    if(err != null) {
        console.log("Caught error: " + String(err));
        return;
    }
    else
    fs.writeFile(program.output, results, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
})


