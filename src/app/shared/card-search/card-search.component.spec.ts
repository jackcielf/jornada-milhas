import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSearchComponent } from './card-search.component';

describe('CardSearchComponent', () => {
  let component: CardSearchComponent;
  let fixture: ComponentFixture<CardSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSearchComponent]
    });
    fixture = TestBed.createComponent(CardSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
