import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshmanComponent } from './freshman.component';

describe('FreshmanComponent', () => {
  let component: FreshmanComponent;
  let fixture: ComponentFixture<FreshmanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreshmanComponent]
    });
    fixture = TestBed.createComponent(FreshmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
