import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChapterComponent } from './create-chapter.component';

describe('CreateChapterComponent', () => {
  let component: CreateChapterComponent;
  let fixture: ComponentFixture<CreateChapterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateChapterComponent]
    });
    fixture = TestBed.createComponent(CreateChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
