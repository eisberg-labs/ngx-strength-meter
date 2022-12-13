# ⚠ Project is moved to [Angular Components](https://github.com/eisberg-labs/angular-components).

## Use [@eisberg-labs/ngx-strength-meter](https://www.npmjs.com/package/@eisberg-labs/ngx-strength-meter) instead.

# ngx-strength-meter 
[![Downloads](http://img.shields.io/npm/dm/ngx-strength-meter.svg)](https://npmjs.org/package/ngx-strength-meter)
![Build status](https://github.com/eisberg-labs/ngx-strength-meter/actions/workflows/ci.yml/badge.svg)
> Angular widget for password strength estimation using [zxcvbn](https://github.com/dropbox/zxcvbn), simple and pretty.
 
![demo](docs/demo.gif)

If you 👍 this project, consider giving it a ★, thanks! 🙌

## Installation

```sh
$ npm install ngx-strength-meter --save
```

## Usage
First import to your module:
```typescript
   @NgModule({
     declarations: [
       AppComponent
     ],
     imports: [
       StrengthMeterModule
     ],
     providers: [],
     bootstrap: [AppComponent]
   })
   export class AppModule { }

```
And use in your component html
```html
<form [formGroup]="form" name="form">
  <mat-form-field>
    <input name="password" matInput placeholder="Input password" type="password" formControlName="password">
  </mat-form-field>
  <strength-meter [value]="form.value.password" (measure)="onStrengthChange($event)"></strength-meter>
</form>
```
## Demo
[Try the Demo in StackBlitz](https://stackblitz.com/edit/ngx-strength-meter-demo)

## License

MIT © [Eisberg Labs](http://eisberg-labs.com)


[npm-image]: https://badge.fury.io/js/ngx-strength-meter.svg
[npm-url]: https://npmjs.org/package/ngx-strength-meter
[travis-image]: https://travis-ci.com/eisberg-labs/ngx-strength-meter.svg?branch=develop
[travis-url]: https://travis-ci.com/eisberg-labs/ngx-strength-meter?branch=develop
[daviddm-image]: https://david-dm.org/eisberg-labs/ngx-strength-meter.svg?theme=shields.io&path=projects/ngx-strength-meter
[daviddm-url]: https://david-dm.org/eisberg-labs/ngx-strength-meter?path=projects/ngx-strength-meter
