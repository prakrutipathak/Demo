import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyEmployeeComponent } from './modify-employee.component';

describe('ModifyEmployeeComponent', () => {
  let component: ModifyEmployeeComponent;
  let fixture: ComponentFixture<ModifyEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyEmployeeComponent]
    });
    fixture = TestBed.createComponent(ModifyEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
