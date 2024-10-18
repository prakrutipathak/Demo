import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeindexComponent } from './employeeindex.component';

describe('EmployeeindexComponent', () => {
  let component: EmployeeindexComponent;
  let fixture: ComponentFixture<EmployeeindexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeindexComponent]
    });
    fixture = TestBed.createComponent(EmployeeindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
