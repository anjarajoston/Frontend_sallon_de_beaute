import { Service } from './Model/Service';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  nouveau_service(service:Service) {
    return this.http.post('http://localhost:8282/nouveau_service',service);
  }

  liste_service(){
    return this.http.get('http://localhost:8282/liste_service');
  }

  liste_employer(){
    return this.http.get('http://localhost:8282/liste_employer');
  }
}
