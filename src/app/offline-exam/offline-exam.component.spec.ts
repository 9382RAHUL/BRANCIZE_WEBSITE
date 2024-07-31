import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineExamComponent } from './offline-exam.component';

describe('OfflineExamComponent', () => {
  let component: OfflineExamComponent;
  let fixture: ComponentFixture<OfflineExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfflineExamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfflineExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
