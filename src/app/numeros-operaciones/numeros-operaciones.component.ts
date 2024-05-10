import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros-operaciones',
  standalone: true,
  imports: [],
  templateUrl: './numeros-operaciones.component.html',
  styleUrl: './numeros-operaciones.component.css'
})
export class NumerosOperacionesComponent {
  numeros: number[] = [];
  resultados: any[] = [];

  
  constructor() {
    for (let i = 15; i <= 70; i++) {
      this.numeros.push(i);
    }

    this.numeros.forEach(num => {
      this.resultados.push({
        numero: num,
        cuadrado: num * num,
        mitad: num / 2
      });
    });
  }
}

