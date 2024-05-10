import { Routes } from '@angular/router';
import { JubilacionComponent } from './jubilacion/jubilacion.component';
import { CostoMatriculaComponent } from './costo-matricula/costo-matricula.component';
import { MenorNumeroComponent } from './menor-numero/menor-numero.component';
import { NumerosOperacionesComponent } from './numeros-operaciones/numeros-operaciones.component';

export const routes: Routes = [
    {path: 'jubilacion', component: JubilacionComponent },
    {path: 'menor-numero', component: MenorNumeroComponent},
    {path: 'costo-matricula', component: CostoMatriculaComponent},
    {path: 'numeros-operaciones', component: NumerosOperacionesComponent}
];
