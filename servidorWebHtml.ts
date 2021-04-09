import { serve } from 'https://deno.land/std/http/server.ts'

const PORT = 3456
const HOST = '0.0.0.0'

const server = serve({ port: PORT, hostname: HOST })

for await (const req of server) {
  const html = await Deno.readFile('index.html')
  req.respond({ body: html })
}
