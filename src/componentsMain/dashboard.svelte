<script>
import Lingkaran from "../lib/lingkaran.svelte";
import Batang from "../lib/batang.svelte";

</script>

<div class="grafik-info">

  <div class="lingkaran">
    <Lingkaran/>
  </div>
  <div class="batang">
    <Batang/>
  </div>

</div>

<style>
.grafik-info{
width: 100%;
padding: 10px;
display: flex;
justify-content: space-evenly;
}

</style>
