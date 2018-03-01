const canvas = document.getElementById("game");
const context = canvas.getContext('2d');


context.fillStyle = "rgba(0, 255, 0, 1)";

context.fillRect(50,50,10,10)

const gameLoop = () => {
  console.log('loop')
  requestAnimationFrame(gameLoop)
}

requestAnimationFrame(gameLoop)