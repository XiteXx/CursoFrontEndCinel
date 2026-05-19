import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagTabelas } from './tag-tabelas';

describe('TagTabelas', () => {
  let component: TagTabelas;
  let fixture: ComponentFixture<TagTabelas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagTabelas],
    }).compileComponents();

    fixture = TestBed.createComponent(TagTabelas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
