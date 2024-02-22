import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Service } from '../model/Service';
import { DataService } from '../serve/data.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  Service = {
    nom : "",
    prix : "",
    duree : "",
    commission : ""
  } as Service;

  constructor(private data: DataService) { }

  nouveau_service(forme:NgForm){
    this.Service.nom=forme.value.nom;
    this.Service.prix=forme.value.prix;
    this.Service.duree=forme.value.duree;
    this.Service.commission=forme.value.commission;
    alert(JSON.stringify(this.Service));
    this.data.nouveau_service(this.Service).subscribe(res=>{console.log(res);
      
    })
  }
}
