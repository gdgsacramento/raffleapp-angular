import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRaffleComponent } from './new-raffle.component';

describe('NewRaffleComponent', () => {
  let component: NewRaffleComponent;
  let fixture: ComponentFixture<NewRaffleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRaffleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRaffleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
