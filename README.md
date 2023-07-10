# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

# Proyecto T3 Stack

Este proyecto utiliza T3 Stack, una pila de tecnología basada en Next.js, Prisma, Tailwind y tRPC. Proporciona una estructura inicial para construir [descripción del proyecto]. A continuación se detallan los pasos para inicializar el proyecto en tu entorno local.

## Requisitos previos

Asegúrate de tener instalado lo siguiente en tu máquina:

- Node.js (versión 16.15.0)
- npm (versión 8.5.5)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
    - PostgreSQL
    - pgAdmin 

## Instalación de las herramientas

# Base de datos
- docker pull postgres
- docker run --name postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres

- docker pull dpage/pgadmin4
- docker run --name pgAdmin4 -p 80:80 -e 'PGADMIN_DEFAULT_EMAIL=user@domain.com' -e 'PGADMIN_DEFAULT_PASSWORD=password' -d dpage/pgadmin4

- Luego de tener postgres y pgadmin4 se deben inicializar los contenedores y entrar a pgadmin4 con las credenciales seteadas
- Una vez dentro crear una nueva db con el nombre saspav

    En la pestaña "Connection", ingresa la siguiente información:

    Host: host.docker.internal
    Port: 5432 (o el puerto que hayas especificado al crear el contenedor)
    Username: postgres
    Password: admin

    En caso de no poder realizar la conexion hay que resetear la password de postgres. Para esto hay que ir a Docker desktop y seleccionar el container de postgres y abrir la terminal

    En la terminar ingresar psql -U postgres para poder realizar consultas

    Luego realizar un alter user a postgres: ALTER USER postgres WITH PASSWORD 'admin';


### Nota: la password de pgAdmin no necesariamente debe ser la misma que postgres

# Node


## Inicialización del proyecto

Sigue los pasos a continuación para inicializar el proyecto:

1. Clona este repositorio en tu máquina local:

`git clone git@github.com:MDKi/saspav.git`

2. Inicializá el proyecto con npm install 

3. Inicializá la base de datos en docker

4. Configurar el .env para la conexion a la DB

    DATABASE_URL=postgresql://postgres:admin@127.0.0.1:5432/saspav

5. Inicializar el schema y realizar migraciones para la base de datos
`npx prisma db push` genera el cliente de prisma para sincronizar con la DB
`npx prisma format` genera los campos de las relaciones faltantes en los modelos
`npx prisma generate` sirve para generar los modelos en base de datos
`npx prisma migrate dev` genera los schemas en la DB
`npx prisma studio` esta es una herramienta para ver los datos de la DB

6. Levantar el proyecto
`npm run dev`