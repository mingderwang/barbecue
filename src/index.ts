import { Elysia } from 'elysia'
import { autoroutes } from 'elysia-autoroutes'
import { swagger } from '@elysiajs/swagger'

const app = new Elysia()
  .use(swagger())
  .use(
    autoroutes({
      routesDir: "./api", // -> optional, defaults to './routes'
      prefix: "/smart_account", // -> optional, defaults to ''
      generateTags: true, // -> optional, defaults to true
    })
  )
  .listen(3000)

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);

console.log(
  `🦊 Swagger is running at http://${app.server?.hostname}:${app.server?.port}/swagger`
);
export type ElysiaApp = typeof app
