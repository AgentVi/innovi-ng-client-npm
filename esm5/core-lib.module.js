/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Services } from './lib/services/services.export';
import { RestUtil } from './utils/rest-util';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJjb3JlLWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUd4RDtJQUFBO0lBZUEsQ0FBQzs7Ozs7SUFYUSxxQkFBTzs7OztJQUFkLFVBQWUsTUFBa0I7UUFDL0IsdUJBQXVCO1FBQ3ZCLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTO2dCQUNQLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2dCQUN2QyxRQUFRO2VBQ0wsUUFBUSxDQUNaO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQWRGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7aUJBQzFDOztJQWFELG9CQUFDO0NBQUEsQUFmRCxJQWVDO1NBWlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuL2xpYi9zZXJ2aWNlcy9zZXJ2aWNlcy5leHBvcnQnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSHR0cENsaWVudE1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQ29yZUxpYk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogQ29yZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIC8vIGNvbnNvbGUubG9nKGNvbmZpZyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb3JlTGliTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogJ2NvbmZpZycsIHVzZVZhbHVlOiBjb25maWcgfSxcbiAgICAgICAgUmVzdFV0aWwsXG4gICAgICAgIC4uLlNlcnZpY2VzXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19