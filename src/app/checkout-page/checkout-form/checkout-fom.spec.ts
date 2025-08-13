import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutFom } from './checkout-fom';

describe('CheckoutFom', () => {
  let component: CheckoutFom;
  let fixture: ComponentFixture<CheckoutFom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutFom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutFom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
