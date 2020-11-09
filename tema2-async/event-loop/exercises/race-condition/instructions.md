# Race Conditions

## index.html

Consider this file `index.html`: 

```html
{% include_relative index.html %}
```

### Experiment

Copy and open this file [index.html](index.html) with your browser.
Can you see the infinite loop image?

Now  comment the line where `waitFor` is initialized and uncomment the other:

```js
let waitFor = 0;
```

What do you think it will happen? Can you explain it?

Where is it:

```
➜  race-condition git:(curso2021) ✗ ls ~/campus-virtual/2021/sytws2021/apuntes/tema2-async/event-loop/exercises/race-condition
index.html          infinity-loop.png   instructions.md     not-race-example.js race-example.js
```

### See 

* https://www.infoq.com/presentations/javascript-concurrency-parallelism/
* https://crguezl.github.io/_book/uai2015/

## File race-example.js

https://medium.com/@ubershmekel/yes-there-are-race-conditions-in-javascript-ba044571a914

An example race condition in JavaScript
When you run this script using Node or in a browser, it
does not print "Ended with 0", but a random number.
Even though the functions running
simply loop 100 iterations of adding and subtracting.
The reason the end result is random is because the
sleeps are of random duration and the time between the read
of the variable causes the eventual write to be incorrect
when `adder` and `subber` interleave.
This problem is similar to:
https://en.wikipedia.org/wiki/Time-of-check_to_time-of-use
