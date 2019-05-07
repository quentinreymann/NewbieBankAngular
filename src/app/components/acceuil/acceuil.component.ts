import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/model/Client';
import { ClientServiceService } from '../../services/client-service.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  mode_access: string;
  client_in_progress: Client;

  constructor(private router: Router, private clientService: ClientServiceService) {

  }

  gestionclientpressed(): void {
    this.router.navigateByUrl('/client');
  }

  gestionfraispressed(): void {
    this.router.navigateByUrl('/fraisIncompressibles');
  }

 ngOnInit(): void {

 }

}
