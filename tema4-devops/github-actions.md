# GitHub Actions: An Introduction

Github Actions enables you to create custom software development lifecycle workflows directly in your Github repository. These workflows are made out of different tasks so-called actions that can be run automatically on certain events.

This enables you to include Continues Integration (CI) and continuous deployment (CD) capabilities and many other features directly in your repository.


Here is a brief glossary of terms (for more see [Core concepts for GitHub Actions](https://help.github.com/en/actions/getting-started-with-github-actions/core-concepts-for-github-actions)):

## Workflow

A **Workflow** is an automated process that is made up of one or multiple **jobs** and can be triggered by an **event**. Workflows are defined using a YAML file in the `.github/workflows` directory.

Workflows can be created inside the `.github/workflows` directory by adding a `.yml` workflow file. Here in the terminal we do:

```
$ mkdir -p .github/workflows
$ touch .github/workflows/nodejs.yml
```

and use our favourite editor.

Ejemplo:

```yml
name: Node.js Package
on:
  release:
    types: [created]
jobs:
  build:
    ...
  publish-npm:
    ...
  publish-gpr:
    needs: build
    ...
```


## The Editor of Github Actions

We can also use the GitHub Interface. 

The Github Actions Editor is quite clever:  Auto-complete can be triggered with **Ctrl+Space** almost anywhere. 

![](https://i2.wp.com/user-images.githubusercontent.com/50486/65709573-66239b00-e091-11e9-8d8b-339e30b85072.gif?resize=623%2C430&ssl=1)

Auto-complete works even inside [expressions](https://help.github.com/en/articles/contexts-and-expression-syntax-for-github-actions)

![](https://i1.wp.com/user-images.githubusercontent.com/50486/65709600-76d41100-e091-11e9-9396-d75e08d6744e.png?resize=1028%2C510&ssl=1)

## Job

A **job** is made up of multiple **steps** and runs in an instance of the virtual environment. Jobs can 

- run independently of each other or 
- sequential if the current job depends on the previous job to be successful.

Example:

```yml
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
      ...
  publish-gpr:
    needs: build
    runs-on: ubuntu-latest
    steps:
      ...
```

The `needs` attribute inside the `publish-npm` job tell us that this job 
can not start until the `build` step has finished

## Step

A **step** is a set of tasks that can be executed by a job. Steps can run **commands** or **actions**.

Example:

```yml
name: Node.js Package
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2  # An action
      - uses: actions/setup-node@v1
        with:
          node-version: 12
      - run: npm ci      # A command
      - run: npm test
 ``` 

## Actions

**Actions** are the smallest portable building block of a workflow and can be combined as **steps** to create a **job**. 

- You can create your own Actions 
- or use publicly [shared Actions from the Marketplace](https://github.com/marketplace?type=actions).

There are two types of actions:

1. Docker container and 
2. JavaScript actions

Docker **container actions** allow the environment to be packaged with the GitHub Actions code and can only execute in the GitHub-Hosted Linux environment.

**JavaScript actions** decouple the GitHub Actions code from the environment allowing faster execution but accepting greater dependency management responsibility.

Actions require a metadata file to define the 

1. inputs, 
2. outputs and 
3. main entrypoint 

for your action. 

The metadata filename must be either `action.yml` or `action.yaml`.

<table>
<thead>
<tr>
<th>Type</th>
<th>Operating system</th>
</tr>
</thead>
<tbody>
<tr>
<td>Docker container</td>
<td>Linux</td>
</tr>
<tr>
<td>JavaScript</td>
<td>Linux, MacOS, Windows</td>
</tr>
</tbody>
</table>


* Here you can find instructions [if you want to develop an action for other people to use](https://help.github.com/en/actions/building-actions/about-actions)

* Here is an example of an action: [actions/create-release](https://github.com/actions/create-release)

## Event

**Events** are specific activities that trigger a workflow run. For example, a workflow is triggered when somebody pushes to the repository or when a pull request is created. Events can also be configured to listen to external events using Webhooks.

### The `release` event

* See [GitHub Releases]({{site.baseurl}}/tema1-introduccion-a-javascript/releases.html)

## Runner

A **runner** is a machine with the Github Actions `runner` application installed. Then `runner` waits for available **jobs** it can then execute. After picking up a job they run the job's **actions** and report the progress and results back to Github. Runners can be hosted on Github or self-hosted on your own machines/servers.


## Syntax of the .yml File

Github Actions files are written using YAML syntax and have either a `.yml` or `.yaml` file extension. Here are the most important concepts for the workflow file.

### Name:

The name of your workflow that is displayed on the Github actions page. If you omit this field, it is set to the file name.

```
name: CI for scapegoat module
```

### On:

The `on` keyword defines the Github events that trigger the workflow. You can provide a single event, array or events or a configuration map that schedules a workflow.

```
on: push
```

or

```
on: [pull_request, issues]
```

### Jobs:

A workflow run is made up of one or more jobs. Jobs define the functionality that will be run in the workflow and run in parallel by default.  

```yml
jobs: 
    ci-scapegoat:
    # Define the OS our workflow should run on
    runs-on: ubuntu-latest

    strategy:
        # To test across multiple language versions
        matrix:
        node-version: [12.x]

    steps: # Clone the repo. See https://github.com/actions/checkout
    - uses: actions/checkout@v2
    # Example of using an environment variable
    - name: Use Node.js ${{ "{{ matrix.node-version" }} }} # Will be: "Use Node.js 12.x"
        uses: actions/setup-node@v1 # Install node. See https://github.com/actions/setup-node
        with:
        node-version: ${{ "{{ matrix.node-version" }} }}
    # Install a project with a clean slate
    - run: npm ci
    - run: npm test
        # Environment variables
        env:
        CI: true
```

### Env:

**Env** defines a map of environment variables that are available to all jobs and steps in the workflow. You can also set environment variables that are only available to a job or step.

```
env:
CI: true
```

### steps.with

A map of the `input` parameters defined by the action. 
Each `input` parameter is a `key/value` pair. 

Input parameters are set as environment variables. 

The variable is prefixed with `INPUT_` and converted to upper case.

**Example**

Defines the three input parameters (`first_name`, `middle_name`, and `last_name`) 
defined by the `hello_world` action. 

These input variables will be accessible to the `hello-world` action as `INPUT_FIRST_NAME`, `INPUT_MIDDLE_NAME`, and `INPUT_LAST_NAME` environment variables.

```yml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: actions/hello_world@master
        with:
          first_name: Mona
          middle_name: The
          last_name: Octocat    
```

## Expression Syntax

You can use expressions to programmatically set variables in workflow files and access contexts. 

```
${{ "{{ <expression>" }} }}
```
You can combine literals, context references, and functions using **operators**.

An expression can be any combination of 

### literal values, 

```
env:
    myNull: ${ { null }}
    myBoolean: ${ { false }}
    myIntegerNumber: ${ { 711 }}
    myFloatNumber: ${ { -9.2 }}
    myHexNumber: ${ { 0xff }}
    myExponentialNumber: ${ { -2.99-e2 }}
    myString: ${ { 'Mona the Octocat' }}
    myEscapedString: ${ { 'It''s open source!' }}
```

### Operators

<table>
    <thead>
    <tr>
    <th>Operator</th>
    <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td><code>( )</code></td>
    <td>Logical grouping</td>
    </tr>
    <tr>
    <td><code>[ ]</code></td>
    <td>Index</td>
    </tr>
    <tr>
    <td><code>.</code></td>
    <td>Property dereference</td>
    </tr>
    <tr>
    <td><code>!</code></td>
    <td>Not</td>
    </tr>
    <tr>
    <td><code>&lt;</code></td>
    <td>Less than</td>
    </tr>
    <tr>
    <td><code>&lt;=</code></td>
    <td>Less than or equal</td>
    </tr>
    <tr>
    <td><code>&gt;</code></td>
    <td>Greater than</td>
    </tr>
    <tr>
    <td><code>&gt;=</code></td>
    <td>Greater than or equal</td>
    </tr>
    <tr>
    <td><code>==</code></td>
    <td>Equal</td>
    </tr>
    <tr>
    <td><code>!=</code></td>
    <td>Not equal</td>
    </tr>
    <tr>
    <td><code>&amp;&amp;</code></td>
    <td>And</td>
    </tr>
    <tr>
    <td><code>||</code></td>
    <td>Or</td>
    </tr>
    </tbody>
</table>

### functions 

[GitHub offers a set of built-in functions](https://help.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions#functions)

Example:

```
format('Hello {0} {1} {2}', 'Mona', 'the', 'Octocat')
```

Returns `'Hello Mona the Octocat'`

`contains('Hello world', 'llo')` returns `true`

### The if Keyword and Functions to Check Job Status

Expressions are commonly used with the conditional **if** keyword 
in a workflow file to determine whether a step should run. 


When you use expressions in an `if` conditional, 
you do not need to use the expression syntax (`${ { }}`) 
because GitHub automatically evaluates the `if` conditional as an expression.
 
For more information about if conditionals, see "[Workflow syntax for GitHub Actions](https://help.github.com/en/articles/workflow-syntax-for-github-actions/#jobsjob_idif)."

Example expression in an `if` conditional

```yml
steps:
  - name: Git checkout
    if: github.event.check_suite.app.name == 'Netlify' && github.event.check_suite.conclusion == 'success'
    uses: actions/checkout@master

  - name: Install Node
    if: success()
    uses: actions/setup-node@v1
    with:
      node-version: 10.x

  - name: Install npm dependencies
    if: success()
    run: npm install

  - name: Run Audit
    if: success()
    uses: ./.github/actions/run-audit
```

`success()` returns `true` when none of the previous steps have failed or been canceled.

See [Job status check functions](https://help.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions#job-status-check-functions)

### Object Filters

You can use the `*` syntax to apply a filter and select matching items in a collection:


```js
[
  { "name": "apple", "quantity": 1 },
  { "name": "orange", "quantity": 2 },
  { "name": "pear", "quantity": 1 }
]
```

The filter `fruits.*.name` returns the array `[ "apple", "orange", "pear" ]`

Here is another example:

```
contains(github.event.issue.labels.*.name, 'bug')
```

will be `true` if the attribute `name` of one of the labels of the issue that 
has triggered the event is `'bug'`

## Contexts 

**Contexts** are a way to access information about workflow runs, runner environments, jobs, and steps. Contexts use the **expression syntax**. See [Context and expression syntax for GitHub Actions](https://help.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions#contexts) at the GitHub Actions Reference.

```
${{ "{{ <context>" }} }}
```

### Matrix Context

The **matrix context** enables access to the matrix parameters you configured for the current job. 

For example, if you configure a matrix build with the os and node versions, the matrix context object includes the os and node versions of the current job.

### GitHub Context

The **github context**  contains information about 

* the workflow run and 
* the event that triggered the run. 

You can read most of the github context data in environment variables.

for example, `github.ref`contains the branch or tag ref that triggered the workflow run

### Env Context

The **env context** contains environment variables that have been set in a workflow, job, or step. 

This context changes for each step in a job. 
You can access this context from any step in a job.


### Steps Context

The **steps context** contains information about the steps in the current job that have already run.

Here is a more complex [example using step information and functions](https://github.com/rusnasonov/vscode-hugo/blob/master/.github/workflows/build.yml)

```yml
...
- name: save vsix
      uses: actions/upload-artifact@master
      with:
        name: ${ { format('vscode-hugo-{0}-{1}.vsix', steps.build_package.outputs.version, github.sha) }}
        path: ${ { format('vscode-hugo-{0}.vsix', steps.build_package.outputs.version) }}
```

### The Runner Context

The **runner context** contains information about the runner that is executing the current job.

Examples are `runner.os` for the Operating System or `runner.temp` for the path of the temporary directory for the runner. This directory is guaranteed to be empty at the start of each job, even on self-hosted runners.

### The Strategy Context

The **strategy context** enables access to the configured strategy parameters and information about the current job.

Here is an [example](https://github.community/t5/GitHub-Actions/Create-matrix-with-multiple-OS-and-env-for-each-one/td-p/38339) of use of the strategy context.

### The Secrets Context

The **secrets context** access to secrets set in a repository. See [Creating and storing encrypted secrets](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets). 

To create a secret:

*   On GitHub, navigate to the main page of the repository.
    
*   Under your repository name, click **Settings**.
    
    ![Repository settings button](https://help.github.com/assets/images/help/repository/repo-actions-settings.png)
    
*   In the left sidebar, click **Secrets**.
    
*   Type a name for your secret in the "Name" input box.
    
*   Type the value for your secret.
    
*   Click **Add secret**.

To use a secret:

```yml
steps:
  - name: Hello world action
    with: # Set the secret as an input
      super_secret: {{ "${{ secrets.SuperSecret" }} }}
    env: # Or as an environment variable
      super_secret: {{ "${{ secrets.SuperSecret" }} }}
```

For example, to write a github action to publish a npm package in the npm registry
I surely need to give GitHub a token so that it can work on my name and publish 
the package. Thus, the procedure will be:

1. You create a token for [npm](https://docs.npmjs.com/creating-and-viewing-authentication-tokens) with read and publish permits:
   
   ```
    [~/.../lexer-generator(master)]$ npm token create
    npm password:
    ┌────────────────┬──────────────────────────────────────┐
    │ token          │ blah-blah-blah-blah-blahblahblah     │
    ├────────────────┼──────────────────────────────────────┤
    │ cidr_whitelist │                                      │
    ├────────────────┼──────────────────────────────────────┤
    │ readonly       │ false                                │
    ├────────────────┼──────────────────────────────────────┤
    │ created        │ 2020-03-30T15:39:01.799Z             │
    │ created        │ 2020-03-30T15:39:01.799Z             │
    └────────────────┴──────────────────────────────────────┘
  ```

3. Set the secret token in the secrets section of your repo with name for example `npm_token`
4. Make the secret accesible to the GitHub Action via the `secrets` context

```yml
name: Node.js Package
on:
  release:
    types: [created]
jobs:
  build:
    ...
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
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ "{{secrets.npm_token" }} }}
```


### Example printing context information to the log file

To inspect the information that is accessible in each context, you can use this workflow file example.

```
[~/.../scapegoat(master)]$ cat .github/workflows/debug.yml
```
```yml
name: Debugging contexts
on: push

jobs:
  one:
    runs-on: ubuntu-16.04
    steps:
      - name: Dump GitHub context
        env:
          GITHUB_CONTEXT: ${ { toJson(github) }}
        run: echo "$GITHUB_CONTEXT"
      - name: Dump job context
        env:
          JOB_CONTEXT: ${ { toJson(job) }}
        run: echo "$JOB_CONTEXT"
      - name: Dump steps context
        env:
          STEPS_CONTEXT: ${ { toJson(steps) }}
        run: echo "$STEPS_CONTEXT"
      - name: Dump runner context
        env:
          RUNNER_CONTEXT: ${ { toJson(runner) }}
        run: echo "$RUNNER_CONTEXT"
      - name: Dump strategy context
        env:
          STRATEGY_CONTEXT: ${ { toJson(strategy) }}
        run: echo "$STRATEGY_CONTEXT"
      - name: Dump matrix context
        env:
          MATRIX_CONTEXT: ${ { toJson(matrix) }}
        run: echo "$MATRIX_CONTEXT"
```

Here is [an example of output](https://github.com/ULL-ESIT-DSI-1617/scapegoat/runs/548538435?check_suite_focus=true)

## GITHUB_TOKEN

GitHub automatically creates a **GITHUB_TOKEN** secret to use in your workflow. You can use the `GITHUB_TOKEN` to authenticate in a workflow run.

When you enable GitHub Actions, GitHub installs a GitHub App on your repository. 

The `GITHUB_TOKEN` secret is a GitHub App installation access token. 

You can use the installation access token to authenticate on behalf of the GitHub App installed on your repository. 

**The token's permissions are limited to the repository that contains your workflow**.

For more see [Authenticating with the GITHUB_TOKEN](https://help.github.com/en/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)

For example, when the repo contains and npm module and 
we want to write a github action to publish the npm package in the GitHub Package Registry
it is enough to use the `GITHUB_TOKEN`. 

Thus, this is enough to do the job:

```
jobs:
  build:
    ...
  publish-npm:
    ...
  publish-gpr:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: 12
          registry-url: https://npm.pkg.github.com/
          scope: @ULL-ESIT-PL1920
      - run: npm ci
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ "{{secrets.GITHUB_TOKEN" }} }}
```


## Creating a Packaged JavaScript Action

* [Writing a "Hello World!" JavaScript Action](creating-javascript-action)

## References

* [A quick demo showing how to use GitHub Actions to build, package, and publish Node.js modules to the NPM and GitHub package registries]({{site.baseurl}}/tema1-introduccion-a-javascript/github-action-npm-publish) 
* [An Introduction to Github Actions](https://gabrieltanner.org/blog/an-introduction-to-github-actions)
* [Using GitHub Actions](/https://youtu.be/9O2sLm1Boxc) Youtube video explainig how to test and publish an npm module to both GH Registry and npm Registry
* [About the editor for GitHub Actions](https://github.blog/2019-10-01-new-workflow-editor-for-github-actions/)
* Install [VSCode extension providing Github Actions YAML support](https://github.com/Lona/vscode-github-actions)
* [Getting Started with GitHub Actions in Visual Studio](https://devblogs.microsoft.com/visualstudio/getting-started-with-github-actions-in-visual-studio/)

* [Advanced GitHub Actions: workflows for production grade CI/CD - GitHub Universe 2019](https://youtu.be/0ahRkhrOePo)
  -  A short primer on advanced features, 
  -  How to deploy to GitHub Packages, 
  -  Auto-merge dependabot pull requests, and 
  -  Deploy a web service 
  
## Videos about GitHub Actions

* [A quick demo showing how to use GitHub Actions to build, package, and publish Node.js modules to the NPM and GitHub package registries](https://www.youtube.com/watch?v=9O2sLm1Boxc) by Brian Cross
* [DevOps CI/CD Explained in 100 Seconds](https://youtu.be/scEDHsr3APg) Using GitHub Actions for CI. Youtube Video. Fireship
* [BxJS - (Custom) Github Actions for Node.js projects](https://youtu.be/uLu5g76tDWw)
* [GitHub Actions: Open Source Workflow Automation by Bas Peters](https://youtu.be/Tl4mbL45PKU) YoutTube video
* [Introduction to GitHub Actions : my website build & deployment](https://youtu.be/rgxbeIvQj0Q)



