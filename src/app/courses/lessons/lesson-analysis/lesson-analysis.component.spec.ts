import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonAnalysisComponent } from './lesson-analysis.component';

describe('LessonAnalysisComponent', () => {
  let component: LessonAnalysisComponent;
  let fixture: ComponentFixture<LessonAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LessonAnalysisComponent]
    });
    fixture = TestBed.createComponent(LessonAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
