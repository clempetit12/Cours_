export class Person {
    private static _count: number = 0
    private _id: number;
    private _firstname: string;
    private _lastname: string;
    private _age: number;
    readonly numeroIdNat: number;

    constructor(firstname: string, lastname: string, age: number, numeroIdNat: number){
      this._id = ++Person._count
        this._firstname = firstname;
        this._lastname = lastname;
        this._age = age;
        this.numeroIdNat = numeroIdNat;

    }

    get firstname() {
return this._firstname
    }
 
    set firstname (value) {
        if (value !== "Blabla") {
        this._firstname = value
        }
    } 

    get fullname () {
        return this._firstname + " " + this._lastname
    }
    static get count () {
        return Person._count
    }

    get id () {
        return this._id
    }
 }

 export class Student extends Person {
    private _backpack: boolean;

     constructor(firstname: string, lastname: string, age: number, numeroIdNat: number, backpack: boolean){
        super(firstname, lastname, age, numeroIdNat)
        this._backpack = backpack
    }
    toString(): string {
        return this.fullname +`backpack?: ${this._backpack}`
    }
 }



