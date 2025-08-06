import { Component, inject, ViewContainerRef } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { FooterNoteComponent } from '../footer-note/footer-note.component';

@Component({
  selector: 'lib-wonder-land',
  imports: [MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './wonder-land.component.html',
  styleUrl: './wonder-land.component.css'
})
export class WonderLandComponent {
   private viewContainer = inject(ViewContainerRef);
  loadContent() {
    console.log(this.viewContainer);

    this.viewContainer.createComponent(FooterNoteComponent);
  }

}
