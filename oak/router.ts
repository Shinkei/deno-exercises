import { Router } from './dependencies.ts'
import hbs from './utils/hbs.ts'


const router = new Router()

router.get('/', async (context) => {
  
  context.response.body = await hbs.renderView('index', {title: 'perro'})
})

router.get('/users', (context) => {
  context.response.body = 'Pagina de usuarios'
})

// // agregar + al final hace que esta funcion tome la url y todo
// // lo que venga delante user/perro/loquesea
// router.get('/users+', (context) => {
//   context.response.body = 'Pagina de usuarios y mas'
// })

router.get('/users/:name', (context) => {
  context.response.body = `pagina de ${context.params.name}`
})

export default router