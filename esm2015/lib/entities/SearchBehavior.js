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
     * @param {?=} sensorShapes
     * @param {?=} geoShape
     */
    constructor(behaviorType, dwellTime, minObjectsInGroup, sensorShapes, geoShape) {
        this.behaviorType = behaviorType;
        this.dwellTime = dwellTime;
        this.minObjectsInGroup = minObjectsInGroup;
        this.sensorShapes = sensorShapes;
        this.geoShape = geoShape;
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
    SearchBehavior.prototype.sensorShapes;
    /** @type {?} */
    SearchBehavior.prototype.geoShape;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoQmVoYXZpb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9TZWFyY2hCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBT0EsTUFBTSxPQUFPLGNBQWM7Ozs7Ozs7O0lBaUJ2QixZQUFZLFlBQStCLEVBQUUsU0FBa0IsRUFBRSxpQkFBMEIsRUFBRSxZQUE0QixFQUFFLFFBQW1CO1FBQzFJLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0NBRUo7OztJQXRCRyxzQ0FBc0M7O0lBR3RDLG1DQUF5Qjs7SUFHekIsMkNBQWlDOztJQUdqQyxzQ0FBbUM7O0lBR25DLGtDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9CZWhhdmlvclR5cGVDb2RlJztcbmltcG9ydCB7IFNlbnNvclNoYXBlIH0gZnJvbSAnLi4vZW50aXRpZXMvU2Vuc29yU2hhcGUnO1xuaW1wb3J0IHsgR2VvU2hhcGUgfSBmcm9tICcuLi9lbnRpdGllcy9HZW9TaGFwZSc7XG5cbi8qIFxuICAgU2VhcmNoIGJlaGF2aW9yIGRlc2NyaXB0aW9uIFxuKi9cbmV4cG9ydCBjbGFzcyBTZWFyY2hCZWhhdmlvciB7XG4gXG4gICAgLy8gUnVsZSBiZWhhdmlvciB0eXBlOiBNT1ZJTkcgfCBDUk9TU0lORyB8IE9DQ1VQQU5DWSAuLi4gXG4gICAgcHVibGljIGJlaGF2aW9yVHlwZTogQmVoYXZpb3JUeXBlQ29kZTtcbiBcbiAgICAvLyBEd2VsbCB0aW1lIGluIHNlY29uZHMsIHJlcXVpcmVkIGZvciBjZXJ0YWluIGJlaGF2aW9ycyAoTU9WSU5HIHwgT0NDVVBBTkNZIHwgR1JPVVBJTkcpIFxuICAgIHB1YmxpYyBkd2VsbFRpbWU6IG51bWJlcjtcbiBcbiAgICAvLyBNaW4gbnVtYmVyIG9mIHBlb3BsZSBpbiBncm91cCwgcmVxdWlyZWQgZm9yIGNlcnRhaW4gYmVoYXZpb3JzIChPQ0NVUEFOQ1kgfCBHUk9VUElORykgXG4gICAgcHVibGljIG1pbk9iamVjdHNJbkdyb3VwOiBudW1iZXI7XG4gXG4gICAgLy8gTGlzdCBvZiBzZW5zb3Igc3BlY2lmaWMgc2VhcmNoIHNoYXBlcyBvbiBGT1YgKGluIGNhc2Ugc291cmNlU2NvcGUgaXMgU0VOU09SKSBcbiAgICBwdWJsaWMgc2Vuc29yU2hhcGVzOiBTZW5zb3JTaGFwZVtdO1xuIFxuICAgIC8vIEdlbyBzcGVjaWZpYyBzZWFyY2ggc2hhcGUgaW4gd29ybGQgY29vcmRpbmF0ZXMgKGluIGNhc2Ugc291cmNlU2NvcGUgaXMgR0VPKSBcbiAgICBwdWJsaWMgZ2VvU2hhcGU6IEdlb1NoYXBlO1xuIFxuICAgIGNvbnN0cnVjdG9yKGJlaGF2aW9yVHlwZT86IEJlaGF2aW9yVHlwZUNvZGUsIGR3ZWxsVGltZT86IG51bWJlciwgbWluT2JqZWN0c0luR3JvdXA/OiBudW1iZXIsIHNlbnNvclNoYXBlcz86IFNlbnNvclNoYXBlW10sIGdlb1NoYXBlPzogR2VvU2hhcGUpIHsgXG4gICAgICAgIHRoaXMuYmVoYXZpb3JUeXBlID0gYmVoYXZpb3JUeXBlO1xuICAgICAgICB0aGlzLmR3ZWxsVGltZSA9IGR3ZWxsVGltZTtcbiAgICAgICAgdGhpcy5taW5PYmplY3RzSW5Hcm91cCA9IG1pbk9iamVjdHNJbkdyb3VwO1xuICAgICAgICB0aGlzLnNlbnNvclNoYXBlcyA9IHNlbnNvclNoYXBlcztcbiAgICAgICAgdGhpcy5nZW9TaGFwZSA9IGdlb1NoYXBlO1xuICAgIH1cblxufVxuXG5cbiJdfQ==