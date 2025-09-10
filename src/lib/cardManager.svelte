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
.card {
  position: relative;
  border: 1px solid #3f3f61;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.4);
  box-sizing: border-box;
  transition: all 0.4s ease-in-out;

  cursor: pointer;
  overflow: hidden;
}

.card .judul h3 {
  margin: 0.3rem 0;
  font-size: 1.2rem;
  font-weight: 600;

}

.card .judul p {
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  background: #6c63ff;

  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
}

.card .description {
  max-width: 280px;
  margin: 0.5rem 0;
}
.card .description p {
  font-weight: 400;
  font-size: 0.9rem;
  font-family: "Inter", sans-serif;
  line-height: 1.4rem;

}

.card .total-task {
  width: 100%;
  margin: 0.5rem 0;
}
.card .total-task p {
  font-size: 0.85rem;

}
.card .total-task p span {
  font-weight: bold;

}
.card .total-task progress {
  width: 100%;
  height: 8px;
  border-radius: 5px;
  overflow: hidden;
}
.card .total-task progress::-webkit-progress-bar {
  background-color: #3a3a55;
  border-radius: 5px;
}
.card .total-task progress::-webkit-progress-value {
  background: linear-gradient(90deg, #6c63ff, #3dd6d0);
  border-radius: 5px;
}

/* date box */
.card .date {
  display: flex;
  border: 1px solid #3f3f61;
  border-radius: 6px;
  width: 100%;
  justify-content: space-between;
  padding: 0.4rem 0.6rem;
  font-size: 0.8rem;

}
.card .date h6 {
  margin: 0;
  font-weight: 500;

}

/* member */
.card .member {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 0;
}
.card .member img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid #6c63ff;
  object-fit: cover;
}
.card .member button {
  background: #6c63ff;

  font-size: 0.75rem;
  padding: 0.3rem 0.8rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}
.card .member button:hover {
  background: #3d37c9;
}

/* view mode efek */
.card-view {
  margin: 0.3rem;
  background: #34344f;

  transition: all 0.5s ease-in-out;
  transform: scale(1.2); 
  z-index: 100;
}
.card-close {
  transition: all 0.4s ease-in-out;
  transform: scale(1);
  z-index: 1;
}

/* flex container saat view */
.item-flex {
  font-size: 0.85rem;
  margin: 0.4rem 0;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

/* tombol kecil saat mode view */
.button-sm {
  font-size: 0.7rem;
  padding: 0.25rem 0.6rem;
}

/* overlay */
.view-screen {
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.4s ease-in-out;
  background-color: #1b1b1b;
  opacity: 0.75;
  width: 100vw;
  height: 100vh;
  z-index: 90;
}
.close-screen {
  transition: 0.4s ease-out;
  opacity: 0;
}

</style>
