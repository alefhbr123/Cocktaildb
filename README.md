# TheCocktailDB

![React](https://img.shields.io/badge/React-18.2.0-61dafb?style=flat-square&logo=react)
![Material-UI](https://img.shields.io/badge/Material--UI-5.14.0-007fff?style=flat-square&logo=mui)
![Node.js](https://img.shields.io/badge/Node.js-16%2B-339933?style=flat-square&logo=node.js)
![License](https://img.shields.io/badge/License-ISC-blue?style=flat-square)

---

## 📋 Descrição

**TheCocktailDB Frontend** é uma Single Page Application (SPA) desenvolvida em React.js que consome a API pública [TheCocktailDB](https://www.thecocktaildb.com/api.php) para oferecer uma experiência intuitiva de busca e exploração de coquetéis.

O projeto foi desenvolvido como trabalho acadêmico para a disciplina **Programação Web Fullstack**, atendendo rigorosamente aos critérios de arquitetura e funcionalidade definidos. A aplicação permite que usuários busquem coquetéis por **nome** ou **ingrediente**, recebendo feedback visual imediato sobre validações e erros, tudo gerenciado através de uma arquitetura robusta com **Context API** e **useReducer**.

---

## ✨ Funcionalidades

-  **Busca Dinâmica** — Pesquise coquetéis por nome ou ingrediente em tempo real
-  **Validação de Formulário** — Validação de campos obrigatórios com mensagens de erro claras
-  **Grid Responsivo** — Exibição de resultados em layout adaptável (mobile, tablet, desktop)
-  **Design Tech-Clean** — Interface minimalista e acadêmica com Material-UI
-  **Feedback de Erro** — Mensagens de validação (antes) e de erro da API (depois)
-  **Gerenciamento de Estado** — Context API + useReducer para controle centralizado
-  **Totalmente Responsiva** — Funciona perfeitamente em todos os dispositivos
-  **Performance Otimizada** — Webpack configurado para development e production

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Justificativa |
|---|---|---|
| **React.js** | 18.2.0 | Framework moderno para construir UIs reativas com componentes reutilizáveis |
| **Material-UI (MUI)** | 5.14.0 | Design system profissional com componentes pré-estilizados e tema customizável |
| **Context API** | nativa | Alternativa leve ao Redux para gerenciamento de estado global |
| **useReducer Hook** | nativa | Padrão de state management previsível e escalável |
| **Fetch API** | nativa | Requisições HTTP nativas sem dependências adicionais |

---

## 🏗️ Arquitetura / Como Funciona

### Fluxo de Dados

```
┌─────────────────────────────────────────────────────────────┐
│                        App Component                        │
│                   (CocktailProvider)                        │
└────────────────────┬────────────────────────────────────────┘
                     │
        ┌────────────┼────────────┐
        │            │            │
    ┌───▼────┐  ┌───▼────┐  ┌───▼──────────┐
    │ SearchBar   │ CocktailList  │ ErrorMessage │
    └───┬────┘  └───┬────┘  └───┬──────────┘
        │           │           │
        └───────┬───┴───────────┘
                │
        ┌───────▼──────────────┐
        │  CocktailContext     │
        │  (useReducer)        │
        └───────┬──────────────┘
                │
        ┌───────▼──────────────────────┐
        │   TheCocktailDB API          │
        │ https://www.thecocktaildb... │
        └──────────────────────────────┘
```

### Detalhamento

1. **SearchBar** — Componente de entrada que:
   - Valida se o campo de busca está preenchido
   - Dispara ação `SET_VALIDATION_ERROR` se vazio
   - Envia requisição AJAX via `fetchCocktails()` se válido

2. **CocktailContext (useReducer)** — Gerencia estado global:
   - **State**: cocktails, loading, error, validationError, searchTerm, searchType
   - **Actions**: FETCH_START, FETCH_SUCCESS, FETCH_ERROR, SET_VALIDATION_ERROR, etc.
   - Integra chamadas à API TheCocktailDB com parâmetros dinâmicos

3. **CocktailList** — Renderiza cards com:
   - Grid responsivo do MUI
   - Imagem, nome, categoria, tipo (alcoólico), vidro do coquetel
   - Estado de carregamento (CircularProgress)
   - Mensagem quando nenhum resultado

4. **ErrorMessage** — Exibe erros da API via Snackbar:
   - Auto-fecha em 6 segundos
   - Posicionado no topo direito

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- **Node.js** 16.0 ou superior
- **npm** 7.0 ou superior (ou **yarn**)
- Git (para clonar o repositório)

### Instalação e Configuração

1. **Clone o repositório:**

```bash
git clone https://github.com/alefhbr123/Cocktaildb
cd Cocktaildb
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Verifique a estrutura de pastas** (deve conter apenas `src/components` e `src/contexts`):

```
src/
├── contexts/
│   └── CocktailContext.jsx
├── components/
│   ├── App.jsx
│   ├── SearchBar.jsx
│   ├── CocktailList.jsx
│   └── ErrorMessage.jsx
└── main.jsx
```

### Scripts Disponíveis

```bash
# Inicia o servidor de desenvolvimento (porta 3000)
npm start

# Compila para produção em ./dist/
npm run build

# Compila em modo development com watch
npm run dev
```

### Executando Localmente

```bash
# 1. Instale dependências (primeira vez apenas)
npm install

# 2. Inicie o servidor de desenvolvimento
npm run dev

# 3. Abra seu navegador e acesse:
# http://localhost:3000
```



## 📁 Estrutura do Projeto

```
cocktaildb-frontend/
├── src/
│   ├── contexts/
│   │   └── CocktailContext.jsx      # Context + Reducer + Provider
│   ├── components/
│   │   ├── App.jsx                  # Componente raiz
│   │   ├── SearchBar.jsx            # Formulário de busca com validação
│   │   ├── CocktailList.jsx         # Grid de cards dos coquetéis
│   │   └── ErrorMessage.jsx         # Snackbar de erros da API
│   └── main.jsx                     # Entry point
├── package.json                     # Dependências e scripts
├── index.html                       # Template HTML
├── .gitignore                       # Arquivos ignorados pelo Git
├── vercel.json                      # Configuração do Vercel
├── vite.config.js                   # Configuração do Vite
└── README.md                        # Este arquivo
```

---

## 🎓 Critérios Atendidos

Este projeto atende aos seguintes critérios da avaliação acadêmica:

- ✅ **Estrutura de Projeto** — Apenas `src/components` e `src/contexts` conforme exigido
- ✅ **Busca com Parâmetros** — Busca por nome (`search.php?s=`) e ingrediente (`filter.php?i=`)
- ✅ **Validação** — Verificação de campos obrigatórios pré-envio
- ✅ **Mensagens de Erro** — Validação (Alert) e API (Snackbar)
- ✅ **Context API + Reducer** — Gerenciamento centralizado de estado
- ✅ **Hook useReducer** — Implementado no CocktailContext
- ✅ **Material-UI** — Design system profissional e responsivo
- ✅ **Git** — Commits incrementais a cada fase

---

## 📧 Autores

**2576147 - Álefh Trindade Luz De Lima**

**2576198 - Fábio Massashi Suzuki**

---

**Desenvolvido como trabalho acadêmico em Programação Web Fullstack**
