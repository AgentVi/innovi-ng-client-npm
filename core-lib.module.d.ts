import { ModuleWithProviders } from '@angular/core';
import { CoreConfig } from './config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/common/http";
export declare class CoreLibModule {
    static forRoot(config: CoreConfig): ModuleWithProviders<CoreLibModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CoreLibModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CoreLibModule, never, [typeof i1.CommonModule, typeof i2.HttpClientModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CoreLibModule>;
}
