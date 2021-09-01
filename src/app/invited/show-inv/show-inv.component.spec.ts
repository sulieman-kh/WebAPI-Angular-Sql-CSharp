import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInvComponent } from './show-inv.component';

describe('ShowInvComponent', () => {
  let component: ShowInvComponent;
  let fixture: ComponentFixture<ShowInvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowInvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
