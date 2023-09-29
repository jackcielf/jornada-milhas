import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTestimonyComponent } from './card-testimony.component';

describe('CardTestimonyComponent', () => {
  let component: CardTestimonyComponent;
  let fixture: ComponentFixture<CardTestimonyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardTestimonyComponent]
    });
    fixture = TestBed.createComponent(CardTestimonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
