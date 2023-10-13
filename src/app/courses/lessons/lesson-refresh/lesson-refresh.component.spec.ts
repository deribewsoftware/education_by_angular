import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonRefreshComponent } from './lesson-refresh.component';

describe('LessonRefreshComponent', () => {
  let component: LessonRefreshComponent;
  let fixture: ComponentFixture<LessonRefreshComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LessonRefreshComponent]
    });
    fixture = TestBed.createComponent(LessonRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
