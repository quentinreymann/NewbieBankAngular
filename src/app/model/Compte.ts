import { Client } from './Client';

export class Compte {

    public idCompte: number;
    public codeCompte: number;
    public dateCreation: string;
    public solde: number;
    public decouvert: number;
    public plafond: number;
    public idClient: number;
    public Client: Client;

    constructor(idCpt: number, codecpt: number, datec: string, solde: number,
                // tslint:disable-next-line:no-shadowed-variable
                decouv: number, plaf: number, idclient: number, Client: Client ) {

            this.idCompte = idCpt;
            this.codeCompte = codecpt;
            this.dateCreation = datec;
            this.solde = solde;
            this.decouvert = decouv;
            this.plafond = plaf;
            this.idClient = idclient;
            this.Client = Client;
    }

    public static createBlank(): Compte{
        return new Compte(null, 1, '', 1, 1, 1, 1, null);
     }

      public static compteFromJSON(obj: any): Compte {
        return new Compte(obj.idCompte, obj.codeCompte, obj.dateCreation, obj.solde, obj.decouvert,
            obj.plafond, obj.idClient, obj.Client);
     }
}
