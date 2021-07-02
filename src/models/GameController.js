import { Lighter } from './Lighter'
import { Collectible } from './Collectible'
import { Readable } from './Readable'
import { Table } from './Table'
import { EngravedTable } from './EngravedTable'
import { Container } from './Container'
import { Lipstick } from './Lipstick'
import { Firework } from './Firework'
import { Lock } from './Lock'
import { Gun } from './Gun'


export class GameController {
    constructor(ui){
        this.ui = ui;
        this.life = 50;
        this.time = 120;
        this.inventory = [];

        this.world = [
            new Container(this, "Bureau","desk", [
                new Collectible(this, "Bille en métal","marble",{idle: "https://image.flaticon.com/icons/png/512/3873/3873825.png"}, "idle"),
                new Readable(this, "Lettre", "idle", "Note à moi-même, ne plus utiliser un cadenas sans avoir trouvé la clé auparavant..."),
                new Lighter(this, "Briquet", "idle"),
                new Gun(this, "Vieux pistolet", "idle")    
            ], null, "idle"),
            new Table(this, "Table", "idle"),
            new EngravedTable(this, "Table", "idle"),
            
            new Container(this, "Casier à code","locker", [
                new Lipstick(this, "Rouge à lèvres", "idle"), 
                new Firework(this, "Feu d'artifice", "idle")    
            ], "0000", "idle"),
            new Lock(this, "Cadenas de la porte", "idle"),
        ];

        this.finished = false;
        setInterval(()=>{
            this.time--;
        },1000);
    }

    removeObjectFromWorld(o){
        const deletedObject = this.world.splice(this.world.indexOf(o),1);
        if(deletedObject){
            return true;
        } else {
            return false;
        }
    }

    moveObjectToInventory(o){
        if(!o.take()){
            return false;
        }
        if(o == this.inventory[0] || o == this.inventory[1]){
            return false;
        }
        if(this.inventory.length >= 2){
            this.removeObjectFromInventory(1);
        }
        this.inventory.push(o);
        return true;
    }

    removeObjectFromInventory(index){
        this.inventory.splice(index, 1);
    }

    combine(){
        if(!this.inventory[0].combine(this.inventory[1])){
            if(!this.inventory[1].combine(this.inventory[0])){
                this.showText('Rien ne se passe');
            }
        }
        this.inventory = [];
    }

    hurtPlayer(n){
        this.life -= n;
    }

    showText(t){
        this.ui.showText(t);
    }

    addObject(o, ref){
        const arr = Array.isArray(o) ? o : [o]
        this.world.splice(ref ? this.world.indexOf(ref)+1 : this.world.length, 0, ...arr);
        
    }

    finish(){
        this.finished = true;
    }

    out(){
        this.showText("Bravo, vous êtes sorti de la pièce !")
    }
}