var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function simpleDecoratorClass(target) {
    target.prototype.id = Math.random();
}
let UserWithDecorator = class UserWithDecorator {
    constructor(name) {
        this.name = name;
    }
};
UserWithDecorator = __decorate([
    simpleDecoratorClass
], UserWithDecorator);
const user = new UserWithDecorator("toto");
console.log(user);
//@ts-ignore
console.log(user.name);
//Mettre le commentaire en dessous pour afficher les infos du decorateur :
//@ts-ignore
console.log(user.id);
function demoDecoratorMethod(...args) {
    return function (target, propertyKey, descriptor) {
        //type sur lequel le decorateur est appliqué
        console.log("target" + target);
        //nom de la méthode sur lequel le decorateur est utilisé (ici add)
        console.log(propertyKey);
        //methodologie, description de la fonction 
        console.log(descriptor.value);
        const originalMethod = descriptor.value;
        // ...args => récupère la copie de tous les arguments dans un tableau 
        descriptor.value = (...args) => {
            const resultMethod = originalMethod.apply(target, args);
            //c'est le retourn en dessous qui s'applique du coup dans la fonction , il réutilise l'operation de base de la fonction add et ajoute 2
            return resultMethod + 2;
        };
    };
}
class Calculatrice {
    add(a, b) {
        return a + b;
    }
}
__decorate([
    demoDecoratorMethod()
], Calculatrice.prototype, "add", null);
const maCalculatrice = new Calculatrice;
console.log(maCalculatrice.add(5, 6));
