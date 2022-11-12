import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleAuthComponent } from './apple-auth.component';

describe('AppleAuthComponent', () => {
  let component: AppleAuthComponent;
  let fixture: ComponentFixture<AppleAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppleAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppleAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
