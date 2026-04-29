# Doc API (React)

Aplicação React para navegação/consulta de documentação de API.

## Requisitos

- Node.js (recomendado: 18+)
- npm

## Como rodar (desenvolvimento)

```bash
npm install
npm start
```

Depois acesse `http://localhost:3000`.

## Build de produção

```bash
npm run build
```

Os artefatos ficam em `build/`.

## Testes

```bash
npm test
```

## Deploy (GitHub Pages)

Se você publicar o site em um subcaminho (ex.: `https://usuario.github.io/REPO/`), configure o campo `homepage` no `package.json`:

- **Exemplo**:
  - `"homepage": "https://usuario.github.io/react-doc-api/"`

Depois gere o build com `npm run build` e publique o conteúdo da pasta `build/` via GitHub Pages (preferencialmente usando GitHub Actions).

## Observações

- `node_modules/` e `build/` **não** devem ser commitados (já estão ignorados por `.gitignore`).

