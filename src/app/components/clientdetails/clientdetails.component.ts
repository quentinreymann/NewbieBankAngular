import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ClientServiceService } from 'src/app/services/client-service.service';
import { Client } from 'src/app/model/Client';
import { Location } from '@angular/common';

@Component({
  selector: 'app-clientdetails',
  templateUrl: './clientdetails.component.html',
  styleUrls: ['./clientdetails.component.css']
})
export class ClientdetailsComponent implements OnInit {

  client: Client;
  clients: Client[];

  constructor(private router: Router, private route: ActivatedRoute,
              private clientService: ClientServiceService, private location: Location) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
     // this.client = this.findClientById(parseInt(params.get('client_id'), 10));
      this.getClientById(parseInt(params.get('client_id'), 10));

    });

  }

findClientById(id: number): Client {
  for (const client of this.clients) {
    if (client.id === id) {

      return client;
    }
  }
  return null;
}

public getClientById(id: number): void {
  this.clientService.getClientById(id).subscribe((response) => {
    this.client = response;
    console.log(this.client);
  });
}

goBackButtonPressed(): void {
  this.location.back();
}
}
