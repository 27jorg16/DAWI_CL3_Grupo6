import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-costo-matricula',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './costo-matricula.component.html',
  styleUrl: './costo-matricula.component.css'
})
export class CostoMatriculaComponent { 

  
  matricula = {
    nombre:"",
    numMaterias: 0,
    costoTotal: 0 
    };
 
  matriculas: Matricula[] = [];

  calcularCostoTotal() {
    
}
  interface Matricula {
  nombre: String;
  numMaterias: number;
  costoTotal: number | null;

}


