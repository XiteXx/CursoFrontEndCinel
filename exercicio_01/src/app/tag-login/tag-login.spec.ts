import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagLogin } from './tag-login';

describe('TagLogin', () => {
  let component: TagLogin;
  let fixture: ComponentFixture<TagLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagLogin],
    }).compileComponents();

    fixture = TestBed.createComponent(TagLogin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
