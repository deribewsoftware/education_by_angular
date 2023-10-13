import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsCardComponent } from './exams-card.component';

describe('ExamsCardComponent', () => {
  let component: ExamsCardComponent;
  let fixture: ComponentFixture<ExamsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamsCardComponent]
    });
    fixture = TestBed.createComponent(ExamsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
