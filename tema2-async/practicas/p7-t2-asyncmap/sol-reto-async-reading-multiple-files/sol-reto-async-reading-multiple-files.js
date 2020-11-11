// NodeJS - How to read multiple files asynchronously and write read contents to one file
// https://stackoverflow.com/questions/39020704/nodejs-how-to-read-multiple-files-asynchronously-and-write-read-contents-to-on

'use strict';

let fs = require('fs'),
    async = require('async'),
    inputs = ['in1', 'in2', 'in3'],
    output = 'out';

function fuse(inputs, output, callback) {
    async.map(inputs, (path, callback) => {
        fs.readFile(path, callback);
    }, (err, contents) => {
        if(err) {
            callback(err);
        } else {
            fs.writeFile(output, contents.reduce((a, b) => {
                return a + b;
            }), callback);
        }
    });
}

fuse(inputs, output, (error) => {
    if(error) {
        console.log('Error: ' + error);
    } else {
        console.log('OK');
    }
});