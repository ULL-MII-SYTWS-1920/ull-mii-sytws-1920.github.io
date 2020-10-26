# GitHub Command Line Interface

## gh api

### Authentication Token

Go to [github.com/settings/tokens](https://github.com/settings/tokens)
to generate a new token for `gh` and set then environment variable 
`GITHUB_TOKEN` (`export GITHUB_TOKEN= ...`)

### Example

Placeholder values `:owner`, `:repo`, and `:branch` in the endpoint argument will get replaced with values from the repository of the current directory.

```
[~/.../sytws2021/apuntes(master)]$  gh api repos/:owner/:repo/issues
[
  {
    "url": "https://api.github.com/repos/ULL-MII-SYTWS-1920/ull-mii-sytws-1920.github.io/issues/5",
    "repository_url": "https://api.github.com/repos/ULL-MII-SYTWS-1920/ull-mii-sytws-1920.github.io",
    "labels_url": "https://api.github.com/repos/ULL-MII-SYTWS-1920/ull-mii-sytws-1920.github.io/issues/5/labels{/name}",
    "comments_url": "https://api.github.com/repos/ULL-MII-SYTWS-1920/ull-mii-sytws-1920.github.io/issues/5/comments",
    "events_url": "https://api.github.com/repos/ULL-MII-SYTWS-1920/ull-mii-sytws-1920.github.io/issues/5/events",
    "html_url": "https://github.com/ULL-MII-SYTWS-1920/ull-mii-sytws-1920.github.io/issues/5",
    "id": 715027457,
    "node_id": "MDU6SXNzdWU3MTUwMjc0NTc=",
    "number": 5,
    "title": "tema0-presentacion/practicas/pb-gh-campus-expert/",
    "user": {
      ...
    }
    ...
  }
]
```

We can pipe the output to [jq](jq):

```
[~/.../sytws2021/apuntes(master)]$  gh api repos/:owner/:repo/issues | jq '.[0] | .title'
"tema0-presentacion/practicas/pb-gh-campus-expert/"
```

Of course, we can explicit the repo and owner. For example:

```
➜  learning git:(master) gh api repos/ULL-MII-SYTWS-2021/p01-t1-iaas-alu0101040882/issues | jq '.[0] | .user.login, .body'
"crguezl"
"Hola @alu0101040882, \r\n\r\nVeo que alguno ya está trabajando en la práctica de
```

Let us see an example using the `POST` method. We will start from this `curl` example 
in the [GitHub API getting started guide](https://docs.github.com/en/free-pro-team@latest/rest/guides/getting-started-with-the-rest-api):

```
$ curl -i -H "Authorization: token 5199831f4dd3b79e7c5b7e0ebe75d67aa66e79d4" \
    -d '{ \
        "name": "blog", \
        "auto_init": true, \
        "private": true, \
        "gitignore_template": "nanoc" \
      }' \
    https://api.github.com/user/repos
```

and let us adapt to `gh api`. We use `-X` or `--method string`to set the HTTP method for the request (default `GET`) and `-f`to set the fields:

```
➜  /tmp gh api -X POST -f name=repo-prueba-gh-api -f private=true /user/repos
```

![]({{site.baseurl}}/assets/images/gh-api-post-create-repo.png)

### Pagination

The option `--paginate`allow us to make additional HTTP requests to fetch 
all pages of results. Here is an example. 

```
➜  to-meta git:(master) ✗ gh alias set get-repos 'api /orgs/$1/repos'
- Adding alias for get-repos: api /orgs/$1/repos
✓ Added alias.
➜  to-meta git:(master) ✗ gh alias list
co:         pr checkout
get-repos:  api /orgs/$1/repos
``` 

```
➜  to-meta git:(master) ✗ gh get-repos ULL-MII-SYTWS-2021
```

![]({{site.baseurl}}/assets/images/gh-alias-repos.png)

Now  we can pipe the output to [jq](jq) to get the names of the repos:

```
➜  to-meta git:(master) ✗ gh get-repos ULL-MII-SYTWS-2021 | jq '.[].full_name' -
"ULL-MII-SYTWS-2021/sytws-2021-meta"
"ULL-MII-SYTWS-2021/sytws2021-private"
"ULL-MII-SYTWS-2021/books-shared"
"ULL-MII-SYTWS-2021/p01-t1-iaas-fcohdezc"
"ULL-MII-SYTWS-2021/p01-t1-iaas-crguezl"
"ULL-MII-SYTWS-2021/p01-t1-iaas-alu0100886870"
...
```

Let ask for the repos in the PL organization for the course 19/20:

```
➜  to-meta git:(master) ✗ gh api /orgs/ULL-ESIT-PL-1920/repos | jq '.[] | .name' | wc
      30      30    1088
```
It gave us 30 repos. There are much more than that in that organization.

If we use `--paginate` the request takes a long time and gives us near a thousand repos:

```
➜  to-meta git:(master) ✗ gh api --paginate /orgs/ULL-ESIT-PL-1920/repos | jq '.[] | .name' | wc
     990     990   32868
```

## gh alias


### gh alias set

```
➜  to-meta git:(master) ✗ gh help alias set
````

Declare a word as a command alias that will expand to the specified command(s).

The expansion may specify additional arguments and flags. If the expansion
includes positional placeholders such as `$1`, `$2`, etc., any extra arguments
that follow the invocation of an alias will be inserted appropriately.

If `--shell` is specified, the alias will be run through a shell interpreter (sh). This allows you
to compose commands with `|` or redirect with `>`. Note that extra arguments following the alias
will not be automatically passed to the expanded expression. To have a shell alias receive
arguments, you must explicitly accept them using `$1`, `$2`, etc., or `$@` to accept all of them.

Platform note: on Windows, shell aliases are executed via `sh` as installed by Git For Windows. If
you have installed git on Windows in some other way, shell aliases may not work for you.

Quotes must always be used when defining a command as in the examples.


### USAGE
  gh alias set <alias> <expansion> [flags]

### FLAGS
  -s, --shell   Declare an alias to be passed through a shell interpreter

### INHERITED FLAGS
  --help   Show help for command

### EXAMPLES

```
  $ gh alias set pv 'pr view'
  $ gh pv -w 123
  #=> gh pr view -w 123

  $ gh alias set bugs 'issue list --label="bugs"'

  $ gh alias set epicsBy 'issue list --author="$1" --label="epic"'
  $ gh epicsBy vilmibm
  #=> gh issue list --author="vilmibm" --label="epic"

  $ gh alias set --shell igrep 'gh issue list --label="$1" | grep $2'
  $ gh igrep epic foo
  #=> gh issue list --label="epic" | grep "foo"
````

Let us search for repos inside our organization using GitHub API v3:

```
➜  to-meta git:(master) ✗ gh api '/search/repositories?q=vscode+org:ULL-MII-SYTWS-2021+in:name'
```


![]({{site.baseurl}}/assets/images/gh-api-search-for-repos.png) 

In this [link](gh-get-labs-output.json) you'll find the full output.

* See the [SEARCH](https://docs.github.com/en/free-pro-team@latest/rest/reference/search)
section of the REST API GitHub docs to know more about the API.
* See section [Search Repositories](https://docs.github.com/en/free-pro-team@latest/rest/reference/search#search-repositories) for more info on how to search for repos

Now we can use `gh alias set` to make an alias `get-lab` to get the repos:

```
➜  to-meta git:(master) ✗ gh alias set get-labs 'api /search/repositories?q=$2+org:$1+in:name'
- Adding alias for get-labs: api /search/repositories?q=$2+org:$1+in:name
✓ Added alias.
➜  to-meta git:(master) ✗ gh alias list
co:        pr checkout
get-labs:  api /search/repositories?q=$2+org:$1+in:name
```

And now we can use it:

```
➜  to-meta git:(master) ✗ gh get-labs ULL-MII-SYTWS-2021 iaas
```

Next  we can pipe the output to [jq](jq) to get the names of the repos and the date of the last push:

```
➜  to-meta git:(master) ✗ gh get-labs ULL-MII-SYTWS-2021 iaas | jq '.items[] | .name, .pushed_at'
"p01-t1-iaas-juanchojbarroso"
"2020-10-21T15:58:32Z"
"p01-t1-iaas-alu0101040882"
"2020-10-17T16:53:39Z"
"p01-t1-iaas-fcohdezc"
"2020-10-06T17:51:52Z"
"p01-t1-iaas-crguezl"
"2020-10-19T13:50:13Z"
"p01-t1-iaas-alu0100886870"
"2020-10-21T17:05:08Z"
"p01-t1-iaas-lardabi"
"2020-10-06T18:01:16Z"
```
We can improve it by writing a script:

```
➜  to-meta git:(master) ✗ cat ~/bin/repos
```

```bash
#!/bin/bash

ORG=ULL-MII-SYTWS-2021
ASSIGNMENT=iaas
if [[ $# -gt 0 ]] ; then
  ASSIGNMENT=$1
fi
if [[ $# -gt 1 ]] ; then
    ORG=$2
fi
# echo $ASSIGNMENT $ORG
gh api --paginate /search/repositories?q=$ASSIGNMENT+org:$ORG+in:name |
                          jq '.items[] | .name, .pushed_at'           |
                          sed 'N;s/\n/ => /'
```

Let us make an alias for `gh`:

```
➜  to-meta git:(master) ✗ gh alias set --shell get-repos 'repos $1 $2'
- Adding alias for get-repos: repos $1 $2
✓ Changed alias get-repos from !repos to !repos $1 $2
```

Watch the use of single quotes.

Let us use our new alias:

```
➜  apuntes git:(curso2021) gh get-repos TFA ULL-ESIT-PL-1920
"tfa-module-miguel-tfa" => "2020-09-04T09:40:57Z"
"tfa-daniel-tfa" => "2020-06-02T14:00:30Z"
"tfa-manuel-jorge-tfa" => "2020-09-13T21:40:24Z"
"tfa-basilio-tfa" => "2020-07-14T06:49:29Z"
"tfa-alien-tfa" => "2020-09-05T07:35:52Z"
"tfa-miguel-angel-tfa" => "2020-09-15T13:19:47Z"
"tfa-esther-sergio-tfa" => "2020-07-10T08:53:04Z"
...
```

### LEARN MORE

  Use `gh <command> <subcommand> --help` for more information about a command.
  Read the manual at https://cli.github.com/manual


## References

* Blog: [GitHub CLI is Now Available: Here’s Why You Should Be Excited by 
Kasun Rajapakse](https://blog.bitsrc.io/github-cli-is-now-available-heres-why-you-should-be-excited-91d8bdd81a51)
