import { GameObject } from './GameObject';

export class Collectible extends GameObject {
    constructor(gc, name, type, status, size){
        super(gc, name, type, status);
        this.size = size;
    }
}