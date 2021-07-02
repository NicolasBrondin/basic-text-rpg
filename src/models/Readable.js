import { Collectible } from './Collectible';

export class Readable extends Collectible {
    constructor(gc, name, status, text){
        const icons = {
            idle: "https://image.flaticon.com/icons/png/512/214/214316.png"
        }
        super(gc, name, "letter", icons, status);
        this.text = text;
    }

    use(){
        this.game.showText(this.text);
        this.isNew = false;
        return true;
    }

    burn(){
        return true;
    }
}