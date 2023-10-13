import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingAccountComponent } from './saving-account.component';

describe('SavingAccountComponent', () => {
  let component: SavingAccountComponent;
  let fixture: ComponentFixture<SavingAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavingAccountComponent]
    });
    fixture = TestBed.createComponent(SavingAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
