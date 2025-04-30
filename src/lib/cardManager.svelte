<script>
    
// card component card yang bisa di gunakan berulang kali berbentuk persegi untuk info Task User
const {status,judul_task,description,start_date,deadline}= $props();
  
let view = $state(false)
let focusElement;

const handleView = () => {
  view = !view;
focusElement.scrollIntoView({ behavior: 'smooth' });
if(view){
document.body.style.overflow = "hidden";
}else{
document.body.style.overflow = "";
}

}

</script>

{#if view}
  <div class={view?"view-screen":"close-screen"}>
  </div>
{/if}

<div  class={view ? "card-view card" :"card-close card"} bind:this={focusElement} >
  <div class="judul">
    <div class={view ? "item-flex":""}>
        <p class={status}>{status}</p>
    </div>
    <h3>{judul_task}</h3>
  </div>

<div class={view ? "item-flex" : ""}>
  <div class="description">
    <p>{description}</p>
  </div>

  <div class="total-task">
    <p>Task done <span>1/10</span></p>
    <progress id="progressBar" value="50" max="100"></progress>
  </div>
</div>

 <div class={view ? "item-flex":""}>
  <div class="date">
    <div class="start_date">
      <h6>{start_date}</h6>
    </div>
    <div class="deadline">
      <h6>{deadline}</h6>
    </div>
  </div>
 </div>

  <div class="member">
    <div>
      <img src="" alt="kosong">
      <button class={view?"button-sm":""} onclick={handleView} >{ view ? "close" : "view"}</button>
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
padding: 0.5rem;
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
display: flex;
justify-content: space-evenly;
padding: 10px;
}

/*style untuk view mx */
.card-view {
margin-right: 0.3rem;
  background-color: darkgray;
  color: darkslategray;
   transition: all 0.5s ease-in-out;
 transform: scale(1.5); 
  z-index: 100;
}
.card-close {
  transition: all 0.5s ease-in-out;
  transform: scale(1); /* efek membesar lembut */
  z-index: 1;
}
.item-flex{
font-size:0.8rem;
margin: 0.2rem;
display: flex;
justify-content: center;
gap: 14px;
}
.button-sm{
font-size:0.7rem;
}
.view-screen{
position: absolute;
left: 0;
transition: 0.5s ease-in-out;
background-color: #1b1b1b;
opacity: 0.8;
width: 100vw;
height: 100vh;
z-index: 99;
}
.close-screen {
transition: 0.5s ease-out;
opacity: 0;
}

</style>
