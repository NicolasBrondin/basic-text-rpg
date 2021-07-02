import { Collectible } from './Collectible';

export class Code extends Collectible {
    constructor(gc, name, status, code){
        const icons = {
            idle: require("../assets/code.png")
        }
        super(gc, name, "code", icons, status);
        this.code = code;
    }
}