import { HistoriqueTransactionReadOnly, InfosCompteReadOnly, StatistiqueTransactionReadOnly } from "./transaction.model";

export interface Compte {
     id:number;
     mumero:string;
     solde:number;
     titulaire:string;
     type:string;
     createAt:Date;
     statut:string;
     duree?:string;
  
}

export interface ComptePaginate {
    comptes:Compte[];
    currentPage:number;
    size:number;
    totalPages:number;
    pages:number[];
}

