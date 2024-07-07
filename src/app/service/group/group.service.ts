import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of, tap } from 'rxjs';
import { Group } from '../../model/groupes/groupe';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private groupsSubject: BehaviorSubject<Group[]> = new BehaviorSubject<Group[]>([]);
  private groups: Group[] = [];

  constructor() { 
    this.groupsSubject.next(this.groups);
  }
  getGroups(): Observable<Group[]> {
    return  this.groupsSubject.asObservable();
  }

  createGroup(group: Group): Observable<Group>  {
    group.members = group.members.map(member => ({...member,avatarUrl: 'assets/pictures/photo.png'}));
    this.groups.push(group);
    this.groupsSubject.next(this.groups);
    return new BehaviorSubject<Group>(group).asObservable();
  }

  
  deleteGroup(index: number): void {
    this.groups.splice(index, 1);
    
  }


  getGroupById(id: number): Observable<Group | undefined> {
    const group = this.groups.find(g => g.id === id);
    return of(group);
  }

  updateGroup(updatedGroup: Group): Observable<Group> {
    const index = this.groups.findIndex(g => g.id === updatedGroup.id);
    if (index !== -1) {
      this.groups[index] = updatedGroup;
      this.groupsSubject.next(this.groups);
      return of(updatedGroup);
    }
    return of(updatedGroup);
  }
}

    

