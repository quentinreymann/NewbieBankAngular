import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ClientServiceService } from '../../services/client-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {



  constructor(private router: Router, private route: ActivatedRoute,
              private clientService: ClientServiceService, private location: Location) {
    }

  ngOnInit(): void {


  }


acceuil(): void {
  this.router.navigateByUrl('/client');
}

ajouterclient(): void {
  this.router.navigateByUrl('/ajouterclient');
}

consulter(): void {
  this.router.navigateByUrl('/consulter');
}








}


