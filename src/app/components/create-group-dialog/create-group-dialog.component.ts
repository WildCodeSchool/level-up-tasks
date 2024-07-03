import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Group } from '../../model/groupes/groupe';
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
    private fb: FormBuilder
  ) {
    this.groupForm = this.fb.group({
      name: ['', Validators.required]
    });
  }
  ngOnInit(): void {}

    submit(): void {
      if (this.groupForm.valid) {
        const newGroup: Group = {
          name: this.groupForm.value.name,
          members: []
        };
        this.dialogRef.close(newGroup);
      }
    }
  cancel(): void {
    this.dialogRef.close();
  }

}
