import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsPageSectionComponent } from './about-us-page-section.component';

describe('AboutUsPageSectionComponent', () => {
  let component: AboutUsPageSectionComponent;
  let fixture: ComponentFixture<AboutUsPageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsPageSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutUsPageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
