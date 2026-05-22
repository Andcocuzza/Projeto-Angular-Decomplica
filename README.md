# Projeto Angular Descomplica

Este é um aplicativo Angular simples criado para demonstrar uma interface de login e navegação de páginas.

## Sobre o projeto

- Nome do projeto: `Projeto Angular Descomplica`
- Framework: Angular 21
- Objetivo principal: implementação de uma aplicação SPA com autenticação e rotas.

## Scripts úteis

```bash
npm install
npm start
npm test
npx cypress open
```

## Como executar localmente

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm start
```

3. Abra o navegador em:

```bash
http://localhost:4200/
```

## Testes

### Testes unitários

Execute o comando:

```bash
npm test
```

### Testes end-to-end

Se o Cypress estiver configurado, execute:

```bash
npx cypress open
```

## Estrutura do projeto

- `src/app/` — componentes e rotas principais
- `src/app/features/` — páginas do sistema
- `src/app/shared/` — componentes compartilhados como cabeçalho e rodapé
- `src/app/guards/` — guardas de rota

## Observação

Certifique-se de que o repositório no GitHub esteja nomeado corretamente como `Projeto-Angular-Descomplica`, pois o nome do projeto é `Descomplica` e não `Decomplica`.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
