---
layout: default
title: p3-t2-handling-events/
permalink: /tema2-async/practicas/p3-t2-handling-events/index.html
previous:
  url: /tema1-introduccion/practicas/p3-t1-c3-http/
next:
  url: /tema2-async/practicas/p4-t2-networking
---

# Práctica p3-t2-handling-events

* Siguiendo el capítulo *[Handling Events](https://eloquentjavascript.net/15_event.html)*  de EJS escribe tus propios apuntes con ejemplos
* Realiza los ejercicios:
  * Censored Keyboard:  program a text field (an `input`  tag) where the letters Q, W, and X cannot be typed into
  * Mouse trail: a series of images that would follow the mouse pointer as you moved it across the page.
  * Tabs:  A tabbed interface. It allows you to select an interface panel by choosing from a number of tabs *sticking out* above an element.
* Elabora tu informe usando Jekyll y GH Pages
* Instala el generador estático Jekyll en tu máquina. En el informe incluye una sección acerca de tu experiencia del uso de GHPages y Jekyll
* Lee los tutoriales sobre [GitHub Pages](https://pages.github.com/)
* Lee los tutoriales sobre [Jekyll]({{site.baseurl}}/tema3-web/jekyll)
* Haz el despliegue del `_site` con el informe en GitHub usando la rama `gh-pages` y los contenidos en la rama `master`
  * Puedes usar el módulo npm [gh-pages](https://www.npmjs.com/package/gh-pages) para simplificar el despliegue a GitHub: `gh-pages -d _site`
* Usa [HTMLProofer](https://github.com/gjtorikian/html-proofer) para testear la salud de  tu website
* Añade Integración Contínua con  [HTMLProofer y Travis CI](https://github.com/gjtorikian/html-proofer/wiki/Using-HTMLProofer-From-Ruby-and-Travis)

## Referencias

* [Eloquent JS 3d Edition: Handling Events](https://eloquentjavascript.net/15_event.html)
* [Eloquent JS 2nd Edition: Handling Events](https://eloquentjavascript.net/2nd_edition/14_event.html)
  - [Repo de Ejemplo del Capítulo](https://github.com/ULL-ESIT-MII-CA-1718/ejs-chapter14-handling-events)
* [GitHub Pages](https://pages.github.com/)
* [Jekyll]({{site.baseurl}}//tema3-web/jekyll)
* Marijn Haverbeke (el autor de EJS) en su artículo [Flows of energy](http://marijnhaverbeke.nl/blog/eloquent-javascipts-build-system.html) indica que prefiere el formato [asciidoc](http://www.methods.co.nz/asciidoc/) 