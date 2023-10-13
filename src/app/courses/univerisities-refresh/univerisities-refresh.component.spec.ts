import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniverisitiesRefreshComponent } from './univerisities-refresh.component';

describe('UniverisitiesRefreshComponent', () => {
  let component: UniverisitiesRefreshComponent;
  let fixture: ComponentFixture<UniverisitiesRefreshComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UniverisitiesRefreshComponent]
    });
    fixture = TestBed.createComponent(UniverisitiesRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
