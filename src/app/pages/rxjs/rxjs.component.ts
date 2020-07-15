import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnInit {
  subscription: Subscription;

  constructor() {
    this.subscription = this.getObservable()
      // .pipe(retry(2))
      .subscribe(
        (numero) => console.log('Subs: ', numero),
        (error) => console.error('Error en el obs ', error),
        () => console.log('El observador termino!')
      );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getObservable(): Observable<number> {
    return new Observable((observer) => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador++;

        const salida = { valor: contador };
        observer.next(salida);

        // if (salida.valor === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if (salida.valor === 2) {
        //   clearInterval(intervalo);
        //   observer.error('Error en el observable');
        // }
      }, 1000);
    }).pipe(
      map((resp) => resp.valor),
      filter((valor, index) => {
        if (valor % 2 === 1) {
          return true;
        } else {
          return false;
        }
      })
    );
  }
}
