<script>
import { Page } from "../lib/pageStore";
    import AddTask from "./addTask.svelte";
    import DeleteTask from "./deleteTask.svelte";
    import UpdateTask from "./updateTask.svelte";
</script>

{#if $Page.name =="add-task"}
  <AddTask/>
  {:else if $Page.name == "update-task"}
  <UpdateTask/>
  {:else if $Page.name == "delete-task"}

  <DeleteTask/>

  {:else}
  <p>clik header</p>
  
{/if}
