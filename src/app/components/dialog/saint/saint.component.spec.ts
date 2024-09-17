import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaintDialogComponent } from './saint.component';

describe('SaintComponent', () => {
  let component: SaintDialogComponent;
  let fixture: ComponentFixture<SaintDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaintDialogComponent]
    });
    fixture = TestBed.createComponent(SaintDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
