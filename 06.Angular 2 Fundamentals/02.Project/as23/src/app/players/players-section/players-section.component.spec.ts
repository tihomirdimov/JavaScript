import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersSectionComponent } from './players-section.component';

describe('PlayersSectionComponent', () => {
  let component: PlayersSectionComponent;
  let fixture: ComponentFixture<PlayersSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
