<script>
//File utaman yang menghandle CONtent

import {Page} from "../lib/pageStore";
import Dashboard from "./dashboard.svelte";
import ManagerTask from "../componentsMain/managerTask.svelte";
    import TeamMembers from "./team-members.svelte";

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
    <TeamMembers/>
  {:else }
    <div class="label">
    <h3>TASK MANAGER APP</h3>
  </div>
  {/if}

<style>
.judul{
  margin: 0.4rem ;
  display: flex;
  justify-content: space-around;
  border-radius: 5px;
  border: 2px solid;
  box-shadow: 1px 2px 3px darkslateblue;
}

.label{
text-align: center;
}
.label h3 {
font-size: 20px;
text-shadow: 1px 1px 2px darkslateblue;
 font-family: fantasy;
}
</style>
