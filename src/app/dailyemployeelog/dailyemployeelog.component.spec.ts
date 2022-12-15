import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyemployeelogComponent } from './dailyemployeelog.component';

describe('DailyemployeelogComponent', () => {
  let component: DailyemployeelogComponent;
  let fixture: ComponentFixture<DailyemployeelogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyemployeelogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyemployeelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
