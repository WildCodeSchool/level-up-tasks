import { Injectable, inject } from '@angular/core';
import { Task } from '../model/task/task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url : string = `http://localhost:8080/tasks`;

  private http = inject(HttpClient);

  constructor() { }

  getAllTasks() : Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  updateTask(task : Task) : void {
    this.http.put<any>(this.url + `/${task.id}`, task).subscribe();
  }
}
