import { serve } from 'https://deno.land/std/http/server.ts'
import routeParser from 'https://dev.jspm.io/route-parser'
import RouteParser from 'https://unpkg.com/@types/route-parser'


const Route = routeParser as typeof RouteParser

const PORT = 3456
const HOST = '0.0.0.0'

const server = serve({ port: PORT, hostname: HOST })

const route = new Route('/:name')


for await (const req of server) {
  const match: any = route.match(req.url)
  req.respond({ body: `Hola ${match.name}` })
}
