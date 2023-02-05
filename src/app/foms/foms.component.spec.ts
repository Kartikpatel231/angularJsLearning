import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FomsComponent } from './foms.component';

describe('FomsComponent', () => {
  let component: FomsComponent;
  let fixture: ComponentFixture<FomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
