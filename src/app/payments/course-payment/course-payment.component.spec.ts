import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePaymentComponent } from './course-payment.component';

describe('CoursePaymentComponent', () => {
  let component: CoursePaymentComponent;
  let fixture: ComponentFixture<CoursePaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursePaymentComponent]
    });
    fixture = TestBed.createComponent(CoursePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
