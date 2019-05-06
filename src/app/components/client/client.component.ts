import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Client } from 'src/app/model/Client';
import { ClientServiceService } from '../../services/client-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients: Client[];
  client: Client;



  constructor(private router: Router, private route: ActivatedRoute,
              private clientService: ClientServiceService, private location: Location) {
    }

  ngOnInit(): void {


  }


goBackButtonPressed(): void {
  this.location.back();
}

ajouterclient(): void {
  this.router.navigateByUrl('/ajouterclient');
}
//ajouterclient(): void {
 // this.router.navigateByUrl('/ajouterClient/' + this.client.id);
//}

public deleteButtonPressed(): void {
  this.clientService.deleteClient(this.client).subscribe(
    (response) => {
      this.router.navigateByUrl('/Clients');
    }
  );
}

public getClientById(id: number): void {
  this.clientService.getClientById(id).subscribe((response) => {
    this.client = response;
    console.log(this.client);
  });
}



}


