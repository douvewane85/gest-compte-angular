import { Routes } from '@angular/router';
import { CompteListComponent } from './comptes/compte-list/compte-list.component';
import { CompteAddComponent } from './comptes/compte-add/compte-add.component';
import { TransactionListComponent } from './transaction/transaction-list/transaction-list.component';

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
        path: 'transaction-list/:numero_compte',
        component:TransactionListComponent
    },
    {
        path: '',
        redirectTo: 'compte-list',
        pathMatch: 'full'
    }
];
