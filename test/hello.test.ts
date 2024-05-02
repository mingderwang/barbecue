import { treaty } from '@elysiajs/eden'
import { describe, expect, it } from 'bun:test'
import { Elysia } from 'elysia'
import type { App } from './server'

const api = treaty<App>('localhost:3000/smart_account') 

describe('Elysia', () => {
    it('return a response', async () => {
        const { data } = await api.hello.get()
        expect(data).toBe('Hello Elysia')
    })
})


// response: 1895
//const { data: id } = await client.id({ id: 1895 }).get()

// response: { id: 1895, name: 'Skadi' }
/*
const { data: nendoroid } = await client.mirror.post({
    id: 1895,
    name: 'Skadi'
})
*/
