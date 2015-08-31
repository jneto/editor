##Editor

Esse projeto é um protótipo de um editor de textos usando a propriedade contenteditable.

É possível formatar o texto com os comandos:

* Ctrl + b: negrito
* Ctrl + i: itálico
* Ctrl + u: sublinhado

Também é possível arrastar uma imagem do sistema de arquivos para o editor.

###Dependências

Para instalar as dependências basta rodar o comando:

    $ npm install

###Build

Para buildar o sistema, basta executar:

    $ grunt build

É possível deixar o build em modo watch rodando o comando:

    $ grunt

###Servidor

Para subir o servidor execute:

    $ node server.js.

###Testes

Para rodar os testes é necessário baixar o selenium-server-standalone-[version].jar [daqui](http://selenium-release.storage.googleapis.com/index.html), e adicioná-lo na pasta bin.

No meu caso eu baixei a versão 2.47.1 [daqui](http://selenium-release.storage.googleapis.com/2.47/selenium-server-standalone-2.47.1.jar). Se você baixou uma versão diferente, altere a opção selenium.serverPath em nightwatch.json.

Para executar os testes, suba o servidor e execute o comando:

    $ node nightwatch.js
