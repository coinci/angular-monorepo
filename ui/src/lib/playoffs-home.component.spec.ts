import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayoffsHomeComponent } from './playoffs-home.component';

describe('PlayoffsHomeComponent', () => {
  let component: PlayoffsHomeComponent;
  let fixture: ComponentFixture<PlayoffsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayoffsHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayoffsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
