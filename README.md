# Projeto Integrador VI-A

Pojeto realizado para o curso de Análise e Desenvolvimento de Sistemas na UCPEL, consiste em uma aplicação para facilitar o agendamento de consultas.

## Tecnologias

- [Create react app](https://create-react-app.dev/)
- [Styled components](https://styled-components.com/)
- [React Router](https://reactrouter.com/)
- [Axios](https://github.com/axios/axios)

## Rodando a aplicação

Instale as dependências através do comando `yarn` ou `npm install`.

Crie um novo arquivo chamado .env.local e copie o conteúdo do arquivo .env-example modificando a url da API para a url do seu backend.

Rode a aplicação utilizando `yarn start` ou `npm start`.

### Gerando o build da aplicação para ambiente de produção

Para gerar a aplicação que ficará hospedada no ambiente de produção rode `yarn build` ou `npm run build`.

## Estrutura de pastas

`components`: componentes gerais da aplicação.

`context`: configuração de estados globais da aplicação utilizando a Context API.

`providers`: configuração de clientes http e outros provedores externos a aplicação.

`services`: pasta com arquivos que exportam funcões externas a aplicação como requisições.

`routes`: contém as rotas da aplicação.
