import { Collectible } from './Collectible';

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
            return o.burn();
        }
        return false;
    }

}