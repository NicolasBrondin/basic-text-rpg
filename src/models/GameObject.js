export class GameObject {
    constructor(gc, name,type, status){
        this.game = gc;
        this.name = name;
        this.type = type;
        this.status = status || "ok";
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

    
}