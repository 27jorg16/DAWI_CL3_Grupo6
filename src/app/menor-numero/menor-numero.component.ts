import { Component } from '@angular/core';

@Component({
  selector: 'app-menor-numero',
  templateUrl: './menor-numero.component.html',
  styleUrls: ['./menor-numero.component.css']
})
export class MenorNumeroComponent {
  numeros: number[] = [];
  menor: number | undefined;

  calcularMenor() {
    if (this.numeros.length === 4) {
      this.menor = Math.min(...this.numeros);
    } else {
      this.menor = undefined; // Reinicia el valor si no se ingresaron 4 números
    }
  }
}
