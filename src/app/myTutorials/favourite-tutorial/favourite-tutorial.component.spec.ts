import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteTutorialComponent } from './favourite-tutorial.component';

describe('FavouriteTutorialComponent', () => {
  let component: FavouriteTutorialComponent;
  let fixture: ComponentFixture<FavouriteTutorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavouriteTutorialComponent]
    });
    fixture = TestBed.createComponent(FavouriteTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
