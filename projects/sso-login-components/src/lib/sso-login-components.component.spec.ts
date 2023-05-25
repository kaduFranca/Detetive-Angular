import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsoLoginComponentsComponent } from './sso-login-components.component';

describe('SsoLoginComponentsComponent', () => {
  let component: SsoLoginComponentsComponent;
  let fixture: ComponentFixture<SsoLoginComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsoLoginComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SsoLoginComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
