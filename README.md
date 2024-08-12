# usuarios-backend

Este es un proyecto de ejemplo hecho en typescript con express utilizando el ORM sequelize

## Crear base de datos

Crear una base de datos en postgres llamada user_management

## Configurar .env

Configurar .env a partir del env example

## Instalar dependencias

```sh
yarn install
```

## Migrar

```sh
npx sequelize-cli db:migrate
```

## seeds

```sh
npx sequelize-cli db:seed:all
```

### Correr proyecto

```sh
yarn dev
```
