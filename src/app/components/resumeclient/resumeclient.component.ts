import { Component, OnInit, Input, Output } from '@angular/core';
import { Client } from 'src/app/model/Client';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ClientServiceService } from 'src/app/services/client-service.service';

@Component({
  selector: 'app-resumeclient',
  templateUrl: './resumeclient.component.html',
  styleUrls: ['./resumeclient.component.css']
})
export class ResumeclientComponent implements OnInit {

  @Input()
 client: Client;

 @Output()
 userClick: EventEmitter<number> = new EventEmitter();



 constructor(private router: Router, private clientService: ClientServiceService) {

    }

 userClicked() {
     this.userClick.emit(this.client.id);
 }

 public editButtonPressed(): void {
  this.router.navigateByUrl('/ajouterclient/' + this.client.id);
}

public deleteButtonPressed(): void {
  this.clientService.deleteClient(this.client).subscribe(
    (response) => {
      this.router.navigateByUrl('/client');
    }
  );
}
 ngOnInit() {
 }

}
