import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsVideo } from './tags-video';

describe('TagsVideo', () => {
  let component: TagsVideo;
  let fixture: ComponentFixture<TagsVideo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagsVideo],
    }).compileComponents();

    fixture = TestBed.createComponent(TagsVideo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
