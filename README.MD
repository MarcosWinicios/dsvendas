

<h1 align="center">
    <a href="https://dashsales.netlify.app/" alt=""> DS Vendas </a>
</h1>

<h3 align="center">
	Analise o desempenho das suas vendas por diferentes perspectivas
	
</h3>



<h4 align="center">
	🚧   Concluído 🚀 🚧
</h4>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#-sobre-o-projeto)
   * [Arquitetura](#-arquitetura)
   
   * [Layout](#-layout)
     
   * [Como executar o projeto](#-como-executar-o-projeto)
     
   * [Tecnologias](#-tecnologias)
     
   * [Autor](#-autor)
   
<!--te-->


## 💻 Sobre o projeto

DS Vendas - é um simples projeto onde é exibido um dashboard contendo informações sobre as vendas realizadas por um time de vendedores.
Estas informações são obtidas a partir de dados fornecidos por um BackEnd construído com Spring Boot.

Projeto desenvolvido durante a **Semana Spring React 4** oferecida pela [DEVSUPERIOR](https://devsuperior.com.br/).

- OBS.: Ao acessar a página do projeto, espere um momento até que os dados sejam carregados. Isto ocorre porque o plano gratuito do Heroku não mantém a API bem otimizada. 
---

#### ⚙️ Funcionalidades

- [x] Exibição das iformações em gráficos 
- [x] Exibição das informações em tabelas
  - [x] Tabela exibida com recurso de paginação
  
---
## Arquitetura

### Modelo conceitual
![Image](https://github.com/MarcosWinicios/dsvendas/blob/main/documentation/class-diagram.png "Padrão camadas")

### Padrão de camadas escolhido
![Image](https://github.com/MarcosWinicios/dsvendas/blob/main/documentation/camadas.png "Padrão camadas")


## 🎨 Layout


### Home
![Image](https://github.com/MarcosWinicios/dsvendas/blob/main/documentation/home.png)

### Dashboard
![Image](https://github.com/MarcosWinicios/dsvendas/blob/main/documentation/dashboard.png)


---

## 🚀 Como executar o projeto

Este projeto é divido em duas partes:
1. Backend (pasta back-end) 
2. Frontend (pasta front-end)

💡O front-end precisa que o  back-end esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Java JDK 11](https://www.oracle.com/br/java/technologies/javase-jdk11-downloads.html), 
[Spring Tools Suite 4(STS)](https://spring.io/tools), [Yarn](https://classic.yarnpkg.com/en/).

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Servidor (Backend)

```bash

# Clone este repositório
$ git@github.com:MarcosWinicios/dsvendas.git

# Importe o projeto no STS na pasta back-end

# Espere o Maven baixar e instalar as dependências

# Execute a aplicação

# O servidor inciará na porta:8080 - acesse http://localhost:8080

```
Você pode acessar as respostas dos endpoints através do [Postman](https://www.postman.com/)

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git@github.com:MarcosWinicios/dsvendas.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd projeto-sds4

# Vá para a pasta da aplicação Front End
$ cd front-end

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **FrontEnd**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[React Icons](https://react-icons.github.io/react-icons/)**
-   **[Axios](https://github.com/axios/axios)**
-   **[Bootstrap](https://getbootstrap.com.br/)**
-   **[React Dropzone](https://github.com/react-dropzone/react-dropzone)**
-   **[Apexcharts](https://apexcharts.com/)**

> Veja o arquivo  [package.json](https://github.com/MarcosWinicios/dsvendas/blob/main/front-end/package.json)

#### **BackEnd**  ([Spring](https://spring.io/)  +  [Java](https://www.oracle.com/br/java/))

-   **[Spring boot](https://spring.io/projects/spring-boot)**
-   **[Spring Security](https://spring.io/projects/spring-security)**
-   **[H2 Database](https://www.h2database.com/html/main.html)**
-   **[PostgreSQL](https://www.postgresql.org/)**
-   **[Spring Data JPA](https://spring.io/projects/spring-data-jpa)**
-   **[Maven](https://maven.apache.org/)**

> Veja o arquivo  [pom.xml](https://github.com/MarcosWinicios/dsvendas/blob/main/back-end/pom.xml)


#### [](https://github.com/tgmarinho/Ecoleta#utilit%C3%A1rios)**Utilitários**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**
-   IDE: **[Spring Tools Suite 4](https://spring.io/tools)**
-   Teste de API:  **[Postman](https://www.postman.com/)**
-   Fontes:  **[Ubuntu](https://fonts.google.com/specimen/Ubuntu)**


## 🦸 Autor

<a href="https://github.com/MarcosWinicios">
 <img style="border-radius: 50%;" src="https://github.com/MarcosWinicios.png?s=60&v=4" width="100px;" alt="Marcos Winicios"/>
 <br />
 <sub><b>Marcos Winicios</b></sub></a> <a href="https://github.com/MarcosWinicios" title="Marcos Winicios">🚀</a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Marcos-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/marcoswp/)](https://www.linkedin.com/in/marcoswp/) 
[![Gmail Badge](https://img.shields.io/badge/-pmarcoswinicios@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:pmarcoswinicios@gmail.com)](mailto:pmarcoswinicios@gmail.com)

---


