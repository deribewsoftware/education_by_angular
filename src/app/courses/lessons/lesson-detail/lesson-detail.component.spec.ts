import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonDetailComponent } from './lesson-detail.component';

describe('LessonDetailComponent', () => {
  let component: LessonDetailComponent;
  let fixture: ComponentFixture<LessonDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LessonDetailComponent]
    });
    fixture = TestBed.createComponent(LessonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
