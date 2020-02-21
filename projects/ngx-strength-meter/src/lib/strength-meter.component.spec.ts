import {ComponentFixture, TestBed} from '@angular/core/testing';
import {StrengthMeterComponent} from './strength-meter.component';

describe('StrengthMeterComponent', () => {
  let component: StrengthMeterComponent;
  let fixture: ComponentFixture<StrengthMeterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [StrengthMeterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(StrengthMeterComponent);
    component = fixture.componentInstance;
    component.value = '12345_@';
    fixture.detectChanges();
  });

  it('should return a password strength', () => {
    expect(component.strength).toBeGreaterThan(0);
  });
});
