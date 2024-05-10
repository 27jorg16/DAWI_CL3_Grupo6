import { Routes } from '@angular/router';
import { JubilacionComponent } from './jubilacion/jubilacion.component';
import { CostoMatriculaComponent } from './costo-matricula/costo-matricula.component';
import { MenorNumeroComponent } from './menor-numero/menor-numero.component';

export const routes: Routes = [
    { path: 'jubilacion', component: JubilacionComponent },
    { path: 'costo-matricula', component: CostoMatriculaComponent },
    { path: 'menor-numero', component: MenorNumeroComponent }
];
