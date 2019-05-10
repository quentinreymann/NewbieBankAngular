import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/model/Compte';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CompteServiceService } from 'src/app/services/compte-service.service';

@Component({
  selector: 'app-detailcompte',
  templateUrl: './detailcompte.component.html',
  styleUrls: ['./detailcompte.component.css']
})
export class DetailcompteComponent implements OnInit {

  compte: Compte;
  comptes: Compte[];

  constructor(private router: Router, private route: ActivatedRoute,
              private compteService: CompteServiceService) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // this.client = this.findClientById(parseInt(params.get('client_id'), 10));
      console.log('rrrrrrrrr');
      console.log(params.get('nomCompte'));
      this.getById(parseInt(params.get('nomCompte'), 10));

    });

  }

  findCompteById(idCompte: number): Compte {
    for (const compte of this.comptes) {
      if (compte.idCompte === idCompte) {

        return compte;
      }
    }
    return null;
  }

  public getById(idCompte: number): void {
    this.compteService.getById(idCompte).subscribe((response) => {
      this.compte = response;
      console.log(this.compte);
    });
  }
}