"use strict";
console.log("Je suis une h");
//Inference (typescript le fait pour nous)
let test; // type any
test = true;
test = "true";
let myName = "Clémence"; // type string;
let myAge = 25; // type number
let isPresent = true; // type boolean
// je peux réassigner des valeurs uniquement du meme type
let dog = "bee";
// assignation (on donne nous meme le type)
//Pour spécifier le type d'une variable, la syntaxe est la suivante 
let firstname = "Clémence";
let age = 30;
let present = true;
// Via le typescript on a une auto-completion et une intellisence plus poussée
console.log("nombre de lettre dans " + firstname + " " + firstname.length + present.valueOf());
// Connaître le type de variable avec typeof 
console.log(typeof (age));
console.log(typeof firstname);
// transformer les variables de type number et boolean en type string
let ageString = age.toString();
console.log(ageString);
console.log(typeof (ageString));
let presentString = present.toString();
console.log(presentString + " " + typeof (presentString));
let message = `
Bonjour ${firstname}
Vous avez ${age} ans.
Vous êtes ${present ? "présent" : "absent"}`;
console.log(message);
//Pour la création de fonction TS, la différence est l'ajout du typage pour les paramètres
//De la sorte on sécurise les utilisations futures de notre fonction en vérouillant des types incorrects 
// on peut assigner un type à la fonction 
function addition(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
// type void pour une fonction qui ne renvoie rien 
function logMessage(message) {
}
let result = addition(1, 2);
console.log("resultat de 1 + 2 =" + result);
// Array 
// Pour définir un tableau de number il faut utiliser le type suivi des crochets 
let number = [1, 2, 3, 4];
//ou 
let numbers = [1, 2, 3, 4];
numbers.push(5);
console.table(numbers);
//Dans un tableau (array de type any on peut mettre ce qu'on le veut)
let tab;
//On peut déclarer un tableau qui contient plusieurs types alors tous ces types peuvent être présents dans le tableau
let tab2 = [23, true, "clem"];
console.table(tab2);
tab2[1] = "toto";
//Tuple : des array de taille fixe 
//On devra du coup avoir le bon nombre d'éléments dans la variable et le bon typage dans le bon ordre
let myPerson;
myPerson = ["toto", "tata", 45];
myPerson.push("hello"); // incohérence mais fonctionne
console.table(myPerson);
//si le tableau à l'initial a été défini avec 3 éléments, on ne pourra pas récupérer d'autres éléments push => myPerson[3] => error
myPerson[0];
//Objet
let monObjetA = {
    firstname: "Albert",
    lastname: "Reford",
    age: 45
};
//indicateur de valeur objet 
let monObjetB = {
    firstname: "Albert",
    lastname: "Reford",
    age: 45
};
monObjetA.age;
//monObjetB.age ne fonctionnera pas 
let monObjetC = {
    firstname: "Albert",
    lastname: "Reford",
    age: 45
};
monObjetC.firstname;
let tableau = [];
console.log(typeof tableau);
let monObjet = {
    firstname: "dupont"
};
console.log(typeof (monObjet));
// array et object sont du meme type : object
