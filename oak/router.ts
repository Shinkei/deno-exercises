import { Router } from './dependencies.ts'


const router = new Router()

router.get('/', (context) => {
  context.response.body = 'Pagina de inicio'
})

router.get('/users', (context) => {
  context.response.body = 'Pagina de usuarios'
})

router.get('/users/:name', (context) => {
  context.response.body = `pagina de ${context.params.name}`
})

export default router