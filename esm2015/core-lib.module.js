import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Services } from './lib/services/services.export';
import { RestUtil } from './utils/rest-util';
import { HttpClientModule } from '@angular/common/http';
import * as i0 from "@angular/core";
export class CoreLibModule {
    static forRoot(config) {
        // console.log(config);
        return {
            ngModule: CoreLibModule,
            providers: [
                { provide: 'config', useValue: config },
                RestUtil,
                ...Services
            ]
        };
    }
}
/** @nocollapse */ CoreLibModule.ɵmod = i0.ɵɵdefineNgModule({ type: CoreLibModule });
/** @nocollapse */ CoreLibModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CoreLibModule_Factory(t) { return new (t || CoreLibModule)(); }, imports: [[CommonModule, HttpClientModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CoreLibModule, { imports: [CommonModule, HttpClientModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CoreLibModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, HttpClientModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2NvcmUtbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFNeEQsTUFBTSxPQUFPLGFBQWE7SUFDeEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFrQjtRQUMvQix1QkFBdUI7UUFDdkIsT0FBTztZQUNMLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtnQkFDdkMsUUFBUTtnQkFDUixHQUFHLFFBQVE7YUFDWjtTQUNGLENBQUM7SUFDSixDQUFDOztvRUFYVSxhQUFhOzRIQUFiLGFBQWEsa0JBRmYsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7d0ZBRTlCLGFBQWEsY0FGZCxZQUFZLEVBQUUsZ0JBQWdCO3VGQUU3QixhQUFhO2NBSHpCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7YUFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFNlcnZpY2VzIH0gZnJvbSAnLi9saWIvc2VydmljZXMvc2VydmljZXMuZXhwb3J0JztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEh0dHBDbGllbnRNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIENvcmVMaWJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IENvcmVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENvcmVMaWJNb2R1bGU+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhjb25maWcpO1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29yZUxpYk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6ICdjb25maWcnLCB1c2VWYWx1ZTogY29uZmlnIH0sXG4gICAgICAgIFJlc3RVdGlsLFxuICAgICAgICAuLi5TZXJ2aWNlc1xuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==