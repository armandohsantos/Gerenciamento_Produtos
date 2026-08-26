# LabStock 🧪

**LabStock** é um Minimum Viable Product (MVP) desenvolvido para o gerenciamento eficiente, rastreabilidade e otimização de reagentes químicos em almoxarifados de ensino e laboratórios de pesquisa (como o Laboratório Maker do IQ-USP). 

O sistema visa minimizar o desperdício de insumos, garantir a conformidade com normas de segurança e simplificar a rotina de técnicos, professores e alunos através de uma interface moderna e responsiva. Este projeto é desenvolvido como um estudo de caso/pesquisa-ação no escopo de Engenharia de Software.

---

## 🚀 Tecnologias Utilizadas

A arquitetura do projeto (Frontend e Backend-as-a-Service) foi construída utilizando uma stack moderna, focada em alta reatividade e desenvolvimento ágil:

*   **[Vue.js 3](https://vuejs.org/)** (Composition API + `<script setup>`)
*   **[Vite](https://vitejs.dev/)** - Tooling e build ultrarrápido
*   **[Supabase](https://supabase.com/)** - BaaS para Autenticação e Banco de Dados (PostgreSQL)
*   **[Tailwind CSS v4](https://tailwindcss.com/)** - Estilização utilitária e design system (Dark Mode nativo)
*   **[Pinia](https://pinia.vuejs.org/)** - Gerenciamento de estado global da aplicação
*   **[Vuelidate](https://vuelidate-next.netlify.app/)** - Validação rigorosa de formulários e regras de negócio

---

## ✨ Funcionalidades Principais

O fluxo do sistema foi projetado para priorizar a usabilidade no dia a dia do laboratório:

1.  **🔍 Consulta Rápida de Estoque (Prioridade):** Acesso imediato e proeminente à listagem de reagentes disponíveis, permitindo buscas por nome, fórmula química, lote e validade sem fricção.
2.  **📦 Controle de Entradas e Saídas:** Registro de movimentação de frascos para controle exato de volume/massa restante, prevenindo a falta de insumos em aulas práticas.
3.  **➕ Cadastro Detalhado de Reagentes:** Inserção de novos produtos com campos para grau de pureza, fornecedor e especificações de armazenamento/segurança.
4.  **🔐 Autenticação Segura:** Controle de acesso via Supabase Auth para diferenciar permissões (ex: técnicos responsáveis vs. consulta de alunos/professores).

---

## 🛠️ Como executar o projeto localmente

Siga os passos abaixo para rodar o protótipo em sua máquina.

### Pré-requisitos
*   [Node.js](https://nodejs.org/) (versão 18+ recomendada)
*   [Git](https://git-scm.com/)
*   Projeto configurado no painel do [Supabase](https://supabase.com/)

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/armandohsantos/Gerenciamento_Produtos.git](https://github.com/armandohsantos/Gerenciamento_Produtos.git)
