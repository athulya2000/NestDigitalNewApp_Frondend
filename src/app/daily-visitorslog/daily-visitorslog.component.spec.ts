import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyVisitorslogComponent } from './daily-visitorslog.component';

describe('DailyVisitorslogComponent', () => {
  let component: DailyVisitorslogComponent;
  let fixture: ComponentFixture<DailyVisitorslogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyVisitorslogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyVisitorslogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
