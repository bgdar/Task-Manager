<script>
    
// card component card yang bisa di gunakan berulang kali berbentuk persegi untuk info Task User
const {status,judul_task,description,start_date,deadline}= $props();
  
let view = $state(false)

</script>


<div  class={view ? "card-view card" :"card"} >
  <div class="progress">
      <p>{status}</p>
  </div>
  <h3>{judul_task}</h3>
  <div class="description">
    <p>{description}</p>
  </div>

  <div class="total-task">
    <p>Task done <span>1/10</span></p>
    <progress id="progressBar" value="50" max="100"></progress>
  </div>

  <div class="date">
    <div class="start_date">
      <h6>{start_date}</h6>
    </div>
    <div class="deadline">
      <h6>{deadline}</h6>
    </div>
  </div>

  <div class="member">
    <div>
      <img src="" alt="kosong">
      <button onclick={( )=> view = ! view}>{ view ? "close" : "view"}</button>
    </div>
  </div>
</div>

<style>
.card{
position: relative;
  border: 2px solid ;
 padding: 10px;
  border-radius: 8px;
  box-shadow: 2px 1px 4px darkslateblue;
box-sizing: border-box;
padding: 0;
flex-shrink: 1;
}
.card .description {
max-width: 240px;
}
.card .description p{
 font-weight: 400;
 font-family: 'Courier New', Courier, monospace;
}
.card .total-task {
width: 100%;
}
.card .total-task p {
  font-weight: 300;
  font-family: sans-serif;
}
.card .total-task p span{
  font-weight: bold;
  font-family: sans-serif;
}
.card .date{
 display: flex;
border: 1px solid;
width: 100%;
justify-content: space-between;
}
.card .member {
padding: 10px;
}

/*style untuk view mx */
.card-view{
background-color: #eaeaea;
 width: 50%;
position: absolute;
z-index: 100;
}


</style>
