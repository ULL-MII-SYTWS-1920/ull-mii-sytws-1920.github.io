const fs = require('fs');
const path = require('path');
const programName = path.basename(__filename);

const getData = (fileName, type) =>
  new Promise((resolve, reject) =>
    fs.readFile(fileName, type, (err, data) => {
      //if has error reject, otherwise resolve
      return err ? reject(err) : resolve(data);
    })
  );

getData(programName, 'utf8')
  .then(data => console.log('Data:\n'+data))
  .catch(error => console.log('Error:\n'+error));