import { Collectible } from './Collectible';

export class Bullet extends Collectible {
    constructor(gc, name, status){
        const icons = {
            empty: require("../assets/bullet-powder.png"),
            idle: require("../assets/bullet.png"),
        }
        super(gc, name, "bullet", icons, status);
    }

    use(){
        return false;
    }

    combine(o){
        if(o.type === "marble" && this.status === "empty"){
            this.status = "idle";
            this.name = "Balle artisanale"
            this.icon = this.icons[this.status];
            this.game.removeObjectFromWorld(o);
            return true;
        }
    }

}