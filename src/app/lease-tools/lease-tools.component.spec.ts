import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseToolsComponent } from './lease-tools.component';

describe('LeaseToolsComponent', () => {
  let component: LeaseToolsComponent;
  let fixture: ComponentFixture<LeaseToolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaseToolsComponent]
    });
    fixture = TestBed.createComponent(LeaseToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
