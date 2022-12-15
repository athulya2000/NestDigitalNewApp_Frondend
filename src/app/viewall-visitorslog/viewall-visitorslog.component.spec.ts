import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallVisitorslogComponent } from './viewall-visitorslog.component';

describe('ViewallVisitorslogComponent', () => {
  let component: ViewallVisitorslogComponent;
  let fixture: ComponentFixture<ViewallVisitorslogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallVisitorslogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallVisitorslogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
