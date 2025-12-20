import { Injectable } from '@angular/core';
import { COMPTES } from '../../data/mock';
import { Compte, ComptePaginate } from '../models/compte.model';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor() { }
  getComptes():Compte[]{ 
       return COMPTES;
  }

  getComptesPagines(page:number, size:number=2):ComptePaginate{
    const startIndex=(page-1)*size;
    const endIndex=startIndex+size;
    const comptesPage=COMPTES.slice(startIndex,endIndex);
    const totalComptes=COMPTES.length;
    const totalPages=Math.ceil(totalComptes/size);
   
    return {
      comptes:comptesPage,
      currentPage:page,
      size:size,
      totalPages:totalPages,
      pages:Array.from({length:totalPages},(_,i)=>i+1)
    };
  }


