import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCounComponent } from './add-edit-coun.component';

describe('AddEditCounComponent', () => {
  let component: AddEditCounComponent;
  let fixture: ComponentFixture<AddEditCounComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCounComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCounComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
