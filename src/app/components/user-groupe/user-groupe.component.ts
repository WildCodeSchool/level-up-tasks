import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Group } from '../../model/groupes/groupe';
import { GroupService } from '../../service/group/group.service';
import { CreateGroupDialogComponent } from '../create-group-dialog/create-group-dialog.component';
import { EditGroupDialogComponent } from '../edit-group-dialog/edit-group-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { group } from 'console';

@Component({
  selector: 'app-user-groupe',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule],
  templateUrl: './user-groupe.component.html',
  styleUrl: './user-groupe.component.scss'
})
export class UserGroupeComponent   {
  groups: Group[] = [];
  groupservice = inject(GroupService);
  

  constructor(private groupService: GroupService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.groupService.getGroups().subscribe(groups => {
      this.groups = groups;
    });
  }

  openCreateGroupDialog(): void {
    const dialogRef = this.dialog.open(CreateGroupDialogComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
          this.groups.push(result);
        };
      
      });
     }

  openEditGroupDialog(group: Group, index: number): void {
    const dialogRef = this.dialog.open(EditGroupDialogComponent, {
      width: '450px',
      data: { group }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.groups[index] = result;
      }
    });
  }

  deleteGroup(index: number): void {
    const groupId = this.groups[index].idgroup;
    this.groupService.deleteGroup(groupId).subscribe(() => {
      this.groups.splice(index, 1);
    });
  }
}



