import { GameObject } from './GameObject';

export class Collectible extends GameObject {
    constructor(gc, name, type, icons, status){
        super(gc, name, type, icons, status);
    }

    take(){
        return true;
    }

}