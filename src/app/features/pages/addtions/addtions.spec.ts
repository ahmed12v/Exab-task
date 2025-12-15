import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addtions } from './addtions';

describe('Addtions', () => {
  let component: Addtions;
  let fixture: ComponentFixture<Addtions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addtions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addtions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
