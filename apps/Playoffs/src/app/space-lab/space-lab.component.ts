import {
  Component,
  computed,
  effect,
  inject,
  signal,
  viewChild,
  ViewEncapsulation
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import isEqual from 'lodash-es/isEqual';
import { MoonLabComponent } from '../moon-lab/moon-lab.component';

@Component({
  selector: 'app-space-lab',
  imports: [MoonLabComponent, FormsModule],
  templateUrl: './space-lab.component.html',
  styleUrl: './space-lab.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class SpaceLabComponent {
  // @viewChild(MoonLabComponent) moonLabComponent!: MoonLabComponent;
  moonLab = viewChild(MoonLabComponent);

  count = signal(2);
  doubleCount = computed(() => this.count() * 2);
  testData = signal(['test'], { equal: isEqual });

  spaceName = signal('Galaxy');

  //inject part
  private activeatedRoute = inject(ActivatedRoute);
  // private readonly router = inject(Router);

  constructor() {
    // Subscribe to router events and react to events
    // this.router.events.pipe(takeUntilDestroyed()).subscribe((event: Event) => {
    //   if (event instanceof NavigationStart) {
    //     // Navigation starting
    //     console.log('Navigation starting:', event.url);
    //   }
    //   if (event instanceof NavigationEnd) {
    //     // Navigation completed
    //     console.log('Navigation completed:', event.url);
    //   }
    // });

    effect(() => {
      console.log(
        `Count changed to: ${this.count()}, Double Count is: ${this.doubleCount()}`
      );
    });

    effect(() => {
      console.log(`test data is changed to: ${this.testData()}`);
    });

    effect(() => {
      console.log('====>view chile moon lab:', this.moonLab());
    });

    console.log('##### view chile moon lab:', this.moonLab());
    this.printRouteInfo(this.activeatedRoute);


    // const elementRef = inject(ElementRef);
    // console.log('====> elementRef', elementRef);
    // console.log('====> nativeElement', elementRef.nativeElement);

    // afterEveryRender(() => {
    //   // Focus the first input element in this component.
    //   elementRef.nativeElement.querySelector('input')?.focus();
    // });
  }

  printRouteInfo(route: ActivatedRoute) {
    const snapshot = route.snapshot
    console.log('===>Activated Route Data:', snapshot.data);
    console.log('===>Activated Route parameter:', snapshot.paramMap);
  }

  increment() {
    this.count.set(this.count() + 1);
  }

  updateTestData() {
    this.testData.set(['test']);
  }

  diffTestData() {
    const updated = this.testData()[0] + '1';
    this.testData.set([updated]);
  }

  changeSpace() {
    this.spaceName.set('King Yellow');
  }
}
