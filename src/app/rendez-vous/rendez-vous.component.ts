import { Employer } from './../Model/Employer';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { Service } from '../Model/Service';
import { Rendez_vous } from '../Model/Rendez_vous';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent {
  services : Service[] = [];
  employers : Employer[] = [];
  Service = {
    nom : "",
    prix : "",
    duree : "",
    commission : ""
  } as Service;

  Employer = {
    nom: "",
    prenom: "",
    email: "",
    mdp: ""
  } as Employer;

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
      this.employers = response as Employer[];
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
    this.Employer.mdp = forme.value.employer.mdp;
    this.date_heure = forme.value.date_heure;
    this.Rendez_vous.date_heure = this.date_heure.split('T')[0]+" "+this.date_heure.split('T')[1];
    console.log(this.Rendez_vous);
    this.data.nouveau_rendez_vous(this.Rendez_vous).subscribe(res=>{console.log(res);
     
    })
  }
}
