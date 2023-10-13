import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonCreateComponent } from './lesson-create.component';

describe('LessonCreateComponent', () => {
  let component: LessonCreateComponent;
  let fixture: ComponentFixture<LessonCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LessonCreateComponent]
    });
    fixture = TestBed.createComponent(LessonCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
