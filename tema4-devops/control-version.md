# Software Development Cycle

## Git Submódulos. Repos con varios Subproyectos

En muchas ocasiones es necesario tener junto a nuestro repo de proyecto otros repos de otros proyectos.
Por ejemplo, cuando hacemos un paquete para npm es conveniente tener junto al repo del paquete un segundo 
repositorio con un cliente que nos sirva para probar el correcto uso del paquete en producción. 
Esto nos lleva a veces a crear 
un macro-repo que contiene los  repos acoplados.


* [Chacon's book on Git: Chapter 7.11 Git Tools - Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
* [Ejemplo en https://github.com/ULL-ESIT-DSI-1617/create-a-npm-module](https://github.com/ULL-ESIT-DSI-1617/create-a-npm-module)
  - [Submódulo https://github.com/ULL-ESIT-DSI-1617/scapegoat](https://github.com/ULL-ESIT-DSI-1617/scapegoat)
  - [Submódulo https://github.com/ULL-ESIT-DSI-1617/prueba-scapegoat](https://github.com/ULL-ESIT-DSI-1617/prueba-scapegoat)

## GitHub Actions

{% include github-actions.md %}

### Videos about GitHub Actions

{% include videos-about-github-actions.md %}

## GitHub Package Registry

GitHub Package Registry is a software package hosting service, similar to npmjs.org, rubygems.org, or hub.docker.com, that allows you to host your packages and code in one place. You can host software packages privately or publicly and use them as dependencies in your projects.

*   [About GitHub Package Registry](https://help.github.com/en/github/managing-packages-with-github-package-registry/about-github-package-registry#about-github-package-registry)
*   [Supported clients and formats](https://help.github.com/en/github/managing-packages-with-github-package-registry/about-github-package-registry#supported-clients-and-formats)
*   [Searching packages on GitHub](https://help.github.com/en/github/managing-packages-with-github-package-registry/about-github-package-registry#searching-packages-on-github)
*   [Deleting a package](https://help.github.com/en/github/managing-packages-with-github-package-registry/about-github-package-registry#deleting-a-package)
*   [Contacting support](https://help.github.com/en/github/managing-packages-with-github-package-registry/about-github-package-registry#contacting-support)