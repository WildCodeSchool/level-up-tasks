import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Expedition } from '../../model/expedition/expedition';
import { TokenService } from '../../service/User/token.service';
import { UserService } from '../../service/User/user.service';
import { User } from '../../model/user/user';

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
  userService:UserService = inject(UserService);
  tokenService:TokenService = inject(TokenService);
  user!:User;

  id=0;
  ngOnInit():void{
    this.id = this.tokenService.getUserInfo().id;
    this.userService.getById(this.id).subscribe((user:User) => {
      this.user = user;
    });


  }
  @Output()
  addNewExpeditionToParent: EventEmitter<Expedition> = new EventEmitter();

  onSubmit() : void {
    this.addNewExpeditionToParent.emit(new Expedition(0,this.title,this.user,[]));
    this.title = "";
    this.toggleAddExpeditionModal();
  }

  toggleAddExpeditionModal() : void {
    this.isExpeditionModalOpen = !this.isExpeditionModalOpen;
  }
}
