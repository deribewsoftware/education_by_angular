import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourselistComponent } from './courselist.component';

describe('CourselistComponent', () => {
  let component: CourselistComponent;
  let fixture: ComponentFixture<CourselistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourselistComponent]
    });
    fixture = TestBed.createComponent(CourselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
