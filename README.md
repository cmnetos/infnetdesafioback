# REST API Exemplo

Este é um exemplo básico de API REST com utilização de ORM e banco de dados MySQL.

## Execução da API

Para a execução da API pode-se acessar https://infnetdesafio.herokuapp.com/ ou então para executar localmente é necessário criar um banco de dados e configurar as variáveis de ambiente no arquivo **nodemon.json** conforme os parâmetros abaixo:

- "MYSQL_HOST" = "",
- "MYSQL_USERNAME" = "",
- "MYSQL_PASSWORD" = "",
- "MYSQL_DATABASE" = ""

## Script de Banco de Dados

### Estrutura da tabela `cursos`

`CREATE TABLE cursos (`
  `id int(11) NOT NULL AUTO_INCREMENT,`
  `descricao varchar(100) COLLATE latin1_general_ci NOT NULL,`
  `created_at datetime NOT NULL,`
  `updated_at datetime NOT NULL`
`) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;`

-- --------------------------------------------------------

### Estrutura da tabela `usuarios`

`CREATE TABLE usuarios (`
  `id int(11) NOT NULL AUTO_INCREMENT,`
  `usuario varchar(100) COLLATE latin1_general_ci NOT NULL,`
  `password_hash varchar(100) COLLATE latin1_general_ci NOT NULL,`
  `created_at datetime NOT NULL,`
  `updated_at datetime NOT NULL`
`) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;`

### Indexes for table `cursos`

`ALTER TABLE cursosADD PRIMARY KEY (id),ADD UNIQUE KEY un_curso_descricao (descricao);`

### Indexes for table `usuarios`
`ALTER TABLE usuariosADD PRIMARY KEY (id),ADD UNIQUE KEY un_usuario_usuario (usuario);`

# API REST

A API REST é descrita abaixo

## Incluir usuário

### Solicitação

`POST /usuarios/`

### Corpo

`{ "usuario": "teste", "password": "12345678"}`

### Respostas

`HTTP/1.1 200 OK {"id": 4,   "usuario": "teste"}`

`HTTP/1.1 400 Bad Request {  "mensagem": "Falha na validação. Usuário é obrigatório e senha deve conter no mínimo 8 caracteres"}`



## Autenticar

### Solicitação

`POST /auth/`

### Corpo

`{ "usuario": "teste", "password": "12345678"}`

### Respostas

`HTTP/1.1 200 OK {  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjE1MzY5MjM0LCJleHAiOjE2MTU0NTU2MzR9.SveOm8sujQ0S_ezYS9Z01C2f-VGDcZVNK9KJDS3HTR2dA"}`

`HTTP/1.1 400 Bad Request {  mensagem: 'body sem usuario ou password.'}`

`HTTP/1.1 400 Bad Request No Body`

`HTTP/1.1 401 Unauthorized {mensagem: "sem token no cabecalho"}`

`HTTP/1.1 403 Forbidden{mensagem: "token invalido"}`



## Listar Cursos

### Solicitação

`GET /cursos/`

### Corpo

*No body*

### Respostas

`HTTP/1.1 200 OK {[]}`

## Erros comuns

`HTTP/1.1 404 Not Found`

`HTTP/1.1 500 Internal Server Error`
