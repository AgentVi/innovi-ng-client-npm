/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Search behavior description
*/
export class SearchBehavior {
    /**
     * @param {?=} behaviorType
     * @param {?=} dwellTime
     * @param {?=} minObjectsInGroup
     * @param {?=} shapes
     */
    constructor(behaviorType, dwellTime, minObjectsInGroup, shapes) {
        this.behaviorType = behaviorType;
        this.dwellTime = dwellTime;
        this.minObjectsInGroup = minObjectsInGroup;
        this.shapes = shapes;
    }
}
if (false) {
    /** @type {?} */
    SearchBehavior.prototype.behaviorType;
    /** @type {?} */
    SearchBehavior.prototype.dwellTime;
    /** @type {?} */
    SearchBehavior.prototype.minObjectsInGroup;
    /** @type {?} */
    SearchBehavior.prototype.shapes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoQmVoYXZpb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9TZWFyY2hCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBTUEsTUFBTSxPQUFPLGNBQWM7Ozs7Ozs7SUFjdkIsWUFBWSxZQUErQixFQUFFLFNBQWtCLEVBQUUsaUJBQTBCLEVBQUUsTUFBc0I7UUFDL0csSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7Q0FFSjs7O0lBbEJHLHNDQUFzQzs7SUFHdEMsbUNBQXlCOztJQUd6QiwyQ0FBaUM7O0lBR2pDLGdDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlYXJjaFNoYXBlIH0gZnJvbSAnLi4vZW50aXRpZXMvU2VhcmNoU2hhcGUnO1xuaW1wb3J0IHsgQmVoYXZpb3JUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0JlaGF2aW9yVHlwZUNvZGUnO1xuXG4vKiBcbiAgIFNlYXJjaCBiZWhhdmlvciBkZXNjcmlwdGlvbiBcbiovXG5leHBvcnQgY2xhc3MgU2VhcmNoQmVoYXZpb3Ige1xuIFxuICAgIC8vIFJ1bGUgYmVoYXZpb3IgdHlwZTogTU9WSU5HIHwgQ1JPU1NJTkcgfCBPQ0NVUEFOQ1kgLi4uIFxuICAgIHB1YmxpYyBiZWhhdmlvclR5cGU6IEJlaGF2aW9yVHlwZUNvZGU7XG4gXG4gICAgLy8gRHdlbGwgdGltZSBpbiBzZWNvbmRzLCByZXF1aXJlZCBmb3IgY2VydGFpbiBiZWhhdmlvcnMgKE1PVklORyB8IE9DQ1VQQU5DWSB8IEdST1VQSU5HKSBcbiAgICBwdWJsaWMgZHdlbGxUaW1lOiBudW1iZXI7XG4gXG4gICAgLy8gTWluIG51bWJlciBvZiBwZW9wbGUgaW4gZ3JvdXAsIHJlcXVpcmVkIGZvciBjZXJ0YWluIGJlaGF2aW9ycyAoT0NDVVBBTkNZIHwgR1JPVVBJTkcpIFxuICAgIHB1YmxpYyBtaW5PYmplY3RzSW5Hcm91cDogbnVtYmVyO1xuIFxuICAgIC8vIExpc3Qgb2Ygc2VhcmNoIHNoYXBlcyBvbiBGT1YgKGluIGNhc2Ugc291cmNlU2NvcGUgaXMgU0VOU09SKSBvciBhIHNpbmdsZSBzaGFwZSBvbiB3b3JsZCBjb29yZGluYXRlcyAoaW4gY2FzZSBzb3VyY2VTY29wZSBpcyBHRU8pIFxuICAgIHB1YmxpYyBzaGFwZXM6IFNlYXJjaFNoYXBlW107XG4gXG4gICAgY29uc3RydWN0b3IoYmVoYXZpb3JUeXBlPzogQmVoYXZpb3JUeXBlQ29kZSwgZHdlbGxUaW1lPzogbnVtYmVyLCBtaW5PYmplY3RzSW5Hcm91cD86IG51bWJlciwgc2hhcGVzPzogU2VhcmNoU2hhcGVbXSkgeyBcbiAgICAgICAgdGhpcy5iZWhhdmlvclR5cGUgPSBiZWhhdmlvclR5cGU7XG4gICAgICAgIHRoaXMuZHdlbGxUaW1lID0gZHdlbGxUaW1lO1xuICAgICAgICB0aGlzLm1pbk9iamVjdHNJbkdyb3VwID0gbWluT2JqZWN0c0luR3JvdXA7XG4gICAgICAgIHRoaXMuc2hhcGVzID0gc2hhcGVzO1xuICAgIH1cblxufVxuXG5cbiJdfQ==