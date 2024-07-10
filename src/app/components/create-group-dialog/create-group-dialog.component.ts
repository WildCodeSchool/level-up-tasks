import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Group } from '../../model/groupes/groupe';
import { GroupService } from '../../service/group/group.service';
import { User } from '../../model/user/user';
import { UserService } from '../../service/User/user.service';
import { catchError, throwError } from 'rxjs';
@Component({
  selector: 'app-create-group-dialog',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule,ReactiveFormsModule],
  templateUrl: './create-group-dialog.component.html',
  styleUrl: './create-group-dialog.component.scss'
})
export class CreateGroupDialogComponent implements OnInit{
  groupForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateGroupDialogComponent>,
    private fb: FormBuilder,
    private userService: UserService,
    private groupService: GroupService
  ) {
    this.groupForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {}
  submit(): void {
    if (this.groupForm.valid) {
      const newGroup: Group = {
        idgroup: 0,
        name: this.groupForm.value.name,
        userHasGroups: [],                               
      };
      this.groupService.createGroup(newGroup).subscribe((group) => {
      })
      this.dialogRef.close(newGroup);
    }
  }
  cancel(): void {
    this.dialogRef.close();
  }
}
