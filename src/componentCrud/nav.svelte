<script>
    import { FilePlus2 } from "lucide-svelte";
    import { HandlePage } from "../lib/pageStore";


</script>


<nav>
  <div class="menu">
    <button on:click={()=> HandlePage("add-task")}><FilePlus2/> Add Task</button>
    <button on:click={()=> HandlePage("update-task")}> Update Task</button>
    <button on:click={()=> HandlePage("delete-task")}> Delete Task</button>
  </div>
</nav>

<style>

nav .menu{
display: flex;
gap: 15px;
}
</style>
