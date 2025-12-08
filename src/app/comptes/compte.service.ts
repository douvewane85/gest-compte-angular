import { Injectable } from '@angular/core';
import { COMPTES } from '../../data/mock';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor() { }
  getComptes() {
       return COMPTES;
  }
}
