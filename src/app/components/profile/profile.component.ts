import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { User } from '../../model/user/user';
import { ModalComponent } from '../modal/modal.component';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { dataIcon } from './icons';
import { UserService } from '../../service/User/user.service';
import { DomSanitizer } from '@angular/platform-browser';
import { TokenService } from '../../service/User/token.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ModalComponent,
    ProgressBarComponent,
    RouterLink,
    ModalComponent,
    FormsModule,
    NgIf,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  isModalOpen: boolean = false;
  submitted: boolean = false;
  icons = dataIcon;
  private route: ActivatedRoute = inject(ActivatedRoute);
  private userService:UserService = inject(UserService);
  private tokenService = inject(TokenService);
  user?: User;
  foundedId: number = 0;
  errormsg = '';
  selectedFile: File | null = null;
  sanitizer: DomSanitizer = inject(DomSanitizer);
  
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.foundedId = params['id'];
    });
    this.userService.getById(this.foundedId).subscribe((data) => {
      this.user = data;
      
    });

  }
  editUser() {
    this.submitted = true;
    if (this.user) {
      this.userService.update(this.user).subscribe((data) => {
        this.user = data;
      });
    }else{
      this.errormsg = "Une erreur est survenue. Veuillez réessayer.";

    }

    this.toggleModale();
  }
  toggleModale() {
    this.isModalOpen = !this.isModalOpen;
  }
  //This method is called when the user selects a file. It retrieves the selected file and stores it in a variable.
  //createObjectURL() creates a DOMString containing a URL representing the selected image src
  // onFileSelected(event: any) {
  //   const input = event.target as HTMLInputElement;
  //   if (input.files && input.files.length > 0 && this.user) {
  //     const file = input.files[0];
  //     this.user.profileImage = URL.createObjectURL(file);
  //   }
  // }
  // onFileSelected(event:Event) {
  //   const input = event.target as HTMLInputElement;
  //   if (input && input.files && input.files.length > 0) {
  //     this.selectedFile = input.files[0];
  //   }
  // }
}
