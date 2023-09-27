class Base {
    constructor(int) {
        this.int = int;
        this.int = int;
    }
    get getInt() {
        return this.int;
    }
    set SetInt(value) {
        this.int = value;
    }
    parler() {
        console.log("bonjour");
    }
}
export class Basic extends Base {
    constructor(firstname, int) {
        super(int);
        this.firstname = firstname;
    }
    toString() {
        return "hi" + this.getInt.toString();
    }
}
let b = new Basic("toto", 42);
