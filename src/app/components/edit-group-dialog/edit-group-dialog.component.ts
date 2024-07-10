import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Group } from '../../model/groupes/groupe';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AsyncPipe } from '@angular/common';
import { GroupService } from '../../service/group/group.service';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { UserService } from '../../service/User/user.service';
import { User } from '../../model/user/user';
import { Observable, map, of, startWith } from 'rxjs';

@Component({
  selector: 'app-edit-group-dialog',
  standalone: true,
  imports: [MatDialogModule, 
            MatInputModule, 
            ReactiveFormsModule, 
            MatFormFieldModule, 
            MatIconModule, 
            CommonModule, 
            MatAutocompleteModule,
            AsyncPipe
          ],
  templateUrl: './edit-group-dialog.component.html',
  styleUrl: './edit-group-dialog.component.scss'
})
export class EditGroupDialogComponent implements OnInit{
  groupForm: FormGroup;
  totalMembers: number = 0;
  currentMember : number = 0;

  private userService : UserService = inject(UserService);
  users : User[] = [];
  filteredUsers !: User[];

  constructor(
    private dialogRef: MatDialogRef<EditGroupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { group: Group },
    private fb: FormBuilder,
    private groupService: GroupService
  ) {
    this.groupForm = this.fb.group({
      name: ['', Validators.required],
      members: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.loadGroupData();
    this.userService.getAll().subscribe(
      (data) => this.users = data
    );
  }

  loadGroupData(): void {
    this.groupService.getGroupById(this.data.group.idgroup).subscribe(group => {
      if (group) {
        this.totalMembers = group.userHasGroups
        .length;
        group.userHasGroups
        .forEach(member => {
          this.membersFormArray.push(this.fb.group({
            email: [member.user.email, Validators.required]
          }));
        });
        this.groupForm.patchValue({
          name: group.name
        });
      }
    });
  }
  get membersFormArray(): FormArray {
      return this.groupForm.get('members') as FormArray;
  }

  addMember(): void {
    this.membersFormArray.push(this.fb.group({
      id: [],
      email: ['', Validators.required]
    }));
    this.totalMembers++;
  }
  removeMember(index: number): void {
    
    this.membersFormArray.removeAt(index);
    this.totalMembers--;
  }

  submit(): void {
    if (this.groupForm.valid) {
      let newMembers : string[]=[];
      for(let member of this.groupForm.value.members){
        newMembers.push(member.email);
      }
      this.groupService.updateUserToGroupe(this.data.group.idgroup,newMembers).subscribe(() => {
        this.dialogRef.close();
      });
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }

  changeCurrentMember(index : number) : void {
    this.currentMember = index;
    const filterValue = this.groupForm.value.members[index].email.toLowerCase();
    this.filteredUsers = this.users.filter(user => user.email.toLowerCase().includes(filterValue));
  }

  memberIdUpdate(index : number, user : User) : void {
    this.groupForm.value.members[index].id = user.id;
  }
}
