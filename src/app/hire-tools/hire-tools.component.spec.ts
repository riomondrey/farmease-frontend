import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireToolsComponent } from './hire-tools.component';

describe('HireToolsComponent', () => {
  let component: HireToolsComponent;
  let fixture: ComponentFixture<HireToolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HireToolsComponent]
    });
    fixture = TestBed.createComponent(HireToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
