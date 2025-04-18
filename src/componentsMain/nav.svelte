<script>
import {HandlePage} from "../lib/pageStore";
import { LayoutDashboard,ClipboardCheck, NotebookPen, Users,LogOut } from 'lucide-svelte';

</script>

<nav>
  <div class="data-client">
    <!-- image client atau yang di dapat dari server -->
    <img src="" alt="">
    <h4>Name client</h4>
    <p>email client</p>
  </div>
 
  <ul>
    <li> <button on:click={()=>HandlePage("dashboard")}> <LayoutDashboard />Dashboard</button></li>
    <li><button on:click={()=>HandlePage("manager-task")}><ClipboardCheck />Manager Task</button></li>
    <li ><button ><a href="/crud.html"> <NotebookPen/>crud</a> </button></li>
    <li> <button on:click={()=> HandlePage("team-members")}> <Users/> Team Members </button></li>
    <li> <button> <LogOut/> <a href="/logout">Logout</a> </button></li>
  </ul>
 </nav>

<style>
nav {
box-shadow: 2px 1px 3px darkslateblue;
  border: 1px solid ;
  max-width: 20vw;
  text-align: center;
}

nav .data-client img {
  border: 3px solid gray;
border-radius: 50%;
  width: 120px;
  height: 120px;
} 

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}

nav ol li button {  
  font-size: 13px;
  width: 2rem;
  height: 2rem;
  margin: 10px;
  
}
</style>
