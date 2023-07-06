import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnkarComponent } from './onkar.component';

describe('OnkarComponent', () => {
  let component: OnkarComponent;
  let fixture: ComponentFixture<OnkarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnkarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnkarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
