import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../model/task/task';
import { ModalComponent } from '../modal/modal.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Expedition } from '../../model/expedition/expedition';

@Component({
  selector: 'app-add-expedition',
  standalone: true,
  imports: [ModalComponent, FormsModule, CommonModule],
  templateUrl: './add-expedition.component.html',
  styleUrl: './add-expedition.component.scss'
})
export class AddExpeditionComponent {
  isExpeditionModalOpen : boolean = false;
  title : string = "";

  @Output()
  addNewExpeditionToParent: EventEmitter<Expedition> = new EventEmitter();

  onSubmit() : void {
    this.addNewExpeditionToParent.emit(new Expedition(this.title));
    this.title = "";
    this.toggleAddExpeditionModal();
  }

  toggleAddExpeditionModal() : void {
    this.isExpeditionModalOpen = !this.isExpeditionModalOpen;
  }
}
