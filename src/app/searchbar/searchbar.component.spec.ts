import { ComponentFixture, TestBed } from '@angular/core/testing';

import { searchbarComponent } from './searchbar.component';

describe('ProductsComponent', () => {
  let component: searchbarComponent;
  let fixture: ComponentFixture<searchbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [searchbarComponent]
    });
    fixture = TestBed.createComponent(searchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
