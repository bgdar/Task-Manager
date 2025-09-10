<script>
import Nav from "./mainPage/nav.svelte";
import MainContent from "./mainPage/MainContent.svelte";
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
      <button onclick={handleMode} class={mode ? "button-dark" : "button-light"}>
        {#if mode}
          <Moon size={20}/>
        {:else}
          <Sun size={20}/>
        {/if}
      </button>
    </div>
  </header>
  <div class="nav">
    <Nav />
  </div>
  <div class="content">
    <MainContent />
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
  box-shadow: 0 2px 5px rgba(0,0,0,0.09);
  transition: background 0.3s, color 0.3s;
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
  transition: background 0.3s, transform 0.1s;
}

.menu button:hover {
  transform: scale(1.05);
}

.header-light {
  background: #ffffff;
}

.button-light {
  background: #f1f1f1;
    color:#10B981 ;
 
}

/* Dark mode */
.header-dark {
  background: #1f1f1f;
}

.button-dark {
  background: #333;
  color: #3B82F6;
 
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
</style>
