import Crud from "./Crud.svelte" 
import { mount } from "svelte"

const app = mount(Crud,{
  target:document.getElementById("main")
  

})
export default app

