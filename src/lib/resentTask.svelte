<script>
  // contoh data dummy untuk tabel
  let tasks = [
    { name: "UI Design", status: "In Progress", priority: "High" },
    { name: "API Integration", status: "Pending", priority: "Medium" },
    { name: "Testing", status: "Completed", priority: "Low" },
  ];
</script>

<header>
  <h3>Recent Task</h3>
  <button class="see-all">See All</button>
</header>

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Status</th>
      <th>Priority</th>
    </tr>
  </thead>
  <tbody>
    {#each tasks as task}
      <tr>
        <td>{task.name}</td>
        <td>
          <span class="badge {task.status.toLowerCase().replace(' ','-')}">
            {task.status}
          </span>
        </td>
        <td>
          <span class="priority {task.priority.toLowerCase()}">
            {task.priority}
          </span>
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
/* header */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
header h3 {
  margin: 0;
  font-size: 1.2rem;

}
header .see-all {
  background: #6c63ff;

  border: none;
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}
header .see-all:hover {
  background: #4a42c5;
}

/* table */
table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #3f3f61;
  border-radius: 8px;
  overflow: hidden;
  font-size: 0.9rem;
}
thead {
  background: #34344f;
}
thead th {
  text-align: left;
  padding: 0.8rem;
  font-weight: 600;
  border-bottom: 1px solid #3f3f61;
}
tbody tr {
  transition: background 0.3s;
}
tbody tr:hover {
  background: rgba(108, 99, 255, 0.15);
}
tbody td {
  padding: 0.7rem 0.8rem;
  color: darkgray;
  border-bottom: 1px solid #3f3f61;
}

/* badge status */
.badge {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
}
.badge.pending {
  background: rgba(255,193,7,0.2);
  color: #ffc107;
}
.badge.in-progress {
  background: rgba(0,123,255,0.2);
  color: #4aa8ff;
}
.badge.completed {
  background: rgba(40,167,69,0.2);
  color: #28a745;
}

/* priority */
.priority {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
}
.priority.low {
  background: rgba(40,167,69,0.15);
  color: #28a745;
}
.priority.medium {
  background: rgba(255,193,7,0.15);
  color: #ffc107;
}
.priority.high {
  background: rgba(220,53,69,0.15);
  color: #ff5c5c;
}
</style>
