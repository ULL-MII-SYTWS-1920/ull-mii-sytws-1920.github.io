// NodeJS - How to read multiple files asynchronously and write read contents to one file
// https://stackoverflow.com/questions/39020704/nodejs-how-to-read-multiple-files-asynchronously-and-write-read-contents-to-on

'use strict';

let fs = require('fs'),
    async = require('async'),
    inputs = ['in1', 'in2'],
    output = 'out';


let outcall =  (error) => {
    if(error) {
        console.log('Error: ' + error);
    } else {
        console.log('OK');
    }
};


async.map(inputs, fs.readFile, 
   (err, contents) => {
    if (err) {
        outcall(err);
    } else {
        fs.writeFile(output, contents.reduce((a, b) => {
            return a + b;
        }), outcall);
    }
});
