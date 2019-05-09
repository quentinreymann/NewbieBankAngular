import { Component, OnInit } from '@angular/core';
import { FraisIncompressibles } from '../../model/FraisIncompressibles';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FraisIncompressibleServiceService } from '../../services/fraisincservice.service';
import { NgForOf } from '@angular/common';

@Component({
selector: 'app-frais-incompressible',
templateUrl: './frais-incompressible.component.html',
styleUrls: ['./frais-incompressible.component.css']
})
export class FraisIncompressibleComponent implements OnInit {

  frais_connu: FraisIncompressibles;
  mode_access: string;

  fraisIncompressibles: FraisIncompressibles[];

  constructor( private router: Router, private route: ActivatedRoute, private fraisincservice: FraisIncompressibleServiceService) {

    this.getAllFrais();
    this.frais_connu = FraisIncompressibles.createBlank();


  }

  ngOnInit() {}

  public addFraisClicked() {
    console.log(JSON.stringify(this.frais_connu, null, 2));
    this.fraisIncompressibles.unshift(this.frais_connu);
    this.frais_connu = FraisIncompressibles.createBlank();
  }

  userClickedOnFrais(frais_id): void {
  this.router.navigateByUrl('/frais-Incompressible/' + frais_id);
  }

  addNewFraisPressed(): void {
    this.router.navigateByUrl('/fraisincform');
  }

  public getAllFrais(): void {
    this.fraisincservice.getAllfraisIncompressibles().subscribe((response) => {
      console.log(response['_body'] );
      this.fraisIncompressibles = response;
      console.log(this.fraisIncompressibles);
    });
  }

  backacceuil(): void {
    this.router.navigateByUrl('');
  }
}
