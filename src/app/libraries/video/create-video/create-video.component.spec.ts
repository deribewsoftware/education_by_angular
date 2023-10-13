import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVideoComponent } from './create-video.component';

describe('CreateVideoComponent', () => {
  let component: CreateVideoComponent;
  let fixture: ComponentFixture<CreateVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateVideoComponent]
    });
    fixture = TestBed.createComponent(CreateVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
