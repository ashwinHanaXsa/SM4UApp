import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnlineComponent } from './columnline.component';

describe('ColumnlineComponent', () => {
  let component: ColumnlineComponent;
  let fixture: ComponentFixture<ColumnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
