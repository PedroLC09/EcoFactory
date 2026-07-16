# Documento de Visão do Projeto

## Projeto: EcoFactory – Sistema de Monitoramento e Gestão Industrial

---

# 1. Visão Geral

## 1.1 Objetivo

O **EcoFactory** é uma aplicação Web Full Stack desenvolvida para centralizar as informações da operação industrial, substituindo o controle realizado em planilhas por um sistema integrado.

A plataforma permitirá o cadastro de máquinas, registro da produção, acompanhamento de indicadores industriais, controle de sustentabilidade e gerenciamento de ocorrências de segurança, proporcionando maior organização, rapidez na consulta de informações e apoio à tomada de decisão.

---

# 2. Problema

Atualmente, a empresa registra informações sobre:

- Máquinas;
- Produção;
- Consumo de recursos;
- Ocorrências de segurança.

Esses dados são armazenados em planilhas separadas, o que gera diversos problemas:

- Dificuldade para localizar informações;
- Duplicidade de dados;
- Maior risco de erros de preenchimento;
- Falta de integração entre os setores;
- Dificuldade na geração de indicadores;
- Demora na tomada de decisões.

---

# 3. Objetivos do Projeto

## Objetivo Geral

Desenvolver um sistema web Full Stack capaz de centralizar todas as informações industriais em uma única plataforma.

## Objetivos Específicos

- Cadastrar máquinas;
- Registrar produção diária;
- Registrar consumo de recursos;
- Controlar ocorrências de segurança;
- Exibir indicadores em dashboards;
- Facilitar consultas e geração de informações.

---

# 4. Público-alvo

O sistema será utilizado por:

- Supervisores de produção;
- Técnicos de manutenção;
- Gestores da qualidade;
- Profissionais de segurança do trabalho;
- Administradores da operação industrial.

---

# 5. Escopo do Projeto

## Escopo Funcional

O sistema deverá permitir:

- Cadastro de máquinas;
- Consulta das máquinas cadastradas;
- Alteração de informações das máquinas;
- Exclusão de máquinas;
- Registro da produção realizada;
- Registro do consumo de recursos;
- Registro de ocorrências de segurança;
- Visualização de indicadores através de dashboard.

## Escopo Técnico

O projeto será desenvolvido utilizando:

- Front-end (HTML, CSS e JavaScript);
- Back-end (Node.js + Express);
- Banco de dados PostgreSQL;
- API REST em JSON;
- Versionamento utilizando GitHub.

---

# 6. Requisitos Funcionais

| Código | Requisito |
|--------|-----------|
| RF01 | O sistema deve permitir cadastrar máquinas. |
| RF02 | O sistema deve listar todas as máquinas cadastradas. |
| RF03 | O sistema deve permitir editar os dados das máquinas. |
| RF04 | O sistema deve permitir excluir máquinas. |
| RF05 | O sistema deve registrar a produção associada a uma máquina. |
| RF06 | O sistema deve registrar o consumo de recursos (energia, água, matéria-prima etc.). |
| RF07 | O sistema deve registrar ocorrências de segurança. |
| RF08 | O sistema deve exibir indicadores em um dashboard. |
| RF09 | O sistema deve permitir consultar os registros de produção. |
| RF10 | O sistema deve permitir pesquisar máquinas pelo nome ou código. |

---

# 7. Requisitos Não Funcionais

| Código | Requisito |
|--------|-----------|
| RNF01 | A aplicação deve possuir interface responsiva. |
| RNF02 | Todos os campos obrigatórios devem ser validados. |
| RNF03 | A comunicação entre front-end e back-end deve utilizar JSON. |
| RNF04 | O código deve ser versionado no GitHub. |
| RNF05 | Informações sensíveis devem permanecer em variáveis de ambiente (.env). |
| RNF06 | O sistema deve apresentar tempo de resposta adequado para consultas comuns. |
| RNF07 | O banco de dados deve garantir integridade das informações. |

---

# 8. Benefícios Esperados

Com a implantação do EcoFactory espera-se:

- Redução do uso de planilhas;
- Centralização das informações;
- Aumento da produtividade;
- Redução de erros operacionais;
- Facilidade na geração de indicadores;
- Apoio à tomada de decisão;
- Melhor controle da produção e da sustentabilidade.

---

# 9. Restrições

- O sistema será acessado inicialmente via navegador web.
- O banco de dados utilizado será PostgreSQL.
- O desenvolvimento seguirá o prazo definido para o Projeto Integrador.
- O acesso será destinado apenas aos usuários autorizados pela empresa.

---

# 10. Critérios de Aceitação

O projeto será considerado concluído quando:

- Todos os requisitos funcionais estiverem implementados;
- Os requisitos não funcionais forem atendidos;
- O sistema permitir o cadastro, consulta, edição e exclusão de máquinas;
- O registro de produção, sustentabilidade e segurança estiver funcionando;
- O dashboard apresentar corretamente os indicadores cadastrados;
- O banco de dados armazenar as informações corretamente;
- A aplicação estiver integrada entre front-end, back-end e banco de dados.

---

# 11. Paleta de Cores/Padrão visual

| Elemento | Cor | Código Hexadecimal |
|----------|-----|--------------------|
| Fundo | 🟦 | `#069494` |
| Inputs | ⬜ | `#FFFFFF` |
| Botões | 🟩 | `#BDFEFF` |
| Textos | ⬛ | `#000000` |
| Símbolos | ⬛ | `#000000` |

---

# Resumo Executivo

O **EcoFactory** é um sistema de gestão industrial que busca substituir o controle realizado por planilhas, oferecendo uma plataforma web integrada para gerenciamento de máquinas, produção, sustentabilidade e segurança.

O projeto tem como foco melhorar a organização das informações, otimizar processos industriais e fornecer indicadores confiáveis para apoiar a tomada de decisões, utilizando tecnologias Full Stack (**HTML**, **CSS**, **JavaScript**, **Node.js**, **Express** e **PostgreSQL**).
