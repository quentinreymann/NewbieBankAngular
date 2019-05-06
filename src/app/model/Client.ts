import { Compte } from './Compte';

export class Client {
   public id: number;
public nomClient: string;
public prenomClient: string;
public adresseClient: string;
public age: number;
public dateEnregistrement: string;
public sexe: string;
public telClient: string;
   public comptes: Compte[];

 constructor(id: number, nom: string, prenom: string, adresse: string,
             age: number, datee: string, sexe: string, tel: string, cpts: Compte[]) {

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

 public static createBlank(): Client {
   return new Client(-1, '', '', '', 1, '', '', '', []);
}

 public static clientFromJSON(obj: any): Client {
   return new Client(obj.id, obj.nomClient, obj.prenomClient, obj.adresseClient, obj.age,
       obj.dateEnregistrement, obj.sexe, obj.telClient, obj.comptes);
}
}
