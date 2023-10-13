import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReaderComponent } from './book-reader.component';

describe('BookReaderComponent', () => {
  let component: BookReaderComponent;
  let fixture: ComponentFixture<BookReaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookReaderComponent]
    });
    fixture = TestBed.createComponent(BookReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
