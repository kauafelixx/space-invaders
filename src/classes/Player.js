import { FIRE, framecaunter, IMAGE } from "../utils/cosntantes.js";
import Projectile from "./Projectile.js";

class Player {
    constructor(canvasWidth, canvasHeight) {
        this.width = 64 / 1.2;
        this.height = 64 / 1.2;
        this.velocit = 11
        this.position = {
            x: canvasWidth / 2 - this.width / 2,
            y: canvasHeight - this.height - 50,
        };

        this.image = this.getImage(IMAGE);
        this.fogo = this.getImage(FIRE);

        this.sx=0;
        this.frameCaunter=framecaunter;
    }

    getImage(path) {
        const image = new Image()
        image.src = path;
        return image;

    }

    moveLeft() {
        this.position.x -= this.velocit
    }
    moveRight() {
        this.position.x += this.velocit
    }

    draw(ctx) {


        ctx.drawImage(this.fogo,
            this.sx,
            0,
            64,
            64,
            this.position.x +16,
            this.position.y +35,
            this.width / 2.5,
            this.height /2.5,

        );

        ctx.drawImage(this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );

      this.update()

    }

    update() {
if(this.frameCaunter===0){
    if (this.sx === 128){
    this.sx=0;
}else{
    this.sx+=64
}
this.frameCaunter=framecaunter;

}
this.frameCaunter--;

    }

    shoot(projectile){
        const p = new Projectile({
            x:this.position.x + this.width/2-1, 
            y:this.position.y ,
        },
        
        -7);
        projectile.push(p);
    }
}

export default Player;