import { Rendez_vous } from './../Model/Rendez_vous';
import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-liste-rendez-vous',
  templateUrl: './liste-rendez-vous.component.html',
  styleUrls: ['./liste-rendez-vous.component.css']
})
export class ListeRendezVousComponent {
  rendez_vous : Rendez_vous[] = [];
  
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.liste_rendez_vous().subscribe(response=>{
      console.log(response);
      this.rendez_vous = response as Rendez_vous[];
    });
  }

}
