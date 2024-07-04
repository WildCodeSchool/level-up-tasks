import { inject, Injectable, signal } from '@angular/core';
import { Expedition } from '../../model/expedition/expedition';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../../model/task/task';

@Injectable({
  providedIn: 'root'
})
export class ExpeditionService {
  apiUrl= 'http://localhost:8080';
  httpClient:HttpClient = inject(HttpClient);
  constructor() { }

  getExpeditions() :Observable<Expedition[]> {
    return this.httpClient.get<Expedition[]>(`${this.apiUrl}/expeditions`)
  }

  addExpedition(expedition:Expedition,id:number) : Observable<Expedition> {
    return this.httpClient.post<Expedition>(`${this.apiUrl}/expeditions/${id}`, expedition)
  }

  getExpeditionTasks(expId:number) :Observable<Task[]>{
    return this.httpClient.get<Task[]>(`${this.apiUrl}/expeditions/${expId}/tasks`);
  }

 
}
