import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditInvComponent } from './add-edit-inv.component';

describe('AddEditInvComponent', () => {
  let component: AddEditInvComponent;
  let fixture: ComponentFixture<AddEditInvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditInvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
