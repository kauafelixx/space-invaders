import  invasor from "../utils/cosntantes.js";
import Projectile from "./classes/Projectile.js";
class Invader {
    constructor(position, velocity) {
          this.position =this.position
        this.width = 64;
        this.height = 64;
        this.velocity =velocity ;

      

        this.image = this.getImage(invasor);

    }

    getImage(path) {
        const image = new Image()
        image.src = path;
        return image;

    }

    moveLeft() {
        this.position.x -= this.velocity
    }
    moveRight() {
        this.position.x += this.velocity
    }

    draw(ctx) {
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width, 
            this.height
        )
    }



    shoot(projectile){
        const p = new Projectile({
            x:this.position.x + this.width/2-1, 
            y:this.position.y ,
        },
        
        7);
        projectile.push(p);

    }
    
}

export default Invader;