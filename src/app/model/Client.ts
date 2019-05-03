import { Compte } from './Compte';

export class Client {
    private id: number;
	private nomClient: string;
	private prenomClient: string;
	private adresseClient: string;
	private age: number;
	private dateEnregistrement: string;
	private sexe: string;
	private telClient: string;
    private comptes: Compte[];
   
 constructor(id: number, nom: string, prenom: string, adresse: string,
    age: number, datee: string, sexe: string, tel: string, cpts: Compte[])
 {

    this.id = id;
    this.nomClient = nom;
    this.prenomClient = prenom;
    this.adresseClient = adresse;
    this.age = age;
    this.dateEnregistrement = datee;
    this.sexe = sexe;
    this.telClient = tel;
    this.comptes = cpts;
 }
 
}