import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedHatComponent } from './red-hat.component';

describe('RedHatComponent', () => {
  let component: RedHatComponent;
  let fixture: ComponentFixture<RedHatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedHatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedHatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
