import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePlotComponent } from './delete-plot.component';

describe('DeletePlotComponent', () => {
  let component: DeletePlotComponent;
  let fixture: ComponentFixture<DeletePlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
