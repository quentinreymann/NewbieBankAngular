import { Component, OnInit } from '@angular/core';
import { FraisIncompressibles } from '../model/FraisIncompressibles';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { FraisIncompressibleServiceService } from '../services/fraisincservice.service';

@Component({
  selector: 'app-fraisincform',
  templateUrl: './fraisincform.component.html',
  styleUrls: ['./fraisincform.component.css']
})
export class FraisincformComponent implements OnInit {

  frais_in_progress: FraisIncompressibles;
  mode_access: string;

  constructor(private route: ActivatedRoute, private router: Router ,
    // tslint:disable-next-line:no-shadowed-variable
              private FraisIncompressibleServiceService: FraisIncompressibleServiceService) {
this.frais_in_progress = FraisIncompressibles.createBlank();
console.log(this.frais_in_progress);
 }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('fraisIncompressible_id') != null) {
        console.log(params.get('fraisIncompressible_id'));
        this.mode_access = 'MODIFICATION';
        this.FraisIncompressibleServiceService.getById(parseInt(params.get('fraisIncompressible_id'), 10))
        .subscribe(
          (response) => {
            this.frais_in_progress = response;
          }
        );
      } else {
        this.mode_access = 'AJOUT';
        console.log('Good');
      }
    });
  }

  public addUpdateFraisClicked(): void {
    console.log(this.frais_in_progress);
    if (this.mode_access === 'MODIFICATION') {
      this.updateFraisIncompressible(this.frais_in_progress);
    } else {
      this.saveFraisIncompressible(this.frais_in_progress);
    }
  }

  public updateFraisIncompressible(fraisIncompressible: FraisIncompressibles): void {
    this.FraisIncompressibleServiceService.updateFraisIncompressible(this.frais_in_progress).subscribe(
      (response) => {
        this.router.navigateByUrl('/fraisIncompressibles');
      }
    );
  }

  public saveFraisIncompressible(fraisIncompressible: FraisIncompressibles): void {
    this.FraisIncompressibleServiceService.saveFraisIncompressible(this.frais_in_progress).subscribe(
      (response) => {
        this.router.navigateByUrl('/fraisIncompressibles');
      }
    );
  }
  }



