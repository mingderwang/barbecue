// client.ts
import { treaty } from '@elysiajs/eden'
import type { App } from './server'

const client = treaty<App>('localhost:3000') 

// response: Hi Elysia
const { data: index } = await client.index.get()
console.log(index)

// response: 1895
const { data: id } = await client.id({ id: 1895 }).get()
console.log(id)

// response: { id: 1895, name: 'Skadi' }
const { data: nendoroid } = await client.mirror.post({
    id: 1895,
    name: 'Skadi'
})
console.log(nendoroid)
