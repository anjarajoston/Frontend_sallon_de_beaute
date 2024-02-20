import { Employer } from './../Model/Employer';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { Service } from '../Model/Service';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent {
  services : Service[] = [];
  employers : Employer[] = [];
  //service : string[] = [];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.liste_service().subscribe(response=>{
      console.log(response);
      this.services = response as Service[];
      /*for(let i = 0 ; i < this.services.length ; i++) {
        this.service[i] = this.services[i].nom;
      }*/
    });

    this.data.liste_employer().subscribe(response=>{
      console.log(response);
      this.employers = response as Employer[];
      /*for(let i = 0 ; i < this.services.length ; i++) {
        this.service[i] = this.services[i].nom;
      }*/
    });
  }

  nouveau_rdv(forme:NgForm){
    alert(forme.value.serv+" "+forme.value.emp+" "+forme.value.date_heure)
    /*
    this.Service.nom=forme.value.nom;
    this.Service.prix=forme.value.prix;
    this.Service.duree=forme.value.duree;
    this.Service.commission=forme.value.commission;
    alert(JSON.stringify(this.Service));
    this.data.nouveau_service(this.Service).subscribe(res=>{console.log(res);
      this.router.navigate(['service']);
    })
    */
  }
}
