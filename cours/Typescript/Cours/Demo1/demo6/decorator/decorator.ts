function simpleDecoratorClass(target: Function): void {
    target.prototype.id = Math.random();
} 

@simpleDecoratorClass
class UserWithDecorator {
    constructor(public name: string){

    }
}

const user = new UserWithDecorator("toto")
console.log(user);

//@ts-ignore
console.log(user.name);
//Mettre le commentaire en dessous pour afficher les infos du decorateur :
//@ts-ignore
console.log(user.id);

function demoDecoratorMethod(...args: any): MethodDecorator {
    return function (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor){
        //type sur lequel le decorateur est appliqué
        console.log("target"+ target);
        //nom de la méthode sur lequel le decorateur est utilisé (ici add)
        console.log(propertyKey);
        //methodologie, description de la fonction 
        console.log(descriptor.value);
        const originalMethod = descriptor.value;
        // ...args => récupère la copie de tous les arguments dans un tableau 
        descriptor.value= (...args: any) => {
            const resultMethod = originalMethod.apply(target, args);
            //c'est le retourn en dessous qui s'applique du coup dans la fonction , il réutilise l'operation de base de la fonction add et ajoute 2
            return resultMethod +2
        }
    }
}

class Calculatrice {

    @demoDecoratorMethod()
    add(a: number, b:number){
        return a+b
    }
}

const maCalculatrice = new Calculatrice
console.log(maCalculatrice.add(5,6));
