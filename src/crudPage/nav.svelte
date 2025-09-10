<script>
  import { FilePlus2 ,Trash2,NotebookPen, ArrowLeft } from "lucide-svelte";
  import { HandlePage } from "../lib/pageStore";
</script>

<nav>
  <!-- Back Button -->
  <div class="nav-left">
    <a href="/">
      <button type="button" class="back-btn">
        <ArrowLeft size="18" /> Back
      </button>
    </a>
  </div>

  <!-- Menu -->
  <div class="menu">
    <button class="nav-btn" on:click={() => HandlePage("add-task")}>
      <FilePlus2 size="18"/> Add Task
    </button>
    <button class="nav-btn" on:click={() => HandlePage("update-task")}>
      <NotebookPen size="18"/> Update Task
    </button>
    <button class="nav-btn delete" on:click={() => HandlePage("delete-task")}>
      <Trash2 size="18"/> Delete Task
    </button>
  </div>
</nav>

<style>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f8f9fa;
  padding: 10px 16px;
  border-bottom: 2px solid #e5e5e5;
}

.nav-left .back-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #e9ecef;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s;
}

.nav-left .back-btn:hover {
  background: #dee2e6;
}

.menu {
  display: flex;
  gap: 12px;
}

.nav-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: #007bff;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
}

.nav-btn:hover {
  background: #0056b3;
  transform: translateY(-1px);
}

.nav-btn.delete {
  background: #dc3545;
}

.nav-btn.delete:hover {
  background: #a71d2a;
}
</style>
