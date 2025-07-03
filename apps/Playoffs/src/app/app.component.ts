import { Component, inject, isDevMode, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { NavList } from './constants';
import { Store } from '@ngrx/store';
import * as DandelionActions from './+state/dandelion-state.actions';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    NgbModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    CdkScrollableModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private store = inject(Store);

  title = 'Playoffs';
  fillerNav = NavList;

  ngOnInit() {
    console.log('starting init');
    // log he isdevmode value
    console.log('isDevMode', isDevMode());
    this.store.dispatch(DandelionActions.initDandelionState());
  }
}
