import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/model/Client';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ClientServiceService } from '../../services/client-service.service';

@Component({
  selector: 'app-newclient',
  templateUrl: './newclient.component.html',
  styleUrls: ['./newclient.component.css']
})
export class NewclientComponent implements OnInit {

  client_in_progress: Client;
  mode_access: string;

  constructor(private route: ActivatedRoute, private router: Router ,
    // tslint:disable-next-line:no-shadowed-variable
              private ClientServiceService: ClientServiceService) {
this.client_in_progress = Client.createBlank();
console.log(this.client_in_progress);
 }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('client_id') != null) {
        console.log(params.get('client_id'));
        this.mode_access = 'MODIFICATION';
        this.ClientServiceService.getClientById(parseInt(params.get('client_id'), 10))
        .subscribe(
          (response) => {
            this.client_in_progress = response;
          }
        );
      } else {
        this.mode_access = 'AJOUT';
        console.log('Good');
      }
    });
  }

  public addUpdateClientClicked(): void {
    if (this.mode_access === 'MODIFICATION') {
      this.updateClient(this.client_in_progress);
    } else {
      this.addClient(this.client_in_progress);
    }
  }

  public updateClient(client: Client): void {
    this.ClientServiceService.updateRecipe(this.client_in_progress).subscribe(
      (response) => {
        this.router.navigateByUrl('/client');
      }
    );
  }

  public addClient(client: Client): void {
    this.ClientServiceService.createClient(this.client_in_progress).subscribe(
      (response) => {
        this.router.navigateByUrl('/client');
      }
    );
  }
  }


