import { Component, OnInit, Input } from '@angular/core';
import { FraisIncompressibles } from '../../model/FraisIncompressibles';



@Component({
  selector: 'app-tableaufrais',
  templateUrl: './tableaufrais.component.html',
  styleUrls: ['./tableaufrais.component.css']
})
export class TableaufraisComponent implements OnInit {

  @Input()
  fraisIncompressible: FraisIncompressibles;

  constructor() { }

  ngOnInit() {

  }

}
