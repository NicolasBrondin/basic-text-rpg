import { Collectible } from './Collectible';

export class Ash extends Collectible {
    constructor(gc, name, status){
        const icons = {
            idle: require("../assets/ashes.png"),
        }
        super(gc, name, "ash", icons, status);
    }

    combine(o){
        if(o.dirty()){
            this.game.removeObjectFromWorld(this);
            return true;
        }
    }

}