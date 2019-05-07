import { Component, OnInit, Input } from '@angular/core';
import { FraisIncompressibles } from '../../model/FraisIncompressibles';
import { Router, ActivatedRoute } from '@angular/router';
import { FraisIncompressibleServiceService } from '../../services/fraisincservice.service';

@Component({
  selector: 'app-fraisincresume',
  templateUrl: './fraisincresume.component.html',
  styleUrls: ['./fraisincresume.component.css']
})
export class FraisincresumeComponent implements OnInit {


  

  frais_connu: FraisIncompressibles;
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

//userClicked() {
 // this.userClicke.emit(this.fraisincompressible.idFraisIncompressible);
  }

public editButtonPressed(): void {
this.router.navigateByUrl('/fraisincform' + this.fraisIncompressible.idFraisIncompressibles);
}

public deleteButtonPressed(): void {
this.fraisincservice.deleteFraisIncompressibles(this.fraisIncompressible).subscribe(
 (response) => {
   this.router.navigateByUrl('/fraisIncompressibles');
  }
  );
}
public userClickedOnFrais(idFraisIncompressibles: number): void {
  this.router.navigateByUrl('/fraisIncompressibles' + idFraisIncompressibles);
}
}

