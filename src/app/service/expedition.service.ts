import { Injectable, inject } from '@angular/core';
import { Expedition } from '../model/expedition/expedition';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../model/task/task';

@Injectable({
  providedIn: 'root'
})
export class ExpeditionService {
  private url : string = `http://localhost:8080/expeditions`;

  private http = inject(HttpClient);

  constructor() { }

  getExpeditions() : Observable<Expedition[]> {
    return this.http.get<Expedition[]>(this.url);
  }

  addExpedition(expedition : Expedition) : void {
    this.http.post<any>(this.url, expedition).subscribe();
  }

  addTaskToExpedition(expeditionId : number, task : Task) : void {
    this.http.post<any>(this.url + `/${expeditionId}/tasks`, task).subscribe();
  }

  deleteTaskFromExpedition(expeditionId : number, taskId : number) : void {
    this.http.delete<any>(this.url + `/${expeditionId}/tasks/${taskId}`).subscribe();
  }

}
