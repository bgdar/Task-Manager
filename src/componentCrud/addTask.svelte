<script>

</script>


<section class="container">
  <h3>Add Task</h3>
  <form action="">
    <label for="title">Task Title</label>
    <input type="text" id="title">
    <label for="description"> Description</label>
    <textarea name="" id="description" value="creat sumtime"></textarea>

    <div class="content-task">
      <label for="priority"></label>
      <select name="" id="priority">
        <option value="1">low</option>
        <option value="2">Medium</option>
        <option value="3">Hard</option>
      </select>

      <label for="deadline">Deadline</label>
      <input type="date" id="deadline">

      <label for="assige-to">assige to</label>
      <div class="assige-to">coise member</div>
    </div>

    <label for="todo-checklist">Todo Checlisk</label>

  </form>

</section>

<style>
.container{
  width: 100vw;

}
.container h3{
font-size: 2.5rem;
font-weight: bold;
text-shadow: 1px 1px 2px darkslateblue;
text-align: center;
align-items: center;
box-sizing: border-box;

}
.container form {
  width: 100%;
  border: 1px solid;
padding: 0.3rem;
}
.container form input {
padding: 0.3rem;
width: 100%;
}
</style>
