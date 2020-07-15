import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [],
})
export class PromisesComponent implements OnInit {
  constructor() {
    this.getPromise()
      .then((numero) => console.log(numero))
      .catch((error) => console.log('Error: ', error));
  }

  ngOnInit(): void {}

  getPromise(): Promise<number> {
    return new Promise((resolve, reject) => {
      let contador = 0;

      const intervalo = setInterval(() => {
        contador++;
        if (contador === 3) {
          resolve(contador);
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }
}
