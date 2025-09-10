<script>
  let members = ["Alice", "Bob", "Charlie"]; // contoh daftar member
</script>

<section class="container">
  <h3>Update Task</h3>
  <form>
    <!-- Task Title -->
    <label for="title">Task Title</label>
    <input type="text" id="title" placeholder="Update task title..." />

    <!-- Description -->
    <label for="description">Description</label>
    <textarea id="description" rows="4" placeholder="Update task details..."></textarea>

    <!-- Task Details -->
    <div class="content-task">
      <div class="form-group">
        <label for="priority">Priority</label>
        <select id="priority">
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>
      </div>

      <div class="form-group">
        <label for="deadline">Deadline</label>
        <input type="date" id="deadline" />
      </div>

      <div class="form-group">
        <label for="assige-to">Assign to</label>
        <select id="assige-to">
          {#each members as member}
            <option>{member}</option>
          {/each}
        </select>
      </div>
    </div>

    <!-- Todo Checklist -->
    <label for="todo-checklist">Todo Checklist</label>
    <input type="text" id="todo-checklist" placeholder="Update checklist item..." />

    <!-- Update Button -->
    <button type="submit" class="update-btn">Update Task</button>
  </form>
</section>

<style>
.container {
  width: 100%;
  max-width: 700px;
  margin: 20px auto;
  padding: 16px;
}

.container h3 {
  font-size: 2rem;
  font-weight: bold;
  color: #34495e;
  text-align: center;
  margin-bottom: 1.2rem;
  text-shadow: 1px 1px 2px rgba(39, 60, 117, 0.3);
}

form {
  display: flex;
  flex-direction: column;
  gap: 14px;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  background: #fafafa;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}

label {
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 4px;
}

input,
textarea,
select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
}

textarea {
  resize: vertical;
}

.content-task {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.update-btn {
  margin-top: 12px;
  padding: 10px 16px;
  background: #28a745; /* hijau beda dari Add Task */
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
}

.update-btn:hover {
  background: #1e7e34;
  transform: translateY(-1px);
}
</style>
