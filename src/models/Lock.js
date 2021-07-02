import { Collectible } from './Collectible';

export class Lock extends Collectible {
    constructor(gc, name, status){
        const icons = {
            idle: "https://image.flaticon.com/icons/png/512/747/747211.png",
        }
        super(gc, name, "lock", icons, status);
    }

    break(){
        this.status = "broken";
        this.game.removeObjectFromWorld(this);
        this.game.finish();
    }

}