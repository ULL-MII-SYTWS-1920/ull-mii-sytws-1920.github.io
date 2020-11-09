# Splitting CPU Hungry Tasks


See [https://javascript.info/event-loop#use-case-1-splitting-cpu-hungry-tasks](https://javascript.info/event-loop#use-case-1-splitting-cpu-hungry-tasks)

To demonstrate the approach, for the sake of simplicity, let’s take a function that counts from 1 to a big number.

If you [run the code below with a very large number](https://plnkr.co/edit/pq6j9xQ0GYKSQXSs?p=options), the engine will *hang* for some time.

When running it in-browser,  try to click other buttons on the page – you’ll see that no other events get handled until the counting finishes.

```js
{% include_relative hang.js %}
```


We can evade problems by splitting the big task into pieces. Do the first piece, then schedule setTimeout (with zero-delay) to do the next piece, and so on.


```
[~/.../tema2-async/event-loop(master)]$ pwd -P
/Users/casiano/campus-virtual/1920/dsi1920/ull-esit-dsi-1920.github.io/tema2-async/event-loop
[~/.../tema2-async/event-loop(master)]$ cat splitting-cpu-hungry-task.html
```

```html
{% include splitting-cpu-hungry-task.html %}
```

**[RUN IT!!!!](splitting-cpu-hungry-task.html)**
