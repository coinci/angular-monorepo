import { Component, computed, input } from '@angular/core';
import { MatList, MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-msg-list',
  imports: [MatList,MatListModule, MatIconModule],
  templateUrl: './msg-list.component.html',
  styleUrl: './msg-list.component.css'
})
export class MsgListComponent {
  //"Log 1", "Log 2", "Log 3"
  //logs: string[] = [];
  logs = input<string[]>([]);
  logLength = computed(() => this.getLength());

  constructor() {
    // this.logs.set([...this.logs(), 'Log 1', 'Log 2', 'Log 3']);
  }

  getLength() {
    return this.logs()?.length ?? 0;
  }

}
