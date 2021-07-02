import { Collectible } from './Collectible';
import { Bullet } from './Bullet';

export class Lipstick extends Collectible {
    constructor(gc, name, status){
        const icons = {
            idle: "https://image.flaticon.com/icons/png/512/307/307579.png",
        }
        super(gc, name, "lipstick", icons, status);
    }

    combine(o){
        if(o.type === "firework" && o.status === "powder"){
            this.game.removeObjectFromWorld(this);
            this.game.removeObjectFromWorld(o);
            this.game.addObject(new Bullet(this.game,"Tube de poudre","empty"))
            return true;
        }
    }

}