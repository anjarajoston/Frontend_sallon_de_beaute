import { Component } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent {
  chartType = 'bar';
  chartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Série A' },
  ];
  chartLabels = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'];
  chartOptions = {
    responsive: true,
  };
  chartLegend = true;
}
