import { Component, OnInit } from '@angular/core';
import { FraisIncompressibles } from '../../model/FraisIncompressibles';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-frais-incompressible',
  templateUrl: './frais-incompressible.component.html',
  styleUrls: ['./frais-incompressible.component.css']
})
export class FraisIncompressibleComponent implements OnInit {

  frais_connu: FraisIncompressibles;

  constructor( private router: Router, private route: ActivatedRoute, private FraisIncService: FraisIncServiceService) {
    this.frais_connu = FraisIncompressibles.createBlank();
    console.log(this.frais_connu);
   }

   ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap => {
      if (params.get('idFraisIncompressible') != null) {
        console.log(params.get('idFraisIncompressible'));
        this.mode_access = 'MODIFICATION';
        this.FraisIncompressiblesService.getRecipeById(parseInt(params.get('idFraisIncompressible'), 10)).subscribe(
          (response) => {
            this.frais_connu = response;
          }
        );
      } else {
        this.mode_access = 'AJOUT';
        console.log('Good');
      }
    });
  }
  addFraisIncompressiblePressed(): void {
    if (!this.frais_connu.FraisIncompressibles) {
      this.this.frais_connu.FraisIncompressibles = [ { ingredient: null, measure: null }];

    } else {
      this.frais_connu.FraisIncompressibles.push({ ingredient: null, measure: null});
    }
  }


  removeFraisIncompressibleAtIndex(index): void {
    this.frais_connu.FraisIncompressibles.splice(index, 1);
  }

  public updateRecipe(recipe: Recipe): void {
    this.recipeService.updateRecipe(this.recipe_in_progress).subscribe(
      (response) => {
        this.router.navigateByUrl('/recipes');
      }
    );
  }
  public addRecipe(recipe: Recipe): void {
    this.recipeService.createRecipe(this.recipe_in_progress).subscribe(
      (response) => {
        this.router.navigateByUrl('/recipes');
      }
    );
  }
  public addUpdateRecipeClicked(): void {
    if (this.mode_access === 'MODIFICATION') {
      this.updateRecipe(this.recipe_in_progress);
    } else {
      this.addRecipe(this.recipe_in_progress);
    }
  }
}
