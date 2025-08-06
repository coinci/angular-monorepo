import { Component, ElementRef, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatList, MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { WonderLandComponent } from '../wonder-land/wonder-land.component';
import { RedHatComponent } from '../red-hat/red-hat.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'lib-story',
  standalone: true,
  imports: [
    CommonModule,
    MatList,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
  ],
  templateUrl: './story.component.html',
  styleUrl: './story.component.css',
})
export class StoryComponent {
  logs: string[] = [];
  storyKey = 'wonderland';

  constructor() {
    this.logs.push('StoryComponent initialized');
    const elementRef = inject(ElementRef);
    console.log(elementRef.nativeElement);
  }

  getStoryItem() {
    return this.storyKey === 'wonderland'
      ? WonderLandComponent
      : RedHatComponent;
  }

  eventEmit(event: string) {
    this.storyKey = event;
    this.logs.push(`Story changed to: ${this.storyKey}`);
  }
}
