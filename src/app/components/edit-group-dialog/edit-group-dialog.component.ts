import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Group } from '../../model/groupes/groupe';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GroupService } from '../../service/group.service';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-group-dialog',
  standalone: true,
  imports: [ MatDialogModule,MatInputModule,ReactiveFormsModule,MatFormFieldModule,MatIconModule,CommonModule],
  templateUrl: './edit-group-dialog.component.html',
  styleUrl: './edit-group-dialog.component.scss'
})
export class EditGroupDialogComponent implements OnInit{
  groupForm: FormGroup;
  totalMembers: number = 0;

  constructor(
    private dialogRef: MatDialogRef<EditGroupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { groupId: number },
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
  }

  loadGroupData(): void {
    this.groupService.getGroupById(this.data.groupId).subscribe(group => {
      if (group) {
        this.totalMembers = group.members.length;
        group.members.forEach(member => {
          this.membersFormArray.push(this.fb.group({
            name: [member.name],
            avatarUrl: [member.avatarUrl]
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
      name: ['', Validators.required],
      avatarUrl: ['assets/pictures/photo.png']
    }));
    this.totalMembers++;
  }
  removeMember(index: number): void {
    this.membersFormArray.removeAt(index);
    this.totalMembers--;
  }

  submit(): void {
    if (this.groupForm.valid) {
      const updatedGroup: Group = {
        id: this.data.groupId,
        name: this.groupForm.value.name,
        members: this.groupForm.value.members
      };
      this.groupService.updateGroup(updatedGroup).subscribe(() => {
        this.dialogRef.close(updatedGroup);
      });
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
