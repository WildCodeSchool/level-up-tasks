import { EventEmitter, inject, Injectable } from '@angular/core';
import { Task } from '../../model/task/task';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  
  apiUrl= 'http://localhost:8080';
  httpClient:HttpClient = inject(HttpClient);

  addTask(task:Task,expId:number) :Observable<Task>{
   return this.httpClient.post<Task>(`${this.apiUrl}/expeditions/${expId}/tasks`,task);
 }
  deleteTask(expId:number,taskId:number) : Observable<Task> {
     return this.httpClient.delete<Task>(`${this.apiUrl}/expeditions/${expId}/tasks/${taskId}`)
  }

  // toggleTaskComplete(task : Task) : void {
  //   this.tasks.filter( (t, index) => {
  //     if(task.id === t.id) t.changeCompleted();
  //   });
  //   this.taskUpdated.emit(this.tasks);
  // }
}
