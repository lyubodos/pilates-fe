import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsPageSectionComponent } from './contacts-page-section.component';

describe('ContactsPageSectionComponent', () => {
  let component: ContactsPageSectionComponent;
  let fixture: ComponentFixture<ContactsPageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsPageSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactsPageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
