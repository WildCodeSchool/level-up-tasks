import { Injectable } from '@angular/core';
import { Expedition } from '../model/expedition/expedition';

@Injectable({
  providedIn: 'root'
})
export class ExpeditionService {

  constructor() { }

  expeditions : Expedition[] = [
    new Expedition("Liste des tâches"),
    new Expedition("Travail")
  ];

  getExpeditions() : Expedition[]{
    return this.expeditions;
  }

  addExpedition(expedition : Expedition) : void{
    this.expeditions.push(expedition);
  }
}
