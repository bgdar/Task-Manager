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
  {:else }
    <p>pilih di kemana mau nav</p>
  {/if}

<style>
.judul{
  margin: 1.2rem 0px 1.2rem 0px;
  display: flex;
  justify-content: space-around;
  border-radius: 5px;
  border: 2px solid;
  background-color: white;
}
</style>
