enum STATUS {
    CADRE,
    SALARIE,
    COMMERCIAL,
    BLABLA
}

let myStatusC = STATUS.CADRE
let myStatusD: STATUS = 2
let myStatusE = STATUS[2]

console.log(myStatusC);
console.log(myStatusD);
console.log(myStatusE);

let myObjectWithEnum = {
    name : "Toto",
    role: STATUS.COMMERCIAL,
    isCommercial: function():boolean {return this.role === STATUS.COMMERCIAL}
}
console.log(myObjectWithEnum);
console.log(`mon utilisateur est commercial ? ` + myObjectWithEnum.isCommercial());

// Type Any 

const myFunction = (arg : any): void => {
    console.log(arg.length);
}

myFunction("Bonjour")
myFunction(3)

//Type Unkwon + verification
console.log("#### UNKNOWN #####");

let str : unknown;
let strAny: any;
let hello: string = "bonjour";
let myNumber: number = 42;

str= hello;
strAny = hello;

console.log(strAny.length);
console.log(typeof str);
console.clear()

if(typeof str == 'string'){
    console.log(str.length);
    console.log(typeof str);
} else {
    console.log(str);
    console.log(typeof str);
}


//VOID

function afficherMessage(): void {
    console.log("Bonjour, monde !");
}

const resultat = afficherMessage();
    console.log(typeof resultat);

// Type Function

let operation: Function;

operation = function (a: number, b: number): number {
    return a+b;
}

let operation2: (a: number, b: number) => number;

operation2 = function(a,b) {
    return a+b;
}

// Paramètres falcutatifs 

function saluer(nom?: string): void {
    if (nom){
        console.log(`Bonjour ${nom}`);
    } else {
        console.log("Bonjour");
    }
}

saluer("toto")

//Paramètre par défaut

function multiplier (a: number, b:number = 2): number {
    return a*b;
}

multiplier(5)
console.log(multiplier(5,undefined));

//Type Assertions
// exemple avec récuperations d'un élément HTML

let myTitle1 = document.getElementById("title") as HTMLElement
// ou
let myTitle2 = <HTMLElement> document.querySelector("#title"); 
let myTitle = document.querySelector("#title") as HTMLHeadingElement

console.log(myTitle1.textContent);
console.log(myTitle2.textContent);
myTitle.textContent = "Fin démo Typescript"

function onFormSubmit (event: SubmitEvent) {
    event.preventDefault()
}

let monTexte = ""
function onInputChanged (event: InputEvent){
monTexte = ( <HTMLInputElement> event.target).value
monTexte = (event.target as HTMLInputElement).value
}

console.clear()

//Interfaces



