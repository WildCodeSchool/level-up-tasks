import { Component, EventEmitter, Output } from '@angular/core';
import { taskIcons } from './task-icons';
import { FormsModule } from '@angular/forms';
import { ImportancyLevel } from '../../model/importancy-level/importancy-level';

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
  selectedlevel:string= "";
  levelImportancy = Object.values(ImportancyLevel);

  
  @Output()
  filterImportancy: EventEmitter<string> = new EventEmitter();
  
  @Output() 
  filterDescriptions:  EventEmitter<string> = new EventEmitter();

  @Output()
  filterDate: EventEmitter<string> = new EventEmitter();

  
  onFilterDescriptions():void{
    //this.filteredDate='';
    //this.selectedlevel= "";
    this.filterDescriptions.emit(this.filterValue);
  }

  onFilterDates():void{
    //this.filterValue='';
    //this.selectedlevel= "";
    this.filterDate.emit(this.filteredDate);
  }


  onFilterImportance():void{
    //this.filterValue='';
    //this.filteredDate='';
    this.filterImportancy.emit(this.selectedlevel);
  }
}
