setTimeout(function () {
    console.log('macrotask 1');
}, 0);

Promise.resolve().then(function () {
    console.log('microtask 1');
    setTimeout(function () {
        console.log('macrotask 2');
        Promise.resolve().then(
            () => console.log('Nested microtask 3')
        )
    }, 0);
}).then(function () {
    console.log('microtask 2');
});