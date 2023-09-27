"use strict";
// Generic en typescript
// On utilise le genric quand on ne connait pas le type de données avec lesquelles je vais jouer 
function getLengthTab(array) {
    return array.length;
}
const nombres = [1, 2, 3, 4];
getLengthTab(nombres);
console.log(nombres);
const lettres = ["l", "a", 42, "l"];
getLengthTab(lettres);
// On utilise le genric quand on ne connait pas le type de données avec lesquelles je vais instancier les objets de ma classe
class Cinema {
    constructor(film) {
        this.film = film;
    }
}
let monObjet = new Cinema("toto");
let monObjet2 = new Cinema(45);
let monObjet3 = new Cinema(true);
