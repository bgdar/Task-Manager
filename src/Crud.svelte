<script>
import { FilePlus2 } from 'lucide-svelte';
    import Nav from './componentCrud/nav.svelte';
    import MainContent from './componentCrud/MainContent.svelte';

</script>

<header>
  <h3>Task Managers</h3>
  
  <Nav/>
</header>

  <div class="content">
    <MainContent/>
  </div>

<style>
header{
 width: 100vw;
  border: 2px solid;
display: flex;
justify-content: space-around;
align-content:center;

}
</style>
