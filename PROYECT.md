# Estructura de carpetas

A continuación, encontrarás una descripción de cada entrada.

✅ NextAuth.js
✅ Prisma
✅ Tailwind CSS
✅ tRPC
.
├─ public
│ └─ favicon.ico
├─ prisma
│ └─ schema.prisma
├─ src
│ ├─ env.mjs
│ ├─ pages
│ │ ├─ _app.tsx
│ │ ├─ api
│ │ │ ├─ auth
│ │ │ │ └─ [...nextauth].ts
│ │ │ └─ trpc
│ │ │ └─ [trpc].ts
│ │ └─ index.tsx
│ ├─ server
│ │ ├─ auth.ts
│ │ ├─ db.ts
│ │ └─ api
│ │ ├─ routers
│ │ │ └─ example.ts
│ │ ├─ trpc.ts
│ │ └─ root.ts
│ ├─ styles
│ │ └─ globals.css
│ └─ utils
│ └─ api.ts
├─ .env
├─ .env.example
├─ .eslintrc.cjs
├─ .gitignore
├─ next-env.d.ts
├─ next.config.mjs
├─ package.json
├─ postcss.config.cjs
├─ prettier.config.cjs
├─ README.md
├─ tailwind.config.ts
└─ tsconfig.json

## prisma

- La carpeta prisma contiene el archivo schema.prisma que se utiliza para configurar la conexión a la base de datos y el esquema de la base de datos. También es el lugar para almacenar archivos de migración y/o scripts de seed, si se utilizan. [Consulta la documentación de Prisma para obtener más información](https://prisma.io).


## public

- La carpeta public contiene activos estáticos que son servidos por el servidor web. El archivo favicon.ico es un ejemplo de un activo estático.


# src/env

- Se utiliza para la validación de variables de entorno y las definiciones de tipo. Consulta Variables de entorno para más información.


# src/pages

- La carpeta pages contiene todas las páginas de la aplicación Next.js. El archivo index.tsx en el directorio raíz de /pages es la página de inicio de la aplicación. El archivo _app.tsx se utiliza para envolver la aplicación con proveedores. [Consulta la documentación de Next.js para obtener más información](https://nextjs.org).


# src/pages/api

- La carpeta api contiene todas las rutas de API de la aplicación Next.js. [Consulta la documentación de Next.js para obtener información sobre las rutas de API](https://nextjs.org/docs/app/building-your-application/routing).


# src/pages/api/auth/[...nextauth].ts

- El archivo [...nextauth].ts es la ruta slug de autenticación de NextAuth.js. Se utiliza para manejar las solicitudes de autenticación. Consulta la documentación de NextAuth.js para obtener más información sobre NextAuth.js y la documentación de Next.js para obtener información sobre las rutas slug.
    - [NextAuth.js](https://next-auth.js.org)
    - [Next.js](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)


# src/pages/api/trpc/[trpc].ts

El archivo [trpc].ts es el punto de entrada de la API de tRPC. Se utiliza para manejar las solicitudes de tRPC. Consulta la documentación de tRPC para obtener más información sobre este archivo y la documentación de Next.js para obtener información sobre las rutas slug. [tRPC](https://trpc.io)


# src/server

La carpeta server se utiliza para separar claramente el código del lado del servidor del código del lado del cliente.


# src/server/auth.ts

- El punto de entrada principal para la lógica de autenticación del lado del servidor. Aquí se configuran las opciones de configuración de NextAuth.js, se realiza la ampliación de módulos y se proporcionan algunas utilidades DX para la autenticación, como recuperar la sesión del usuario en el lado del servidor. [Consulta la documentación de NextAuth.js para obtener más información](https://next-auth.js.org).


# src/server/db.ts

- El archivo db.ts se utiliza para instanciar el cliente Prisma a nivel global. [Consulta la documentación de Prisma y las mejores prácticas para utilizar Prisma con Next.js para obtener más información](https://prisma.io).


# src/server/api

- La carpeta api contiene el código del lado del servidor de tRPC.


# src/server/api/routers

- La carpeta routers contiene todos los subrouters de tRPC.


# src/server/api/routers/example.ts

- El archivo example.ts es un ejemplo de router de tRPC que utiliza el helper publicProcedure para demostrar cómo crear una ruta pública de tRPC.

- Dependiendo de los paquetes seleccionados, este router puede contener más o menos rutas para demostrar mejor el uso según tus necesidades.


# src/server/api/trpc.ts

- El archivo trpc.ts es el archivo de configuración principal para el backend de tRPC. Aquí se define el contexto utilizado en las solicitudes de tRPC y se exportan los helpers de procedimiento. [Consulta la documentación de tRPC para obtener más información](https://trpc.io).


# src/server/api/root.ts

- El archivo root.ts se utiliza para fusionar los routers de tRPC y exportarlos como un único router, así como la definición de tipo del router. Consulta la documentación de tRPC para obtener más información.


# src/styles

- La carpeta styles contiene los estilos globales de la aplicación.


# src/utils

- La carpeta utils se utiliza para almacenar funciones de utilidad reutilizables.


# src/utils/api.ts

- El archivo api.ts es el punto de entrada del frontend para tRPC. [Consulta la documentación de tRPC para obtener más información](https://trpc.io).


# .env

- El archivo .env se utiliza para almacenar variables de entorno. Consulta Variables de entorno para obtener más información. Este archivo no debe ser incluido en el historial de git.


# .env.example

- El archivo .env.example muestra ejemplos de variables de entorno basadas en las bibliotecas seleccionadas. Este archivo debe ser incluido en el historial de git.


# .eslintrc.cjs

- El archivo .eslintrc.cjs se utiliza para configurar ESLint. Consulta la documentación de ESLint para obtener más información.


# next-env.d.ts

- El archivo next-env.d.ts garantiza que los tipos de Next.js sean recogidos por el compilador de TypeScript. No debes eliminarlo ni editarlo, ya que puede cambiar en cualquier momento. Consulta la documentación de Next.js para obtener más información.

# next.config.mjs

- El archivo next.config.mjs se utiliza para configurar Next.js. Consulta la documentación de Next.js para obtener más información. Nota: Se utiliza la extensión .mjs para permitir las importaciones ESM.


# postcss.config.cjs

- El archivo postcss.config.cjs se utiliza para la configuración de PostCSS de Tailwind. Consulta la documentación de Tailwind PostCSS para obtener más información.


# prettier.config.cjs

- El archivo prettier.config.cjs se utiliza para configurar Prettier e incluir prettier-plugin-tailwindcss para formatear las clases de Tailwind CSS. Consulta la publicación del blog de Tailwind CSS para obtener más información.


# tsconfig.json

- El archivo tsconfig.json se utiliza para configurar TypeScript. Se han habilitado algunas opciones no predeterminadas, como el modo estricto, para garantizar el mejor uso de TypeScript para Create T3 App y sus bibliotecas. Consulta la documentación de TypeScript o el uso de TypeScript para obtener más información.