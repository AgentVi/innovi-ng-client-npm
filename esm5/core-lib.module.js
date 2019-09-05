/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Services } from './lib/services/services.export';
import { RestUtil } from './utils';
import { HttpClientModule } from '@angular/common/http';
var CoreLibModule = /** @class */ (function () {
    function CoreLibModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    CoreLibModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        // console.log(config);
        return {
            ngModule: CoreLibModule,
            providers: tslib_1.__spread([
                { provide: 'config', useValue: config },
                RestUtil
            ], Services)
        };
    };
    CoreLibModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, HttpClientModule]
                },] }
    ];
    return CoreLibModule;
}());
export { CoreLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJjb3JlLWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDbkMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHeEQ7SUFBQTtJQWVBLENBQUM7Ozs7O0lBWFEscUJBQU87Ozs7SUFBZCxVQUFlLE1BQWtCO1FBQy9CLHVCQUF1QjtRQUN2QixPQUFPO1lBQ0wsUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUztnQkFDUCxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtnQkFDdkMsUUFBUTtlQUNMLFFBQVEsQ0FDWjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkFkRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDO2lCQUMxQzs7SUFhRCxvQkFBQztDQUFBLEFBZkQsSUFlQztTQVpZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFNlcnZpY2VzIH0gZnJvbSAnLi9saWIvc2VydmljZXMvc2VydmljZXMuZXhwb3J0JztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSHR0cENsaWVudE1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQ29yZUxpYk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogQ29yZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIC8vIGNvbnNvbGUubG9nKGNvbmZpZyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb3JlTGliTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogJ2NvbmZpZycsIHVzZVZhbHVlOiBjb25maWcgfSxcbiAgICAgICAgUmVzdFV0aWwsXG4gICAgICAgIC4uLlNlcnZpY2VzXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19