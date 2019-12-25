# Descripción de la práctica p15-t3-react-lists-and-conditionales

1.  Introduce an `input` field inside the `App` component with a `change` listener which ouputs in a paragraph the `length` of the entered text
2. Introduce a `ValidationComponent` which receives the `length`of the entered text as a `prop`.
3. The `ValidationComponent` should conditionally output `Text too short` or `Text long enough` in a paragraph dpeneding whether the text length is less than or greater than some number, let us say 5.
4. Create another component `Charcomponent` with a `div` and style it as a inline box. Here is a suggestion:

  ```css
  {
    display: inline-box;
    padding: 16px;
    text-align: center;
    margin: 16px;
    border: 1px solid black;
  }
  ```
5. Inside the `App`component render a list of `CharComponent`, where each `CharComponent` receives - as a `prop` - a different letter of the entered  text from the initial `input`field
  - You'll  need to transform a string into a real array and then join it back into a string again
    - You can split a string into an array of its characters with the `split('')`  method. By passing just an empty string, it's split after every character.
    - You may then re-create a string from that array by using `join('')`  - again, joining with an empty string as a separator.
6. When you click a `CharCompoment`it should be removed




## References

* [Assignment 2: Time to Practice. Lists and Conditionals](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/practice/16066/introduction#bookmarks)
* [Assignment 2: Solution. Practice. Lists and Conditionals](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/12982502#bookmarks)
* [React: Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)
* [React: Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
