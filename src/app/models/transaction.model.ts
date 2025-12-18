import { Compte } from "./compte.model";

interface HistoriqueTransaction{
     id:number;
     mumero:string;
     montant:number;
     type:TypeTransaction;
     createAt:Date;
     soldeApres:number;
     description:string;
    
}

type TypeTransaction="DEPOT"|"RETRAIT"|"VIREMENT";



interface InfosCompte extends Compte{  
     dateDeblocage?:Date
}

interface StatistiqueTransaction{
    totalRetrait:number
    totalDepot:number
    nbreTransaction:number
    dateDerniereTransaction:Date

}

export  interface TransactionResponse{
    historique:HistoriqueTransactionReadOnly[],
    infosCompte:InfosCompteReadOnly,
    statistique:StatistiqueTransactionReadOnly
}

export  type  InfosCompteReadOnly= Readonly<InfosCompte>
export  type  HistoriqueTransactionReadOnly= Readonly<HistoriqueTransaction>
export  type  StatistiqueTransactionReadOnly= Readonly<StatistiqueTransaction>
