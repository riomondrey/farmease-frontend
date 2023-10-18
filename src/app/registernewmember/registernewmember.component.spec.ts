import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisternewmemberComponent } from './registernewmember.component';

describe('RegisternewmemberComponent', () => {
  let component: RegisternewmemberComponent;
  let fixture: ComponentFixture<RegisternewmemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisternewmemberComponent]
    });
    fixture = TestBed.createComponent(RegisternewmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
