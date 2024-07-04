import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../model/task/task';

@Pipe({
  name: 'taskFilter',
  standalone: true
})
export class TaskFilterPipe implements PipeTransform {

  transform(tasks: Task[], description:string,priority:string,dateFilter:string): Task[] {
    if (!tasks) return [];

    return tasks.filter(task => {
      const filtereDscription = description ? task.description.toLowerCase().includes(description.toLowerCase()) : true;
      const filterpriority = priority ? task.priority === priority : true;
      const filterDate = dateFilter ? task.deadline.toString() === dateFilter : true;
      return filtereDscription || filterDate || filterpriority;
    });
  }


}
