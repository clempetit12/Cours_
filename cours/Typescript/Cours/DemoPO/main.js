import { Person, Student } from "./classes/Person.js";
import { Basic } from "./classes/abstract.js";
let person;
person = new Person("toto", "petit", 25, 12541);
console.log(person);
person.firstname = "albert";
console.log(person.fullname);
console.log(person.numeroIdNat);
console.log(`Il y a actuellement ${Person.count} personne`);
console.log(`${person.id}`);
let personArray = [];
personArray.push(person);
console.table(personArray);
let myStudent;
myStudent = new Student("Léa", "Pack", 41, 15426, true);
console.log(myStudent.toString());
console.log(myStudent);
console.log(`Il y a actuellement ${Person.count} personne`);
console.log(myStudent.firstname);
console.clear();
//Interfaces
let monObjetA = {
    firstname: "Albert",
    lastname: "Dupont",
};
let monObjetB = {
    firstname: "Albert",
    lastname: "Dupont",
    numeroIdNat: 12,
    acheter() {
        if (this.firstname === "blabla") {
            return 10;
        }
        else {
            return 5;
        }
    }
};
let monObjetC = {
    firstname: "Thierry",
    lastname: "Dupont",
    pointFid: 42
};
console.log(monObjetC.firstname);
console.clear();
let basic1 = new Basic("toto", 42);
console.log(basic1.toString());
