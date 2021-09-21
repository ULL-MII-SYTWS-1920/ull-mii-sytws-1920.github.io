const fs = require("fs");

function readFilePromise(filename, encoding){
    return new Promise(function (resolve, reject){
        fs.readFile(filename, encoding, (err, data) =>{
            if(err != null){
                reject(err);
            }
            resolve(data);
        })
    })

}

readFilePromise("hola", 'utf8').then(data => console.log('Data:\n'+data)).catch(error => console.log('Error:\n'+error));