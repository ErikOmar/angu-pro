import {Component, OnInit, ElementRef} from '@angular/core';
import {SettingsService} from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _ajustes: SettingsService) {}

  ngOnInit(): void {
    this.inicializarSelector();
  }

  inicializarSelector() {

    const temas = document.querySelectorAll(".selector");

    temas.forEach(tema => {
      if (tema.getAttribute('data-theme') === this._ajustes.ajustes.tema) {
        tema.classList.add("working");
        return;
      }
    })
  }

  cambiaColor(tema: string, componente: any) {
    this._ajustes.aplicarTema(tema);
    this.colocaMarcaTemaSeleccionado(componente);
  }

  colocaMarcaTemaSeleccionado(componente: any) {
    this.quitaMarcaSeleccionado();

    componente.classList.add('working');
  }

  quitaMarcaSeleccionado() {

    const temas = document.querySelectorAll(".selector");

    temas.forEach(tema => {
      tema.classList.remove("working");
    })
  }
}
