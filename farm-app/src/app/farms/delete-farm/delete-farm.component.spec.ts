import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFarmComponent } from './delete-farm.component';

describe('DeleteFarmComponent', () => {
  let component: DeleteFarmComponent;
  let fixture: ComponentFixture<DeleteFarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteFarmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
