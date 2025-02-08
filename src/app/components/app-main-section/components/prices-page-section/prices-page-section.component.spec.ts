import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesPageSectionComponent } from './prices-page-section.component';

describe('PricesPageSectionComponent', () => {
  let component: PricesPageSectionComponent;
  let fixture: ComponentFixture<PricesPageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricesPageSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricesPageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
