<script>[]
import Nav from "./componentsMain/nav.svelte";
import MainContent from "./componentsMain/MainContent.svelte";
import { Moon, Sun } from "lucide-svelte";

let mode = $state(false);

//fucntion untuk menghadle tema gelap dan terang
const handleMode = ()=>{
 mode = !mode
  if(mode){
  document.body.classList.add("dark")
}else{
  document.body.classList.remove("dark")
}

} 

</script>

<div class="container">
  <header>
    <h2>task Managers</h2>
    <div class="menu">    
      <button on:click={handleMode}>
        {#if mode}
          <Moon/>
        {:else}
          <Sun/>
        {/if}
      </button>
    </div>
  </header>

    <div class="nav">
      <Nav/>
    </div>

    <div class="content">
      <MainContent/>
    </div>
</div>

<style>
/*posisi header dan navbar tetap di tempat */
.container{
border: 2px solid;
max-width: 100vw;
padding: 0.3rem;
 display: grid;
overflow: visible;
grid-template-areas: 
    "header header"
    "nav content";
  grid-template-columns: 20vw 80vw;
}
.container header{
position: sticky;
border: 1px solid;
top: 0;
left: 0;
display: flex;
justify-content: space-evenly;
z-index: 10;
  grid-area: header;
  max-width: 100%;
  height: 15vh; 
}
.container .nav {
top: 15vh;
left: 0;
max-height: calc(100vh - 20px);
position: sticky;
  grid-area: nav;
}
.content{
   grid-area: content;
}

</style>
