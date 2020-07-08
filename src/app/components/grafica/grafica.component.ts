import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styles: [],
})
export class GraficaComponent implements OnInit {
  @Input() graficaData: any = {
    labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
    data: [350, 450, 100],
    type: 'doughnut',
    leyenda: 'Grafica Dona',
  };

  constructor() {}

  ngOnInit(): void {}
}
