<template>
<body>
  <div id="game-board"></div>
</body>
</template>

<script>
let lastRenderTime = 0
const SNAKE_SPEED = 2

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
  
  console.log('Render');
  lastRenderTime = currentTime
}

window.requestAnimationFrame(main);

export default {};
</script>

<style scoped>
body {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: black;
}

#game-board {
  background-color: #ccc;
  width: 100vmin;
  height: 100vmin;
  display: grid;
  grid-template-rows: repeat(21, 1fr);
  grid-template-columns: repeat(21, 1fr);
}

.snake {
  background-color: hsl(200, 100%, 50%);
  border: 0.25vmin solid black;
}

.food {
  background-color: hsl(50, 100%, 50%);
}
</style>