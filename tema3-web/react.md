# React

## Intro to React

###  Learn by Doing

* [Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html)

### Hello World React (Learning Concepts from the Ground Up)

1. [React: Hello World](https://reactjs.org/docs/hello-world.html)
2. [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
3. [Rendering Elements](https://reactjs.org/docs/rendering-elements.html)
4. [Components and Props](https://reactjs.org/docs/components-and-props.html)
5. [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
6. [Handling Events](https://reactjs.org/docs/handling-events.html)
7. [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
8.  [Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)
9.  [Forms](https://reactjs.org/docs/forms.html)
10. [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)
11. [Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html)
12. [Thinking In React](https://reactjs.org/docs/thinking-in-react.html)
13. [Listenable Events](https://reactjs.org/docs/events.html)

## Creating a React App

This page describes a few popular React toolchains (like create-react-app, [gatsby](https://www.gatsbyjs.org/)) which help with tasks like:

- Scaling to many files and components.
- Using third-party libraries from npm.
- Detecting common mistakes early.
- Live-editing CSS and JS in development.
- Optimizing the output for production.



### Create React App. Set up a modern web app by running one command

* [Create a new React App](https://reactjs.org/docs/create-a-new-react-app.html)
* [create-react-app docs](https://create-react-app.dev/docs/getting-started)
* [Create React App. Set up a modern web app by running one command](https://create-react-app.dev/)
* [YouTube video: Getting Started with Create React App](https://youtu.be/eCz3rhsDG5s) by Elijah  Manor
* [Emoji Search. Created with create-react-app](https://github.com/ahfarmer/emoji-search) GitHub Example Repo
* [This project was bootstrapped with Create React App](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md)


### How to get "create-react-app" to work with your API

* [How to get "create-react-app" to work with your API](https://www.newline.co/fullstack-react/articles/using-create-react-app-with-a-server/) by Anthony Accomazzo. A simple food nutrition lookup table. The data driving the app is supplied by the [USDA's National Nutrient Database](https://www.ars.usda.gov/northeast-area/beltsville-md/beltsville-human-nutrition-research-center/nutrient-data-laboratory/docs/usda-national-nutrient-database-for-standard-reference/).
* [npm concurrently package](https://github.com/kimmobrunfeldt/concurrently#readme)
  - > **Why?**: I like [task automation with npm](http://substack.net/task_automation_with_npm_run) but the usual way to run multiple commands concurrently is `npm run watch-js & npm run watch-css`. That's fine but it's hard to keep on track of different outputs. Also if one process fails, others still keep running and you won't even notice the difference. Another option would be to just run all commands in separate terminals. I got tired of opening terminals and made **concurrently**.
* Section [Proxying API Requests in Development](https://create-react-app.dev/docs/proxying-api-requests-in-development/) in the Create React App docs
* [Deploying in Heroku](https://github.com/fullstackreact/food-lookup-demo#deploying)
  * [The Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) article
* [sql.js](https://github.com/kripken/sql.js)
  
### React Tutorial How to build React App in few minutes

* [React Tutorial How to build React App in few minutes](https://youtu.be/SPM4xyYd9MI) YouTube
* [GitHub Repo](https://github.com/ULL-MII-SYTWS-1920/how-to-build-a-react-app) (Using react-bootstrap)

### React-Boostrap


* [React Bootstrap](https://react-bootstrap.github.io/)
* [Getting Started](https://react-bootstrap.github.io/getting-started/introduction)
* [ButtonGroup](https://react-bootstrap.github.io/components/button-group/)
* [Buttons](https://react-bootstrap.github.io/components/buttons/)
* [GitHub Repo](https://github.com/ULL-MII-SYTWS-1920/how-to-build-a-react-app) for *How to build React App in few minutes* using react-bootstrap

### React in Visual Studio Code

* [Using React in Visual Studio Code](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial)
* [Visual studio code changes format (React-JSX)](https://stackoverflow.com/questions/44993808/visual-studio-code-changes-format-react-jsx)

### For a Web App

The majority of websites aren’t, and don’t need to be, single-page apps. With a few lines of code and no build tooling, try React in a small part of your website. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets.

* [Add React to a Web Site](https://reactjs.org/docs/add-react-to-a-website.html)

### From Scratch

* [Creating a React App… From Scratch](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658)
  - Github repo [paradoxinversion/creating-a-react-app-from-scratch](https://github.com/paradoxinversion/creating-a-react-app-from-scratch)

## React Function Components

* [React Function Components](https://www.robinwieruch.de/react-function-component#react-function-component-lifecycle)

>In the past, there have been various React Component Types, but with the introduction of React Hooks it's possible to write your entire application with just functions as React components.

>This in-depth guide shows you everything about React Function Components -- which are basically just JavaScript Functions being React Components which return JSX (React's Syntax) -- so that after you have read this tutorial you should be well prepared to implement modern React applications with them.

### CSS modules

* [Css Modules by Example](https://www.javascriptstuff.com/css-modules-by-example/)
* [CSS Modules](https://github.com/css-modules/css-modules)


## Learning React by Eve Porcello, Alex Banks 

* Table of contents of the book [Learning React by Eve Porcello, Alex Banks Index. Be sure you are authenticated in PuntoQ](learning-react.md)
* [MoonHighway/learning-react](https://github.com/moonhighway/learning-react) Github repo with the code samples for Learning React by Alex Banks and Eve Porcello, published by O'Reilly Media

## React Router

### The Problem

The biggest difference of Single Page Apps (SPA) with traditional multi-page apps is that navigating a single-page app doesn't involve going to an entirely new page. Instead, your pages (commonly known as **views** in this context) typically load inline within the same page itself.

When you are loading content inline, things get a little challenging. The hard part is not loading the content itself. That is relatively easy. The hard part is making sure that single-page apps behave in a way that is consistent with what your users are used to. More specifically, when users navigate your app, they expect that:

1. The URL displayed in the address bar always reflects the thing that they are viewing.
2. They can use the browser's back and forward buttons...successfully.
3. They can navigate to a particular view (aka deep link) directly using the appropriate URL.

With multi-page apps, these three things come for free. There is nothing extra you have to do for any of it. With single-page apps, because you aren't navigating to an entirely new page, you have to do real work to deal with these three things that your users expect to just work.

To deal with all of this, you have a bucket full of techniques commonly known as **routing**.

### The Solution 

See [Creating a Single-Page App in React: using React Router](https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm) 
by kirupa  

## GatsBy: A Static Site Generator Using React

* [Gatsby](gatsby)

## References

{% include references-react.md %}
 

## Práctica p11-t3-react-tic: Tutorial "Intro to React". Tic-Tac-Toe 

* [Descripción de la práctica](practicas/p11-t3-react-tic)

## Práctica p14-t3-react-components

* [Descripción de la práctica](practicas/p14-t3-react-components/index.html)

## Práctica p15-t3-react-lists-and-conditionals

* [Descripción de la práctica](practicas/p15-t3-react-lists-and-conditionals/index.html)

