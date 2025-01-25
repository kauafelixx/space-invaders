import Player from "./classes/Player.js";

const canvas=document.querySelector('canvas');
const ctx=canvas.getContext('2d');

canvas.width=innerWidth;
canvas.height=innerHeight;
//canvas em 100% da tela

const  player=new Player(canvas.width, canvas.height);

const keys ={
left: false,
rigth: false,
}

const btnLeft = document.querySelector('.btm');
const btnRight = document.querySelector('.btm2');

const gameLoop= ()  =>{
ctx.clearRect(0, 0, canvas.width, canvas.height)

if(keys.left && player.position.x >=0){
    player.moveLeft()
}
if(keys.rigth && player.position.x <= canvas.width - player.width){
player.moveRight()
}

    player.draw(ctx);

    requestAnimationFrame(gameLoop)
}





addEventListener("keydown", (event) => {
    const key= event.key.toLowerCase();
  
    if(key === "q" || key==="Q")  keys.left= true
    

    if(key === "e" || key==="E")  keys.rigth=true


});

addEventListener("keyup", (event) => {
    const key= event.key.toLowerCase();
  
    if(key === "q" || key==="Q")   keys.left=false;


    if(key === "e" || key==="E")    keys.rigth=false;
    
});




gameLoop();