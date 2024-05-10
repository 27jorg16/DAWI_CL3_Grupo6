import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-costo-matricula',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './costo-matricula.component.html',
  styleUrl: './costo-matricula.component.css'
})
export class CostoMatriculaComponent {
  nombreAlumno: string = '';
    materiasSeleccionadas: string[] = [];
    costoTotal: number = 0;
    descuentoAplicado: boolean = false;
    descuento: number = 0;
    costoAPagar: number = 0;
    materia: any[] = [
        { nombre: 'Matemáticas', costo: 520 },
        { nombre: 'Física', costo: 520 },
        { nombre: 'Química', costo: 520 },
        { nombre: 'Biología', costo: 520 },
        { nombre: 'Historia', costo: 520 },
        { nombre: 'Literatura', costo: 520 }
    ];

    ngOnInit(): void {}

    onCheckboxChange(materia: string, event: any) {
        if (event.target.checked) {
            this.materiasSeleccionadas.push(materia);
        } else {
            const index = this.materiasSeleccionadas.indexOf(materia);
            if (index !== -1) {
                this.materiasSeleccionadas.splice(index, 1);
            }
        }
        this.calcularCosto();
    }

    calcularCosto() {
        this.costoTotal = this.materiasSeleccionadas.length * 520;
        if (this.materiasSeleccionadas.length > 5) {
            this.descuentoAplicado = true;
            this.descuento = this.costoTotal * 0.1;
            this.costoAPagar = this.costoTotal - this.descuento;
        } else {
            this.descuentoAplicado = false;
            this.descuento = 0;
            this.costoAPagar = this.costoTotal;
        }
    }
}
