<script>
  import { Trash2 } from "lucide-svelte";

  let tasks = [
    { id: 1, title: "Design UI" },
    { id: 2, title: "Fix Bug API" },
    { id: 3, title: "Write Documentation" },
    { id: 4, title: "Deploy Project" }
  ];

  const deleteTask = (id) => {
    tasks = tasks.filter(task => task.id !== id);
  };
</script>

<section class="container">
  <h3>Delete Task</h3>
  <div class="task-list">
    <ul>
      {#each tasks as task}
        <li>
          <span>{task.title}</span>
          <button class="delete-btn" on:click={() => deleteTask(task.id)}>
            <Trash2 size={16}/> Delete
          </button>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
.container {
  max-width: 600px;
  margin: 20px auto;
  padding: 16px;
}

.container h3 {
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  color: #a94442;
  margin-bottom: 1.2rem;
}

.task-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.task-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fafafa;
  border: 1px solid #ddd;
  padding: 10px 14px;
  margin-bottom: 8px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  transition: transform 0.15s ease;
}

.task-list li:hover {
  transform: translateX(4px);
}

.task-list span {
  font-size: 15px;
  font-weight: 500;
  color: #333;
}

.delete-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #e74c3c;
  border: none;
  color: white;
  font-size: 13px;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
}

.delete-btn:hover {
  background: #c0392b;
  transform: scale(1.05);
}
</style>
