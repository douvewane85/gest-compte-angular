import { Routes } from '@angular/router';
import { CompteListComponent } from './comptes/compte-list/compte-list.component';
import { CompteAddComponent } from './comptes/compte-add/compte-add.component';

export const routes: Routes = [
    {
         path: 'compte-list',
         component: CompteListComponent
    },
    {
        path: 'compte-add',
        component:CompteAddComponent
    },
    {
        path: '',
        redirectTo: 'compte-list',
        pathMatch: 'full'
    }
];
