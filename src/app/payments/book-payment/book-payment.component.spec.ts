import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPaymentComponent } from './book-payment.component';

describe('BookPaymentComponent', () => {
  let component: BookPaymentComponent;
  let fixture: ComponentFixture<BookPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookPaymentComponent]
    });
    fixture = TestBed.createComponent(BookPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
