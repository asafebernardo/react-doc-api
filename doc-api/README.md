# Doc API (React)

Aplicação React para navegação/consulta de documentação de API.

## Estrutura do repositório

- `doc-api/`: aplicação frontend (Create React App)

## Requisitos

- Node.js (recomendado: 18+)
- npm

## Como rodar (desenvolvimento)

```bash
cd doc-api
npm install
npm start
```

Depois acesse `http://localhost:3000`.

## Build de produção

```bash
cd doc-api
npm run build
```

Os artefatos ficam em `doc-api/build/`.

## Testes

```bash
cd doc-api
npm test
```

## Observações

- `node_modules/` e `build/` **não** devem ser commitados (já estão ignorados por `.gitignore`).
- Se você for publicar em subpath (ex: GitHub Pages), configure o campo `homepage` em `doc-api/package.json`.

