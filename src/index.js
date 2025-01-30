import Player from "./classes/Player.js";
import Projectile from "./classes/Projectile.js";

const canvas=document.querySelector('canvas');
const ctx=canvas.getContext('2d');

canvas.width=innerWidth;
canvas.height=innerHeight;
//canvas em 100% da tela



const  player=new Player(canvas.width, canvas.height);

const playerProjectile=[

]



const keys ={
left: false,
rigth: false,
shoot:{
    apertada:false, 
    solto: true,
}
}

const drawProjectile=()=>{
    playerProjectile.forEach((Projectile) =>{
        Projectile.draw(ctx);
        Projectile.update();
    })
}

const btnLeft = document.querySelector('.btm');
const btnRight = document.querySelector('.btm2');

const gameLoop= ()  =>{
ctx.clearRect(0, 0, canvas.width, canvas.height)
drawProjectile();





ctx.save();

ctx.translate(player.position.x + player.width/2,
    player.position.y + player.height/2
);

if(keys.shoot.apertada ){
 player.shoot(playerProjectile);

}

if(keys.left && player.position.x >=0){
    player.moveLeft()
    ctx.rotate(-0.15)
}
if(keys.rigth && player.position.x <= canvas.width - player.width){
player.moveRight()
ctx.rotate(0.15)
}

ctx.translate(-player.position.x - player.width/2,
    -player.position.y - player.height/2
);

if(keys.shoot.apertada && keys.shoot.solto){
    player.shoot(playerProjectile);
keys.shoot.solto=false
}


    player.draw(ctx);

    ctx.restore();

    requestAnimationFrame(gameLoop)
}





addEventListener("keydown", (event) => {
    const key= event.key.toLowerCase();
  
    if(key === "q" || key==="Q")  keys.left= true
    

    if(key === "e" || key==="E")  keys.rigth=true

if(key ==="enter") keys.shoot.apertada=true
});

addEventListener("keyup", (event) => {
    const key= event.key.toLowerCase();
  
    if(key === "q" || key==="Q")   keys.left=false;


    if(key === "e" || key==="E")    keys.rigth=false;

    if(key ==="enter") {
        keys.shoot.apertada=false;
        keys.shoot.solto=true;
    }
    
});




gameLoop();