import { serve } from 'https://deno.land/std/http/server.ts'
import { serveFile } from 'http://deno.land/std/http/file_server.ts'

const PORT = 3456
const HOST = '0.0.0.0'

const server = serve({ port: PORT, hostname: HOST })

for await (const req of server) {
  const html = await serveFile(req, 'index.html')
  req.respond(html)
}

export {}