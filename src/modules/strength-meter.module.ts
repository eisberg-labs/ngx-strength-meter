import {NgModule} from '@angular/core';
import {StrengthMeterComponent} from '../components/strength-meter.component';

const COMPONENTS = [StrengthMeterComponent];
@NgModule({
  imports: [],
  declarations: COMPONENTS,
  exports: COMPONENTS
})

export class StrengthMeterModule {
}
