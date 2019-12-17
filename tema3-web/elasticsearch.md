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


### Next steps

You now have a test Elasticsearch environment set up. Before you start serious development or go into production with Elasticsearch, you must do some additional setup:

*   Learn how to [configure Elasticsearch](settings.html "Configuring Elasticsearch").
*   Configure [important Elasticsearch settings](important-settings.html "Important Elasticsearch configuration").
*   Configure [important system settings](system-config.html "Important System Configuration").

[«  Install Elasticsearch with Docker](docker.html)   [Configuring Elasticsearch  »](settings.html)

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
