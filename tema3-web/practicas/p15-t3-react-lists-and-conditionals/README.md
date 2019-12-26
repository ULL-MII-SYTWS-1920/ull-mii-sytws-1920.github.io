# Descripción de la práctica p15-t3-react-lists-and-conditionals

1.  Introduce an `input` field inside the `App` component with a `change` listener which ouputs in a paragraph the entered text
2. Introduce a `ValidationComponent` which receives the `length`of the entered text as a `prop`.
3. The `ValidationComponent` should conditionally output `Text too short` or `Text long enough` in a paragraph dpeneding whether the text length is less than or greater than some number, let us say 5.
4. Create another component `CharComponent` with a `div` and style it as a inline box. Here is a suggestion:
  ```css
{
    display: inline-box;
    padding: 16px;
    text-align: center;
    margin: 16px;
    border: 1px solid black;
}
  ```
5. Inside the `App`component render a list of `CharComponent`, where each `CharComponent` receives - as a `prop` - a different letter of the entered  text from the initial `input` field
6. When you click a `CharCompoment`it should be removed




## References

* [Repo con una solucion a la práctica]({{site.github_org}}/p15-t3-react-lists-and-conditionals-solution)
* [Solución desplegada en Github Pages]({{site.despliegue_apuntes}}/p15-t3-react-lists-and-conditionals-solution/)
* Udemy course: React the Complete Guide. [Assignment 2: Time to Practice. Lists and Conditionals](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/practice/16066/introduction#bookmarks)
* Udemy course: React the Complete Guide. [Assignment 2: Solution. Practice. Lists and Conditionals](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/12982502#bookmarks)
* [React: Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)
* [React: Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
