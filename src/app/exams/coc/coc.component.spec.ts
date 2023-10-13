import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocComponent } from './coc.component';

describe('CocComponent', () => {
  let component: CocComponent;
  let fixture: ComponentFixture<CocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CocComponent]
    });
    fixture = TestBed.createComponent(CocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
