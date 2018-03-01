const canvas = document.getElementById("game");
const context = canvas.getContext('2d');


context.fillStyle = '#CCE5FF';

context.fillRect(5,5,100,100)
context.fillRect(50,50,100,100)
context.fillRect(50,50,100,100)
context.fillRect(50,50,100,100)
context.fillRect(50,50,100,100)
context.fillRect(50,50,100,100)

const gameLoop = () => {
  console.log('loop')
  
  requestAnimationFrame(gameLoop)
  context.clearRect(0,0,canvas.width,canvas.height)
  context.fillRect(10,10,100,100)
  context.fillRect(120,10,100,100)
  context.fillRect(230,10,100,100)

  context.fillRect(10,120,100,100)
  context.fillRect(120,120,100,100)
  context.fillRect(230,120,100,100)

  context.fillRect(10,230,100,100)
  context.fillRect(120,230,100,100)
  context.fillRect(230,230,100,100)
  
}

requestAnimationFrame(gameLoop)