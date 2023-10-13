import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsRefreshComponent } from './subjects-refresh.component';

describe('SubjectsRefreshComponent', () => {
  let component: SubjectsRefreshComponent;
  let fixture: ComponentFixture<SubjectsRefreshComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectsRefreshComponent]
    });
    fixture = TestBed.createComponent(SubjectsRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
