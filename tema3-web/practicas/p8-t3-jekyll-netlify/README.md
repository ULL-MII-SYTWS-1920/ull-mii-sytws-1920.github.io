# Práctica p8-t3-jekyll-netlify

## Jekyll

### Introducción

* Instale [Jekyll](https://jekyllrb.com/docs/) en su máquina o en la máquina del servicio [iaas.ull.es]({{site.baseurl}}/tema1-introduccion/practicas/p01-t1-iaas/) si no dispone de máquina. Instrucciones en [Jekyll Installation](https://jekyllrb.com/docs/installation/)
* Si no se acuerda de como funciona Ruby le pueden venir las instrucciones en [Ruby 101](https://jekyllrb.com/docs/ruby-101/)
* Realice el [Step by Step Tutorial](https://jekyllrb.com/docs/step-by-step/01-setup/)
    *   [Setup](https://jekyllrb.com/docs/step-by-step/01-setup/)
    *   [Liquid](https://jekyllrb.com/docs/step-by-step/02-liquid/)
    *   [Front Matter](https://jekyllrb.com/docs/step-by-step/03-front-matter/)
    *   [Layouts](https://jekyllrb.com/docs/step-by-step/04-layouts/)
    *   [Includes](https://jekyllrb.com/docs/step-by-step/05-includes/)
    *   [Data Files](https://jekyllrb.com/docs/step-by-step/06-data-files/)
    *   [Assets](https://jekyllrb.com/docs/step-by-step/07-assets/)
    *   [Blogging](https://jekyllrb.com/docs/step-by-step/08-blogging/)
    *   [Collections](https://jekyllrb.com/docs/step-by-step/09-collections/)

### Algunos tips si trabaja en la máquina del iaas.ull.es

* [Creating a personal access token for the command line](https://help.github.com/es/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) para trabajar con git y GitHub vía https
* Para que las instrucciones anteriores funcionen:

  ```
  usuario@ubuntu$ git config --global credential.helper  store
  usuario@ubuntu$ ls -ltr ~/.git-credentials 
  -rw------- 1 usuario usuario 68 nov 27 13:27 /home/usuario/.git-credentials
  usuario@ubuntu$ cat ~/.git-credentials 
  https://crguezl:este-no-es-el-token@github.com
  ```
* Ejecutando en una máquina del iaas.ull.es:

    ```
    usuario@ubuntu:~/src/ull-mii-sytws-1920.github.io$ bundle exec jekyll serve -H 10.6.128.216 -P 8080
    ```

### Despliegue en GitHub Pages

*   [Section Deployment of the Step by Step Tutorial](https://jekyllrb.com/docs/step-by-step/10-deployment/)
* Despliegue el proyecto en GitHub Pages. Puede usar la rama `master`, la carpeta `docs` en `master`o bien
    * Puede hacerlo usando la rama `gh-pages` con la gema [github-pages](https://jekyllrb.com/docs/github-pages/#deploying-jekyll-to-github-pages) o el paquete npm [gh-pages](https://www.npmjs.com/package/gh-pages)

### Navigation

* Lea de el tutorial [Navigation](https://jekyllrb.com/tutorials/navigation/) los escenarios [Basic List](https://jekyllrb.com/tutorials/navigation/#scenario-1-basic-list) y [Sorted List](https://jekyllrb.com/tutorials/navigation/#scenario-2-sorted-list) e implementelos en su site

### 404

* Lea el tutorial [Custom 404 Page](https://jekyllrb.com/tutorials/custom-404-page/) y añada una página 404 personalizada

Tienes un ejemplo de `404.md` en estos apuntes [404.md](https://raw.githubusercontent.com/ULL-MII-SYTWS-1920/ull-mii-sytws-1920.github.io/master/404.md?token=AAIW6GQY7F2KE5JVJXGD7UC546XEM) que se verá así 
[{{site.baseurl}}/noexiste]({{site.baseurl}}/noexiste).

La página hace un request a [The Cat API](https://thecatapi.com/) para mostrar una imagen de  gatitos obtenida al azar.
Existe una API similar para los amantes de los perros [Dog API](https://dog.ceo/dog-api/). 

Personaliza tu página de 404.

### Themes

* [Jekyll Themes](https://jekyllrb.com/docs/themes/)

### Test the Deployment with html-profer and Travis

* Se puede probar el buen funcionamiento del Blog haciendo pruebas en Travis como se indica en este [tutorial](https://jekyllrb.com/docs/continuous-integration/travis-ci/#1-enabling-travis-and-github)

> When testing Jekyll output, there is no better tool than <a href="https://github.com/gjtorikian/html-proofer">html-proofer</a>.
> This tool checks your resulting site to ensure all links and images exist.
> Utilize it either with the convenient <code>htmlproofer</code> command-line executable,
> or write a Ruby script which utilizes the gem

```
usuario@ubuntu:~/src/ull-mii-sytws-1920.github.io$ bundle exec htmlproofer ./_site --disable-external
Running ["ImageCheck", "ScriptCheck", "LinkCheck"] on ["./_site"] on *.html... 


Ran on 158 files!


- ./_site/2019/09/30/leccion.html
  *  internally linking to /practicas, which does not exist (line 31)
     <a href="/practicas" title="Prácticas">✍</a>
  *  internally linking to /practicas, which does not exist (line 129)
     <a href="/practicas" title="Prácticas">✍</a>
- ./_site/404.html
  *  internally linking to /practicas, which does not exist (line 31)
     <a href="/practicas" title="Prácticas">✍</a>
     ... many more entries
```

Let us see if its true. Instead of running with `jekyll` serve, I use a static server to see if the build 
is really consistent:

```
usuario@ubuntu:~/src/ull-mii-sytws-1920.github.io/_site$ static-server -p 8080
options.index is now deprecated please use options.templates.index instead.
* Static server successfully started.
* Serving files at: http://localhost:8080
* Press Ctrl+C to shutdown.
<-- [GET] /2019/09/30/leccion.html
--> 200 OK /2019/09/30/leccion.html 5.63 KiB (15.964ms)
...
<-- [GET] /practicas/
--> 403 /practicas/ (2.199ms)
<-- [GET] /favicon.ico
```

It seems `htmlproofer` is right in spite that it works in `github.io`

## Despliegues en Netlify

* Lea el tutorial [A Step-by-Step Guide: Jekyll 3.0 on Netlify](https://www.netlify.com/blog/2015/10/28/a-step-by-step-guide-jekyll-3.0-on-netlify/) y despliegue el correspondiente Jekyll blog en Netlify


### Gatsby

* Lea el tutorial [A Step-by-Step Guide: Gatsby on Netlify](https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/) y despliegue las páginas en Netlify. También en GitHub pages