import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupeComponent } from './user-groupe.component';

describe('UserGroupeComponent', () => {
  let component: UserGroupeComponent;
  let fixture: ComponentFixture<UserGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserGroupeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
