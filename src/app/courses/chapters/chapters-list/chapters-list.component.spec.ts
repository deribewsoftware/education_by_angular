import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptersListComponent } from './chapters-list.component';

describe('ChaptersListComponent', () => {
  let component: ChaptersListComponent;
  let fixture: ComponentFixture<ChaptersListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChaptersListComponent]
    });
    fixture = TestBed.createComponent(ChaptersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
