# Elasticseach

## Que es Elastic Search

Elasticsearch es  **un motor de búsqueda**:
* Desarrollado en Java
* Open Source
* Distribuido
* Escalable
* Basado en [lucene](https://lucene.apache.org/core/8_3_1/index.html)

### Lucene

<img src="https://lucene.apache.org/core/8_3_1/lucene_green_300.gif"> es una librería que implementa un full-text search engine. No es una aplicación sino una API 
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
  * [Elastic Query DSL 7.5](https://www.elastic.co/guide/en/elasticsearch/reference/7.5/query-dsl.html)
  * [Useful Elasticsearch Example Queries](https://dzone.com/articles/23-useful-elasticsearch-example-queries) DZone

## [Installing Elastic Search](https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html)

### Prerequisitos para la Instalación de Elastic Search

Elasticsearch is built on Java 8.

Instructions on how to install Java 8 are available on [Oracle’s website](https://docs.oracle.com/javase/8/docs/technotes/guides/install/install_overview.html)

You can run `java -version` 
from the command line to confirm that Java is installed and ready.

```
$ java --version
java 9.0.4
Java(TM) SE Runtime Environment (build 9.0.4+11)
Java HotSpot(TM) 64-Bit Server VM (build 9.0.4+11, mixed mode)
```

### Instalación de la versión del libro de ElasticSearch 

Una forma de instalarse ElasticSearch es ir a la página de descargas:

* [https://www.elastic.co/es/downloads/](https://www.elastic.co/es/downloads/)

La versión que se usa en el libro es la 5.2 que se puede descargar desde aquí:

* [https://www.elastic.co/es/downloads/past-releases/elasticsearch-5-2-2](https://www.elastic.co/es/downloads/past-releases/elasticsearch-5-2-2)

Aquí se puede encontrar una [guía de inicio rápido.](https://www.elastic.co/es/start).

### Instalación de la versión 6.4.2. Octubre 2018

Esta es la versión que he usado en mi instalación, [la 6.4.2](https://www.elastic.co/es/downloads/past-releases/elasticsearch-6-4-2) para seguir el libro a finales de 2018 y comienzos de 2019:

```
$ elasticsearch --version
Java HotSpot(TM) 64-Bit Server VM warning: Option UseConcMarkSweepGC was deprecated in version 9.0 and will likely be removed in a future release.
Version: 6.4.2, Build: default/tar/04711c2/2018-09-26T13:34:09.098244Z, JVM: 9.0.4
```

Once you download the archive, 
unzip it 
and run `bin/elasticsearch` from the command line. 

You should see a lot of output containing something like the following (much of the output is omitted here for brevity).

```
$ bin/elasticsearch
[INFO ][o.e.n.Node ] [] initializing ...
... many lines omitted ...
[INFO ][o.e.h.HttpServer ] [kAh7Q7Z] publish_address {127.0.0.1:9200},
    bound_addresses {[::1]:9200}, {127.0.0.1:9200}
[INFO ][o.e.n.Node            ] [kAh7Q7Z] started
[INFO ][o.e.g.GatewayService  ] [kAh7Q7Z] recovered [0] indices into
    cluster_state
```

Notice the **`publish_address`** and **`bound_addresses`** listed toward the end of the output. 
By default, **Elasticsearch binds TCP port 9200 for its HTTP endpoint**.

You can specify a lot of settings when setting up an Elasticsearch cluster. By default, is running in development mode.

A full discussion of the Elasticsearch cluster settings for version 5.2  is [Elastic’s Important System Configuration 5.2 page](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/system-config.html).
The same instructions [for the current version are here](https://www.elastic.co/guide/en/elasticsearch/reference/current/system-config.html)

To have Elasticsearch in the `PATH`, I have added a small script in my `~/.bash_profile`:

```
[~/campus-virtual/1819/ca1819/practicas(master)]$ cat ~/.bash_profile | sed -ne '/elastic/,/^$/p'
source ~/bin/elasticsearch-set
```

With this contents:

```
[~/campus-virtual/1819/ca1819/practicas(master)]$ cat ~/bin/elastic-search-set
export ES_HOME=~/Applications/elasticsearch-6.4.2
export PATH=$ES_HOME/bin:$PATH
```

### Instalación de la versión 7.5.0 Diciembre 2019

La version en Diciembre de 2019  es la [7.5.0](https://www.elastic.co/es/downloads/elasticsearch)

### Install Elasticsearch on macOS with Homebrew. Diciembre 2019

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

### Running Elasticsearch 7.5.0

```log
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

Para arreglar el `WARN`he editado el fichero de configuración `elasticsearch.yml` añadiendo la línea `cluster.routing.allocation.disk.watermark.high: 95%`:

```yml
[.../etc/elasticsearch]$ sed -ne '/cluster\./p' elasticsearch.yml 
# the most important settings you may want to configure for a production cluster.
cluster.name: elasticsearch_casiano
cluster.routing.allocation.disk.watermark.high: 95%
#cluster.initial_master_nodes: ["node-1", "node-2"]
```

Aunque ahora salen otros warnings y algun `INFO` quejumbroso:

```log
...
[2019-12-18T10:26:03,369][WARN ][o.e.b.BootstrapChecks    ] [sanclemente-2.local] the default discovery settings are unsuitable for production use; at least one of [discovery.seed_hosts, discovery.seed_providers, cluster.initial_master_nodes] must be configured
... 
[2019-12-18T10:27:04,078][INFO ][o.e.c.r.a.DiskThresholdMonitor] [sanclemente-2.local] low disk watermark [85%] exceeded on [VK6QoFsVQeGBAcAKIC3vLA][sanclemente-2.local][/usr/local/var/lib/elasticsearch/nodes/0] free: 19.2gb[8.2%], replicas will not be assigned to this node
```

#### Ruta root Elasticsearch

Si visitamos con el navegador `http://localhost:9200`:

![/assets/images/elasticsearch-root-page-9200.png](/assets/images/elasticsearch-root-page-9200.png)

#### La [ruta _cat](https://www.elastic.co/guide/en/elasticsearch/reference/current/cat.html)

* `curl localhost:9200/_cat` da una serie de endpoints 

    ```
    .../etc/elasticsearch]$ curl localhost:9200/_cat
    =^.^=
    /_cat/allocation
    /_cat/shards
    /_cat/shards/{index}
    /_cat/master
    /_cat/nodes
    /_cat/tasks
    /_cat/indices
    /_cat/indices/{index}
    /_cat/segments
    /_cat/segments/{index}
    /_cat/count
    /_cat/count/{index}
    /_cat/recovery
    /_cat/recovery/{index}
    /_cat/health
    /_cat/pending_tasks
    /_cat/aliases
    /_cat/aliases/{alias}
    /_cat/thread_pool
    /_cat/thread_pool/{thread_pools}
    /_cat/plugins
    /_cat/fielddata
    /_cat/fielddata/{fields}
    /_cat/nodeattrs
    /_cat/repositories
    /_cat/snapshots/{repository}
    /_cat/templates
    ```
* Modo verboso: `$ curl localhost:9200/_cat/master?v``

    ```
    id                     host      ip        node
    VK6QoFsVQeGBAcAKIC3vLA 127.0.0.1 127.0.0.1 sanclemente-2.local
    ```
* Help: `$ curl localhost:9200/_cat/master?help``

    ```
    id   |   | node id    
    host | h | host name  
    ip   |   | ip address 
    node | n | node name 
    ```
* Each of the commands accepts a query string parameter `h` which forces only those columns to appear: `curl localhost:9200/_cat/nodes?h=ip,port,heapPercent,name`

    ```
    [.../etc/elasticsearch]$ curl localhost:9200/_cat/nodes
    127.0.0.1 28 99 24 2.56   dilm * sanclemente-2.local
    [.../etc/elasticsearch]$ curl localhost:9200/_cat/nodes?help | head -n 5
    % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                    Dload  Upload   Total   Spent    Left  Speed
    100 17533  100 17533    0     0   903k      0 --:--:-- --:--:-- --:--:--  951k
    id                                 | id,nodeId                                   | unique node id                                                                                                   
    pid                                | p                                           | process id                                                                                                       
    ip                                 | i                                           | ip address                                                                                                       
    port                               | po                                          | bound transport port                                                                                             
    http_address                       | http                                        | bound http address                                                                                               
    [.../etc/elasticsearch]$ curl localhost:9200/_cat/nodes?h=ip,port,heapPercent,name
    127.0.0.1 9300 28 sanclemente-2.local
    ```




### Running ElasticSearch 6.4.2

Let us see where `elasticsearch` 6.4.2 is installed:

```
[~]$ which elasticsearch
/Users/casiano/Applications/elasticsearch-6.4.2/bin/elasticsearch
```

Let us execute `elasticsearch` 6.4.2 in development mode.
The flow of output when executed is overwhelming:

```
[~/sol-nodejs-the-right-way(master)]$ elasticsearch
[Java HotSpot(TM) 64-Bit Server VM warning: Option UseConcMarkSweepGC was deprecated in version 9.0 and will likely be removed in a future release.
[2019-12-15T11:28:46,903][INFO ][o.e.n.Node               ] [] initializing ...
  ...
[2019-12-15T11:28:53,337][INFO ][o.e.p.PluginsService     ] [9jAGWs_] loaded module [aggs-matrix-stats]
[2019-12-15T11:28:53,338][INFO ][o.e.p.PluginsService     ] [9jAGWs_] loaded module [analysis-common]
  ...
  
 [2019-12-15T11:29:10,938][INFO ][o.e.t.TransportService   ] [9jAGWs_] publish_address {127.0.0.1:9300}, bound_addresses {[::1]:9300}, {127.0.0.1:9300}
  ...
[2019-12-15T11:29:14,175][INFO ][o.e.x.s.t.n.SecurityNetty4HttpServerTransport] [9jAGWs_] publish_address {127.0.0.1:9200}, bound_addresses {[::1]:9200}, {127.0.0.1:9200}
```

We can see in the last line that is listening at 9200:

```
[2019-12-15T11:29:14,175][INFO ][o.e.x.s.t.n.SecurityNetty4HttpServerTransport] [9jAGWs_] publish_address {127.0.0.1:9200}, bound_addresses {[::1]:9200}, {127.0.0.1:9200}
```

Now we can use insomnia or any other HTTP REST client to make queries to the elasticsearch server:

![assets/images/insomnia-elasticsearch-1.png](/assets/images/insomnia-elasticsearch-1.png)

* [Useful Elasticsearch Example Queries](https://dzone.com/articles/23-useful-elasticsearch-example-queries) DZone

## Referencias para Elasticsearch

* [Elasticsearch Essentials. Bharvi Dixit 2016](https://puntoq.ull.es/permalink/f/15vbjs7/ullsfx3710000000587601) Libro en PuntoQ BULL
* [Curso de Elastic Search](https://www.youtube.com/playlist?list=PL2yjEVbRSX7Wi8knN-difCHVYNtvPGYt7) en Paradigma Digital. Vídeos de Youtube. Minuto 39 empieza con Kibana
* [Elastic Query DSL 7.5](https://www.elastic.co/guide/en/elasticsearch/reference/7.5/query-dsl.html)
* [Useful Elasticsearch Example Queries](https://dzone.com/articles/23-useful-elasticsearch-example-queries) DZone
* [npm: Official Elasticsearch client library for Node.js](https://github.com/elastic/elasticsearch-js    )

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

## Haciendo Consultas a Elasticsearch con Kibana

Creamos para la versión 7.5. de Elasticsearch el index de libros de Guttenberg con el fichero que habíamos preparado en la  práctica
anterior:

```
[~/.../t3-p8-commanding-databases-marreA/esclu(master)]$ ./esclu bulk ../t1-p7-transforming-data-and-testing-continuously-marreA/data/bulk_pg.ldj -i books -t book 
```

Una vez instalado Kibana lo arrancamos:

```log
[.../etc/elasticsearch]$ kibana
  log   [11:08:38.205] [info][plugins-system] Setting up [15] plugins: [timelion,features,code,security,licensing,spaces,uiActions,newsfeed,expressions,inspector,embeddable,advancedUiActions,data,eui_utils,translations]
  ...
  log   [11:08:38.225] [warning][config][plugins][security] Generating a random key for xpack.security.encryptionKey. To prevent sessions from being invalidated on restart, please set xpack.security.encryptionKey in kibana.yml
  log   [11:08:38.227] [warning][config][plugins][security] Session cookies will be transmitted over insecure connections. This is not recommended.
  ...
  log   [11:09:12.590] [warning][licensing][plugins] License information could not be obtained from Elasticsearch for the [data] cluster. Error: Request Timeout after 30000ms
  log   [11:09:13.610] [warning][legacy-plugins] Skipping non-plugin directory at /usr/local/Cellar/kibana-full/7.5.0/libexec/src/legacy/core_plugins/visualizations
  ...
  log   [11:09:20.088] [warning][config][deprecation] Environment variable "DATA_PATH" will be removed.  It has been replaced with kibana.yml setting "path.data"
  ...
  log   [11:09:24.245] [warning][encrypted_saved_objects] Generating a random key for xpack.encrypted_saved_objects.encryptionKey. To be able to decrypt encrypted saved objects attributes after restart, please set xpack.encrypted_saved_objects.encryptionKey in kibana.yml
  ... from failing on restart, please set xpack.reporting.encryptionKey in kibana.yml
  log   [11:09:29.003] [info][status][plugin:reporting@7.5.0] Status changed from uninitialized to green - Ready
  log   [11:09:29.151] [info][listening] Server running at http://localhost:5601
  log   [11:09:29.917] [info][server][Kibana][http] http server running at http://localhost:5601
```


Por defecto Kibana corre en el puerto 5601.

Abrimos el navegador en [http://localhost:5601](http://localhost:5601) y hacemos click en las herramientas de desarrollo (la llave inglesa) en el menú de la izquierda. Esto nos abre un panel como este en el que podemos hacer requests al servidor de Elasticsearch:

![/assets/images/kibana-query-2-elastic-search.png](/assets/images/kibana-query-2-elastic-search.png)


Algunos ejemplos de queries:

```

GET _cat/indices?v


GET books/_search
{
  "query": {
    "match": { 
      "authors": "Twain" 
    }
  }
}

GET books/_search
{
  "query": {
    "query_string": {
      "query": "authors:Twain AND subjects:Missouri AND title:Sawyer" 
    }
  }
}

GET books/_search
{
  "query": {
    "query_string": {
      "fields": ["authors", "subjects", "title"], 
      "query": "Twain AND Missouri AND Sawyer" 
    }
  }
}

POST test/test/1
{
  "title": "hello world"
}

GET test/test/1

POST test/_doc/2
{
  "title": "hola mundo"
}

GET test/_doc/2

PUT test/_doc/2
{
    "title" : "bonjour monde",
    "tags" : ["red", "blue"]
}

PUT test/_doc/2
{
    "tags" : ["green", "orange"]
}


POST test/_doc/3
{
    "title" : "SYTWS",
    "tags" : ["red", "blue"]
}

POST test/_update/3
{
    "script" : {
        "source": "ctx._source.tags = params.colors",
        "params" : {
            "colors" : ["green"]
        }
    }
}

GET test/_doc/3

DELETE test/
```

## Referencias para Kibana

* [Curso de Elastic Search](https://youtu.be/UIN2NeMb7xc?t=2345) en Paradigma Digital. Vídeos de Youtube. Minuto 39 empieza con Kibana
* [Kibana 7 Quick Start Guide. Anurag Srivastava 2019](https://puntoq.ull.es/permalink/f/15vbjs7/ullsfx4100000007651082). Libro. PuntoQ ULL
* [Video: Primeros pasos con Kibana](https://www.elastic.co/es/webinars/getting-started-kibana?elektra=startpage)