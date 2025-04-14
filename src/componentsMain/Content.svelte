<script>
import {Page} from "../lib/pageStore";
import Dashboard from "./dashboard.svelte";
import ManagerTask from "../componentsMain/managerTask.svelte";

</script>

<div class="judul">
  <h3>Welcome dar</h3>
  <h4>{$Page.name}</h4>
</div>

  {#if $Page.name =="dashboard" }
    <Dashboard/>
  {:else if $Page.name == "manager-task"}
    <ManagerTask/>
  {:else if $Page.name == "team-members"}
  <p>Team member page</p>

  {:else }
  
    <p>pilih di kemana mau nav</p>
  {/if}

<style>
.judul{
  margin: 1rem 0px 1rem 0px;
  display: flex;
  justify-content: space-around;
  border-radius: 5px;
  border: 2px solid;
  box-shadow: 4px 2px 3px #000000;
}
</style>
