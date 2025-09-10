<script>
import { FilePlus2 } from 'lucide-svelte';
    import Nav from './crudPage/nav.svelte';
    import MainContent from './crudPage/MainContent.svelte';

</script>

<header>
  
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
