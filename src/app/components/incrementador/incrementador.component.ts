import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProcentaje') componente: ElementRef;

  @Input() titulo: string = 'Progreso';
  @Input() porcentaje: number;

  @Output() valor: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  incrementaValor(valor: number) {
    this.porcentaje = this.porcentaje + valor;

    this.validaPorcentaje();
    this.valor.emit(this.porcentaje);
    this.componente.nativeElement.focus();
  }

  cambiaPorcentaje(valor: number) {
    this.porcentaje = valor;
    this.validaPorcentaje();

    this.componente.nativeElement.value = this.porcentaje;
    this.valor.emit(this.porcentaje);
  }

  validaPorcentaje() {
    if (this.porcentaje < 0) {
      this.porcentaje = 0;
    } else if (this.porcentaje > 100) {
      this.porcentaje = 100;
    }
  }
}
