import {Component, OnInit} from '@angular/core';

// Llamar un script que se encuentra fuera de angulat
// En este caso para inicializar los plugins del tema
declare function init_pluggins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    init_pluggins();
  }

}
