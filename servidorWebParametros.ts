import { serve } from 'https://deno.land/std/http/server.ts'

const PORT = 3456
const HOST = '0.0.0.0'

const server = serve({ port: PORT, hostname: HOST })

for await (const req of server) {
  const params = new URLSearchParams(req.url.substr(1))
  req.respond({ body: `Hola ${params.get('name')}` })
}
