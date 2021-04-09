import { Application } from 'http://deno.land/x/oak/mod.ts'

const app = new Application()
const PORT = 3456
const HOST = '0.0.0.0'

// este es un middleware, que se va ejecutando en orden
app.use((context, next) => {
  console.log('el servidor se esta ejecutantdo')
  next()
})
app.use((context, next) => {
  context.response.body = 'Hola moticas!!'
})

app.listen({ port: PORT, hostname: HOST })
