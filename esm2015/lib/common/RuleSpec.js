/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Rule specification describe rule parameters
*/
export class RuleSpec {
    /**
     * @param {?=} behaviorType
     * @param {?=} ruleTypeName
     * @param {?=} objectTypes
     * @param {?=} isLineDrawing
     * @param {?=} dwellTime
     * @param {?=} peopleInGroup
     * @param {?=} objectHierarchy
     */
    constructor(behaviorType, ruleTypeName, objectTypes, isLineDrawing, dwellTime, peopleInGroup, objectHierarchy) {
        this.behaviorType = behaviorType;
        this.ruleTypeName = ruleTypeName;
        this.objectTypes = objectTypes;
        this.isLineDrawing = isLineDrawing;
        this.dwellTime = dwellTime;
        this.peopleInGroup = peopleInGroup;
        this.objectHierarchy = objectHierarchy;
    }
}
if (false) {
    /** @type {?} */
    RuleSpec.prototype.behaviorType;
    /** @type {?} */
    RuleSpec.prototype.ruleTypeName;
    /** @type {?} */
    RuleSpec.prototype.objectTypes;
    /** @type {?} */
    RuleSpec.prototype.isLineDrawing;
    /** @type {?} */
    RuleSpec.prototype.dwellTime;
    /** @type {?} */
    RuleSpec.prototype.peopleInGroup;
    /** @type {?} */
    RuleSpec.prototype.objectHierarchy;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVsZVNwZWMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vUnVsZVNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVFBLE1BQU0sT0FBTyxRQUFROzs7Ozs7Ozs7O0lBdUJqQixZQUFZLFlBQStCLEVBQUUsWUFBcUIsRUFBRSxXQUE4QixFQUFFLGFBQXVCLEVBQUUsU0FBdUIsRUFBRSxhQUEyQixFQUFFLGVBQWtDO1FBQ2pOLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0lBQzNDLENBQUM7Q0FFSjs7O0lBOUJHLGdDQUFzQzs7SUFHdEMsZ0NBQTRCOztJQUc1QiwrQkFBcUM7O0lBR3JDLGlDQUE4Qjs7SUFHOUIsNkJBQThCOztJQUc5QixpQ0FBa0M7O0lBR2xDLG1DQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJ1bGVEZWZhdWx0IH0gZnJvbSAnLi4vY29tbW9uL1J1bGVEZWZhdWx0JztcbmltcG9ydCB7IE9iamVjdFR5cGVOb2RlIH0gZnJvbSAnLi4vY29tbW9uL09iamVjdFR5cGVOb2RlJztcbmltcG9ydCB7IEJlaGF2aW9yVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9CZWhhdmlvclR5cGVDb2RlJztcbmltcG9ydCB7IE9iamVjdFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvT2JqZWN0VHlwZUNvZGUnO1xuXG4vKiBcbiAgIFJ1bGUgc3BlY2lmaWNhdGlvbiBkZXNjcmliZSBydWxlIHBhcmFtZXRlcnMgXG4qL1xuZXhwb3J0IGNsYXNzIFJ1bGVTcGVjIHtcbiBcbiAgICAvLyBCZWhhdmlvciB0eXBlcyBmb3IgdGhpcyBydWxlIFxuICAgIHB1YmxpYyBiZWhhdmlvclR5cGU6IEJlaGF2aW9yVHlwZUNvZGU7XG4gXG4gICAgLy8gUnVsZSB0eXBlIG5hbWUgXG4gICAgcHVibGljIHJ1bGVUeXBlTmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIEF2YWlsYWJsZSBvYmplY3QgdHlwZXMgZm9yIHRoaXMgcnVsZSBcbiAgICBwdWJsaWMgb2JqZWN0VHlwZXM6IE9iamVjdFR5cGVDb2RlW107XG4gXG4gICAgLy8gSXMgdGhpcyBydWxlIHJlcXVpcmVzIGxpbmUgZHJhd2luZyAodHJ1ZSkgb3IgYXJlYSBkcmF3aW5nIChmYWxzZSkgXG4gICAgcHVibGljIGlzTGluZURyYXdpbmc6IGJvb2xlYW47XG4gXG4gICAgLy8gRHdlbGwgVGltZSBcbiAgICBwdWJsaWMgZHdlbGxUaW1lOiBSdWxlRGVmYXVsdDtcbiBcbiAgICAvLyBOdW1iZXIgb2YgcGVvcGxlIEluIEdyb3VwIChmb3IgZ3JvdXBpbmcgYW5kIG9jY3VwYW5jeSBydWxlcykgXG4gICAgcHVibGljIHBlb3BsZUluR3JvdXA6IFJ1bGVEZWZhdWx0O1xuIFxuICAgIC8vIEF2YWlsYWJsZSBvYmplY3QgdHlwZXMgZm9yIHRoaXMgcnVsZSBvcmdhbml6ZWQgaW4gaGllcmFyY2h5IFxuICAgIHB1YmxpYyBvYmplY3RIaWVyYXJjaHk6IE9iamVjdFR5cGVOb2RlW107XG4gXG4gICAgY29uc3RydWN0b3IoYmVoYXZpb3JUeXBlPzogQmVoYXZpb3JUeXBlQ29kZSwgcnVsZVR5cGVOYW1lPzogc3RyaW5nLCBvYmplY3RUeXBlcz86IE9iamVjdFR5cGVDb2RlW10sIGlzTGluZURyYXdpbmc/OiBib29sZWFuLCBkd2VsbFRpbWU/OiBSdWxlRGVmYXVsdCwgcGVvcGxlSW5Hcm91cD86IFJ1bGVEZWZhdWx0LCBvYmplY3RIaWVyYXJjaHk/OiBPYmplY3RUeXBlTm9kZVtdKSB7IFxuICAgICAgICB0aGlzLmJlaGF2aW9yVHlwZSA9IGJlaGF2aW9yVHlwZTtcbiAgICAgICAgdGhpcy5ydWxlVHlwZU5hbWUgPSBydWxlVHlwZU5hbWU7XG4gICAgICAgIHRoaXMub2JqZWN0VHlwZXMgPSBvYmplY3RUeXBlcztcbiAgICAgICAgdGhpcy5pc0xpbmVEcmF3aW5nID0gaXNMaW5lRHJhd2luZztcbiAgICAgICAgdGhpcy5kd2VsbFRpbWUgPSBkd2VsbFRpbWU7XG4gICAgICAgIHRoaXMucGVvcGxlSW5Hcm91cCA9IHBlb3BsZUluR3JvdXA7XG4gICAgICAgIHRoaXMub2JqZWN0SGllcmFyY2h5ID0gb2JqZWN0SGllcmFyY2h5O1xuICAgIH1cblxufVxuXG5cbiJdfQ==