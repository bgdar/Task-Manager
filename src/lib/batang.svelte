<script>
//di sini akan membuat grafict batang 

  let data = [
    { name: "Task A", value: 40 },
    { name: "Task B", value: 60 },
    { name: "Task C", value: 30 },
    { name: "Task D", value: 80 },
  ];

  let max = Math.max(...data.map(d => d.value));
  let chartHeight = 200;
  let barWidth = 40;
  let barSpacing = 30;
</script>

<svg
  width={(barWidth + barSpacing) * data.length}
  height={chartHeight + 40}
>
  {#each data as d, i}
    <g transform={`translate(${i * (barWidth + barSpacing)}, 0)`}>
      <!-- Batang -->
      <rect
        x="0"
        y={chartHeight - (d.value / max) * chartHeight}
        width={barWidth}
        height={(d.value / max) * chartHeight}
        fill="#4CAF50"
      />
      <!-- Nilai -->
      <text
        x={barWidth / 2}
        y={chartHeight - (d.value / max) * chartHeight - 5}
        font-size="12"
        text-anchor="middle"
      >
        {d.value}
      </text>
      <!-- Label -->
      <text
        x={barWidth / 2}
        y={chartHeight + 15}
        font-size="12"
        text-anchor="middle"
      >
        {d.name}
      </text>
    </g>
  {/each}
</svg>

