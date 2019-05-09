import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FraisIncompressibles } from '../../model/FraisIncompressibles';




@Component({
  selector: 'app-tableaufrais',
  templateUrl: './tableaufrais.component.html',
  styleUrls: ['./tableaufrais.component.css']
})
export class TableaufraisComponent implements OnInit {

  @Input()
  fraisIncompressible: FraisIncompressibles;

  @Output()
  userClick: EventEmitter<number> = new EventEmitter();

  constructor() { }

  userClicked() {
    console.log('taraaaaaa');
    console.log(this.fraisIncompressible);
    this.userClick.emit(this.fraisIncompressible.idFraisIncompressibles);

  }

  ngOnInit() {

  }

}
