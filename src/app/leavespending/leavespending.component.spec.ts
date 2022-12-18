import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavespendingComponent } from './leavespending.component';

describe('LeavespendingComponent', () => {
  let component: LeavespendingComponent;
  let fixture: ComponentFixture<LeavespendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavespendingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavespendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
