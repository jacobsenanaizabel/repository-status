# REPOSITORY STATUS
Sistema de status de qualquer repositorio github.

Author:      Ana Izabel Alfaro Jacobsen
Date:        2017-02-10 
  

## Services
### Headers de request

### Pegar todos os forks de um repositorio GIT
Retorna dados de todos os forks de um repositorio 

| Field            | Value                                                                 |
|----------------- |-----------------------------------------------------------------------|
| **URL Template** | https://api.github.com/repos/{{user}}/{{repository}}/forks            |
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
