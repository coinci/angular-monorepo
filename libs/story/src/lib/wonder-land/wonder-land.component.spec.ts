import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WonderLandComponent } from './wonder-land.component';

describe('WonderLandComponent', () => {
  let component: WonderLandComponent;
  let fixture: ComponentFixture<WonderLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WonderLandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WonderLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
