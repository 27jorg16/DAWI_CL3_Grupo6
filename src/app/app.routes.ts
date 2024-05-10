import { Routes } from '@angular/router';
import { JubilacionComponent } from './jubilacion/jubilacion.component';
import { CostoMatriculaComponent } from './costo-matricula/costo-matricula.component';

export const routes: Routes = [
    { path: 'jubilacion', component: JubilacionComponent },
    { path: 'costo-matricula', component: CostoMatriculaComponent }
];
