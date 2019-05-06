import { Component, OnInit } from '@angular/core';
import { FraisIncompressibles } from '../../model/FraisIncompressibles';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FraisIncompressibleServiceService } from '../../services/fraisincservice.service';

// @Component({
//   selector: 'app-frais-incompressible',
//   templateUrl: './frais-incompressible.component.html',
//   styleUrls: ['./frais-incompressible.component.css']
// })
// export class FraisIncompressibleComponent implements OnInit {

  frais_connu: FraisIncompressibles;
  mode_access: string;
 
  fraisIncompressible: FraisIncompressibles;
  fraisIncompressibles: FraisIncompressibles[];

  constructor( private router: Router, private route: ActivatedRoute, private fraisincservice: FraisIncompressibleServiceService) {
    this.frais_connu = FraisIncompressibles.createBlank();
    console.log(this.frais_connu);

   }

   ngOnInit(): void {
    this.fraisincservice.getAllfraisIncompressibles().subscribe((response) => {
      this.fraisIncompressibles = response;
    });
  }


   public addUpdateFraisIncClicked(): void {
    if (this.mode_access === 'MODIFICATION') {
      this.updateFraisInc(this.frais_connu);
    } else {
      this.addFraisIncompressiblePressed(this.frais_connu);
    }
  }

  public removeFraisIncompressiblePressed(): void {
    this.fraisincservice.deleteFraisIncompressibles(this.frais_connu).subscribe(
      (response) => {
        this.router.navigateByUrl('/fraisincompressible');
      }
    );
  }

  public addFraisIncompressiblePressed(FraisIncompressibles: FraisIncompressibles): void {
    this.fraisincservice.saveFraisIncompressible(this.frais_connu).subscribe(
      (response) => {
        this.router.navigateByUrl('/fraisincform');
      }
    );
  }
  public updateFraisInc(FraisIncompressibles: FraisIncompressibles): void {
    this.fraisincservice.updateFraisIncompressible(this.frais_connu).subscribe(
    (response) => {
      this.router.navigateByUrl('/fraisincform');
    }
  );
}
}
