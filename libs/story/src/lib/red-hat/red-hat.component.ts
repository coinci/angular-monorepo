import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'lib-red-hat',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './red-hat.component.html',
  styleUrl: './red-hat.component.css'
})
export class RedHatComponent {

}
