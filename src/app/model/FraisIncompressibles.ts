import { Compte } from './Compte';
export class FraisIncompressibles {
    public idFraisIncompressibles: number;
    public nomFrais: string;
    public montantFrais: number;
    public compte: Compte;

    constructor(id: number, nom: string, montant: number, compte: Compte) {
        this.idFraisIncompressibles = id;
        this.nomFrais = nom;
        this.montantFrais = montant;
        this.compte = compte;
        }

    public static createBlank(): FraisIncompressibles {
            return new FraisIncompressibles(-1, '', 1, null);
        }
}
