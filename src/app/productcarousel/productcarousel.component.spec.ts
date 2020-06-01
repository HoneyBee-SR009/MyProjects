import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcarouselComponent } from './productcarousel.component';

describe('ProductcarouselComponent', () => {
  let component: ProductcarouselComponent;
  let fixture: ComponentFixture<ProductcarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductcarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
