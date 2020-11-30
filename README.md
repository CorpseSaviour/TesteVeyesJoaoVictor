# TesteVeye

Teste para vaga de desenvolvedor Front-end para V.eye utilizando diretivas 
do repositório https://github.com/lucianoseibel/teste-front-end

## Instalação

Comandos de teste 

...shell
...cd /local-do-projeto
...ng serve

## Desenvolvimento

### Construido utilizando

[Angular CLI](https://github.com/angular/angular-cli) versão 10.1.2.
Framework open-source baseado em TypeScript para desenvolvimento de aplicações web,
incluindo todas as suas dependências, como:
[Bootstrap](https://github.com/twbs/bootstrap) versão 4.5.3
Um Framework open-source de CSS responsivo 
[RXJS](https://github.com/ReactiveX/rxjs) versão 6.6.3
Uma API para programação assíncrona

## Pre-requisitos

Pre-requisitos para desenvolvimento e manutenção do projeto

Node 6.14.6
https://nodejs.org/en/download/
Visual Studio Code (ou editor de código fonte semelhante)
https://code.visualstudio.com/download
Git
(https://git-scm.com/downloads)

### Setting up Dev

Clonar repositório a partir do github

```shell
git clone https://github.com/CorpseSaviour/TesteVeyesJoaoVictor.git
npm install
```

## Testes

Para servidor de desenvolvimento, utilize o comando `ng serve`, o servidor irá servir a aplicação em `http://localhost:4200/`,
a aplicação ira recarregar automaticamente apos qualquer mudança nos arquivos fonte 

```shell
ng serve
```

Para testes unitários, utilize o comando `ng test`, testes serão executados via [Karma](https://karma-runner.github.io).

```shell
ng test
```

### Build e Deploy

Para build de distribuição, utilizar o comando `ng build`, build sera armazenada na pasta `dist/`, utilizar a flag `--prod` para build de produção.

```shell
ng build --prod
```

Para deploy do projeto, fazer upload da build para o AWS S3
