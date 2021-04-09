import { Application } from './dependencies.ts'
import router from './router.ts'

const app = new Application()
const PORT = 3456
const HOST = '0.0.0.0'


// este es un middleware, que se va ejecutando en orden
// app.use((context, next) => {
//   console.log('el servidor se esta ejecutantdo')
//   next()
// })
// app.use((context, next) => {
//   context.response.body = 'Hola moticas!!'
// })

// le decimos a la app que use las rutas definidas
app.use(router.routes())
app.use(router.allowedMethods())

app.listen({ port: PORT, hostname: HOST })
