# ngx-strength-meter [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Angular widget for password strength estimation using [zxcvbn](https://github.com/dropbox/zxcvbn), simple and pretty.
 
![demo](docs/demo.gif)
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

## License

MIT © [Eisberg Labs](http://eisberg-labs.com)


[npm-image]: https://badge.fury.io/js/ngx-strength-meter.svg
[npm-url]: https://npmjs.org/package/ngx-strength-meter
[travis-image]: https://travis-ci.org/eisberg-labs/ngx-strength-meter.svg?branch=master
[travis-url]: https://travis-ci.org/eisberg-labs/ngx-strength-meter
[daviddm-image]: https://david-dm.org/eisberg-labs/ngx-strength-meter.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/eisberg-labs/ngx-strength-meter
