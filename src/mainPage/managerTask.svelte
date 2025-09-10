<script>
import Card from "../lib/cardManager.svelte";

</script>

<section >
<Card status="in-pogress"  judul_task= "example"  description="loremssjs js jsj sj " start_date="2025-09-12" deadline="025-12-12"/>
<Card status="in-pogress"  judul_task= "example"  description="loremssjs js jsj sj " start_date="2025-09-12" deadline="025-12-12" />
<Card status="in-pogress"  judul_task= "example"  description="loremssjs js jsj sj " start_date="2025-09-12" deadline="025-12-12" />
<Card status="in-pogress"  judul_task= "example"  description="loremssjs js jsj sj " start_date="2025-09-12" deadline="025-12-12" />
</section>

<style>
section{
max-width: 100%;
display: flex;
gap: 10px;
padding: 0.3rem;
justify-content: center;
flex-direction: row;
flex-wrap: wrap;
}

</style>
