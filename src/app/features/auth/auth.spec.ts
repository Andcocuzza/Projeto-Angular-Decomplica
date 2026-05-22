import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auth, routes } from './auth';

describe('Auth', () => {
  let component: Auth;
  let fixture: ComponentFixture<Auth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Auth],
    }).compileComponents();

    fixture = TestBed.createComponent(Auth);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose a default auth route', () => {
    expect(routes).toEqual([
      {
        path: '',
        component: Auth,
      },
    ]);
  });
});
