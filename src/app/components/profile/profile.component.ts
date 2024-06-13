import { Component, ElementRef, ViewChild } from '@angular/core';
import { User } from '../../model/user/user';
import { ModalComponent } from '../modal/modal.component';
import { UserTeams } from '../../model/user/user-teams';
import { TeamsRoles } from '../../model/user/teams-roles';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

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
  //Use the ViewChild directive to access the fileInput DOM element referenced in the HTML template.
  //ElementRef allows you to directly manipulate this element(fileInput).
  //@ViewChild('fileInput', { static: false }) fileInput!: ElementRef;
  isModalOpen: boolean = false;
  submitted: boolean = false;
  teams: UserTeams[] = [
    { id: 1, name: 'teams1', role: TeamsRoles.Admin },
    { id: 2, name: 'teams2', role: TeamsRoles.Member },
    { id: 3, name: 'teams3', role: TeamsRoles.Member },
  ];
  img: string = '../../../assets/pictures/Graphic.png';

  user: User = new User(
    1,
    'Timfa',
    'Emard',
    '',
    '',
    this.teams,
    this.img,
    1,
    20
  );
  editUser() {
    this.submitted = true;
    this.toggleModale();
  }
  toggleModale() {
    this.isModalOpen = !this.isModalOpen;
  }

  //this methode declanch an clic on fileInput which opens the file selection dialog box.
  // triggerFileInput() {
  //   this.fileInput.nativeElement.click();
  // }

  //This method is called when the user selects a file. It retrieves the selected file and stores it in a variable.
  //createObjectURL() creates a DOMString containing a URL representing the selected image src
  onFileSelected(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.user.profilImage = URL.createObjectURL(file);
    }
  }
}
