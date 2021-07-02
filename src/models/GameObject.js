export class GameObject {
    constructor(gc, name, type, icons, status){
        this.game = gc;
        this.isNew = true;
        this.type = type;
        this.name = name;
        this.icons = icons;
        this.status = status || "idle";
        this.icon = icons[status || "idle"];
        console.log(icons, this.icon);
    }

    break(){
        if(this.status !== "broken"){
            this.status = "broken";
            this.name += " (broken)";
            if(Math.random() > 0.5){
                this.game.hurtPlayer(10);
            }
            return true;
        }
        return false;
    }

    use(){
        this.isNew = false;
        return false;
    }

    take(){
        this.isNew = false;
        return false;
    }

    burn(){
        return false;
    }

    combine(){
        return false;
    }

    dirty(){
        return false;
    }
}