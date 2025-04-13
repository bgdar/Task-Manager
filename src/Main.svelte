<script>
import Nav from "./componentsMain/nav.svelte";
import Content from "./componentsMain/Content.svelte";

</script>
<div class="container">
  <header>
    <h2>welcome to task Managers</h2>
  </header>
    <div class="nav">
      <Nav/>
    </div>
    <div class="content">
      <Content/>
    </div>
  <footer>
      <p>ini foter</p>
  </footer>
</div>

<style>
/*posisi header dan navbar tetap di tempat */
.container{
border: 2px solid;
max-width: 100vw;
gap: 10px;
 display: grid;
  grid-template-areas: 
    "header header"
    "nav content"
    "nav footer";

  grid-template-columns: 0.5fr 1fr;
}
header{
  grid-area: header;
  max-width: 100%;
  height: 15vh; 
}
.nav {
  grid-area: nav;
}
.content{
   grid-area: content;
}
footer {
width: 100vw;
height: 2rem;
border: 1px solid;
background-color: darkgrey;
 grid-area: footer;
}

</style>
