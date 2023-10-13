import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonVideoComponent } from './lesson-video.component';

describe('LessonVideoComponent', () => {
  let component: LessonVideoComponent;
  let fixture: ComponentFixture<LessonVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LessonVideoComponent]
    });
    fixture = TestBed.createComponent(LessonVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
