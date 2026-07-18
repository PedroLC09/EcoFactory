# EcoFactory - Sistema de Monitoramento e Gestão Industrial

Sistema Web Full Stack desenvolvido para centralizar informações industriais, substituindo o controle realizado em planilhas por uma plataforma integrada.

---

# Sumário

- [Visão Geral](#visão-geral)
- [Problema](#problema)
- [Objetivos](#objetivos)
- [Público-alvo](#público-alvo)
- [Escopo do Projeto](#escopo-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Arquitetura do Projeto](#arquitetura-do-projeto)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Banco de Dados](#banco-de-dados)
- [Requisitos Funcionais](#requisitos-funcionais)
- [Requisitos Não Funcionais](#requisitos-não-funcionais)
- [Instalação](#instalação)
- [Execução](#execução)
- [API REST](#api-rest)
- [Dashboard](#dashboard)
- [Testes](#testes)
- [Benefícios Esperados](#benefícios-esperados)
- [Restrições](#restrições)
- [Critérios de Aceitação](#critérios-de-aceitação)
- [Paleta de Cores](#paleta-de-cores)
- [Protótipo](#protótipo)
- [Resumo Executivo](#resumo-executivo)

---

# Visão Geral

O **EcoFactory** é um sistema Web Full Stack desenvolvido para gerenciar informações industriais de maneira integrada.

O objetivo é substituir planilhas utilizadas na operação da empresa por uma plataforma capaz de armazenar, consultar e organizar dados de:

- Máquinas
- Produção
- Sustentabilidade
- Indicadores
- Segurança

---

# Problema

Atualmente a empresa utiliza diversas planilhas para registrar informações industriais.

Esse modelo gera problemas como:

- Dificuldade para localizar informações;
- Duplicidade de dados;
- Falta de integração;
- Erros de preenchimento;
- Baixa produtividade;
- Dificuldade na geração de indicadores.

---

# Objetivos

## Objetivo Geral

Desenvolver uma aplicação Web Full Stack para centralizar as informações industriais.

## Objetivos Específicos

- Cadastro de máquinas;
- Registro de produção;
- Registro de consumo de recursos;
- Registro de ocorrências;
- Dashboard com indicadores;
- API REST integrada;
- Banco de dados PostgreSQL.

---

# Público-alvo

O sistema destina-se a:

- Supervisores de produção;
- Técnicos de manutenção;
- Gestores industriais;
- Profissionais de segurança;
- Administradores da fábrica.

---

# Escopo do Projeto

## Funcionalidades Implementadas

- Cadastro de máquinas
- Consulta de máquinas
- Edição de máquinas
- Exclusão de máquinas
- Registro de produção
- Dashboard
- Integração com PostgreSQL
- API REST
- Testes automatizados

## Fora do Escopo

Nesta versão do projeto não foram implementados:

- Login de usuários;
- Controle de permissões;
- Relatórios em PDF;
- Aplicativo mobile;
- Integração com sensores IoT em tempo real.

---

# Tecnologias Utilizadas

## Front-end

- HTML5
- CSS3
- JavaScript

## Back-end

- Node.js
- Express

## Banco de Dados

- PostgreSQL

## Testes

- Jest
- Supertest

## Versionamento

- Git
- GitHub

---

# Arquitetura do Projeto

```
Frontend
      │
      ▼
API REST (Express)
      │
      ▼
PostgreSQL
```

---

# Estrutura de Pastas

```
EcoFactory
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── routes
│   │   ├── database
│   │   └── utils
│   │
│   ├── tests
│   ├── package.json
│   └── server.js
│
├── frontend
│   ├── css
│   ├── js
│   ├── pages
│   └── index.html
│
├── database
│   └── consultas.sql
│
└── README.md
```

---

# Banco de Dados

O projeto utiliza PostgreSQL.

As tabelas principais são:

- machines
- productions

A criação do banco pode ser realizada utilizando o arquivo:

```
database/consultas.sql
```

---

# Requisitos Funcionais

| Código | Requisito |
|---------|-----------|
| RF01 | Cadastrar máquinas |
| RF02 | Listar máquinas |
| RF03 | Editar máquinas |
| RF04 | Excluir máquinas |
| RF05 | Registrar produção |
| RF06 | Registrar consumo de recursos |
| RF07 | Registrar ocorrências |
| RF08 | Dashboard |
| RF09 | Consultar produção |
| RF10 | Pesquisar máquinas |

---

# Requisitos Não Funcionais

| Código | Requisito |
|---------|-----------|
| RNF01 | Interface responsiva |
| RNF02 | Validação de campos |
| RNF03 | Comunicação em JSON |
| RNF04 | Versionamento Git |
| RNF05 | Uso de variáveis de ambiente |
| RNF06 | Boa performance |
| RNF07 | Integridade do banco |

---

# Instalação

## Backend

```bash
cd backend
npm install
```

## Banco

Criar um banco PostgreSQL.

Executar:

```
database/consultas.sql
```

Criar o arquivo:

```
.env
```

Exemplo:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=sua_senha
DB_NAME=ecofactory
PORT=3000
```

---

# Execução

## Backend

```bash
npm start
```

Servidor:

```
http://localhost:3000
```

## Front-end

Abrir:

```
frontend/index.html
```

ou utilizar a extensão **Live Server**.

---

# API REST

### Máquinas

| Método | Endpoint |
|----------|-----------|
| GET | /machines |
| GET | /machines/:id |
| POST | /machines |
| PUT | /machines/:id |
| DELETE | /machines/:id |

---

# Dashboard

O dashboard apresenta:

- Total de máquinas;
- Máquinas em operação;
- Máquinas em manutenção;
- Máquinas paradas.

Os indicadores são atualizados automaticamente.

---

# Testes

## Testes Manuais

### Front-end

- ✔ Página inicial
- ✔ Dashboard
- ✔ Cadastro
- ✔ Edição
- ✔ Exclusão
- ✔ Filtro

### Banco

- ✔ Conexão PostgreSQL
- ✔ Integridade referencial
- ✔ Persistência dos dados

### API

- ✔ GET /machines
- ✔ GET /machines/:id
- ✔ POST /machines
- ✔ PUT /machines/:id
- ✔ DELETE /machines/:id

### Integração

- ✔ Front-end ↔ API
- ✔ API ↔ PostgreSQL
- ✔ Dashboard atualizado automaticamente

---

## Testes Automatizados

Ferramentas:

- Jest
- Supertest

Implementados:

- ✔ Teste unitário da função de cálculo de produtividade;
- ✔ Teste da rota GET /machines.

Resultado:

```
Test Suites: 2 passed
Tests: 4 passed
```

---

# Benefícios Esperados

- Redução do uso de planilhas;
- Centralização das informações;
- Melhor organização;
- Redução de erros;
- Facilidade na consulta de dados;
- Apoio à tomada de decisão.

---

# Restrições

- Sistema Web;
- PostgreSQL;
- Desenvolvimento conforme cronograma da disciplina;
- Acesso destinado aos usuários da empresa.

---

# Critérios de Aceitação

O projeto é considerado concluído quando:

- Todos os requisitos funcionais forem implementados;
- Front-end integrado ao back-end;
- Banco funcionando corretamente;
- Dashboard operacional;
- API REST funcional;
- Testes executando corretamente.

---

# Paleta de Cores

| Elemento | Cor | Hex |
|----------|-----|-----|
| Fundo | azul-petróleo escuro e branco | #0f766e e #FFFFFF |
| Inputs | Branco | #FFFFFF |
| Botões | azul-petróleo escuro | #0f766e|
| Textos | Preto | #000000 |

---

# Protótipo

Figma:

https://www.figma.com/design/JBQQcfyzFfMVToPKs70oSq/Untitled?node-id=0-1

---

# Resumo Executivo

O **EcoFactory** é um sistema de gestão industrial desenvolvido para substituir planilhas por uma aplicação Web Full Stack integrada.

O sistema oferece gerenciamento de máquinas, produção e indicadores industriais utilizando HTML, CSS, JavaScript, Node.js, Express e PostgreSQL, proporcionando maior organização, produtividade e apoio à tomada de decisões.