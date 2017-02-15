# REPOSITORY STATUS
Sistema de status de repositorio github.

Author:      Ana Izabel Alfaro Jacobsen
Date:        2017-02-10 
  


## Configuração de ambiente

* Instalar o [node js](http://nodejs.org/) 
* Clonar o repositorio [https://github.com/jacobsenanaizabel/repository-status.git](https://github.com/jacobsenanaizabel/repository-status.git)
* npm install
* npm install -g grunt
* npm install -g grunt-cli
* npm install -g bower
* bower install 
* grunt server 
* localhost:9000 (a requisição para o grafico demmora um pouco)

#### ... e seja bem-vindo(a)!

### Tecnologias utilizadas 
* AngularJS 1.5
* JSHint
* Jasmine 
* Grunt
* Bower
* NPM
* SASS
* HTML5 

## Services
### Requests utilizados no sistema 

### Pegar dados gerais sobre um repositorio GIT
Retorna dados de todos os forks de um repositorio 

| Field            | Value                                                                 |
|----------------- |-----------------------------------------------------------------------|
| **URL Template** | https://api.github.com/repos/{{user}}/{{repository}}                  |
| **Method**       | GET                                                                   |
| **Security**     | public                                                                |


### Pegar todos os forks de um repositorio GIT
Retorna dados de todos os forks de um repositorio 

| Field            | Value                                                                 |
|----------------- |-----------------------------------------------------------------------|
| **URL Template** | https://api.github.com/repos/{{user}}/{{repository}}/forks            |
| **Method**       | GET                                                                   |
| **Security**     | public                                                                |


### Pegar todos os commits do ano feito em um repositorio
Retorna dados de todos os commits do ano separado por semana de um repositorio 

| Field            | Value                                                                      |
|----------------- |----------------------------------------------------------------------------|
| **URL Template** | https://api.github.com/repos/{{user}}/{{repository}}/stats/commit_activity |
| **Method**       | GET                                                                        |
| **Security**     | public                                                                     |


### Pegar todos os add e deletes na semana feito em um repositorio
Retorna a contagem de add e deletes da semana de um repositorio  

| Field            | Value                                                                      |
|----------------- |----------------------------------------------------------------------------|
| **URL Template** | https://api.github.com/repos/{{user}}/{{repository}}/stats/code_frequency |
| **Method**       | GET                                                                        |
| **Security**     | public                                                                     |
