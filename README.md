# 🌱 Sementes do Futuro — Website Institucional

**Status do Projeto:** Concluído (Versão 1.0)

Este repositório contém o código-fonte do website institucional estático da ONG **Sementes do Futuro**.  
O projeto foi desenvolvido para servir como uma plataforma de apresentação da organização, captação de voluntários e recebimento de doações.

O site é composto por **3 páginas estáticas**, estilizadas com **CSS3 puro** (utilizando Flexbox, Grid e Variáveis CSS) e com interatividade adicionada via **JavaScript (Vanilla JS)**.

---

## ✨ Funcionalidades e Requisitos Atendidos

Este projeto atende a um conjunto de especificações técnicas voltadas para **semântica**, **interatividade** e **estrutura**.

---

### 1. 🧱 Estrutura HTML5 Semântica

O site é composto por 3 páginas HTML distintas, todas utilizando uma estrutura moderna e acessível:

- Uso de tags como `<header>`, `<main>`, `<section>`, `<article>`, `<nav>` e `<footer>`.  
- Implementação de atributos **ARIA** (`role`, `aria-label`, `aria-hidden`) para melhorar a acessibilidade.  
- Hierarquia de títulos (`<h1>` a `<h3>`) aplicada de forma lógica em todas as páginas.  
- Todas as páginas incluem imagens relevantes com o atributo `alt`.  

---

### 2. 📄 Páginas Obrigatórias

O site está dividido nas seguintes páginas:

#### `index.html` — Página Inicial
- Apresenta a organização na seção **“Sobre Nós”**.  
- Inclui um formulário simplificado de **“Entre em Contato”**.  
- Contém a seção **Hero** principal, com **chamadas para ação (CTAs)**.

#### `projetos.html` — Projetos Sociais
- Detalha as causas e projetos da ONG (Educação, Água Limpa, etc.).  
- Aborda o voluntariado, com um **CTA para a página de cadastro**.  
- Explica **“Como Doar”** e ativa o **modal de doação**.

#### `cadastro.html` — Cadastro de Voluntários
- Contém o **formulário complexo** para registro de novos voluntários.

---

### 3. 🧾 Formulário Complexo (Cadastro)

A página `cadastro.html` implementa um formulário avançado com foco em **organização, validação e experiência do usuário**.

- **Agrupamento lógico:** uso de `<fieldset>` e `<legend>` para separar “Dados Pessoais” e “Endereço”.  
- **Tipos de input HTML5:** `email`, `tel`, `date`, etc.  
- **Campos solicitados:** Nome Completo, E-mail, CPF, Telefone, Data de Nascimento, CEP, Endereço, Cidade e Estado (dropdown).  
- **Validação nativa:** uso de `required`, `pattern` e `title` para feedback automático.  
- **Máscaras de input (via JS):** aplicadas em CPF, Telefone e CEP em tempo real.  

---

### 4. ⚙️ Interatividade com JavaScript

O arquivo `script.js` unifica todas as funcionalidades interativas:

- **Menu Mobile:** alterna a visibilidade do menu e troca o ícone (menu/fechar).  
- **Modal de Doação:** abre e fecha dinamicamente, podendo ser acionado por múltiplos botões.  
- **Simulação de formulários:** impede o envio padrão e exibe um `alert()` de sucesso.  
- **Máscaras de Input:** aplicadas dinamicamente nos campos do formulário.  

---

### 5. 🎨 Estilização e Design

- **CSS3 Moderno:** uso de variáveis no `:root`, Flexbox e Grid para layouts.  
- **Design Responsivo:** adaptável para **mobile, tablet e desktop** usando *media queries*.  
- **Ícones:** implementados com a biblioteca **Ionicons** (menu, redes sociais, modal).  

---

## 🚀 Tecnologias Utilizadas

- **HTML5**  
- **CSS3** (Variáveis, Flexbox, Grid, Media Queries)  
- **JavaScript (ES6+)** (Manipulação do DOM, Event Listeners)  
- **Ionicons** (Biblioteca de ícones)  

---

## 📁 Estrutura de Arquivos

/website-ong/

├── index.html → Página Inicial: Sobre e Contato

├── projetos.html → Página de Projetos: Causas, Voluntariado, Doar

├── cadastro.html → Página de Cadastro: Formulário complexo

├── style.css → Folha de estilos principal

└── script.js → Arquivo JavaScript principal

👩‍💻 Créditos

Desenvolvido por Talya — Front-End Developer (2025)
🌐 GitHub
 · 💼 Projeto Educacional / Portfólio
