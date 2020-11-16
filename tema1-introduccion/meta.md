# Meta

## What is a Mono Repo

In [revision control systems](https://en.wikipedia.org/wiki/Revision_control "Revision control"), a **monorepo** ("mono" from Greek μόνος, mónos, 'single, alone' and "repo" short for [repository](https://en.wikipedia.orgwiki/Repository_(version_control) "Repository (version control)")) is a software development strategy where code for many projects is stored in the same repository.

A mono-repo is a repository containing all of the source for an organization. It presents source in a single, hierarchical directory structure. A mono-repo supports standard operations such as atomic commits and merges across the code it contains.

Critically, in order to host all source for an organization, the performance of a mono-repo must not degrade as it grows in terms of:

* history (number of commits)
* amount of code (number of files and bytes)
* number of developers

### Why doesn't everyone have a mono-repo?

Most organizations do not have a mono-repo because existing DVCS systems (e.g., Git and Mercurial) suffer performance degradation as the size of the repository and the number of users increase. Over time, basic operations such as `git status`, `git fetch`, etc. become slow enough that developers, given the opportunity, will begin splitting code into multiple repositories. Also may be some members are not allowed to have visibility access to some organization projects.

* [Wikipedia on Mono Repo](https://en.wikipedia.org/wiki/Monorepo)

## Meta

[meta](https://github.com/mateodelnorte/meta/blob/master/README.md) is a tool for managing multi-project systems and libraries. 

meta is powered by plugins that wrap common commands, letting you execute them against some or all of the repos in your solution at once. meta is built on [loop](https://github.com/mateodelnorte/loop), and as such inherits loops ability to easily target a particular set of directories for executing a common command (eg `meta git status --include-only dir1,dir2`. See [loop](https://github.com/mateodelnorte/loop) for more available options). 

* [See the README of the meta repo](https://github.com/mateodelnorte/meta/blob/master/README.md)

## meta project


* `meta project import` will add an existing project to your `.meta` file and clone it
* `meta project create` will add a new directory and git initialize it, and add the given remote

```
➜  meta git:(master) ✗ meta project help create
Usage: meta-project-create <destFolder> <childRepoUrl>

Creates a new folder and initializes git with provided remote.
➜  meta git:(master) ✗ meta project help import
Usage: meta-project-import <destFolder> <childRepoUrl>

Configures .meta file and imports a project from provided 'childRepoUrl' using git clone into 'destFolder'.
```

I think we need to extend create with only a directory

## meta git

To clone in step a meta-repo and all the sub repos yo do somthing like this:

```
➜  my-first-plugin git:(master) ✗ meta git clone git@github.com:mateodelnorte/meta.git
meta:
Cloning into 'meta'...
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (4/4), done.
remote: Total 1096 (delta 0), reused 1 (delta 0), pack-reused 1092
Receiving objects: 100% (1096/1096), 1.21 MiB | 2.48 MiB/s, done.
Resolving deltas: 100% (698/698), done.
meta ✓

/Users/casianorodriguezleon/campus-virtual/2021/learning/learning-meta/my-first-plugin/meta/plugins/symlink-meta-dependencies:
Cloning into 'plugins/symlink-meta-dependencies'...
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (4/4), done.
remote: Total 111 (delta 0), reused 1 (delta 0), pack-reused 107
Receiving objects: 100% (111/111), 159.40 KiB | 1.01 MiB/s, done.
Resolving deltas: 100% (50/50), done.

...

```

### meta git clone NOTE

`meta git clone` lacks the capacility to recursively clone nested meta projects.
[See](https://github.com/mateodelnorte/meta/issues/203)

## Plugins for Meta

* [Developing a Plugin for Meta](https://medium.com/@patrickleet/developing-a-plugin-for-meta-bd2e9c39882d) by Patrick Lee Scott
* [Issue 144: How to write a plugin](https://github.com/mateodelnorte/meta/issues/144)

## Práctica p5-t1-meta

* [Descripción de la práctica p5-t1-meta]({{site.baseurl}}/practicas/p5-t1-meta/)