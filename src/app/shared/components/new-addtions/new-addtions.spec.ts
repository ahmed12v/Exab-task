import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAddtions } from './new-addtions';

describe('NewAddtions', () => {
  let component: NewAddtions;
  let fixture: ComponentFixture<NewAddtions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewAddtions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAddtions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
