import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamPaymentComponent } from './exam-payment.component';

describe('ExamPaymentComponent', () => {
  let component: ExamPaymentComponent;
  let fixture: ComponentFixture<ExamPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamPaymentComponent]
    });
    fixture = TestBed.createComponent(ExamPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
