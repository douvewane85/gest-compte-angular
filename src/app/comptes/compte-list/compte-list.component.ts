import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CompteService } from '../compte.service';
import { DatePipe, NgClass } from '@angular/common';
import { ComptePaginate } from '../../models/compte.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-compte-list',
  standalone: true,
  imports: [RouterLink, DatePipe, NgClass],
  templateUrl: './compte-list.component.html',
  styleUrl: './compte-list.component.css'
})
export class CompteListComponent implements OnInit,OnDestroy {
 //comptes=this.compteService.getComptes();
   //dataPaginate:ComptePaginate|null=null;
    dataPaginate?:ComptePaginate // dataPaginate:ComptePaginate|undefined=undefined; 

   // dataPaginate!:ComptePaginate
   //injection de dépendance
   private   subscription:Subscription|null=null;
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
     this.subscription=this.route.queryParamMap.subscribe({
      next:(qp)=>{
          let page =Number(qp.get("page")||1)
          this.dataPaginate=this.compteService.getComptesPagines(page);
      },
      complete:()=>{

      },
      error:(err) =>{
        
      },
     })
  }

}
