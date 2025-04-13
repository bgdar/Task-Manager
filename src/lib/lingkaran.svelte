<script>
  let data = [
    { name: "Task A", value: 30, color: "#FF6384" },
    { name: "Task B", value: 50, color: "#36A2EB" },
    { name: "Task C", value: 20, color: "#FFCE56" },
  ];

  let total = data.reduce((sum, d) => sum + d.value, 0);

  let radius = 60;
  let circumference = 2 * Math.PI * radius;

  let currentOffset = 0;
</script>

<svg width="200" height="200" viewBox="0 0 200 200">
  <g transform="rotate(-90 100 100)">
    {#each data as slice (slice.name)}
      <circle
        r={radius}
        cx="100"
        cy="100"
        fill="transparent"
        stroke={slice.color}
        stroke-width="30"
        stroke-dasharray="{(slice.value / total) * circumference} {circumference}"
        stroke-dashoffset={currentOffset}
        on:introstart={() => {
          // offset logic for next slice
          currentOffset -= (slice.value / total) * circumference;
        }}
      />
    {/each}
  </g>
</svg>

<ul>
  {#each data as slice}
    <li style="color:{slice.color}">{slice.name}: {slice.value}</li>
  {/each}
</ul>

