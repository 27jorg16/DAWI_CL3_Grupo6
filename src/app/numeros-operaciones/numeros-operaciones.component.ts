import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-numeros-operaciones',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './numeros-operaciones.component.html',
  styleUrl: './numeros-operaciones.component.css'
})
export class NumerosOperacionesComponent {
  numeros: number[] = [];
  numeroSeleccionado: number | null = null;
  resultadoCuadrado: number | null = null;
  resultadoMitad: number | null = null;

  constructor() {
    for (let i = 15; i <= 70; i++) {
      this.numeros.push(i);
    }
  }

  calcular(operacion: string): void {
    if (!this.numeroSeleccionado) {
      return;
    }
    switch (operacion) {
      case 'cuadrado':
        this.resultadoCuadrado = this.calcularCuadrado(this.numeroSeleccionado);
        this.resultadoMitad = null;
        break;
      case 'mitad':
        this.resultadoCuadrado = null;
        this.resultadoMitad = this.calcularMitad(this.numeroSeleccionado);
        break;
    }
  }
  calcularCuadrado(numero: number): number {
    return numero * numero;
  }

  calcularMitad(numero: number): number {
    return numero / 2;
  }
}