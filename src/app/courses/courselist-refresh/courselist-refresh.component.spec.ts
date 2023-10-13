import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourselistRefreshComponent } from './courselist-refresh.component';

describe('CourselistRefreshComponent', () => {
  let component: CourselistRefreshComponent;
  let fixture: ComponentFixture<CourselistRefreshComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourselistRefreshComponent]
    });
    fixture = TestBed.createComponent(CourselistRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
