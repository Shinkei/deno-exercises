import { serve } from 'https://deno.land/std/http/server.ts'

const PORT = 3456
const HOST = '0.0.0.0' // this one works better with docker containers

const server = serve({ port: PORT, hostname: HOST })

for await (const req of server) {
  req.respond({ body: 'Hola Moticas' })
}
