import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Store } from '@ngrx/store';
import { first } from 'rxjs/operators';
import { DandelionStateEntity } from '../+state/dandelion-state.models';
import * as dSelectors from '../+state/dandelion-state.selectors';
import { MsgListComponent } from "../msg-list/msg-list.component";
import { MyPrefixPipe } from '../pipes/my-prefix-pipe';

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
    MatGridListModule,
    MsgListComponent,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDividerModule,
    CurrencyPipe,
    MyPrefixPipe
]
})
export class HomepageComponent implements OnInit {
  private store = inject(Store);
  entities:DandelionStateEntity[] = [];
  message = signal('Hello from signal!');
  localLogs: string[] = ['init log1'];
  favoriteFood = 'Sushi';
  foodPrice = 20;


 ngOnInit(): void {
   this.store.select(dSelectors.selectAllDandelionState).pipe(
    first(a=>!!a)
   ).subscribe(entities => {
     this.entities = entities;

     console.log('====> after selector', this.entities);
   });
 }

 foodClicked($event:MouseEvent){
  this.localLogs.push(`Food clicked: ${($event.target as HTMLInputElement).value}`);
  console.log('Food clicked', $event);
 }

 foodKeyup($event:KeyboardEvent){
  this.localLogs.push(`The user press： ${$event.key}`);
  console.log('Food keyup', $event);
 }

 foodEntered($event:unknown){

  console.log('Food entered', $event);
 }

 clearLogs(){
  this.localLogs = [];
  console.log('Logs cleared');
 }
}
