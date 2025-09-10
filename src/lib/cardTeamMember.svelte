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
.card {

  border: 1px solid #3f3f61;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0 3px 8px rgba(0,0,0,0.35);
  padding: 1rem;
  margin: 0.8rem 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: #f0f0ff;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 14px rgba(0,0,0,0.5);
}

/* profil */
.card .profil {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
}
.card .profil img {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  border: 2px solid #6c63ff;
  object-fit: cover;
}
.card .profil .name h5 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
}
.card .profil .name p {
  margin: 0;
  font-size: 0.85rem;
  color: #b0b0d0;
  font-weight: 400;
}

/* status container */
.card .status {
  display: flex;
  justify-content: space-between;
  gap: 0.6rem;
}

/* status item */
.card .status .y {
  flex: 1;
  padding: 0.6rem;
  border-radius: 8px;
  text-align: center;
  font-size: 0.85rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  transition: background 0.3s, transform 0.2s;
  cursor: pointer;
}
.card .status .y:hover {
  transform: scale(1.05);
}

/* warna status */
.card .status .pending {
  background: rgba(255, 193, 7, 0.15);
  border: 1px solid #ffc107;
  color: #ffc107;
}
.card .status .in-progress {
  background: rgba(0, 123, 255, 0.15);
  border: 1px solid #007bff;
  color: #4aa8ff;
}
.card .status .completed {
  background: rgba(40, 167, 69, 0.15);
  border: 1px solid #28a745;
  color: #4fe07d;
}

/* icon ukuran */
.card .status .y svg {
  font-size: 1rem;
}


</style>
