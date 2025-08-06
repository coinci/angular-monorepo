import { Component, input, model, output, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'lib-profile',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  myHeader = input('title_init', { transform: this.localizeString });
  totleNumber = input.required<number>();
  // using for two-way binding
  description = model('description');

  itemChanged = output<string>();

  accordion = viewChild.required(MatAccordion);

  // constructor() {}

  prevStep() {
    this.itemChanged.emit('previous step');
    const accordion = this.accordion();
    accordion.closeAll();
    console.log('Method not implemented.');
  }
  nextStep() {
    this.itemChanged.emit('Next step');
    const accordion = this.accordion();
    accordion.closeAll();
    console.log('Method not implemented.');
  }

  localizeString(inputString: string) {
    return `transformed string ${inputString}`;
  }
}
