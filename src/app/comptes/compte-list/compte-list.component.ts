import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CompteService } from '../compte.service';
import { AsyncPipe, DatePipe, NgClass } from '@angular/common';
import { ComptePaginate } from '../../models/compte.model';
import { combineLatest, debounceTime, map, Observable, startWith, Subscription, switchMap } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-compte-list',
  standalone: true,
  imports: [RouterLink, DatePipe, NgClass,AsyncPipe,ReactiveFormsModule],
  templateUrl: './compte-list.component.html',
  styleUrl: './compte-list.component.css'
})
export class CompteListComponent implements OnInit,OnDestroy {
 //comptes=this.compteService.getComptes();
   //dataPaginate:ComptePaginate|null=null;
   // dataPaginate?:ComptePaginate // dataPaginate:ComptePaginate|undefined=undefined; 

   // dataPaginate!:ComptePaginate
   //injection de dépendance

   //Data Paginate with Observable
    dataPaginate$?:Observable<ComptePaginate>
    private   subscription:Subscription|null=null;
    seachFiltrerFormControl = new FormControl('');
  constructor(private compteService: CompteService,private route:ActivatedRoute) { 

  } 
  ngOnDestroy(): void {
       this.subscription?.unsubscribe()
  }
  ngOnInit(): void {
    /* this.route.queryParamMap.subscribe(qp=>{
       let page =Number(qp.get("page")||1)
        this.dataPaginate=this.compteService.getComptesPagines(page);
     })*/
     const page$ = this.route.queryParamMap.pipe(
         map(qp => Number(qp.get('page') || 1))
    );
     const search$ = this.seachFiltrerFormControl.valueChanges.pipe(
       startWith(''),
        map((value: string | null)=> value ? value : '' ),
        debounceTime(500)
      );
        this.dataPaginate$ = combineLatest([page$, search$]).pipe(
            switchMap(([page, search]) =>{
              console.log(`${page}-${search}`);
              
                return  this.compteService.getComptesPaginesWithPaginate(search, page)
            }
          
        )
       );

  }

   

}
