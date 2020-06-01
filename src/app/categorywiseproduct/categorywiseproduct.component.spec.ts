import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorywiseproductComponent } from './categorywiseproduct.component';

describe('CategorywiseproductComponent', () => {
  let component: CategorywiseproductComponent;
  let fixture: ComponentFixture<CategorywiseproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorywiseproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorywiseproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
