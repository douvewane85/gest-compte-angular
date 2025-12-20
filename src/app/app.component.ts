import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CompteAddComponent } from './comptes/compte-add/compte-add.component';
import { CompteListComponent } from './comptes/compte-list/compte-list.component';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,AsyncPipe,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  subscribers!:Subscription[];
   textFormControl = new FormControl('');
   text$?:Observable<string|null>;
   hello$?:Observable<string>
  ngOnInit(): void {
    this.text$=this.textFormControl.valueChanges;
    this.hello$=new Observable<string>((subscriber: Subscriber<string>)=>{
        const letters="Hello Word";
        for (let index = 0; index < letters.length; index++) {
           setTimeout(()=>{
           subscriber.next(letters[index]);
           },(index+1)*1000)

        }

         setTimeout(()=>{
           subscriber.error("Erreur de Test");
           },5000)

        setTimeout(()=>{
           subscriber.complete();
           },(letters.length)*1000)

    })

/*
    const helloObserver1={
      next:(value:string)=>{
         console.log(`Ce caractere est ${value}`);
         
      }
    }
    this.subscribers?.push(this.hello$.subscribe({
         next:(value:string)=>{
         console.log(value);
         
        },
         complete:()=>{
          console.log("Fin de Reponse");
        },
        error:(err:string)=>{
          console.log(err);
        }
      
    }))
    this.subscribers?.push(this.hello$.subscribe(helloObserver1))
    */
  }
  title = 'gest-compte';

}
