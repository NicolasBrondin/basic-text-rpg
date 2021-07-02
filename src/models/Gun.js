import { Collectible } from './Collectible';

export class Gun extends Collectible {
    constructor(gc, name, status){
        const icons = {
            idle: "https://image.flaticon.com/icons/png/512/942/942535.png",
        }
        super(gc, name, "lipstick", icons, status);
    }

    combine(o){
        console.log(o.type, o.status, this.status);
        if(o.type === "bullet" && o.status === "idle" && this.status === "idle"){
            this.status = "loaded";
            this.name += "(chargé)";
            this.game.removeObjectFromWorld(o);
            return true;
        } else if(o.type === "lock" && o.status === "idle" && this.status === "loaded"){
            o.break();
            return true;
        }
    }

}