import { Collectible } from './Collectible';

export class Code extends Collectible {
    constructor(gc, name, status, code){
        const icons = {
            idle: "https://image.flaticon.com/icons/png/512/2647/2647447.png"
        }
        super(gc, name, "code", icons, status);
        this.code = code;
    }
}