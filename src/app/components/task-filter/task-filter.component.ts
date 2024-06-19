import { Component, EventEmitter, Output } from '@angular/core';
import { taskIcons } from './task-icons';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-filter.component.html',
  styleUrl: './task-filter.component.scss'
})
export class TaskFilterComponent {
  icons=taskIcons;
  filterValue:string='';
  filteredDate:string='';
  @Output() 
  filterDescriptions:  EventEmitter<string> = new EventEmitter();

  @Output()
  filterDate: EventEmitter<string> = new EventEmitter();

  
  onFilterDescriptions():void{
    this.filterDescriptions.emit(this.filterValue);
  }

  onFilterDates():void{
    this.filterDate.emit(this.filteredDate);
  }

}
