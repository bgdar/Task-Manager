<script>
  import Nav from "./crudPage/nav.svelte";

  import { Page } from "./lib/pageStore";

  import AddTask from "./crudPage/addTask.svelte";
  import DeleteTask from "./crudPage/deleteTask.svelte";
  import UpdateTask from "./crudPage/updateTask.svelte";
</script>

<header>
  <Nav />
</header>

<div class="content">
  {#if $Page.name == "add-task"}
    <AddTask />
  {:else if $Page.name == "update-task"}
    <UpdateTask />
  {:else if $Page.name == "delete-task"}
    <DeleteTask />
  {:else}
    <p>clik header</p>
  {/if}
</div>

<style>
  header {
    width: 100vw;
    border: 2px solid;
    display: flex;
    justify-content: space-around;
    align-content: center;
  }
</style>
