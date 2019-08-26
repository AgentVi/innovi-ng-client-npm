import { ModuleWithProviders } from '@angular/core';
export interface CoreConfig {
    api: string;
}
export declare class CoreLibModule {
    static forRoot(config: CoreConfig): ModuleWithProviders;
}
