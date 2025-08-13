import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCategory } from './featured-category';

describe('FeaturedCategory', () => {
  let component: FeaturedCategory;
  let fixture: ComponentFixture<FeaturedCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
