import { Collectible } from './Collectible';

const icons_set = {
    locker: {idle: "https://image.flaticon.com/icons/png/512/2776/2776629.png"},
    desk: {idle: "https://image.flaticon.com/icons/png/512/3233/3233537.png"}
}
export class Container extends Collectible {
    constructor(gc, name,type, items, code, status){
        const icons = icons_set[type];
        super(gc, name, type, icons, status);
        this.items = items;
        this.code = code;
    }

    emptyContainer(){
        this.game.addObject(this.items, this);
        this.game.showText("Vous venez de trouver: "+this.items.map(item=>item.name).join(', '));
        this.status = "disabled";
        this.items = [];
    }

    use(){
        if(this.code){
            this.game.showText("Ce conteneur est fermé");
        } else {
            this.emptyContainer();
            this.name += "(vidé)";
        }
        this.isNew = false;
        return true;
    }

    combine(o){
        if(o.code === this.code){
            this.emptyContainer();
            this.game.removeObjectFromWorld(o);
            this.name += "(vidé)";
            return true;
        } else if(!o.code) {
            return false;
        } else {
            this.game.showText("Le code ne corespond pas");
            return false;
        }
    }
}