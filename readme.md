![encurtador-logo](https://user-images.githubusercontent.com/1257048/84054476-d48f5b80-a989-11ea-9f82-1bd1fdf0fd67.png)

# Encurtador de URL's em Nodejs com Typescript

Este repositório é um teste de API em Nodejs.

Para entender o que ele faz, leia a [documentação](/docs/readme.md)


### Instalação e execução

Você precisará ter uma instancia do Mongodb em sua máquina.

Eu utilizei um database chamado `todo` e uma collection chamada `urls`.

    // Instalando as dependências
    npm i

    // Executando um build
    npm run build

    // Executando os testes
    npm run test

    // Iniciando a aplicação (ambiente dev)
    npm run dev

    // Iniciando a aplicação (ambiente produção)
    npm run start


### Testando com postman

Se você quiser testar os endpoints com o postman, há uma [collection](/docs/encurtador-url.postman_collection.json) na pasta `/docs`.


### Desafios Opcionais

- :ok: Desenvolver Testes
- :ok: Utilizar Typescript
- Ambiente Docker utilizando o docker-compose.
- Um ou mais Code Patterns
- Realizar o deploy em algum servidor público como Heroku.
- :ok: Documentação em Swagger e/ou Postman


### Meus agradecimentos

Abaixo, artigos que foram de enorme ajuda.

+ https://marquesfernandes.com/desenvolvimento-otimizado-em-nodejs-com-typescript-docker-e-eslint/
+ https://github.com/shadowlik/node-ts-otimizado
+ https://medium.com/@mrmorais/encurtador-de-url-com-node-js-e-sqlite-ded37bbaebcb
+ https://github.com/backend-br/desafios/issues/4
+ https://codeburst.io/creating-custom-url-shortener-with-nodejs-de10bbbb89c7
+ https://github.com/devGuerra/urlShortener

