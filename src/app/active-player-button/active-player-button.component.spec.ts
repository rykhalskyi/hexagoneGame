import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePlayerButtonComponent } from './active-player-button.component';

describe('ActivePlayerButtonComponent', () => {
  let component: ActivePlayerButtonComponent;
  let fixture: ComponentFixture<ActivePlayerButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivePlayerButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivePlayerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
