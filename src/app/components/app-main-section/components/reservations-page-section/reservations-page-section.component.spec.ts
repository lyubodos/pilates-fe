import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsPageSectionComponent } from './reservations-page-section.component';

describe('ReservationsPageSectionComponent', () => {
  let component: ReservationsPageSectionComponent;
  let fixture: ComponentFixture<ReservationsPageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationsPageSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsPageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
