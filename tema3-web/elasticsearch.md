# Elasticseach

## Que es Elastic Search

Elasticsearch es  **un motor de búsqueda**:
* Desarrollado en Java
* Open Source
* Distribuido
* Escalable
* Basado en [lucene](https://lucene.apache.org/core/8_3_1/index.html)

### Lucene

Lucene es una librería que implementa un full-text search engine. No es una aplicación sino una API 
que da capacidades de búsqueda.

* Desarrollado en Java
* Open Source
* No es Distribuido
* Escalable
* Basado en **Índices Invertidos**

## Índices Invertidos

 An **inverted index** (also referred to as a postings file or inverted file) is a database index storing a mapping from content, such as words or numbers, to its locations in a table, or in a document or a set of documents (named in contrast to a forward index, which maps from documents to content). The purpose of an inverted index is to allow fast full-text searches, at a cost of increased processing when a document is added to the database.

![indices-invertidos.png](/assets/images/indices-invertidos.png)

La idea es parecida a los índices de referencias cruzadas que habitualmente aparecen al final de los libros.

* Ventajas
  - Velocidad de Búsqueda
  - Facilidad para aplicar algoritmos de relevancia
  - Facilidad para aplicar analizadores de texto
* Desventajas
  - Velocidad de indexación
  - Algunas búsquedas son mas costosas (por ejemplo el Not lógico)

## Funcionalidades aportadas por Lucene y Funcionalidades aportadas por Elasticsearch

![/assets/images/lucene-vs-elasticsearch.png](/assets/images/lucene-vs-elasticsearch.png)

## Términos usuales

*   **Node**: A single instance of Elasticsearch running on a machine. Podemos tener varios nodos en sus correspondientes máquinas sirviendo Elasticsearch. 
*   **Cluster**: A cluster is the single name under which one or more nodes/instances of Elasticsearch are connected to each other.
    * [Creating an Elasticsearch Cluster: Getting Started](https://logz.io/blog/elasticsearch-cluster-tutorial/)
*   **Document**: A document is a JSON object that contains the actual data in key value pairs. Es la unidad mínima de información que puede ser indexada y recuperada. En elastic los documentos son JSON.
*   **Index**: A logical namespace under which Elasticsearch stores data, and may be built with more than one Lucene index using shards and replicas. Conjunto de documentos con similares características.
*   **Doc types**: A doc type in Elasticsearch represents a class of similar documents. A type consists of a name, such as a user or a blog post, and a mapping, including data types and the Lucene configurations for each field. (An index can contain more than one type.). Con el tiempo va en desuso.
*   **Shard**: Es un fragmento de un índice. An index is divided into one or more shards to make the data distributable. Shards can be stored on a single node or multiple nodes and are composed of Lucene segments. 
    
    ### Notes
    
    - [Shard en la Wikipedia](https://en.wikipedia.org/wiki/Shard_(database_architecture))
    - A shard can be either primary or secondary. A primary shard is the one where all the operations that change the index are directed. A secondary shard is the one that contains duplicate data of the primary shard and helps in quickly searching the data as well as for high availability; in a case where the machine that holds the primary shard goes down, then the secondary shard becomes the primary automatically.
    - A database shard is a horizontal partition of data in a database or search engine. Each individual partition is referred to as a shard or database shard. Each shard is held on a separate database server instance, to spread load.
    - Some data within a database remains present in all shards but some appears only in a single shard. Each shard (or server) acts as the single source for this subset of data
    - ![sharding in mongodb](https://docs.mongodb.com/v3.0/_images/sharded-collection.png)
    -  [¿Cómo se reparten? Usando las llamadas "*shard keys*" o *claves de repartición*. Cada partición contiene un intervalo de claves (Clave Mínima, Clave Máxima). Se habla de "*partición basada en rangos*". La *Index Big Table* de Google utiliza una idea similar. ](http://gpd.sip.ucm.es/rafa/docencia/nosql/Sharding.html)
    - [Tutorial MongoDB. Explicando el sharding con una baraja de cartas](https://charlascylon.com/2014-01-30-tutorial-mongodb-explicando-el-sharding-con-una)
*   **Replica**: A duplicate copy of the data living in a shard for high availability. Proporciona alta disponibilidad y escalabilidad.
* **Settings**: Define la configuración de un *índice* y sus características específicas (por ejemplo, el número de réplicas y shards). Se define a nivel de cluster y algunos parámetros se pueden modificar una vez creado el índice. Por ejemplo, si yo defino que un índice va a tener replicación de 2, lo va a tener en todos los nodos del cluster. Eso sí, dentro de distintos índices puedo tener diferentes números de replicación. El número de réplicas se puede cambiar a posteriori pero el número de shards no (al menos no fácilmente).
* **Mappings**: Es la definición del modelo de datos de un *índice* (Puede definirse de manera explícita o dejar que lo genere Elasticsearch). Por cada campo se puede definir su tipo, propiedades y analizadores
*  **Analizadores de texto**: Procesadores de texto que realizan transformaciones del contenido de los diferentes campos para permitir funcionalidades adicionales de búsqueda

    ### Notes

    * ![](/assets/images/lucene-text-analyzer.jpg)
    *   **Character Filters**: The job of character filters is to do cleanup tasks such as stripping out HTML tags.
    *   **Tokenizers**: The next step is to split the text into terms that are called tokens. This is done by a tokenizer. The splitting can be done based on any rule such as whitespace. More details about tokenizers can be found at this URL: [https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-tokenizers.html](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-tokenizers.html).
    *   **Token filters**: Once the tokens are created, they are passed to token filters that normalize the tokens. Token filters can change the tokens, remove the terms, or add terms to new tokens.
    * **Ejemplo**: 
    * ![](/assets/images/recibo-telefonia-no-es-recibos-de-telefono.png)
      - Pasar a minúscula
      - The ASCII folding token filter, which converts Unicode characters into their ASCII equivalent (quitar acentos, etc.)
      - Quitar palabras que no aportan significado (In computing, **stop words** are words which are filtered out before processing of natural language data)
      - Quedarnos con la raíz de las palabras (**stemming** is the process of reducing inflected (or sometimes derived) words to their word **stem**, base or root form)
    * **Proceso**:
    * ![](/assets/images/reciob-query-processed.png)
      - Es importante aquí que hagamos las mismas transformaciones y en el mismo orden tanto en indexación como en búsqueda

* **Queries**: Elasticsearch utiliza Query DSL (Lenguaje de dominio específico) para realizar las consultas a los documentos indexados. Es un lenguaje sumamente flexible y de gran alcance, además de simple, que permite conocer y explorar los datos de la mejor manera. Al ser utilizado a través de una interfaz de tipo JSON, las consultas son muy sencillas de leer y, lo más importante, de depurar.
  * [Useful Elasticsearch Example Queries](https://dzone.com/articles/23-useful-elasticsearch-example-queries) DZone

## [Installing Elastic Search](https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html)

### Install Elasticsearch on macOS with Homebrew

Apuntes tomados de [https://www.elastic.co/guide/en/elasticsearch/reference/current/brew.html](https://www.elastic.co/guide/en/elasticsearch/reference/current/brew.html)

Elastic publishes Homebrew formulae so you can install Elasticsearch with the [Homebrew](https://brew.sh/) package manager.

To install with Homebrew, you first need to tap the Elastic Homebrew repository:

```
brew tap elastic/tap
```

Once you’ve tapped the Elastic Homebrew repo, you can use `brew install` to install the default distribution of Elasticsearch:

```
[~/.../transforming-data-and-testing-continuously-chapter-5/databases(master)]$ brew install elastic/tap/elasticsearch-full
Updating Homebrew...
==> Auto-updated Homebrew!
Updated 1 tap (homebrew/core).
==> Updated Formulae
allure              bedtools            c-blosc             convox              csvq                golang-migrate      helmfile            micronaut           mitmproxy

==> Installing elasticsearch-full from elastic/tap
==> Downloading https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.5.0-darwin-x86_64.tar.gz?tap=elastic/homebrew-tap
######################################################################## 100.0%
==> codesign -f -s - /usr/local/Cellar/elasticsearch-full/7.5.0/libexec/modules/x-pack-ml/platform/darwin-x86_64/controller.app --deep
==> Caveats
Data:    /usr/local/var/lib/elasticsearch/elasticsearch_casiano/
Logs:    /usr/local/var/log/elasticsearch/elasticsearch_casiano.log
Plugins: /usr/local/var/elasticsearch/plugins/
Config:  /usr/local/etc/elasticsearch/

To have launchd start elastic/tap/elasticsearch-full now and restart at login:
  brew services start elastic/tap/elasticsearch-full
Or, if you don't want/need a background service you can just run:
  elasticsearch
==> Summary
🍺  /usr/local/Cellar/elasticsearch-full/7.5.0: 921 files, 451.1MB, built in 1 minute 44 seconds
```

#### Directory layout for Homebrew installs

<table cellpadding="4px" border="1">
    <colgroup>
        <col class="col_1">
        <col class="col_2">
        <col class="col_3">
        <col class="col_4">
    </colgroup>
    <thead>
        <tr>
            <th align="left" valign="top">Type</th>
            <th align="left" valign="top">Description</th>
            <th align="left" valign="top">Default Location</th>
            <th align="left" valign="top">Setting</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="left" valign="top">
                <p><span class="strong strong"><strong>home</strong></span></p>
            </td>
            <td align="left" valign="top">
                <p>Elasticsearch home directory or <code class="literal">$ES_HOME</code></p>
            </td>
            <td align="left" valign="top">
                <p><code class="literal">/usr/local/var/homebrew/linked/elasticsearch-full</code></p>
            </td>
            <td align="left" valign="top">&nbsp;</td>
        </tr>
        <tr>
            <td align="left" valign="top">
                <p><span class="strong strong"><strong>bin</strong></span></p>
            </td>
            <td align="left" valign="top">
                <p>Binary scripts including <code class="literal">elasticsearch</code> to start a node
                    and <code class="literal">elasticsearch-plugin</code> to install plugins</p>
            </td>
            <td align="left" valign="top">
                <p><code class="literal">/usr/local/var/homebrew/linked/elasticsearch-full/bin</code></p>
            </td>
            <td align="left" valign="top">&nbsp;</td>
        </tr>
        <tr>
            <td align="left" valign="top">
                <p><span class="strong strong"><strong>conf</strong></span></p>
            </td>
            <td align="left" valign="top">
                <p>Configuration files including <code class="literal">elasticsearch.yml</code></p>
            </td>
            <td align="left" valign="top">
                <p><code class="literal">/usr/local/etc/elasticsearch</code></p>
            </td>
            <td align="left" valign="top">
                <p><code
                        class="literal"><a class="link" href="settings.html#config-files-location" title="Config files location">ES_PATH_CONF</a></code>
                </p>
            </td>
        </tr>
        <tr>
            <td align="left" valign="top">
                <p><span class="strong strong"><strong>data</strong></span></p>
            </td>
            <td align="left" valign="top">
                <p>The location of the data files of each index / shard allocated
                    on the node. Can hold multiple locations.</p>
            </td>
            <td align="left" valign="top">
                <p><code class="literal">/usr/local/var/lib/elasticsearch</code></p>
            </td>
            <td align="left" valign="top">
                <p><code class="literal">path.data</code></p>
            </td>
        </tr>
        <tr>
            <td align="left" valign="top">
                <p><span class="strong strong"><strong>logs</strong></span></p>
            </td>
            <td align="left" valign="top">
                <p>Log files location.</p>
            </td>
            <td align="left" valign="top">
                <p><code class="literal">/usr/local/var/log/elasticsearch</code></p>
            </td>
            <td align="left" valign="top">
                <p><code class="literal">path.logs</code></p>
            </td>
        </tr>
        <tr>
            <td align="left" valign="top">
                <p><span class="strong strong"><strong>plugins</strong></span></p>
            </td>
            <td align="left" valign="top">
                <p>Plugin files location. Each plugin will be contained in a subdirectory.</p>
            </td>
            <td align="left" valign="top">
                <p><code class="literal">/usr/local/var/homebrew/linked/elasticsearch/plugins</code></p>
            </td>
            <td align="left" valign="top">&nbsp;</td>
        </tr>
    </tbody>
</table>

This installs the most recently released default distribution of Elasticsearch. To install the OSS distribution, specify `elastic/tap/elasticsearch-oss`.

### Running Elasticsearch

```
$ which elasticsearch
/usr/local/bin/elasticsearch
$ elasticsearch --version
OpenJDK 64-Bit Server VM warning: Option UseConcMarkSweepGC was deprecated in version 9.0 and will likely be removed in a future release.
Version: 7.5.0, Build: default/tar/e9ccaed468e2fac2275a3761849cbee64b39519f/2019-11-26T01:06:52.518245Z, JVM: 13.0.1
$ elasticsearch
...
[2019-12-18T09:52:26,489][INFO ][o.e.t.TransportService   ] [sanclemente-2.local] publish_address {127.0.0.1:9300}, bound_addresses {[::1]:9300}, {127.0.0.1:9300}
...
[2019-12-18T09:52:28,853][INFO ][o.e.h.AbstractHttpServerTransport] [sanclemente-2.local] publish_address {127.0.0.1:9200}, bound_addresses {[::1]:9200}, {127.0.0.1:9200}
...
[2019-12-18T09:52:58,833][WARN ][o.e.c.r.a.DiskThresholdMonitor] [sanclemente-2.local] high disk watermark [90%] exceeded on [VK6QoFsVQeGBAcAKIC3vLA][sanclemente-2.local][/usr/local/var/lib/elasticsearch/nodes/0] free: 19.3gb[8.2%], shards will be relocated away from this node
```

* [High disk watermark exceeded: settings that can be configured in the elasticsearch.yml config file ](https://www.elastic.co/guide/en/elasticsearch/reference/current/disk-allocator.html)
## Referencias para Elasticsearch

* [Elasticsearch Essentials. Bharvi Dixit 2016](https://puntoq.ull.es/permalink/f/15vbjs7/ullsfx3710000000587601)
* [Curso de Elastic Search](https://www.youtube.com/playlist?list=PL2yjEVbRSX7Wi8knN-difCHVYNtvPGYt7) en Paradigma Digital. Vídeos de Youtube


# Kibana


## [Setup Kibana](https://www.elastic.co/guide/en/kibana/current/setup.html)

## [Installing Kibana](https://www.elastic.co/guide/en/kibana/current/install.html)

### Installing Kibana on MacOS with Homebrew

This  text is a copy of [https://www.elastic.co/guide/en/kibana/current/brew.html#brew](https://www.elastic.co/guide/en/kibana/current/brew.html#brew).

Elastic publishes Homebrew formulae so you can install Kibana with the [Homebrew](https://brew.sh/) package manager.

To install with Homebrew, you first need to tap the Elastic Homebrew repository:

```
brew tap elastic/tap
```

Once you’ve tapped the Elastic Homebrew repo, you can use `brew install` to install the default distribution of Kibana:

```
$ brew install elastic/tap/kibana-full
Updating Homebrew...
==> Installing kibana-full from elastic/tap
==> Downloading https://artifacts.elastic.co/downloads/kibana/kibana-7.5.0-darwin-x86_64.tar.gz?tap=elastic/homebrew-tap
######################################################################## 100.0%

==> Caveats
Config: /usr/local/etc/kibana/
If you wish to preserve your plugins upon upgrade, make a copy of
/usr/local/opt/kibana-full/plugins before upgrading, and copy it into the
new keg location after upgrading.

To have launchd start elastic/tap/kibana-full now and restart at login:
  brew services start elastic/tap/kibana-full
Or, if you don't want/need a background service you can just run:
  kibana
==> Summary
🍺  /usr/local/Cellar/kibana-full/7.5.0: 94,615 files, 633.7MB, built in 8 minutes 18 seconds
```

This installs the most recently released default distribution of Kibana. To install the OSS distribution, specify `elastic/tap/kibana-oss`.

#### Directory layout for Homebrew installs

When you install Kibana with `brew install`, the config files, logs, and data directory are stored in the following locations.

<table>
<thead>
    <tr>
        <th align="left" valign="top">Type</th>
        <th align="left" valign="top">Description</th>
        <th align="left" valign="top">Default Location</th>
        <th align="left" valign="top">Setting</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td align="left" valign="top">
            <p><span class="strong strong"><strong>home</strong></span></p>
        </td>
        <td align="left" valign="top">
            <p>Kibana home directory or <code class="literal">$KIBANA_HOME</code></p>
        </td>
        <td align="left" valign="top">
            <p><code class="literal">/usr/local/var/homebrew/linked/kibana-full</code></p>
        </td>
        <td align="left" valign="top">&nbsp;</td>
    </tr>
    <tr>
        <td align="left" valign="top">
            <p><span class="strong strong"><strong>bin</strong></span></p>
        </td>
        <td align="left" valign="top">
            <p>Binary scripts including <code class="literal">kibana</code> to start a node
                and <code class="literal">kibana-plugin</code> to install plugins</p>
        </td>
        <td align="left" valign="top">
            <p><code class="literal">/usr/local/var/homebrew/linked/kibana-full/bin</code></p>
        </td>
        <td align="left" valign="top">&nbsp;</td>
    </tr>
    <tr>
        <td align="left" valign="top">
            <p><span class="strong strong"><strong>conf</strong></span></p>
        </td>
        <td align="left" valign="top">
            <p>Configuration files including <code class="literal">kibana.yml</code></p>
        </td>
        <td align="left" valign="top">
            <p><code class="literal">/usr/local/etc/kibana</code></p>
        </td>
        <td align="left" valign="top">&nbsp;</td>
    </tr>
    <tr>
        <td align="left" valign="top">
            <p><span class="strong strong"><strong>data</strong></span></p>
        </td>
        <td align="left" valign="top">
            <p>The location of the data files of each index / shard allocated
                on the node. Can hold multiple locations.</p>
        </td>
        <td align="left" valign="top">
            <p><code class="literal">/usr/local/var/lib/kibana</code></p>
        </td>
        <td align="left" valign="top">
            <p><code class="literal">path.data</code></p>
        </td>
    </tr>
    <tr>
        <td align="left" valign="top">
            <p><span class="strong strong"><strong>logs</strong></span></p>
        </td>
        <td align="left" valign="top">
            <p>Log files location.</p>
        </td>
        <td align="left" valign="top">
            <p><code class="literal">/usr/local/var/log/kibana</code></p>
        </td>
        <td align="left" valign="top">
            <p><code class="literal">path.logs</code></p>
        </td>
    </tr>
    <tr>
        <td align="left" valign="top">
            <p><span class="strong strong"><strong>plugins</strong></span></p>
        </td>
        <td align="left" valign="top">
            <p>Plugin files location. Each plugin will be contained in a subdirectory.</p>
        </td>
        <td align="left" valign="top">
            <p><code class="literal">/usr/local/var/homebrew/linked/kibana-full/plugins</code></p>
        </td>
        <td align="left" valign="top">&nbsp;</td>
    </tr>
</tbody>
</table>

## Referencias para Kibana

* [Kibana 7 Quick Start Guide. Anurag Srivastava 2019](https://puntoq.ull.es/permalink/f/15vbjs7/ullsfx4100000007651082)