import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceThrowComponent } from './dice-throw.component';

describe('DiceThrowComponent', () => {
  let component: DiceThrowComponent;
  let fixture: ComponentFixture<DiceThrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiceThrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceThrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
