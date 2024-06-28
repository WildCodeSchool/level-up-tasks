import { Injectable, inject } from '@angular/core';
import { Task } from '../model/task/task';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url : string = `http://localhost:8080/tasks`;

  private http = inject(HttpClient);

  constructor() { }

  private _refreshrequired = new Subject<void>();

  get refreshRequired() {
    return this._refreshrequired;
  }

  getAllTasks() : Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  updateTask(task : Task) : void {
    if (task.completed) {
      task.completedAt = new Date();
    }
    this.http.put<any>(this.url + `/${task.id}`, task).pipe(
      tap(() => {
        this.refreshRequired.next();
      })
    ).subscribe();
  }
}
