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
    if(this.matricula.numMaterias <= 0 || isNaN(this.matricula.numMaterias)){
      this.matricula.costoTotal = 0; }
      else if(this.matricula.numMaterias <= 5){
        this.matricula.costoTotal = this.matricula.numMaterias * 520;}
      else {
        this.matricula.costoTotal = this.matricula.numMaterias * 520 * 0.9;
      }    
    }
}
interface Matricula {
  nombre: String;
  numMaterias: number;
  costoTotal: number | null;

}
