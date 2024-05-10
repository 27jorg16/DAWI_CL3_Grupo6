import { Routes } from '@angular/router';
import { JubilacionComponent } from './jubilacion/jubilacion.component';
import { MenorNumeroComponent } from './menor-numero/menor-numero.component';

export const routes: Routes = [
    { path: 'jubilacion', component: JubilacionComponent },
    { path: 'menor-numero', component: MenorNumeroComponent },
    
];
