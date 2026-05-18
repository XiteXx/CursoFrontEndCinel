import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsSemanticas } from './tags-semanticas';

describe('TagsSemanticas', () => {
  let component: TagsSemanticas;
  let fixture: ComponentFixture<TagsSemanticas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagsSemanticas],
    }).compileComponents();

    fixture = TestBed.createComponent(TagsSemanticas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
