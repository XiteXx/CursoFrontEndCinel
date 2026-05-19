import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagFooter } from './tag-footer';

describe('TagFooter', () => {
  let component: TagFooter;
  let fixture: ComponentFixture<TagFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagFooter],
    }).compileComponents();

    fixture = TestBed.createComponent(TagFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
