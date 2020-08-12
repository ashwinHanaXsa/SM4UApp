import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissedmdmComponent } from './missedmdm.component';

describe('MissedmdmComponent', () => {
  let component: MissedmdmComponent;
  let fixture: ComponentFixture<MissedmdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissedmdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissedmdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
