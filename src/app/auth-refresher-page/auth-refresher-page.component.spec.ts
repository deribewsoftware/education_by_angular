import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRefresherPageComponent } from './auth-refresher-page.component';

describe('AuthRefresherPageComponent', () => {
  let component: AuthRefresherPageComponent;
  let fixture: ComponentFixture<AuthRefresherPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthRefresherPageComponent]
    });
    fixture = TestBed.createComponent(AuthRefresherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
