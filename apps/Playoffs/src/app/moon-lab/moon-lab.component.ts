import { NgTemplateOutlet } from "@angular/common";
import { Component, computed, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from "@angular/material/expansion";
import { GalaxyService } from "../service/galaxy.service";
import { LocalStorageService } from "../service/local-storage.service";

@Component({
  selector: 'app-moon-lab',
  imports: [FormsModule, MatExpansionModule, NgTemplateOutlet],
  templateUrl: './moon-lab.component.html',
  styleUrl: './moon-lab.component.css'
})
export class MoonLabComponent {
  allStars: string;
  // eslint-disable-next-line @angular-eslint/no-input-rename
  sValue = input<string>('', {alias: 'spaceName'});
  title = computed(()=> `Space ${this.sValue()} is on the moon`);

  galaxyService = inject(GalaxyService);
  localStorageService = inject(LocalStorageService);

  constructor() {
    this.allStars = this.galaxyService.getAllStars().join(' - ');
    this.localStorageService.set('lastVisitedLab', 'moon-lab');
  }


}
