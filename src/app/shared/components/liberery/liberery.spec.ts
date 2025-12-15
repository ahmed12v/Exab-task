import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Liberery } from './liberery';

describe('Liberery', () => {
  let component: Liberery;
  let fixture: ComponentFixture<Liberery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Liberery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Liberery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
