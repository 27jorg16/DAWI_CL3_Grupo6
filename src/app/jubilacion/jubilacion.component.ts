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
  jubilado = {
    edad: 0,
    sexo: "",
    puedeJubilarse: ""
  }
  
  verificarJubilacion() {
    if (this.jubilado.sexo === 'Hombre') {
      this.jubilado.puedeJubilarse = this.jubilado.edad >= 60 ? "¡Puede jubilarse!" : "Aún no puede jubilarse.";
    } else if (this.jubilado.sexo === 'Mujer') {
      this.jubilado.puedeJubilarse = this.jubilado.edad >= 54 ? "¡Puede jubilarse!" : "Aún no puede jubilarse.";
    } else {
      this.jubilado.puedeJubilarse = "No se puede determinar.";
    }
  }
  
}
