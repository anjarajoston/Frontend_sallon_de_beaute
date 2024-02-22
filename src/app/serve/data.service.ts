import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { membres } from '../model/membre';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }


  Seconnecter(modele:string,email:string,password:string){
    const url = "http://localhost:8282/login/"+modele;
    const Body = {
      "email" : email,
      "mdp" : password
    }
    const headers = new HttpHeaders({
      'Content-type':'application/json'
    });
    const options = {
      headers , 
      withCredentials: true
    }
    return this.httpClient.post(url,Body,options);
  }

  inscrit(mb:membres,modele:string){
    var url='http://localhost:8282/inscription/'+modele;
    const Body = {
      "nom" : mb.nom,
      "prenom" : mb.prenom,
      "email" : mb.email,
      "mdp" : mb.password
    }
    const headers = new HttpHeaders({
      'Content-type':'application/json'
    });
    const options = {
      headers , 
      withCredentials: true
    }
    return this.httpClient.post(url,Body,options);
  }
  gettous(modele:string){
    return this.httpClient.get('http://localhost:8282/lister/'+modele);
  }
  recherche(modele:string,motcle:string){
    return this.httpClient.get('http://localhost:8282/recherche/'+modele+'/'+motcle);
  }
  getById(modele:string,id:string){
    return this.httpClient.get('http://localhost:8282/getById/'+modele+'/'+id);
  }
  getHoraireById(id:string){
    return this.httpClient.get('http://localhost:8282/getHoraire/'+id);
  }
  UpadteHoraireById(jour:string,id:string,nouveau:string){
    return this.httpClient.get('http://localhost:8282/updateHoraire/'+jour+'/'+id+'/'+nouveau);
  }

}
