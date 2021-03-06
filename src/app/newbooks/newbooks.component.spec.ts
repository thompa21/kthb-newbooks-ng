import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBooksComponent } from './newbooks.component';

describe('BooksComponent', () => {
  let component: NewBooksComponent;
  let fixture: ComponentFixture<NewBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
