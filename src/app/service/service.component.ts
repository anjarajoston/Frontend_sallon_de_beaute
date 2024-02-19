import { Service } from './../Model/Service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})

export class ServiceComponent implements OnInit {

  Service = {
    nom : "",
    prix : "",
    duree : "",
    commission : ""
  } as Service;

  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {}

  nouveau_service(forme:NgForm){
    this.Service.nom=forme.value.nom;
    this.Service.prix=forme.value.prix;
    this.Service.duree=forme.value.duree;
    this.Service.commission=forme.value.commission;
    alert(JSON.stringify(this.Service));
    this.data.nouveau_service(this.Service).subscribe(res=>{console.log(res);
      this.router.navigate(['/service']);
    })
  }
  
}
