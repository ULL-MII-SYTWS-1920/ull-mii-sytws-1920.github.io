# p2-t1-c3-filesystem-reto-eduardobritosan

## First question 

```javascript
async.map(program.file, fs.readFile, function(_err, results){
    if(err != null) {
        console.log("Caught error: " + String(err));
        return;
    }
    else
        console.log(results.toString().replace(/,/g, " "));
});
```

## Second question

```javascript
program.file.forEach((element,index) => {   
    fs.readFile(element.toString(), (err, data) => {
        if (err) throw err
        concatenateString[index] = data; 
        ++i;         
        if(i == program.file.length)
            fs.writeFile(program.output, concatenateString, function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
    });
});
```
### Third question

```javascript
function asyncMap(coll, 
    iteratee,
    finalCallback){
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
```