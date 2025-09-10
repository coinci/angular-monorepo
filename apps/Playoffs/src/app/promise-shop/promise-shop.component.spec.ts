import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseShopComponent } from './promise-shop.component';

describe('PromiseShopComponent', () => {
  let component: PromiseShopComponent;
  let fixture: ComponentFixture<PromiseShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromiseShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromiseShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
