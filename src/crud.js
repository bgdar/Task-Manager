import Crud from "./crud.svelte" 
import { mount } from "svelte"

const app = mount(Crud,{
  target:document.getElementById("main")
  

})
export default app

