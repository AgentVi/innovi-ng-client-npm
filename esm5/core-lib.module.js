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
/**
 * @record
 */
export function CoreConfig() { }
if (false) {
    /** @type {?} */
    CoreConfig.prototype.api;
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJjb3JlLWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDbkMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFFeEQsZ0NBRUM7OztJQURDLHlCQUFZOztBQUdkO0lBQUE7SUFlQSxDQUFDOzs7OztJQVhRLHFCQUFPOzs7O0lBQWQsVUFBZSxNQUFrQjtRQUMvQix1QkFBdUI7UUFDdkIsT0FBTztZQUNMLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVM7Z0JBQ1AsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7Z0JBQ3ZDLFFBQVE7ZUFDTCxRQUFRLENBQ1o7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBZEYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztpQkFDMUM7O0lBYUQsb0JBQUM7Q0FBQSxBQWZELElBZUM7U0FaWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTZXJ2aWNlcyB9IGZyb20gJy4vbGliL3NlcnZpY2VzL3NlcnZpY2VzLmV4cG9ydCc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuZXhwb3J0IGludGVyZmFjZSBDb3JlQ29uZmlnIHtcbiAgYXBpOiBzdHJpbmc7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEh0dHBDbGllbnRNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIENvcmVMaWJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IENvcmVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAvLyBjb25zb2xlLmxvZyhjb25maWcpO1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29yZUxpYk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6ICdjb25maWcnLCB1c2VWYWx1ZTogY29uZmlnIH0sXG4gICAgICAgIFJlc3RVdGlsLFxuICAgICAgICAuLi5TZXJ2aWNlc1xuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==