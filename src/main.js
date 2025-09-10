import { mount } from 'svelte'
import './app.css'
import main from './main.svelte'

const app = mount(main, {
  target: document.getElementById('main'),
})

export default app
