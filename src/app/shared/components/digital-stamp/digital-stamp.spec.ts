import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalStamp } from './digital-stamp';

describe('DigitalStamp', () => {
  let component: DigitalStamp;
  let fixture: ComponentFixture<DigitalStamp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalStamp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalStamp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
