import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentEditComponent } from './content-edit.component';

describe('ContentEditComponent', () => {
  let component: ContentEditComponent;
  let fixture: ComponentFixture<ContentEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentEditComponent]
    });
    fixture = TestBed.createComponent(ContentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
