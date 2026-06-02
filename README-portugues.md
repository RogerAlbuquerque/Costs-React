# Costs-React

## Visão geral

Costs-React é uma aplicação web front-end construída com React e Vite para auxiliar no gerenciamento de orçamentos de projetos. O sistema permite criar projetos, listar projetos existentes, editar detalhes do projeto e gerenciar serviços associados a cada projeto. A aplicação utiliza um backend local simulado com `json-server`, oferecendo uma experiência de CRUD durante o desenvolvimento.

## Objetivo principal

O objetivo do projeto é estudar e demonstrar conceitos de React, roteamento com `react-router-dom`, consumo de APIs REST e gerenciamento simples de estado usando hooks. A solução foca em:

- criação de projetos com orçamento e categoria
- listagem de projetos cadastrados
- edição de dados do projeto
- adição e remoção de serviços vinculados ao projeto
- visualização de custo total e controle de orçamento

## Tecnologias utilizadas

- React 18
- Vite
- React Router DOM
- React Icons
- json-server
- JavaScript moderno (ES6+)
- CSS para estilização de componentes

## Organização do projeto

A estrutura principal do projeto é:

- `src/`
  - `App.jsx` — ponto de entrada da aplicação React com roteamento.
  - `main.jsx` — inicializa o app React e monta no DOM.
  - `index.css` — estilos globais.
  - `components/`
    - `pages/` — componentes de página e rotas da aplicação.
      - `Home/` — tela inicial.
      - `Projects/` — conjunto de páginas para projetos.
        - `AllProjects/` — lista de projetos.
        - `NewProject/` — formulário de criação de novo projeto.
        - `services/` — visualização de projeto com serviços.
      - `Nav/` — barra de navegação.
      - `Footer/` — rodapé simples.
      - `Container/` — wrapper de layout para conteúdo principal.
      - `randons/` — páginas extras de contato e empresa.
    - `extraComponents/` — componentes reutilizáveis de botão e formulários.
- `db.json` — base de dados local do `json-server`.
- `package.json` — dependências e scripts.

## Como o sistema funciona em alto nível

A aplicação é estruturada como uma SPA (single-page application) que usa roteamento para mudar de views sem recarregar a página.

1. `App.jsx` monta o `BrowserRouter`, o menu de navegação e as rotas.
2. `Nav` exibe links para as principais páginas: Home, Projetos, Empresa e Sobre.
3. `AllProjects` consulta `http://localhost:5000/projetos` para exibir os projetos armazenados localmente.
4. `NewProject` renderiza um formulário que envia dados para `json-server` via POST para criar um novo projeto.
5. `Services` exibe detalhes de um projeto específico, incluindo serviços associados, e atualiza o projeto via PATCH.
6. `db.json` mantém o modelo de dados de projetos e serviços durante o desenvolvimento.

A aplicação utiliza hooks do React (`useState`, `useEffect`) para armazenar estado local e controlar efeitos de ciclo de vida. As requisições HTTP nativas são realizadas com `fetch`.

## Funcionalidades principais

- Cadastro de novos projetos com nome, orçamento e categoria.
- Listagem de projetos cadastrados.
- Exclusão de projetos diretamente da lista.
- Edição de dados do projeto em uma tela de detalhes.
- Inclusão de serviços dentro de cada projeto.
- Remoção de serviços.
- Exibição do custo total consumido pelo projeto.

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/RogerAlbuquerque/Costs-React.git
cd Costs-React
```

2. Instale as dependências:

```bash
npm install
```

## Execução

Há dois servidores a rodar para utilizar a aplicação completa:

1. Backend local com `json-server`:

```bash
npm run backend
```

2. Front-end com Vite:

```bash
npm run dev
```

Em seguida, acesse a URL exibida no terminal pelo Vite (normalmente `http://localhost:5173`).

## Como usar

- Acesse a página inicial e clique em "Criar projeto" para adicionar um novo projeto.
- Navegue para "Projetos" para ver a lista de projetos cadastrados.
- Use o botão "Editar" em um projeto para acessar a tela de serviços e editar dados do projeto.
- Na tela de serviços, adicione serviços ao projeto e remova itens conforme necessário.
- Basta clicar em "Excluir" para remover um projeto da lista.

## Observações técnicas e pontos de melhoria

### O que funciona

- Uso de React Router para navegação entre páginas.
- Consumo do backend local via `json-server`.
- Criação, leitura, atualização e exclusão de projetos.
- Gestão de serviços vinculados a cada projeto.

### Limitações atuais

- Parte da aplicação ainda contém código de fallback com dados ``hard coded`` e trechos comentados.
- Várias atualizações de estado usam `location.reload()` para recarregar a página, o que não é ideal para uma SPA.
- Há manipulação direta do DOM (`document.forms`, `document.getElementById`) em vez de controle de estado React.
- O formulário de edição e a tela de adição de serviços estão no mesmo componente, dificultando a separação de responsabilidades.
- O uso de `fetch` em vários componentes poderia ser refatorado para um serviço API centralizado.
- As rotas estão prefixadas com `/Costs-React`, o que funciona para GitHub Pages, mas pode ser melhorado com configuração de `basename` no roteador.

### Melhorias que preciso fazer em algum momento

- Refatorar a lógica de API para um módulo separado, evitando duplicação de `fetch`.
- Substituir reload completo por atualizações locais de estado.
- Criar componentes de formulário independentes para projeto e serviço.
- Adicionar validação de entrada mais robusta e tratamento de erros com mensagens na interface.
- Usar `React Context` ou `Redux` para gerenciar estado global de projetos, se necessário.
- Implementar um backend real (Express, Node.js ou outro) em produção, substituindo `json-server`.
- Ajustar rotas para funcionar de forma mais flexível em outros ambientes além do GitHub Pages.

## Estrutura de dados esperada

Cada projeto no backend local segue este modelo:

```json
{
  "PName": "Nome do projeto",
  "PBudget": "8000",
  "PCategory": "infra",
  "cost": 600,
  "services": [
    {
      "SName": "serviço teste",
      "SBudget": "400",
      "SDescricao": "teste"
    }
  ],
  "id": 1
}
```

## Conclusão

Costs-React é um projeto de estudo sólido que eu mesmo fiz no inicio da carreira para aprender React e aprender como consumir APIs locais com `json-server`. Ele demonstra a construção de uma aplicação CRUD com roteamento e componentes reutilizáveis, oferecendo uma base clara para evoluir para uma solução mais madura com backend real e gestão de estado mais robusta.
