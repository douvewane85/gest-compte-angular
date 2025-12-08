import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CompteAddComponent } from './comptes/compte-add/compte-add.component';
import { CompteListComponent } from './comptes/compte-list/compte-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gest-compte';
}
