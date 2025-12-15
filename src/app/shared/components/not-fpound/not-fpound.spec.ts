import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFpound } from './not-fpound';

describe('NotFpound', () => {
  let component: NotFpound;
  let fixture: ComponentFixture<NotFpound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFpound]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFpound);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
