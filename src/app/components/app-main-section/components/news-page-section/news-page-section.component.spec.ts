import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPageSectionComponent } from './news-page-section.component';

describe('NewsPageSectionComponent', () => {
  let component: NewsPageSectionComponent;
  let fixture: ComponentFixture<NewsPageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsPageSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsPageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
