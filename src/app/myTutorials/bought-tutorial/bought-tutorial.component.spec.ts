import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoughtTutorialComponent } from './bought-tutorial.component';

describe('BoughtTutorialComponent', () => {
  let component: BoughtTutorialComponent;
  let fixture: ComponentFixture<BoughtTutorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoughtTutorialComponent]
    });
    fixture = TestBed.createComponent(BoughtTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
