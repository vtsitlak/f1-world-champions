import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonLineComponent } from './season-line.component';

describe('SeasonLineComponent', () => {
  let component: SeasonLineComponent;
  let fixture: ComponentFixture<SeasonLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
