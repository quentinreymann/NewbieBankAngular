
import { ClientServiceService } from '../../services/client-service.service';
import { Client } from '../../model/Client';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css']
})
export class ClientlistComponent implements OnInit {

  client_in_progress: Client;
  client: Client;
  clients: Client[];
  mode_access: string;

  constructor(private router: Router, private clientService: ClientServiceService) { 
 this.getAllClients();
  }

  ngOnInit() {
  }

  public getAllClients(): void {
    this.clientService.getAllClients().subscribe((response) => {
      console.log(response['body']);
      this.clients = response;
      console.log(this.clients);
    });
  }

  userClickedOnClient(client_id): void {
    this.router.navigateByUrl('/client/' + client_id);
  }

}
