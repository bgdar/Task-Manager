<script>
import Lingkaran from "../lib/lingkaran.svelte";
import Batang from "../lib/batang.svelte";
import ResentTask from "../lib/resentTask.svelte"


</script>

<div class="grafik-info">
  <div class="lingkaran">
    <Lingkaran/>
  </div>
  <div class="batang">
    <Batang/>
  </div>
</div>

<section>
  <ResentTask/>
</section>
<style>
.grafik-info {
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  gap: 1rem;
  flex-wrap: wrap; /* biar responsif kalau layar kecil */
}

/* card grafik */
.grafik-info .lingkaran,
.grafik-info .batang {
  flex: 1 1 45%;
  border: 1px solid #3f3f61;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.grafik-info .lingkaran:hover,
.grafik-info .batang:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.5);
}

section {
  margin-top: 1.5rem;
  border: 1px solid #3f3f61;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.4);
  color: #f0f0ff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
section:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 14px rgba(0,0,0,0.5);
}



</style>
