import { __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Services } from './lib/services/services.export';
import { RestUtil } from './utils/rest-util';
import { HttpClientModule } from '@angular/common/http';
import * as i0 from "@angular/core";
var CoreLibModule = /** @class */ (function () {
    function CoreLibModule() {
    }
    CoreLibModule.forRoot = function (config) {
        // console.log(config);
        return {
            ngModule: CoreLibModule,
            providers: __spread([
                { provide: 'config', useValue: config },
                RestUtil
            ], Services)
        };
    };
    /** @nocollapse */ CoreLibModule.ɵmod = i0.ɵɵdefineNgModule({ type: CoreLibModule });
    /** @nocollapse */ CoreLibModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CoreLibModule_Factory(t) { return new (t || CoreLibModule)(); }, imports: [[CommonModule, HttpClientModule]] });
    return CoreLibModule;
}());
export { CoreLibModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CoreLibModule, { imports: [CommonModule, HttpClientModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CoreLibModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, HttpClientModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJjb3JlLWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUd4RDtJQUFBO0tBZUM7SUFYUSxxQkFBTyxHQUFkLFVBQWUsTUFBa0I7UUFDL0IsdUJBQXVCO1FBQ3ZCLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTO2dCQUNQLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2dCQUN2QyxRQUFRO2VBQ0wsUUFBUSxDQUNaO1NBQ0YsQ0FBQztJQUNKLENBQUM7cURBWFUsYUFBYTs2R0FBYixhQUFhLGtCQUZmLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDO3dCQVIzQztDQXNCQyxBQWZELElBZUM7U0FaWSxhQUFhO3dGQUFiLGFBQWEsY0FGZCxZQUFZLEVBQUUsZ0JBQWdCO2tEQUU3QixhQUFhO2NBSHpCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7YUFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFNlcnZpY2VzIH0gZnJvbSAnLi9saWIvc2VydmljZXMvc2VydmljZXMuZXhwb3J0JztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEh0dHBDbGllbnRNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIENvcmVMaWJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IENvcmVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAvLyBjb25zb2xlLmxvZyhjb25maWcpO1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29yZUxpYk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6ICdjb25maWcnLCB1c2VWYWx1ZTogY29uZmlnIH0sXG4gICAgICAgIFJlc3RVdGlsLFxuICAgICAgICAuLi5TZXJ2aWNlc1xuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==