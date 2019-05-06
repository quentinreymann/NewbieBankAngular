import { Compte } from './Compte';
export class FraisIncompressibles {
    public idFraisIncompressible: number;
    public nomFrais: string;
    public montantFrais: DoubleRange;
    public compteBancaire: Compte;

    constructor(id: number, nom: string, montant: DoubleRange, compte: Compte) {
        this.idFraisIncompressible = id;
        this.nomFrais = nom;
        this.montantFrais = montant;
        this.compteBancaire = compte;
        }
}