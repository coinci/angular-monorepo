import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNoteComponent } from './footer-note.component';

describe('FooterNoteComponent', () => {
  let component: FooterNoteComponent;
  let fixture: ComponentFixture<FooterNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterNoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
