import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLayoutComponentComponent } from './card-layout-component.component';

describe('CardLayoutComponentComponent', () => {
  let component: CardLayoutComponentComponent;
  let fixture: ComponentFixture<CardLayoutComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLayoutComponentComponent]
    });
    fixture = TestBed.createComponent(CardLayoutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
