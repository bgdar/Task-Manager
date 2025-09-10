<script>
import {HandlePage} from "../lib/pageStore";
import { LayoutDashboard,ClipboardCheck, NotebookPen, Users,LogOut } from 'lucide-svelte';
</script>

<nav>
  <div class="data-client">
    <!-- image client atau yang di dapat dari server -->
    <img src="https://via.placeholder.com/120" alt="Client Avatar">
    <h4>Name Client</h4>
    <p>emailclient@example.com</p>
  </div>
 
  <ul>
    <li> 
      <button on:click={()=>HandlePage("dashboard")}> 
        <LayoutDashboard /> Dashboard
      </button>
    </li>
    <li>
      <button on:click={()=>HandlePage("manager-task")}>
        <ClipboardCheck /> Manager Task
      </button>
    </li>
    <li>
      <button>
        <a href="/crud.html"><NotebookPen /> CRUD</a> 
      </button>
    </li>
    <li>
      <button on:click={()=> HandlePage("team-members")}>
        <Users/> Team Members
      </button>
    </li>
    <li>
      <button>
        <a href="/logout"><LogOut/> Logout</a>
      </button>
    </li>
  </ul>
</nav>

<style>
  nav {
    height: 100vh;
    max-width: 250px;
    background: linear-gradient(180deg, #1e1e2f, #252547);
    color: #fff;
    box-shadow: 2px 0 10px rgba(0,0,0,0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.2rem 0;
  }

  nav .data-client {
    text-align: center;
    margin-bottom: 2rem;
  }

  nav .data-client img {
    border: 3px solid #6c63ff;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin-bottom: .8rem;
    object-fit: cover;
  }

  nav .data-client h4 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
  }

  nav .data-client p {
    font-size: 0.85rem;
    color: #a0a0c0;
  }

  nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  nav ul li {
    margin: .5rem 0;
    text-align: center;
  }

  nav ul li button {
    display: flex;
    align-items: center;
    gap: .6rem;
    background: transparent;
    border: none;
    width: 85%;
    padding: .7rem;
    border-radius: 8px;
    font-size: 0.9rem;
    color: #e0e0ff;
    cursor: pointer;
    transition: background 0.3s;
  }

  nav ul li button:hover {
    background: rgba(108, 99, 255, 0.2);
    color: #fff;
  }

  nav ul li button a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: .6rem;
  }

 
</style>
