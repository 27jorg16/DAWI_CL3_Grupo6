import { Routes } from '@angular/router';
import { JubilacionComponent } from './jubilacion/jubilacion.component';
import { NumerosOperacionesComponent } from './numeros-operaciones/numeros-operaciones.component';

export const routes: Routes = [
    { path: 'jubilacion', component: JubilacionComponent },
    { path: 'numeros-operaciones', component: NumerosOperacionesComponent }
];
