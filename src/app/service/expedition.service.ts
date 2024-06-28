import { Injectable, inject } from '@angular/core';
import { Expedition } from '../model/expedition/expedition';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Task } from '../model/task/task';

@Injectable({
  providedIn: 'root'
})
export class ExpeditionService {
  private url : string = `http://localhost:8080/expeditions`;

  private http = inject(HttpClient);

  constructor() { }

  private _refreshrequired = new Subject<void>();

  get refreshRequired() {
    return this._refreshrequired;
  }

  getExpeditions() : Observable<Expedition[]> {
    return this.http.get<Expedition[]>(this.url);
  }

  addExpedition(expedition : Expedition) : void {
    this.http.post<any>(this.url, expedition).pipe(
      tap(() => {
        this.refreshRequired.next();
      })
    ).subscribe();
  }

  addTaskToExpedition(expeditionId : number, task : Task) : void {
    this.http.post<any>(this.url + `/${expeditionId}/tasks`, task).pipe(
      tap(() => {
        this.refreshRequired.next();
      })
    ).subscribe();
  }

  deleteTaskFromExpedition(expeditionId : number, taskId : number) : void {
    this.http.delete<any>(this.url + `/${expeditionId}/tasks/${taskId}`).pipe(
      tap(() => {
        this.refreshRequired.next();
      })
    ).subscribe();
  }

  
}
