import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EueeComponent } from './euee.component';

describe('EueeComponent', () => {
  let component: EueeComponent;
  let fixture: ComponentFixture<EueeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EueeComponent]
    });
    fixture = TestBed.createComponent(EueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
