# Officers Service  #

## Descrição (Description) ##

**Português**: Neste projeto apresento um sistema de cadastro e consulta de oficiais do exército que estão tanto na ativa quanto na reserva. Para este projeto utilizei a arquitetura MVC e técnicas de desenvolvimento que vão desde a manipulação de dados utilizando o Sequelize até a utilização de URLs dinâmicas no frontend utilizando Handlebars para dar mais dinamicidade à view. 

**Obs.:**
Aproveitei, neste projeto, a oportunidade de desenvolver um pouco mais meus conhecimentos e experiência lidando com o Frontend, portanto, diferente dos demais este conterá um pouco mais CSS.

**English**: 

## Tecnologias (Technologies) ##

- **Node.js**
- **Express**
- **Express-Handlebars**
- **Nodemon**
- **Sequelize**
- **HTML**
- **CSS**

## Instalação (Installation) ##

Certifique-se de ter o Node.js e o MySQL instalados em sua máquina. Clone o repositório e instale as dependências com o comando abaixo:

Make sure you have Node.js and MySQL installed on your machine. Clone the repository and install the dependencies with the command below:

```bash
cd seu_repositorio
git clone https://github.com/CaduConrado/Node-with-Sequelize
cd military_officers
npm install
```

## Como Usar (How to Use) ##

Para iniciar o sistema, execute o seguinte comando no terminal: 

To start the system, run the following command in the terminal:

```bash
npm start
```

**Português**: Com isso você receberá uma mensagem no terminal informando que o servidor está rodando. Podendo acessar a aplicação via navegador através da porta setado no código.

**English**: With this you will receive a message on the terminal informing you that the server is running. You can access the application via browser through the port set in the code.

## Árvore da Estrutra (Structure Tree): 
```
   index.js
   package-lock.json
   package.json
   
+---controller
       ArmaController.js
       OfficerController.js
       PatronController.js
       
+---db
    conn.js
    
+---models
       Arma.js
       Officer.js
       Patron.js
       
+---public
   +---css
        styles.css
        
+---routes
    armaRoutes.js
    officerRoutes.js
    patronRoutes.js
       
+---views
    addOfficer.handlebars
    home.handlebars
    officer.handlebars
    officerEdit.handlebars
    officers.handlebars   
    +---layouts
        main.handlebars
```
## Exemplo (Example): ##
Tendo em vista o melhor entendimento do fluxo de funcionamento do projeto desenvolvi este frontend para demonstrar a funcionalidade das rotas presentes em **routes/**. 

## Tela Inicial ##
![Página Inicial](https://github.com/CaduConrado/Node-with-Sequelize/blob/main/military_officers/assets/home.png)

## Tela de Cadastro ##
![Cadastro de Oficiais](https://github.com/CaduConrado/Node-with-Sequelize/blob/main/military_officers/assets/cadaster.png)

## Tela de Consulta de Todos Oficiais Cadastrados ##
![Consultando Todos os Cadastros](https://github.com/CaduConrado/Node-with-Sequelize/blob/main/military_officers/assets/allOfficers.png)

## Consultando Dados de um Oficial Específico ##
![Consultando Cadastro Específico](https://github.com/CaduConrado/Node-with-Sequelize/blob/main/military_officers/assets/officerDetails.png)

## Editando Cadastro de Oficial ##
![Editando Cadastro](https://github.com/CaduConrado/Node-with-Sequelize/blob/main/military_officers/assets/officerEdit.png)



## Estrutura do Projeto (Project Structure) ##

- **index.js**: Contém o código principal do sistema.
- **assets/**: Contém as imagens do projeto.
- **controller/**: Na pasta Controller, última parte do acrônimo MVC, é onde ocorre geralmente a integração do Model com a View, onde temos a nossa lógica do projeto sendo trabalhada.
- **models/**: Aqui está a primeira parte do acrônimo MVC, temos a pasta Models que será responsável por tudo relacionado a integração com o Banco de Dados.
- **public/**: Onde nós temos os nosso static files (arquivos estáticos), como por exemplo o nosso arquivo CSS para o frontend.
- **routes/**: A pasta routes é onde teremos os nossos arquivos responsáveis pelas rotas do nosso projeto, aode iremos criar as nossas urls responsáveis por cada ação de CRUD. 
- **views/**: Em Views, a segunda parte do acrônimo MVC, é onde nós teremos tudo relacionado ao frontend, tudo que será apresentado visualmente para o usuário do sistema.

## Dependências (Dependencies)

- **Express**: Utilizado para criação das rotas.
- **Express-Handlebars**: Utilizado para a criação de layouts reutilizáveis no frontend.
- **Nodemon**: Utilizado para otimizar o desenvolvimento.
- **Mysql2**: Utilizado para utilizar o Sequelize.
- **Sequelize**: ORM utilizado para realizarmos as nossas operações com banco de dados de forma mais eficiente.

## Contribuição (Contribution) ##

**Português**: Sinta-se à vontade para contribuir com o projeto, sugerindo melhorias ou relatando problemas.

**English**: Feel free to contribute to the project by suggesting improvements or reporting issues.