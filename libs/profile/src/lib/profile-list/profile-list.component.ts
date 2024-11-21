import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-profile-list',
  standalone: true,
  imports: [CommonModule, NgbModule, MatIconModule],
  templateUrl: './profile-list.component.html',
  styleUrl: './profile-list.component.css',
})
export class ProfileListComponent {}
