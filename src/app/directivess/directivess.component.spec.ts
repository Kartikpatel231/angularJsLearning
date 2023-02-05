import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivessComponent } from './directivess.component';

describe('DirectivessComponent', () => {
  let component: DirectivessComponent;
  let fixture: ComponentFixture<DirectivessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
