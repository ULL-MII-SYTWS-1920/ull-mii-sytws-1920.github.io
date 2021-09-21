# git pull all

## Plan de Trabajo

1. See [git-pull-all](https://github.com/tatsuyaoiw/git-pull-all)
2. Make a fork
3. Solve the issue [Add more than just 'git pull' #3](https://github.com/tatsuyaoiw/git-pull-all/issues/3) but writing a `git-all-fetch` npm module
4. Write tests to check the validity of your work
5. Write a GitHub Action to add CI
6. Publish your module at GitHub Registry inside this subject organization

## git all

Lo ideal sería tener una serie de comandos `all`:

```
git-all-pull
git-all-fetch
git-all-status
git-all-remote
...
```


acepting exactly the options than their corresponding one-repo commands.

A real-life example is `git-remove-token` a script I had to write to manage the downloads
of students lab with GH Classroom:

```
[~/.../PLgrado/eloquentjsegg(inicial)]$ cat /usr/local/bin/git-remove-token
#!/usr/local/bin/bash
git remote set-url origin $(git remote -v | head -n 1  | grep -o 'github\.com.*git' | awk '{print "https://"$1}')
```

## Plan

This is a different task per student. A group will make `git-all-pull` and another 
`git-all-remote`, etc.

## git-assignment-clone

git assignment clone ORGANIZATION/assignment-prefix

crea  un repo con submodulos los repos de esa asignación

list of github students to download in a file

## git-all-submodule

Crearía un repo con submódulos los repos que están en el directorio

## See

* https://www.npmjs.com/package/git-submodule-tool