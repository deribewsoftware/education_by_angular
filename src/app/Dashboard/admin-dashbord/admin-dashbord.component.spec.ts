import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashbordComponent } from './admin-dashbord.component';

describe('AdminDashbordComponent', () => {
  let component: AdminDashbordComponent;
  let fixture: ComponentFixture<AdminDashbordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDashbordComponent]
    });
    fixture = TestBed.createComponent(AdminDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
