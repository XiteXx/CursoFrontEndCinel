import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlStructure } from './control-structure';

describe('ControlStructure', () => {
  let component: ControlStructure;
  let fixture: ComponentFixture<ControlStructure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlStructure],
    }).compileComponents();

    fixture = TestBed.createComponent(ControlStructure);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
