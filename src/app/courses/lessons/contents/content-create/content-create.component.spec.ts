import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCreateComponent } from './content-create.component';

describe('ContentCreateComponent', () => {
  let component: ContentCreateComponent;
  let fixture: ComponentFixture<ContentCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentCreateComponent]
    });
    fixture = TestBed.createComponent(ContentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
