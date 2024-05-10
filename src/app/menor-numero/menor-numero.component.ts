import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menor-numero',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './menor-numero.component.html',
  styleUrl: './menor-numero.component.css'
})
export class MenorNumeroComponent {
  numeros: number[] = [0, 0, 0, 0];
  menorNumero: number = Number.MAX_VALUE;

  calcularMenorNumero() {
    this.menorNumero = Number.MAX_VALUE;

    for (let numero of this.numeros) {
      if (numero < this.menorNumero) {
        this.menorNumero = numero;
      }
    }
  }
}
