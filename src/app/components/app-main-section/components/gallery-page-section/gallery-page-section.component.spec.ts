import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPageSectionComponent } from './gallery-page-section.component';

describe('GalleryPageSectionComponent', () => {
  let component: GalleryPageSectionComponent;
  let fixture: ComponentFixture<GalleryPageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryPageSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalleryPageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
