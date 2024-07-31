import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnscreenComponent } from './onscreen.component';

describe('OnscreenComponent', () => {
  let component: OnscreenComponent;
  let fixture: ComponentFixture<OnscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnscreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
