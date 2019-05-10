import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit() {
  }

  acceuil(): void {
    this.router.navigateByUrl('');
  }
  
  ajoutercompte(): void {
    this.router.navigateByUrl('/ajoutercompte');
  }
  
  consultercompte(): void {
    this.router.navigateByUrl('/consultercompte');
  }
}
