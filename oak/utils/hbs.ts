import { Handlebars } from '../dependencies.ts'

const hbs = new Handlebars({
  baseDir: '.',
  compilerOptions: undefined,
  defaultLayout: 'main',
  extname: '.hbs',
  helpers: undefined,
  layoutsDir: 'layouts',
  partialsDir: '',
})

export default hbs