import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllSecurityComponent } from './view-all-security.component';

describe('ViewAllSecurityComponent', () => {
  let component: ViewAllSecurityComponent;
  let fixture: ComponentFixture<ViewAllSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllSecurityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
