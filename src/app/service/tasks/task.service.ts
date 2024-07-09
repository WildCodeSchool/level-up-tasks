import { inject, Injectable } from '@angular/core';
import { Task } from '../../model/task/task';
import { Observable, Subject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Expedition } from '../../model/expedition/expedition';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  private _refreshrequired = new Subject<void>();

  get refreshRequired() {
    return this._refreshrequired;
  }
  
  apiUrl= 'http://localhost:8080';
  httpClient:HttpClient = inject(HttpClient);

  addTask(task:Task,expId:number) :Observable<Task>{
   return this.httpClient.post<Task>(`${this.apiUrl}/expeditions/${expId}/tasks`,task).pipe(
    tap(() => {
      this.refreshRequired.next();
    })
  );
 }
  deleteTask(expId:number,taskId:number) : Observable<Task> {
     return this.httpClient.delete<Task>(`${this.apiUrl}/expeditions/${expId}/tasks/${taskId}`).pipe(
      tap(() => {
        this.refreshRequired.next();
      })
    )
  }

  getTaskExpedition(taskIs:number) : Observable<Expedition> {
    return this.httpClient.get<Expedition>(`${this.apiUrl}/tasks/${taskIs}/expedition`);
  }
  updateTask(task: Task, expId: number): Observable<Task> {
   return this.httpClient.put<Task>(`${this.apiUrl}/expeditions/${expId}/tasks/${task.id}`, task);
  }

}
