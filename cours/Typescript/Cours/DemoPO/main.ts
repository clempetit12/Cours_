import { Person, Student } from "./classes/Person.js";
import { Basic } from "./classes/abstract.js";
import { Client, ClientRegulier } from "./interfaces/Client.js";

let person:Person;

person = new Person("toto", "petit", 25, 12541)
console.log(person);
person.firstname = "albert"
console.log(person.fullname);
console.log(person.numeroIdNat);
console.log(`Il y a actuellement ${Person.count} personne`);
console.log(`${person.id}`);

let personArray: Person[] = [];
personArray.push(person)
console.table(personArray);

let myStudent: Student;
myStudent = new Student ("Léa", "Pack", 41, 15426, true)
console.log(myStudent.toString());
console.log(myStudent);
console.log(`Il y a actuellement ${Person.count} personne`);
console.log(myStudent.firstname);

console.clear()

//Interfaces
let monObjetA: Client = {
    firstname: "Albert",
    lastname: "Dupont",

}

let monObjetB: Client = {
    firstname: "Albert",
    lastname: "Dupont",
    numeroIdNat: 12,
    
    acheter() {
        if (this.firstname === "blabla") {
            return 10;
        } else {
        return 5;
        }
    }
}

let monObjetC: ClientRegulier = {
    firstname: "Thierry",
    lastname: "Dupont",
    pointFid: 42
}

console.log(monObjetC.firstname);
console.clear()
let basic1 = new Basic ("toto", 42)
console.log(basic1.toString());
