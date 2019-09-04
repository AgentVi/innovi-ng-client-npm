# NgCoreLib

Angular version 8.0.3

### Simple Example

```TypeScript
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { CoreLibModule } from '@agentvi/ng-core-lib'; // <-- import the module

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