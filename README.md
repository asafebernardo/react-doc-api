# Doc API (React)
<img width="1917" height="988" alt="image" src="https://github.com/user-attachments/assets/17f71af3-c369-40d1-a26a-75e2649d3617" />
Esse projeto foi desenvolvido inicialmente como uma ideia de como poderia ser a documentação API do IXC Provedor.

https://github.com/user-attachments/assets/b35f9764-b362-427b-b446-1ab398a2fbfa

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

