import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  }

  constructor() {
    this.cargarAjustes();
  }

  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes() {
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
    }

    this.aplicarTema(this.ajustes.tema);
  }

  aplicarTema(tema: string) {

    let temaIndexRef = document.getElementById('tema');
    let temaUrl = `assets/css/colors/${tema}.css`
    temaIndexRef.setAttribute('href', temaUrl);

    this.ajustes.temaUrl = temaUrl;
    this.ajustes.tema = tema;
    this.guardarAjustes();
  }

}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
