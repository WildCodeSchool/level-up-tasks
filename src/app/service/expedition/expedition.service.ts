import { inject, Injectable, signal } from '@angular/core';
import { Expedition } from '../../model/expedition/expedition';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../../model/task/task';

@Injectable({
  providedIn: 'root'
})
export class ExpeditionService {
  apiUrl= 'http://localhost:8080';
  httpClient:HttpClient = inject(HttpClient);
  constructor() { }

  
  private taskTotalSubject = new BehaviorSubject<number>(0);
  private taskAssignedSubject = new BehaviorSubject<number>(0);
  private taskCompletedSubject = new BehaviorSubject<number>(0);

  taskTotal$ = this.taskTotalSubject.asObservable();
  taskAssigned$ = this.taskAssignedSubject.asObservable();
  taskCompleted$ = this.taskCompletedSubject.asObservable();


  updateTaskCounters(expeditions: Expedition[]) {
    let taskTotal = 0;
    let taskAssigned = 0;
    let taskCompleted = 0;

    if (expeditions && expeditions.length > 0 ) {
      expeditions.forEach(exp => {
        taskTotal += exp.tasks.length;
        taskAssigned += exp.tasks.filter(task => !task.completed).length;
        taskCompleted += exp.tasks.filter(task => task.completed).length;
      });
      
    }
    this.taskTotalSubject.next(taskTotal);
    this.taskAssignedSubject.next(taskAssigned);
    this.taskCompletedSubject.next(taskCompleted);
    
  }

  getExpeditions() :Observable<Expedition[]> {
    return this.httpClient.get<Expedition[]>(`${this.apiUrl}/expeditions`)
  }

  addExpedition(expedition:Expedition,id:number) : Observable<Expedition> {
    return this.httpClient.post<Expedition>(`${this.apiUrl}/expeditions/${id}`, expedition)
  }

  getExpeditionTasks(expId:number) :Observable<Task[]>{
    return this.httpClient.get<Task[]>(`${this.apiUrl}/expeditions/${expId}/tasks`);
  }

  completeTask(expId:number,taskId:number) : Observable<Task> {
    return this.httpClient.post<Task>(`${this.apiUrl}/expeditions/complete/${expId}/${taskId}`,null);
  }

  getById(id:number) : Observable<Expedition> {
    return this.httpClient.get<Expedition>(`${this.apiUrl}/expeditions/${id}`);
  }

}
