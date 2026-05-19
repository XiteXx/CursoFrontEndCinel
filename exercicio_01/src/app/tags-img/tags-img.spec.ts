import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsImg } from './tags-img';

describe('TagsImg', () => {
  let component: TagsImg;
  let fixture: ComponentFixture<TagsImg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagsImg],
    }).compileComponents();

    fixture = TestBed.createComponent(TagsImg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
