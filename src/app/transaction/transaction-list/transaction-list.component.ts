import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from '../transaction.service';
import { TransactionResponse } from '../../models/transaction.model';
import { DatePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [DatePipe, NgClass],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css'
})
export class TransactionListComponent implements OnInit {
  private route=inject(ActivatedRoute);
  private transactionService=inject(TransactionService);
  transaction?:TransactionResponse
  ngOnInit(): void {
      this.route.params.subscribe(params=>{
        let numCompte=params['numero_compte'];
        this.transaction=this.transactionService.getTransanctionByNumCompte(numCompte);
      })
  }

}
