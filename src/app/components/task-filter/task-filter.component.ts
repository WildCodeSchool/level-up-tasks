import { Component, EventEmitter, Output } from '@angular/core';
import { taskIcons } from './task-icons';
import { FormsModule } from '@angular/forms';
import { Priority } from '../../model/priority/Priority';

@Component({
  selector: 'app-task-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-filter.component.html',
  styleUrl: './task-filter.component.scss'
})
export class TaskFilterComponent {
  icons=taskIcons;
  description:string='';
  filteredDate=new Date();
  selectedPriority:string= "";
  Priorities = Object.values(Priority);

  
  @Output()
  filterPriority: EventEmitter<string> = new EventEmitter();
  
  @Output() 
  filterDescriptions:  EventEmitter<string> = new EventEmitter();

  @Output()
  filterDate: EventEmitter<string> = new EventEmitter();

  
  onFilterDescriptions():void{
    this.filteredDate=new Date();
    this.selectedPriority= "";
    this.filterDescriptions.emit(this.description);
  }

  onFilterDates():void{
    this.description='';
    this.selectedPriority= "";
    this.filterDate.emit(this.filteredDate.toString());
  }


  onFilterPriorities():void{
    this.description='';
    this.filteredDate=new Date();
    this.filterPriority.emit(this.selectedPriority);
  }
}
