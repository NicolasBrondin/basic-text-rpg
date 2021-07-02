import { Collectible } from './Collectible';

export class Table extends Collectible {
    constructor(gc, name, status){
        const icons = {
            idle: require("../assets/table.png"),
            flipped: require("../assets/table-flipped.png"),
        }
        super(gc, name, "table", icons, status);
    }

    use(){
        if(this.status === "idle"){
            this.isNew = false;
            this.status = "flipped";
            this.icon = this.icons.flipped;
            this.name += " (retournée)";
        }
        return true;
    }

}