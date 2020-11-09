# Race Conditions

## index.html

Consider this file `index.html`: 

```html
{% include_relative index.html %}
```

### Experiment

Open the file [index.html](index.html).
Can you see the infinite loop image?

Now  comment the line where `waitFor` is initialized and uncomment the other:

```js
let waitFor = 0;
```

What do you think it will happen?

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
