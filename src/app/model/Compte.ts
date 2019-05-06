import { Client } from './Client';

export class Compte {

    private idCompte: number;
	private codeCompte: number;
	private dateCreation: string;
	private solde: number;
	private decouvert: number;
	private plafond: number;
	private codeClient: string;
    private Client: Client;
    
    constructor(idCpt: number, codecpt: number, datec: string, solde: number,
                // tslint:disable-next-line:no-shadowed-variable
                decouv: number, plaf: number, codec: string, Client: Client ) {

            this.idCompte = idCpt;
            this.codeCompte = codecpt;
            this.dateCreation = datec;
            this.solde = solde;
            this.decouvert = decouv;
            this.plafond = plaf;
            this.codeClient = codec;
            this.Client = Client;
    }
}
