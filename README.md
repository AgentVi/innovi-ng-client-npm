# NgCoreLib

Angular version 8.0.3

## Build



Run `ng build ng-core-lib` to build the project. The build artifacts will be stored in the `dist/` directory.

`npm run package && npm i --save dist/ng-core-lib/ng-core-lib-0.0.1.tgz && ng serve`

## Publishing

After building your library with `ng build ng-core-lib`, go to the dist folder `cd dist/ng-core-lib` and run `npm publish`.

### Simple Example

```TypeScript
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { CoreLibModule } from 'ng-core-lib'; // <-- import the module

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreLibModule.forRoot({ // <-- include it in your app module
      api: 'http://localhost:8080/v1' // <-- configure CoreAPI url
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### CoreConfig

* **`api`** [`string`] configure CoreAPI url.