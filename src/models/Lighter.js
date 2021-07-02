import { Collectible } from './Collectible';
import { Ash } from './Ash'

export class Lighter extends Collectible {
    constructor(gc, name, status){
        const icons = {
            idle: require("../assets/lighter-off.png"),
            on: require("../assets/lighter-on.png"),
        }
        super(gc, name,"lighter", icons, status);
    }

    use(){
        if(this.status === "idle"){
            this.isNew = false;
            this.status = "on";
            this.icon = this.icons.on;
            this.name += " (allumé)";
        }
        return true;
    }

    combine(o){
        if(this.status === "on"){
            if(o.burn()){
                this.game.showText("Le papier brûle et laisse un tas de cendre");
                this.game.addObject(new Ash(this.game, "Cendres", "idle"),this);
                this.game.removeObjectFromWorld(o);
                return true;
            }
            
        }
        return false;
    }

}