/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   SW Component version type
*/
export class ComponentConfiguration {
    /**
     * @param {?=} id
     * @param {?=} component
     * @param {?=} dockerImage
     * @param {?=} variables
     * @param {?=} mounts
     * @param {?=} status
     */
    constructor(id, component, dockerImage, variables, mounts, status) {
        this.id = id;
        this.component = component;
        this.dockerImage = dockerImage;
        this.variables = variables;
        this.mounts = mounts;
        this.status = status;
    }
}
if (false) {
    /** @type {?} */
    ComponentConfiguration.prototype.id;
    /** @type {?} */
    ComponentConfiguration.prototype.component;
    /** @type {?} */
    ComponentConfiguration.prototype.dockerImage;
    /** @type {?} */
    ComponentConfiguration.prototype.variables;
    /** @type {?} */
    ComponentConfiguration.prototype.mounts;
    /** @type {?} */
    ComponentConfiguration.prototype.status;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50Q29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL0NvbXBvbmVudENvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU1BLE1BQU0sT0FBTyxzQkFBc0I7Ozs7Ozs7OztJQW9CL0IsWUFBWSxFQUFXLEVBQUUsU0FBa0IsRUFBRSxXQUFvQixFQUFFLFNBQTRCLEVBQUUsTUFBeUIsRUFBRSxNQUEwQjtRQUNsSixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7Q0FFSjs7O0lBMUJHLG9DQUFrQjs7SUFHbEIsMkNBQXlCOztJQUd6Qiw2Q0FBMkI7O0lBRzNCLDJDQUFtQzs7SUFHbkMsd0NBQWdDOztJQUdoQyx3Q0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSdW50aW1lU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL1J1bnRpbWVTdGF0dXNDb2RlJztcbmltcG9ydCB7IFN0cmluZ0tleVZhbHVlIH0gZnJvbSAnLi4vY29tbW9uL1N0cmluZ0tleVZhbHVlJztcblxuLyogXG4gICBTVyBDb21wb25lbnQgdmVyc2lvbiB0eXBlIFxuKi9cbmV4cG9ydCBjbGFzcyBDb21wb25lbnRDb25maWd1cmF0aW9uIHtcbiBcbiAgICAvLyBDb21wb25lbnQgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gQ29tcG9uZW50IGdyb3VwIG5hbWUgXG4gICAgcHVibGljIGNvbXBvbmVudDogc3RyaW5nO1xuIFxuICAgIC8vIERvY2tlciBpbWFnZSBuYW1lIChpbmNsdWRpbmcgdGFnIGFuZCBkb2NrZXIgcmVnaXN0cnkpIFxuICAgIHB1YmxpYyBkb2NrZXJJbWFnZTogc3RyaW5nO1xuIFxuICAgIC8vIExpc3Qgb2YgZW52aXJvbm1lbnQgdmFyaWFibGVzIHRvIGluamVjdCAoYXMga2V5LXZhbHVlIHBhaXJzKSBcbiAgICBwdWJsaWMgdmFyaWFibGVzOiBTdHJpbmdLZXlWYWx1ZVtdO1xuIFxuICAgIC8vIExpc3Qgb2YgbW91bnQgcG9pbnRzIHRvIGluamVjdCAoYXMga2V5LXZhbHVlIHBhaXJzKSBcbiAgICBwdWJsaWMgbW91bnRzOiBTdHJpbmdLZXlWYWx1ZVtdO1xuIFxuICAgIC8vIFJ1bnRpbWUgY29tcG9uZW50IHN0YXR1cyBcbiAgICBwdWJsaWMgc3RhdHVzOiBSdW50aW1lU3RhdHVzQ29kZTtcbiBcbiAgICBjb25zdHJ1Y3RvcihpZD86IHN0cmluZywgY29tcG9uZW50Pzogc3RyaW5nLCBkb2NrZXJJbWFnZT86IHN0cmluZywgdmFyaWFibGVzPzogU3RyaW5nS2V5VmFsdWVbXSwgbW91bnRzPzogU3RyaW5nS2V5VmFsdWVbXSwgc3RhdHVzPzogUnVudGltZVN0YXR1c0NvZGUpIHsgXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIHRoaXMuZG9ja2VySW1hZ2UgPSBkb2NrZXJJbWFnZTtcbiAgICAgICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgICAgIHRoaXMubW91bnRzID0gbW91bnRzO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICB9XG5cbn1cblxuXG4iXX0=