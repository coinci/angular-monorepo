import { Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay, first } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as dSelectors from '../+state/dandelion-state.selectors';
import { DandelionStateEntity } from '../+state/dandelion-state.models';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
  ]
})
export class HomepageComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);
  private store = inject(Store);
  entities:DandelionStateEntity[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

 ngOnInit(): void {
   this.store.select(dSelectors.selectAllDandelionState).pipe(
    first(a=>!!a)
   ).subscribe(entities => {
     this.entities = entities;

     console.log('====> after selector', this.entities);
   });
 }
}
