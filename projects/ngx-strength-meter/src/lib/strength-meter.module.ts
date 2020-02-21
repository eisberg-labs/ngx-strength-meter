import {NgModule} from '@angular/core';
import {StrengthMeterComponent} from './strength-meter.component';

const COMPONENTS = [StrengthMeterComponent];

@NgModule({
  imports: [],
  declarations: COMPONENTS,
  exports: COMPONENTS
})

export class StrengthMeterModule {
}
