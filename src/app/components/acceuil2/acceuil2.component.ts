import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-acceuil2',
  templateUrl: './acceuil2.component.html',
  styleUrls: ['./acceuil2.component.css']
})
export class Acceuil2Component implements OnInit {

  constructor(private routeur: Router) { }

  ngOnInit() {
  }

  gestionFrais(): void {
    this.routeur.navigateByUrl('fraisIncompressibles');
  }
}
