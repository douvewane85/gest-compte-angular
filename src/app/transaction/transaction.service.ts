import { Injectable } from '@angular/core';
import { TransactionResponse } from '../models/transaction.model';
import { TRANSACTIONS } from '../../data/mock';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor() { }

   getTransanctionByNumCompte(numerroCompte:string):TransactionResponse|undefined{ 
       return TRANSACTIONS.find(trans=> trans.infosCompte.mumero==numerroCompte);
  }

}
