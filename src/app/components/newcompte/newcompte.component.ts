import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Compte } from 'src/app/model/Compte';
import { CompteServiceService } from 'src/app/services/compte-service.service';

@Component({
  selector: 'app-newcompte',
  templateUrl: './newcompte.component.html',
  styleUrls: ['./newcompte.component.css']
})
export class NewcompteComponent implements OnInit {
  compte_in_progress: Compte;
  mode_access: string;

  constructor(private route: ActivatedRoute, private router: Router ,
    // tslint:disable-next-line:no-shadowed-variable
              private compteServiceService: CompteServiceService) {
                this.compte_in_progress = Compte.createBlank();
                console.log(this.compte_in_progress);

 }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('compte_id') != null) {
        console.log(params.get('compte_id'));
        this.mode_access = 'MODIFICATION';
        this.compteServiceService.getById(parseInt(params.get('compte_id'), 10))
        .subscribe(
          (response) => {
            this.compte_in_progress = response;
          }
        );
      } else {
        this.mode_access = 'AJOUT';
        console.log('Good');
      }
    });
  }

  public addUpdateCompteClicked(): void {
    console.log(this.compte_in_progress.idCompte);
    if (this.mode_access === 'MODIFICATION') {
      this.updateCompte(this.compte_in_progress);
    } else {
      this.addCompte(this.compte_in_progress);
    }
  }

  public updateCompte(compte: Compte): void {
    this.compteServiceService.updateCompte(this.compte_in_progress).subscribe(
      (response) => {
        this.router.navigateByUrl('/compte');
      }
    );
  }

  public addCompte(compte: Compte): void {
    this.compteServiceService.addNewCompte(this.compte_in_progress).subscribe(
      (response) => {
        this.router.navigateByUrl('/compte');
      }
    );
  }
}