import { Component, OnInit, Input } from '@angular/core';
import { FraisIncompressibles } from '../../model/FraisIncompressibles';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FraisIncompressibleServiceService } from '../../services/fraisincservice.service';

@Component({
  selector: 'app-fraisincresume',
  templateUrl: './fraisincresume.component.html',
  styleUrls: ['./fraisincresume.component.css']
})
export class FraisincresumeComponent implements OnInit {

  fraisIncompressible: FraisIncompressibles;
  fraisIncompressibles: FraisIncompressibles[];

  constructor( private router: Router, private route: ActivatedRoute, private fraisincservice: FraisIncompressibleServiceService) {}


  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.getFraisById(parseInt(params.get('frais_id'), 10));
      console.log(this.fraisIncompressible)
    });
  }

  findFraisById(id: number): FraisIncompressibles {
    for (const fraisIncompressible of this.fraisIncompressibles) {
      if (fraisIncompressible.idFraisIncompressibles === id) {
        return fraisIncompressible;
      }
    }
    return null;
  }

public editButtonPressed(): void {
this.router.navigateByUrl('/fraisincform/' + this.fraisIncompressible.idFraisIncompressibles);
console.log('reach');
}

public deleteButtonPressed(): void {
this.fraisincservice.deleteFraisIncompressibles(this.fraisIncompressible).subscribe(
 (response) => {
   this.router.navigateByUrl('/frais-Incompressible');
  }
  );
}
public getFraisById(id: number): void {
  this.fraisincservice.getById(id).subscribe((response) => {
    this.fraisIncompressible = response;
    console.log(this.fraisIncompressible);
  });
}
}

