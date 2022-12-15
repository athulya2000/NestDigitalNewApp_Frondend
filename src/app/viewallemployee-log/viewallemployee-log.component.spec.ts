import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallemployeeLogComponent } from './viewallemployee-log.component';

describe('ViewallemployeeLogComponent', () => {
  let component: ViewallemployeeLogComponent;
  let fixture: ComponentFixture<ViewallemployeeLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallemployeeLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallemployeeLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
