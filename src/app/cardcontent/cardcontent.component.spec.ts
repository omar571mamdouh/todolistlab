import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcontentComponent } from './cardcontent.component';

describe('CardcontentComponent', () => {
  let component: CardcontentComponent;
  let fixture: ComponentFixture<CardcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardcontentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
