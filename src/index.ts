import { Elysia } from "elysia";
import { swagger } from '@elysiajs/swagger'

const { Client, Presets } = require('userop')
const { InfuraProvider, Signer, Wallet, parseEther } = require("ethers")

const plugin = new Elysia({ name: 'plugin' })
    .macro(({ onBeforeHandle }) => ({
        hi(word: string) {
            onBeforeHandle(() => {
                console.log(word)
            })
        }
    }))

const app = new Elysia()
    .use(swagger())
    .use(plugin)
    .get('/', () => 'hi', {
        hi: 'Elysia'
    })
    .get('/id/:id', ({ params: { id } }) => id)

app.listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);

export type App = typeof app
