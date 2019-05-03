export class Virement {
private int idVirement;
	public montantVirement: DoubleRange;
	private String destinataire;
	private int idDestinataire;
	private String emetteur;
	private int idEmetteur;
	@ManyToOne
	CompteBancaire virementEmis;
	@ManyToOne
    CompteBancaire virementRecu;
}