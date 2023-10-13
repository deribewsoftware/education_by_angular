import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsCardComponent } from './accounts-card.component';

describe('AccountsCardComponent', () => {
  let component: AccountsCardComponent;
  let fixture: ComponentFixture<AccountsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountsCardComponent]
    });
    fixture = TestBed.createComponent(AccountsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
