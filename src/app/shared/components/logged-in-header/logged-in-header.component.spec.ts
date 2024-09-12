import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInHeaderComponent } from './logged-in-header.component';

describe('LoggedInHeaderComponent', () => {
  let component: LoggedInHeaderComponent;
  let fixture: ComponentFixture<LoggedInHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoggedInHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggedInHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
