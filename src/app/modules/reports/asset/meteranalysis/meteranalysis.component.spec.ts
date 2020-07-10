import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteranalysisComponent } from './meteranalysis.component';

describe('MeteranalysisComponent', () => {
  let component: MeteranalysisComponent;
  let fixture: ComponentFixture<MeteranalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeteranalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteranalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
