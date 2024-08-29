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

*Outras tecnologias foram utilizadas, elas estão incluidas junto com suas versões no arquivo package.json*

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
  - Login: 1
  - Senha: 4
