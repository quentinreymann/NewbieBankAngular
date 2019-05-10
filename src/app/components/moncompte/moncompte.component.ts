import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Compte } from 'src/app/model/Compte';
import { Router } from '@angular/router';
import { CompteServiceService } from 'src/app/services/compte-service.service';

@Component({
  selector: 'app-moncompte',
  templateUrl: './moncompte.component.html',
  styleUrls: ['./moncompte.component.css']
})
export class MoncompteComponent implements OnInit {

  compte: Compte;



 constructor(private router: Router) {
this.compte = Compte.createBlank();
    }

    userClickedOnCompte(): void {
     this.router.navigateByUrl('compte/' + this.compte.idCompte);
 }

 ngOnInit(): void {

}


}
