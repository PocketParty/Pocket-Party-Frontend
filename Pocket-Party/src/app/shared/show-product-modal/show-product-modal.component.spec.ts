import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductModalComponent } from './show-product-modal.component';

describe('ShowProductModalComponent', () => {
  let component: ShowProductModalComponent;
  let fixture: ComponentFixture<ShowProductModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProductModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowProductModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
