"use strict";
var STATUS;
(function (STATUS) {
    STATUS[STATUS["CADRE"] = 0] = "CADRE";
    STATUS[STATUS["SALARIE"] = 1] = "SALARIE";
    STATUS[STATUS["COMMERCIAL"] = 2] = "COMMERCIAL";
    STATUS[STATUS["BLABLA"] = 3] = "BLABLA";
})(STATUS || (STATUS = {}));
let myStatusC = STATUS.CADRE;
let myStatusD = 2;
let myStatusE = STATUS[2];
console.log(myStatusC);
console.log(myStatusD);
console.log(myStatusE);
let myObjectWithEnum = {
    name: "Toto",
    role: STATUS.COMMERCIAL,
    isCommercial: function () { return this.role === STATUS.COMMERCIAL; }
};
console.log(myObjectWithEnum);
console.log(`mon utilisateur est commercial ? ` + myObjectWithEnum.isCommercial());
// Type Any 
const myFunction = (arg) => {
    console.log(arg.length);
};
myFunction("Bonjour");
myFunction(3);
//Type Unkwon + verification
console.log("#### UNKNOWN #####");
let str;
let strAny;
let hello = "bonjour";
let myNumber = 42;
str = hello;
strAny = hello;
console.log(strAny.length);
console.log(typeof str);
console.clear();
if (typeof str == 'string') {
    console.log(str.length);
    console.log(typeof str);
}
else {
    console.log(str);
    console.log(typeof str);
}
//VOID
function afficherMessage() {
    console.log("Bonjour, monde !");
}
const resultat = afficherMessage();
console.log(typeof resultat);
// Type Function
let operation;
operation = function (a, b) {
    return a + b;
};
let operation2;
operation2 = function (a, b) {
    return a + b;
};
// Paramètres falcutatifs 
function saluer(nom) {
    if (nom) {
        console.log(`Bonjour ${nom}`);
    }
    else {
        console.log("Bonjour");
    }
}
saluer("toto");
//Paramètre par défaut
function multiplier(a, b = 2) {
    return a * b;
}
multiplier(5);
console.log(multiplier(5, undefined));
//Type Assertions
// exemple avec récuperations d'un élément HTML
let myTitle1 = document.getElementById("title");
// ou
let myTitle2 = document.querySelector("#title");
let myTitle = document.querySelector("#title");
console.log(myTitle1.textContent);
console.log(myTitle2.textContent);
myTitle.textContent = "Fin démo Typescript";
function onFormSubmit(event) {
    event.preventDefault();
}
let monTexte = "";
function onInputChanged(event) {
    monTexte = event.target.value;
    monTexte = event.target.value;
}
