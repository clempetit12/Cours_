// Union Type

let strOrNum: string | number;

//déclarer un typer string ou number
type stringorNumber = string | number;

let newVar: stringorNumber = "toto"
newVar = 45;

let monTbaleu: stringorNumber[] = []

monTbaleu.push(26);
monTbaleu.push("hello")

console.table(monTbaleu);

// Intersection type

interface Poisson {
    nom: string,
    yeux: number
}

interface Couleur {
    href: string
}

let poissonRouge: Poisson & Couleur;

type PoissonRed = Poisson & Couleur;

let nemo: PoissonRed = {
    nom : "nemo",
    yeux: 2,
    href: "#FFFF"
}



