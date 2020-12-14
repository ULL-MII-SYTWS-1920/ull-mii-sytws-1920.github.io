# A quick demo showing how to use GitHub Actions to build, package, and publish Node.js modules to the NPM and GitHub package registries.

This [repo ULL-ESIT-PL-1920/lexer-generator](https://github.com/ULL-ESIT-PL-1920/lexer-generator) contains the solution code for
a Lab for the subject "Procesadores de Lenguajes" (Language Processors)
at Grado de Informatica de la ULL. 

In branch `github-action-npm` I follow the YouTube tutorial
[A quick demo showing how to use GitHub Actions to build, package, and publish Node.js modules to the NPM and GitHub package registries.](https://www.youtube.com/watch?v=9O2sLm1Boxc)

Initially:

```yml
# This workflow will run tests using node and then publish a package to GitHub Packages when a release is created
# For more information see: https://help.github.com/actions/language-and-framework-guides/publishing-nodejs-packages

name: Node.js Package

on:
  release:
    types: [created]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: 12
      - run: npm ci
      - run: npm test

  publish-npm:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: 12
          registry-url: https://registry.npmjs.org/
      - run: npm ci
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{secrets.npm_token}}

  publish-gpr:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: 12
          registry-url: https://npm.pkg.github.com/
      - run: npm ci
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

## release

Runs your workflow anytime the `release` event occurs. More than one activity type triggers this event. For information about the REST API, see "[Releases](https://developer.github.com/v3/repos/releases/)" in the GitHub Developer documentation.

<table>
<thead>
<tr>
<th>Webhook event payload</th>
<th>Activity types</th>
<th><code>GITHUB_SHA</code></th>
<th><code>GITHUB_REF</code></th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://developer.github.com/v3/activity/events/types/#releaseevent"><code>release</code></a></td>
<td>- <code>published</code>, 
<br>
- <code>unpublished</code> 
<br>
- <code>created</code> 
<br>
- <code>edited</code> 
<br>
- <code>deleted</code> 
<br>
- <code>prereleased</code></td>
<td>Last commit in the tagged release</td>
<td>Tag of release</td>
</tr>
</tbody>
</table>

For example, you can run a workflow when a release has been published.

```yml
on:
  release:
    types: [published]
```

## npm tokens

* [Creating and viewing authentication tokens](https://docs.npmjs.com/creating-and-viewing-authentication-tokens)