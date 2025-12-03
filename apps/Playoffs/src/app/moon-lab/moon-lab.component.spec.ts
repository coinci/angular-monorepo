import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonLabComponent } from './moon-lab.component';

describe('MoonLabComponent', () => {
  let component: MoonLabComponent;
  let fixture: ComponentFixture<MoonLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoonLabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoonLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
