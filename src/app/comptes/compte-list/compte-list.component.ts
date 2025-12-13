import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CompteService } from '../compte.service';
import { DatePipe, NgClass } from '@angular/common';
import { ComptePaginate } from '../../models/compte.model';

@Component({
  selector: 'app-compte-list',
  standalone: true,
  imports: [RouterLink, DatePipe, NgClass],
  templateUrl: './compte-list.component.html',
  styleUrl: './compte-list.component.css'
})
export class CompteListComponent {
 //comptes=this.compteService.getComptes();
   dataPaginate:ComptePaginate=this.compteService.getComptesPagines(1);
  //injection de dépendance
  constructor(private compteService: CompteService) { 

  } 

}
