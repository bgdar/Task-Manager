<script>
import { Page } from "../lib/pageStore";
    import AddTask from "./addTask.svelte";

</script>

{#if $Page.name =="add-task"}
  <AddTask/>
  {:else if $Page.name == "update-task"}
  <p>Update page </p>
  {:else if $Page.name == "delete-task"}
  <p>delete Task</p>
  {:else}
  <p>clik header</p>
{/if}
