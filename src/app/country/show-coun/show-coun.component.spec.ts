import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCounComponent } from './show-coun.component';

describe('ShowCounComponent', () => {
  let component: ShowCounComponent;
  let fixture: ComponentFixture<ShowCounComponent>;

  beforeEach(async () => {
      TestBed.configureTestingModule({
      declarations: [ ShowCounComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCounComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
