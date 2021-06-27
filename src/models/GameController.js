import { Collectible } from './Collectible'

export class GameController {
    constructor(){
        this.life = 50;
        this.inventory = [];
        this.world = [
            new Collectible(this, "Pot en terre", "pot", "ok", 5),
            new Collectible(this, "Pot en terre 2", "pot", "ok", 5),
            new Collectible(this, "Pot en terre 3", "pot", "ok", 5)
        ];
    }

    moveObjectToInventory(o){
        const objectToMove = this.world.splice(this.world.indexOf(o),1);
        if(objectToMove){
            this.inventory.push(o);
            return true;
        } else {
            return false;
        }
    }

    hurtPlayer(n){
        this.life -= n;
    }
}