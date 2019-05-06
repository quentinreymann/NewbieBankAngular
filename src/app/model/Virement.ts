import { Compte } from './Compte';
export class Virement {
    public idVirement: number;
	public montantVirement: DoubleRange;
	public destinataire: string;
	public idDestinataire: number;
	public emetteur: string;
	public idEmetteur: number;
	public virementEmis: Compte;
	public virementRecu: Compte;
	
	constructor(id: number, montant: DoubleRange, dest: string, idD: number,
		           emet: string, idE: number, virE: Compte, virR: Compte) {
					this.idVirement = id;
					this.montantVirement = montant;
					this.destinataire = dest;
					this.idDestinataire = idD;
					this.emetteur = emet;
					this.idEmetteur = idE;
					this.virementEmis = virE;
					this.virementRecu = virR;
				}
}
