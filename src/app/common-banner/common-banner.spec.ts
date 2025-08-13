import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonBanner } from './common-banner';

describe('CommonBanner', () => {
  let component: CommonBanner;
  let fixture: ComponentFixture<CommonBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonBanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
