import { Compte } from './Compte';
export class FraisIncompressibles {
    public idFraisIncompressible: number;
    public nomFrais: string;
    public montantFrais: number;
    public compteBancaire: Compte;

    constructor(id: number, nom: string, montant: number, compte: Compte) {
        this.idFraisIncompressible = id;
        this.nomFrais = nom;
        this.montantFrais = montant;
        this.compteBancaire = compte;
        }

    public static createBlank(): FraisIncompressibles {
            return new FraisIncompressibles(-1, '', 1, null);
        }
}
