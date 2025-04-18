<script>
    import { Activity,Brush, CheckCheck } from "lucide-svelte";


// untuk status nantik saja
const {name,email} = $props()

</script>
<div class="card">
  <div class="profil">
    <img src="" alt="">
    <div class="name">
      <h5>{name}</h5>
      <p>{email}</p>
    </div>
  </div>

  <div class="status">
    <div title="pedding" class="y pending"><Brush/>0</div>
    <div title="in progress" class="y in-progress"><Activity/>0</div>
    <div title="complated" class="y completed"><CheckCheck/>0</div>
  </div>
</div>

<style>
.card{
  border-top-right-radius: 7.2px;
  border-bottom-left-radius: 7.2px;
  border: 2px solid;
  box-shadow: 1px 2px 2px darkslateblue;
}
.card .profil{
display: flex;
gap: 10px;
justify-content: space-between;
}
.card .profil img {
 border-radius: 50%;
height: 50px;
width: 50px;
}
.card .profil .name p {
 font-weight: 300px;
}

.card .status{
 display: flex;
gap: 5px;
}
.card .status .y {
margin: 0.3em;
 padding: 10px;
border: 1px solid;
text-align: center;
}


</style>
