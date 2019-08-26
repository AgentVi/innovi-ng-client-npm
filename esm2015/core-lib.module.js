/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class CoreLibModule {
    /**
     * @param {?} config
     * @return {?}
     */
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
CoreLibModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, HttpClientModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJjb3JlLWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNuQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUV4RCxnQ0FFQzs7O0lBREMseUJBQVk7O0FBTWQsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBQ3hCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBa0I7UUFDL0IsdUJBQXVCO1FBQ3ZCLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7Z0JBQ3ZDLFFBQVE7Z0JBQ1IsR0FBRyxRQUFRO2FBQ1o7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBZEYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQzthQUMxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuL2xpYi9zZXJ2aWNlcy9zZXJ2aWNlcy5leHBvcnQnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29yZUNvbmZpZyB7XG4gIGFwaTogc3RyaW5nO1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBDb3JlTGliTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBDb3JlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgLy8gY29uc29sZS5sb2coY29uZmlnKTtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvcmVMaWJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiAnY29uZmlnJywgdXNlVmFsdWU6IGNvbmZpZyB9LFxuICAgICAgICBSZXN0VXRpbCxcbiAgICAgICAgLi4uU2VydmljZXNcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=