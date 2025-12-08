import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CompteService } from '../compte.service';

@Component({
  selector: 'app-compte-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './compte-list.component.html',
  styleUrl: './compte-list.component.css'
})
export class CompteListComponent {
  comptes=this.compteService.getComptes();
  constructor(private compteService: CompteService) { 

  } 

}
