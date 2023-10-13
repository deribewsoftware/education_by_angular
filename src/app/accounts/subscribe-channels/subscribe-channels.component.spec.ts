import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeChannelsComponent } from './subscribe-channels.component';

describe('SubscribeChannelsComponent', () => {
  let component: SubscribeChannelsComponent;
  let fixture: ComponentFixture<SubscribeChannelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscribeChannelsComponent]
    });
    fixture = TestBed.createComponent(SubscribeChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
