export class Pokemon{
    constructor(name, type, health){
        this.name=name,
        this.type=type,
        this.health=health
    }
}


let Pikachu = new Pokemon("Pikachu","Electric",100)
console.log(Pikachu);