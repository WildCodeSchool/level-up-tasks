import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Group } from '../../model/groupes/groupe';
import { GroupService } from '../../service/group/group.service';
@Component({
  selector: 'app-create-group-dialog',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule,ReactiveFormsModule],
  templateUrl: './create-group-dialog.component.html',
  styleUrl: './create-group-dialog.component.scss'
})
export class CreateGroupDialogComponent implements OnInit{
  groupForm: FormGroup;
  groupes: Group[] = [];

  constructor(
    public dialogRef: MatDialogRef<CreateGroupDialogComponent>,
    private fb: FormBuilder,
    private groupService: GroupService
  ) {
    this.groupForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.groupService.getGroups().subscribe((data) => {
      this.groupes = data;
    });
  }
  submit(): void {
    if (this.groupForm.valid) {
      const newGroup: Group = {
        idgroup: 0,
        name: this.groupForm.value.name,
        userHasGroups: [],                               
      };
      this.groupService.createGroup(newGroup).subscribe((group) => {
        this.groupes.push(group);
      })
      this.dialogRef.close(newGroup);
    }
  }
  cancel(): void {
    this.dialogRef.close();
  }
}
