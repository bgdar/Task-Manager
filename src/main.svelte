<script>
  import Nav from "./mainPage/nav.svelte";

  import { Page } from "./lib/pageStore";

  import Dashboard from "./mainPage/dashboard.svelte";
  import ManagerTask from "./mainPage/managerTask.svelte";
  import TeamMembers from "./mainPage/team-members.svelte";

  import { Moon, Sun } from "lucide-svelte";

  let mode = $state(false);

  // function untuk handle dark / light mode
  const handleMode = () => {
    mode = !mode;

    if (mode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };
</script>

<div class="container">
  <!-- Header -->
  <header class={mode ? "header-dark" : "header-light"}>
    <h2>Task Manager</h2>
    <div class="menu">
      <button
        onclick={handleMode}
        class={mode ? "button-dark" : "button-light"}
      >
        {#if mode}
          <Moon size={20} />
        {:else}
          <Sun size={20} />
        {/if}
      </button>
    </div>
  </header>
  <div class="nav">
    <Nav />
  </div>

  <!-- content utama yang ada di sebelah kanan Navbar  -->
  <div class="content">
    <div class="judul">
      <h3>Welcome dar</h3>
      <h4>{$Page.name}</h4>
    </div>

    <!-- handle bagaiman content di tampilkan -->
    {#if $Page.name == "dashboard"}
      <Dashboard />
    {:else if $Page.name == "manager-task"}
      <ManagerTask />
    {:else if $Page.name == "team-members"}
      <TeamMembers />
    {:else}
      <div class="label">
        <h3>TASK MANAGER APP</h3>
      </div>
    {/if}
  </div>
</div>

<style>
  .container {
    display: grid;
    grid-template-areas:
      "header header"
      "nav content";
    grid-template-columns: 20vw 1fr;
    grid-template-rows: auto 1fr;
    min-height: 100vh;
    max-width: 100vw;
    overflow: hidden;
  }

  /* Header */
  header {
    grid-area: header;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 24px;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.09);
    transition:
      background 0.3s,
      color 0.3s;
  }

  header h2 {
    font-size: 1.6rem;
    font-weight: bold;
    margin: 0;
  }

  /* Nav Sidebar */
  .nav {
    grid-area: nav;
    border-right: 1px solid #ddd;
    min-height: calc(100vh - 60px);
    position: sticky;
    top: 60px;
    background: #f9f9f9;
    transition: background 0.3s;
  }
  .content {
    grid-area: content;
    padding: 20px;
    overflow-y: auto;
    background: #fff;
    transition: background 0.3s;
  }

  .menu button {
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    cursor: pointer;
    text-align: center;
    transition:
      background 0.3s,
      transform 0.1s;
  }

  .menu button:hover {
    transform: scale(1.05);
  }

  .header-light {
    background: #ffffff;
  }

  .button-light {
    background: #f1f1f1;
    color: #10b981;
  }

  /* Dark mode */
  .header-dark {
    background: #1f1f1f;
  }

  .button-dark {
    background: #333;
    color: #3b82f6;
  }

  /* Global dark mode (apply ke body) */
  :global(body.dark) {
    background: #121212;
    color: #f1f1f1;
  }

  :global(body.dark) .nav {
    background: #1a1a1a;
    border-color: #333;
  }

  :global(body.dark) .content {
    background: #181818;
  }

  /* style utama untuk  content   */

  .content .judul {
    margin: 0.4rem;
    display: flex;
    justify-content: space-around;
    border-radius: 5px;
    border: 2px solid;
    box-shadow: 1px 2px 3px darkslateblue;
  }

  .content .label {
    text-align: center;
  }
  .content .label h3 {
    font-size: 20px;
    text-shadow: 1px 1px 2px darkslateblue;
    font-family: fantasy;
  }
</style>
