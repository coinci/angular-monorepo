import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceLabComponent } from './space-lab.component';

describe('SpaceLabComponent', () => {
  let component: SpaceLabComponent;
  let fixture: ComponentFixture<SpaceLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaceLabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
