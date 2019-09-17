# Práctica Transforming Data and Testing Continuously (p9-t3-transfoming-data)

* Lea el 
[Capítulo 5 "Transforming Data and Testing Continuously" de *Node.JS The Right Way*](https://proquest-safaribooksonline-com.accedys2.bbtk.ull.es/book/web-development/9781680505344/part-iidot-working-with-data/chp_transforming_data_html)
y resuelva los problemas en la secciónes 
[*Extracting Classification Codes* y *Extracting Sources*](https://proquest-safaribooksonline-com.accedys2.bbtk.ull.es/book/web-development/9781680505344/part-iidot-working-with-data/chp_databases_html#X2ludGVybmFsX0h0bWxWaWV3P3htbGlkPTk3ODE2ODA1MDUzNDQlMkZkMjRlMTQ3NDZfaHRtbCZxdWVyeT0=)

## Extracting Classification Codes

- When extracting fields from the Project Gutenberg RDF (XML) files,
in Traversing the Document, we specifically selected the Library
of Congress Subject Headings (LCSH) and stored them in an array
called subjects.
- At that time, we carefully avoided the Library of
Congress Classification (LCC) single-letter codes. Recall that the
LCC portion of an RDF file looks like this:

```xml
<dcterms:subject>
  <rdf:Description rdf:nodeID="Nfb797557d91f44c9b0cb80a0d207eaa5">
    <dcam:memberOf rdf:resource="http://purl.org/dc/terms/LCC"/>
    <rdf:value>U</rdf:value>
  </rdf:Description>
</dcterms:subject>
```

Using your BDD infrastructure built on Mocha and Chai, implement the following:

* Add a new assertion to `parse-rdf-test.js` that checks for `book.lcc`. 
* It should be of type `string` and it should be at least one character long.
* It should start with an uppercase letter of the English alphabet, but not I, O, W, X, or Y.

1. Run the tests to see that they fail.
2. Add code to your exported module function in `parse-rdf.js` to make the tests pass.


## Extracting Sources

Most of the metadata in the Project Gutenberg RDF files describes
where each book can be downloaded in various formats. 

For example,
here’s the part that shows where to download the plain text of The
Art of War:

```xml
<dcterms:hasFormat>
  <pgterms:file rdf:about="http://www.gutenberg.org/ebooks/132.txt.utf-8">
    <dcterms:isFormatOf rdf:resource="ebooks/132"/>
    <dcterms:modified rdf:datatype="http://www.w3.org/2001/XMLSchema#dateTime">
    2016-09-01T01:20:00.437616</dcterms:modified>
    <dcterms:format>
      <rdf:Description rdf:nodeID="N2293d0caa918475e922a48041b06a3bd">
        <dcam:memberOf rdf:resource="http://purl.org/dc/terms/IMT"/>
        <rdf:value
        rdf:datatype="http://purl.org/dc/terms/IMT">text/plain</rdf:value>
      </rdf:Description>
    </dcterms:format>
    <dcterms:extent rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">
    343691</dcterms:extent>
  </pgterms:file>
</dcterms:hasFormat>

        ...

<dcterms:hasFormat>
      <pgterms:file rdf:about="http://www.gutenberg.org/ebooks/132.kindle.noimages">
        <dcterms:isFormatOf rdf:resource="ebooks/132"/>
        <dcterms:modified rdf:datatype="http://www.w3.org/2001/XMLSchema#dateTime">2015-08-01T01:24:38.440052</dcterms:modified>
        <dcterms:extent rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">598678</dcterms:extent>
        <dcterms:format>
          <rdf:Description rdf:nodeID="N90d807c6b2a042078ac4e05e8e265dd7">
            <rdf:value rdf:datatype="http://purl.org/dc/terms/IMT">application/x-mobipocket-ebook</rdf:value>
            <dcam:memberOf rdf:resource="http://purl.org/dc/terms/IMT"/>
          </rdf:Description>
        </dcterms:format>
      </pgterms:file>
</dcterms:hasFormat>
```

Suppose we wanted to include a list of download sources in each
JSON object we create from an RDF file. 

To get an idea of what data
you might want, take a look at the [Project Gutenberg page for The
Art of War](http://www.gutenberg.org/ebooks/132).

Consider these questions:

* Which fields in the raw data would we want to capture, and which could we discard?
* What structure would make the most sense for this data?
* What information would you need to be able to produce a table that looked like the one on the Project Gutenberg site?

Once you have an idea of what data you’ll want to extract, try
creating a JSON object by hand for this one download source. When
you’re happy with your data representation, use your existing
continuous testing infrastructure and add a test that checks for
this new information.

Finally, extend the book object produced in `parse-rdf.js` to include
this data to make the test pass.


## Recursos

* [GitHub repo ULL-MII-CA-1819/nodejs-the-right-way](https://github.com/ULL-MII-CA-1819/nodejs-the-right-way)
* [BULL PuntoQ](https://www.ull.es/servicios/biblioteca/servicios/puntoq/)
* [Safari. Chapter 5
Transforming Data and Testing Continuously](https://proquest-safaribooksonline-com.accedys2.bbtk.ull.es/book/web-development/9781680505344/part-iidot-working-with-data/chp_databases_html#X2ludGVybmFsX0h0bWxWaWV3P3htbGlkPTk3ODE2ODA1MDUzNDQlMkZjaHBfdHJhbnNmb3JtaW5nX2RhdGFfaHRtbCZxdWVyeT0=)
* [Sección Pruebas en los Apuntes del curso 16/17](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/)
  * [Mocha](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/mocha.html)
  * [Should](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/mocha.html#should)
  * [Travis](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/travis.html)
  * [Chai](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/chai.html)
  * [Sinon](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/sinon.html)
  * [Karma](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/karma.html)
  * [Covering](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/covering.html)
  * [Blanket](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/blanket.html)
  * [Istanbul](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/istanbul.html)
  * [BrowserSync](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/browsersync.html)
* Pruebas en el Navegador/Browser
  * [Learning JavaScript Test-Driven Development by Example](https://www.sitepoint.com/learning-javascript-test-driven-development-by-example/) SitePoint Tutorial
  * [Mocha y Chai en el navegador. Apuntes del curso 15/16](https://casianorodriguezleon.gitbooks.io/pl1516/content/practicas/mochachaisinon.html)
  * [Testing your frontend JavaScript code using mocha, chai, and sinon. Nicolas Perriault](https://nicolas.perriault.net/code/2013/testing-frontend-javascript-code-using-mocha-chai-and-sinon/)
   [Covering](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/covering.html)
    * [Blanket](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/blanket.html)
    * [Istanbul](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/istanbul.html)
    * [BrowserSync](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/browsersync.html)


