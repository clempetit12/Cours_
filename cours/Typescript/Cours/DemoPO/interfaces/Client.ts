interface Client {
    firstname: string;
    lastname: string;
    numeroIdNat?: number; // propriete pas obligatoire : ?

    acheter?: () => number;
}

interface ClientRegulier extends Client {
    pointFid: number;

}

//Elles peuvent également être exportées 

export {Client, ClientRegulier}