# Jekyll

Recuerda que GitHub provee un servicio de Hosting de páginas estáticas ([GitHub Pages](https://pages.github.com/)) que se sirven mediante Jekyll.

* [Jekyll docs](https://jekyllrb.com/docs/)

## Content 

*   [Pages](https://jekyllrb.com/docs/pages/)
*   [Posts](https://jekyllrb.com/docs/posts/)
*   [Front Matter](https://jekyllrb.com/docs/front-matter/)
*   [Collections](https://jekyllrb.com/docs/collections/)
   *   [Page Sections in Jekyll - Separating Content from Layout](https://dev-notes.eu/2016/08/page-sections-in-jekyll-seperating-content-from-layout/)
   * [Explain like I’m five: Jekyll collections](https://ben.balter.com/2015/02/20/jekyll-collections/)
*   [Data Files](https://jekyllrb.com/docs/datafiles/)
   * [Why I love Jekyll Data Files - Chen Hui Jing // JekyllConf 2019](https://youtu.be/CERXESTZ5w4) YouTube
*   [Assets](https://jekyllrb.com/docs/assets/)
*   [Static Files](https://jekyllrb.com/docs/static-files/)

## Site Structure

*   [Directory Structure](https://jekyllrb.com/docs/structure/)
*   [Liquid](https://jekyllrb.com/docs/liquid/)
  * Liquid Sandbox: [You can test your Liquid code here. This sandbox only loads the default Liquid methods ](https://jumpseller.com/support/liquid-sandbox/)
*   [Variables](https://jekyllrb.com/docs/variables/)
*   [Includes](https://jekyllrb.com/docs/includes/)
*   [Layouts](https://jekyllrb.com/docs/layouts/)
*   [Permalinks](https://jekyllrb.com/docs/permalinks/)
*   [Themes](https://jekyllrb.com/docs/themes/)
*   [Pagination](https://jekyllrb.com/docs/pagination/)

## Tutorials

*   [Tutorials](https://jekyllrb.com/tutorials/home/)
*   [Video Walkthroughs](https://jekyllrb.com/tutorials/video-walkthroughs/)
*   [Navigation](https://jekyllrb.com/tutorials/navigation/)
*   [Order of interpretation](https://jekyllrb.com/tutorials/orderofinterpretation/)
*   [Custom 404 Page](https://jekyllrb.com/tutorials/custom-404-page/)
*   [Convert an HTML site to Jekyll](https://jekyllrb.com/tutorials/convert-site-to-jekyll/)
*   [Using Jekyll with Bundler](https://jekyllrb.com/tutorials/using-jekyll-with-bundler/)

## The Jekyll Conference

* [The free, online global conference for all things Jekyll](https://jekyllconf.com/)
Best Practices, Advanced Case Studies, The Future of Jekyll

## CloudCannon: The Cloud CMS for Jekyll

[CloudCannon](https://app.cloudcannon.com/) is cloud content management system and hosting provider for Jekyll websites. The way it works is this: 

1. A developer uploads a Jekyll site in the browser or syncs with GitHub, Bitbucket or Dropbox. 
2. CloudCannon builds the site, hosts it and
3. **provides an interface for non-technical people to update content**.

* [CloudCannon](https://app.cloudcannon.com/)
* [Client editable Jekyll sites](https://learn.cloudcannon.com/jekyll/client-editable-jekyll-sites/)

## Editors

* [Forestry](https://forestry.io/) is an editor-friendly interface over Git. This means that developers and editors can now use the same workflow and tool set.

## Themes

With gem-based themes, some of the site’s directories (such as the `assets`, `_layouts`, `_includes`, and `_sass` directories) are stored in the theme’s gem, hidden from your immediate view. Yet all of the necessary directories will be read and processed during Jekyll’s build process.

You can run `bundle update <THEME>`, replacing `<THEME>` with the theme name, such as `minima`, to just update the theme gem:

```
~/.../sytws1920/apuntes(master)]$ bundle update jekyll-theme-midnight
Fetching gem metadata from https://rubygems.org/...........
Fetching gem metadata from https://rubygems.org/.
Resolving dependencies...
Using concurrent-ruby 1.1.5
...
Bundler attempted to update jekyll-theme-midnight but its version stayed the same
Bundle updated!
```

* [Themes documentation](https://jekyllrb.com/docs/themes/)
* [Jekyll and Project Documentation Themes](https://jekyllthemes.io/jekyll-documentation-themes)
* [documentation-theme-jekyll](https://github.com/ULL-MII-SYTWS-1920/documentation-theme-jekyll) Un tema muy interesante

## Converting a Jekyll Web Site to PDF

* [Prince](https://www.princexml.com/)
* [PDFKit](https://github.com/pdfkit/PDFKit)
* [GitHub repo wkhtmltopdf: Convert HTML to PDF using Webkit (QtWebKit)](https://github.com/wkhtmltopdf/wkhtmltopdf) see [https://wkhtmltopdf.org](https://wkhtmltopdf.org)



## Blog: A Collection of Music Albums

* [How to maintain a collection of music albums online, using Jekyll and Github Pages](https://dev.to/adrienjoly/how-to-maintain-a-collection-of-music-albums-online-using-jekyll-and-github-pages-3hd6). See it at [http://adrienjoly.com/album-shelf/](http://adrienjoly.com/album-shelf/)

## React and Jekyll

* [A npm package providing a Jekyll Boilerplate with React using Webpack](https://www.npmjs.com/package/jekyll-react-webpack) (Not supported by GitHub Pages)
  - [Blog: Start building your great modern static website with this boilerplate using Jekyll, React and Webapck.](https://marcoslombog.com/2019/04/07/jekyll-react-webpack.html)

## Auth and Jekyll

* [benbalter/jekyll-auth: A simple way to use GitHub OAuth to serve a protected Jekyll site to your GitHub organization](https://github.com/benbalter/jekyll-auth)


## E-commerce

* [Jekyll E-Commerce Tutorial: Add a Shopping Cart to Your Static Website](https://snipcart.com/blog/jekyll-ecommerce-tutorial) 2019
* [Headless E-Commerce: What, Why, & How (Tools Included)](https://snipcart.com/blog/headless-ecommerce-guide) 2018
* [GitHub repo:A Jekyll based shopping cart built with simpleCart(js)](https://github.com/bradonomics/jekyll-cart)
* [Jekyll Cart Demo](https://youtu.be/jdp_XmogTEo) Video en YouTube

## Developing 

* [Change site.url to localhost during jekyll local development](https://stackoverflow.com/questions/27386169/change-site-url-to-localhost-during-jekyll-local-development)

"

This is a common problem between different Jekyll environments.

### Some explanations

We need to understand `site.url` and `site.baseurl` and in which situation we need them. Those variables don't serve the same purpose.

#### `site.url`

By default, this variable is only used in page head for the `canonical` header and the `RSS link`. It's also used in the xml feed to point to site resources as the software that will manage this feed doesn't know resource's urls.

This variable is only necessary for external systems.

#### `site.baseurl`

This variable indicates the root folder of your Jekyll site. By default it is set to `""` (empty string). That means that your Jekyll site is at the root of `http://example.com`.

If your Jekyll site lives in `http://example.com/blog`, you have to set `site.baseurl` to `/blog` (**note the slash**). This will allow assets (css, js) to load correctly.

See how assets are loaded in you head :

    <link rel="stylesheet" href="{{ "/css/main.css" | prepend: site.baseurl }}">
    

that can also be :

    <link rel="stylesheet" href="{{ site.baseurl }}/css/main.css">
    

### Working in different environments

Now you have to test your site locally and to deploy it in production. Sometimes, the `baseurl` is different and the `jekyll build` may not work out of the box in one of those environment.

Here we have two solutions :

#### Use `jekyll serve`

Let's imagine that your site lives in a github repository and is served at `https://username.github.io/myProject`.

You can setup the `baseurl` to `/myProject`. and test your site locally with `jekyll serve`, your site will be served at `http://127.0.0.1:4000/myProject/`

#### Use multiple configuration files

If, for one reason or another, you cannot use `jekyll serve`, you can set a configuration file for both environment and `jekyll build` depending on where you are deploying.

Let's say we have the local site served at `http://localhost` and the production site served at `https://username.github.io/myProject`.

We leave the `_config.yml` with `url: https://username.github.io` and `baseurl: /myProject`

We create a new `_config_dev.yml` with only `url: https://localhost` and `baseurl: ""`

Now to test locally :

    jekyll build --config _config.yml,_config_dev.yml
    

or

    jekyll build --config _config.yml,_config_dev.yml --watch
    

When pushed on production, the <code>jekyll build</code> command will use the default <code>_config.yml</code>.

## Testing

* [Using HTMLProofer From Ruby and Travis](https://github.com/gjtorikian/html-proofer/wiki/Using-HTMLProofer-From-Ruby-and-Travis)

## Jekyll as a Web Service

* [Jekyll JSON API](https://www.techiediaries.com/how-to-use-jekyll-like-a-pro-output-data-as-json/)

## Maths y Jekyll

* [Adding MathJax to a GitHub Pages Jekyll Blog](http://sgeos.github.io/github/jekyll/2016/08/21/adding_mathjax_to_a_jekyll_github_pages_blog.html)


## Cursos en YouTube de Jekyll and NetlifyCMS por Thomas Bradley

* [Jekyll](https://www.youtube.com/playlist?list=PLWjCJDeWfDdfVEcLGAfdJn_HXyM4Y7_k-)
* [Jekyll + NetlifyCMS](https://www.youtube.com/playlist?list=PLWjCJDeWfDdcU8zbZZrr6L1zpf_2Eqt_w) 14 Youtube videos
* [Jekyll + Patternbot](https://www.youtube.com/playlist?list=PLWjCJDeWfDdcEBngBwpB8F7wtjZ12PIy0)

## Chen Hui Jing Talks on Jekyll

* [Chen Hui Jing talks on Jekyll](https://www.chenhuijing.com/blog/jekyll/#%F0%9F%91%BE)
* [Chen Hui Jing talks](https://www.chenhuijing.com/talks/#%F0%9F%8F%80) Slides in reveal.js

## Práctica p8-t3-jekyll-netlify

* [Práctica p8-t3-jekyll-netlify](practicas/p8-t3-jekyll-netlify)
* [Práctica p10-t3-jekyll-search](practicas/p10-t3-jekyll-search)
