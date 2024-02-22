import { membres } from './../model/membre';
import { Component } from '@angular/core';
import { Service } from '../model/Service';
import { Rendez_vous } from '../model/Rendez_vous';
import { DataService } from '../serve/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nouveau-rendez-vous',
  templateUrl: './nouveau-rendez-vous.component.html',
  styleUrls: ['./nouveau-rendez-vous.component.css']
})
export class NouveauRendezVousComponent {
  services : Service[] = [];
  employers : membres[] = [];
  Service = {
    _id : "",
    nom : "",
    prix : "",
    duree : "",
    commission : ""
  } as Service;

  Employer = {
    _id : "",
    nom: "",
    prenom: "",
    email: "",
    password: ""
  } as membres;

  date_heure : string = "";

  Rendez_vous = {
    service : this.Service,
    employer : this.Employer,
    date_heure : ""
  } as Rendez_vous;

  //service : string[] = [];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.liste_service().subscribe(response=>{
      console.log(response);
      this.services = response as Service[];
    });

    this.data.liste_employer().subscribe(response=>{
      console.log(response);
      this.employers = response as membres[];
    });
  }

  nouveau_rdv(forme:NgForm){
    this.Service.nom = forme.value.service.nom;
    this.Service.prix = forme.value.service.prix;
    this.Service.duree = forme.value.service.duree;
    this.Service.commission = forme.value.service.commission;
    this.Employer.nom = forme.value.employer.nom;
    this.Employer.prenom = forme.value.employer.prenom;
    this.Employer.email = forme.value.employer.email;
    this.Employer.password = forme.value.employer.mdp;
    this.date_heure = forme.value.date_heure;
    this.Rendez_vous.date_heure = this.date_heure.split('T')[0]+" "+this.date_heure.split('T')[1];
    console.log(this.Rendez_vous);
    this.data.nouveau_rendez_vous(this.Rendez_vous).subscribe(res=>{console.log(res);
     
    })
  }
}
