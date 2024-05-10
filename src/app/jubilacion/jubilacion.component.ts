import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-jubilacion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './jubilacion.component.html',
  styleUrl: './jubilacion.component.css'
})
export class JubilacionComponent {
  jubilacion = {
    edad: 0,
    sexo: "",
    puedeJubilarse: ""
  };
  mostrarResultado = false;
  jubilados: Jubilado[] = [];

  calcularJubilacion() {
    this.jubilacion.puedeJubilarse = this.puedeJubilarse(this.jubilacion.edad);
    this.jubilados.push({
      edad: this.jubilacion.edad,
      sexo: this.jubilacion.sexo,
      puedeJubilarse: this.jubilacion.puedeJubilarse
    });
    this.mostrarResultado = true;
  }

  puedeJubilarse(edad: number): string {
    let resultado = "";
    if (this.jubilacion.sexo === 'Hombre') {
      resultado = edad >= 60 ? "¡Puede jubilarse!" : "Aún no puede jubilarse.";
    } else if (this.jubilacion.sexo === 'Mujer') {
      resultado = edad >= 54 ? "¡Puede jubilarse!" : "Aún no puede jubilarse.";
    } else {
      resultado = "No se puede determinar.";
    }
    return resultado;
}
}

interface Jubilado {
  edad: number;
  sexo: string;
  puedeJubilarse: string;
}