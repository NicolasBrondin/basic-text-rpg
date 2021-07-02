import { Table } from './Table';
import { Code } from './Code';

export class EngravedTable extends Table {
    constructor(gc, name, status){
        super(gc, name, status);
    }

    use(){
        if(this.status === "idle"){
            this.isNew = false;
            this.status = "flipped";
            this.icon = this.icons.flipped;
            this.name += " (retournée, gravure illisible)";
        }
        return true;
    }

    dirty(){
        if(this.status == "flipped") {
            this.game.addObject(new Code(this, "Code", "idle","0000"), this);
            this.status = "code_revealed";
        }
        return true;
    }

}