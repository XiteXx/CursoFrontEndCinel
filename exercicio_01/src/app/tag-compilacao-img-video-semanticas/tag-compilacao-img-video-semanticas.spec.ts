import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagCompilacaoImgVideoSemanticas } from './tag-compilacao-img-video-semanticas';

describe('TagCompilacaoImgVideoSemanticas', () => {
  let component: TagCompilacaoImgVideoSemanticas;
  let fixture: ComponentFixture<TagCompilacaoImgVideoSemanticas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagCompilacaoImgVideoSemanticas],
    }).compileComponents();

    fixture = TestBed.createComponent(TagCompilacaoImgVideoSemanticas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
