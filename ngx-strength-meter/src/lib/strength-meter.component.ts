import { Component, EventEmitter, Input, Output } from '@angular/core';
import zxcvbn from 'zxcvbn';

@Component({
  template: `
    <div class="strength-meter">
      <div class="strength-meter-fill" [attr.data-strength]="strength"></div>
    </div>
  `,
  styles: [
    `
      .strength-meter {
        position: relative;
        height: 3px;
        background: #ddd;
        margin: 10px auto 20px;
        border-radius: 3px;
      }

      .strength-meter:before,
      .strength-meter:after {
        content: '';
        height: inherit;
        background: transparent;
        display: block;
        border-color: #fff;
        border-style: solid;
        border-width: 0 5px 0 5px;
        position: absolute;
        width: 80px;
        z-index: 10;
      }

      .strength-meter:before {
        left: 70px;
      }

      .strength-meter:after {
        right: 70px;
      }

      .strength-meter-fill {
        background: transparent;
        height: inherit;
        position: absolute;
        width: 0;
        border-radius: inherit;
        transition: width 0.5s ease-in-out, background 0.25s;
        -webkit-transition: width 0.5s ease-in-out, background 0.25s;
      }

      .strength-meter-fill[data-strength='0'] {
        background: darkred;
        width: 20%;
      }

      .strength-meter-fill[data-strength='1'] {
        background: orangered;
        width: 40%;
      }

      .strength-meter-fill[data-strength='2'] {
        background: orange;
        width: 60%;
      }

      .strength-meter-fill[data-strength='3'] {
        background: yellowgreen;
        width: 80%;
      }

      .strength-meter-fill[data-strength='4'] {
        background: green;
        width: 100%;
      }
    `,
  ],
  selector: 'strength-meter',
})
export class StrengthMeterComponent {
  strength: number | undefined;
  @Output()
  measure = new EventEmitter<number>();

  @Input()
  set value(value: string) {
    if (value) {
      const result = zxcvbn(value);
      this.strength = result.score;
      this.measure.emit(this.strength);
    } else {
      this.strength = undefined;
    }
  }
}
