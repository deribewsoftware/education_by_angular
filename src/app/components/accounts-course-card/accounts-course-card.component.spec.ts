import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsCourseCardComponent } from './accounts-course-card.component';

describe('AccountsCourseCardComponent', () => {
  let component: AccountsCourseCardComponent;
  let fixture: ComponentFixture<AccountsCourseCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountsCourseCardComponent]
    });
    fixture = TestBed.createComponent(AccountsCourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
