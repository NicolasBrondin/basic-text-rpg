import { Collectible } from './Collectible';

export class Firework extends Collectible {
    constructor(gc, name, status){
        const icons = {
            idle: "https://image.flaticon.com/icons/png/512/3706/3706512.png",
            powder: "https://image.flaticon.com/icons/png/512/836/836584.png",
        }
        super(gc, name, "firework", icons, status);
    }

    use(){
        this.name="Poudre explosive";
        this.status = "powder"
        this.icon = this.icons[this.status];
        return true;
    }

}