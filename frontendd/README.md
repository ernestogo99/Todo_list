## Como rodar o projeto

1. Instale as dependências com:
   ```sh
   npm install
   ```
2. Rode o projeto com:
   ```sh
   npm run dev
   ```

## Estrutura de pastas

```
/my-react-app
│
├── /public
│
├── /src
│   ├── /assets            # Imagens, ícones, estilos globais, fontes etc.
│   ├── /pages             # Páginas principais da aplicação
│   ├── /routes            # Configuração das rotas da aplicação
│   ├── /shared            # Recursos compartilhados
│   │   ├── /components    # Componentes reutilizáveis (botões, tabelas, inputs etc.)
│   │   ├── /hooks         # Hooks customizados React
│   │   ├── /interfaces    # Tipagens e interfaces TypeScript
│   │   ├── /services      # Serviços para comunicação com APIs, requisições HTTP etc.
│   │
│   ├── App.tsx            # Componente principal da aplicação
│   ├── main.tsx           # Ponto de entrada do React
│   ├── vite.config.ts     # Configuração do Vite (caso use Vite)
│
├── package.json
├── tsconfig.json          # Configuração do TypeScript
├── .eslintrc.js           # Configuração do ESLint
├── .gitignore


```
