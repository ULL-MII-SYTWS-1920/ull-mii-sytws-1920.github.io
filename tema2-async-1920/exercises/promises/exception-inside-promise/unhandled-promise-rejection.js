#!/usr/bin/env node
'use strict';

process.on('unhandledRejection', error => {
  console.log('unhandledRejection:', error.message);
});

let p = new Promise((resolve, reject) => reject(new Error('woops')));

setTimeout( 
  () => p.catch(error => console.log('caught', error.message)),
  1000);
