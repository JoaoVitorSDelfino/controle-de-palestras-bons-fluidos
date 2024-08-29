<h1 align="center"> Controle de Palestras Bom Fluidos </h1>

# Introdução
Essa aplicação web é destinada para a criação de palestras destinadas ao projeto de extensão Bom Fuidos, tendo a possibilidade de criar, alterar e excluir palestras, bem como definir data, horário e outras especificações.
## Ferramentas utilizadas
Para desenvolver essa aplicação, foi utilizado as seguinte ferramenta de compilação:
- [IDE Visual Studio](https://code.visualstudio.com) (v1.92.2)
- Para a visualização do banco de dados, foi baixado as seguintes extensões:
  - [SQLite Viewer](https://marketplace.visualstudio.com/items?itemName=qwtel.sqlite-viewer) (v0.5.12)
  - [SQLite](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite) (v0.14.1)

Sobre as principais tecnologias/bibliotecas utilizadas, vale-se destacar as seguintes:
- [React.js](https://react.dev) (v.18.3.1)
- [Sqlite](https://www.sqlite.org) (v.5.1.1)
- [Sequelize](https://sequelize.org) (v.6.37.3)

*Outras tecnologias foram utilizadas, elas estão inclusas junto com suas versões no arquivo package.json*

## Como rodar
- Primeiramente, realizar o pull desse repositório (pode ser pelo GitHub Desktop ou pelo download ZIP do código)
- Abrir o arquivo do código por meio da IDE escolhida (é recomendado o Visual Studio)
- Abrir um novo terminal por meio do comando *ctrl + shift + '* ou clicando na opção *Terminal > New Terminal*
- Rodar o comando *npm install* para instalar as dependecias (Como o React.js, Sqlite e Sequelize)
- Rodar o comando *npm start* para iniciar a aplicação
- Abra um segundo terminal e rode os seguintes comandos para iniciar o banco de dados e a API:
  - cd src/api
  - node index.js
- Acesse [http://localhost:3000](http://localhost:3000) em qualquer navegar para acessar a aplicação
- Na tela de login, e preencha o login de acordo para acessar a aplicação como administrador:
  - Login: 2
  - Senha: 2

## Funcionalidades
### 1. Controle de palestras
  O aplicativo permite que o usuário com as devidas permissões crie, edite, exclua e visualize palestras.
  
<img src="https://github.com/user-attachments/assets/8ad49819-063e-48f6-b1c7-cdc86d68c93f" width="600" height="400">


  Cada palestra contém as seguintes informações a serem preenchidas:


<img src="https://github.com/user-attachments/assets/380d4ad5-222f-4ef0-acea-ed67539ac0e8" width="600" height="400">

#### 1.1 Operações
  As operações de criar, editar, excluir e visualizar palestras é feita por meio de uma API, que realiza se comunica com o backend do projeto e o banco de dados por meio das seguuintes rotas:
  - POST http://localhost:3001/api/palestras/addPalestra
  - GET http://localhost:3001/api/palestras/showPalestras
  - PUT http://localhost:3001/api/palestras/editPalestra/:id
  - DELETE http://localhost:3001/api/palestras/deletePalestra/:id

  Para editar ou excluir palestras, é preciso saber o seu ***id***, para isso é necessário ter permissão de administrador e clicar o botão "Mostrar Palestras".

### 2. Controle de usuários
  O controle de usuários funciona de forma parecida com o de palestras, mas ele define quais usuários possuem acesso a devidas partes da aplicação.

  Por exemplo, um participante só tem acesso a visualização de tabelas e mais nada, por questão de testes, aqui está uma conta de usuário participante:
    - Login: 1
    - Senha: 4
  
<img src="https://github.com/user-attachments/assets/cf86aea5-9974-49c9-ad2f-78043eab772a" width="600" height="400">


  Cada usuário contém as seguintes informações a serem preenchidas:


<img src="https://github.com/user-attachments/assets/eae2aad0-2282-4930-a30f-0edf2203c3c3" width="600" height="400">

#### 2.1 Operações
  As operações de criar, editar, excluir e visualizar usuário também é feita por meio de uma API, que realiza se comunica com o backend do projeto e o banco de dados por meio das seguuintes rotas:
  - POST http://localhost:3001/api/users/addUser
  - GET http://localhost:3001/api/users/showUsers
  - PUT http://localhost:3001/api/users/editUser/:id
  - DELETE http://localhost:3001/api/users/deleteUser/:id

  Para editar ou excluir usuários, é preciso saber o seu ***id***, para isso é necessário ter permissão de administrador e clicar o botão "Mostrar Usuários".
