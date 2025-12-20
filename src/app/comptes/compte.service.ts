import { Injectable } from '@angular/core';
import { COMPTES } from '../../data/mock';
import { Compte, ComptePaginate } from '../models/compte.model';
import { delay, map, mergeMap, Observable, of, Subscriber, switchMap, timer } from 'rxjs';

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

  getComptesPaginesWithPaginate(search:string,page:number=1, size:number=2):Observable<ComptePaginate>{
    console.log(search);
    
    let filteredComptes=COMPTES;
    if (search!="") {
       filteredComptes=filteredComptes.filter(compte=>compte.mumero.includes(search));
    }
    
    const startIndex=(page-1)*size;
    const endIndex=startIndex+size;

    const comptesPage=COMPTES.slice(startIndex,endIndex);
    const totalComptes=COMPTES.length;
    const totalPages=Math.ceil(totalComptes/size);
   
   /* return  new Observable((subscriber: Subscriber<ComptePaginate>)=>{
        setTimeout(() => {
            subscriber.next({
            comptes:comptesPage,
            currentPage:page,
            size:size,
            totalPages:totalPages,
            pages:Array.from({length:totalPages},(_,i)=>i+1)
           })
        }, 5000);
    })
       
    return of<ComptePaginate>({
      comptes: comptesPage,
      currentPage: page,
      size: size,
      totalPages: totalPages,
      pages: Array.from({ length: totalPages }, (_, i) => i + 1)
     }).pipe(
     delay(5000)
    );
 

        return timer(5000).pipe(
          map(() => ({
            comptes: comptesPage,
            currentPage: page,
            size: size,
            totalPages: totalPages,
            pages: Array.from({ length: totalPages }, (_, i) => i + 1)
          }))
    );
    */

return timer(5000).pipe(
   mergeMap(() =>
     of({
      comptes: comptesPage,
      currentPage: page,
      size: size,
      totalPages: totalPages,
      pages: Array.from({ length: totalPages }, (_, i) => i + 1)
    })
  )
);
  }
}


