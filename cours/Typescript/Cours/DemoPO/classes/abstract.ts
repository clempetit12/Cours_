abstract class Base {
    
    constructor(private int: number) {
        this.int = int
    }
get getInt (){
return this.int
}

set SetInt (value: number){
this.int=value

}
    abstract toString(): string
    parler() {
        console.log("bonjour");
    }
}

export class Basic extends Base {
    private firstname: string;
    constructor(firstname: string, int: number) {
        super(int)
        this.firstname = firstname
    }
    toString(): string {
      
        return "hi"+   this.getInt.toString()
    }

}

let b: Basic = new Basic ("toto",42)


