/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Rule specification describe rule parameters
*/
export class RuleSpec {
    /**
     * @param {?=} ruleType
     * @param {?=} ruleTypeName
     * @param {?=} behaviorTypes
     * @param {?=} objectTypes
     * @param {?=} isLineDrawing
     * @param {?=} dwellTime
     * @param {?=} peopleInGroup
     */
    constructor(ruleType, ruleTypeName, behaviorTypes, objectTypes, isLineDrawing, dwellTime, peopleInGroup) {
        this.ruleType = ruleType;
        this.ruleTypeName = ruleTypeName;
        this.behaviorTypes = behaviorTypes;
        this.objectTypes = objectTypes;
        this.isLineDrawing = isLineDrawing;
        this.dwellTime = dwellTime;
        this.peopleInGroup = peopleInGroup;
    }
}
if (false) {
    /** @type {?} */
    RuleSpec.prototype.ruleType;
    /** @type {?} */
    RuleSpec.prototype.ruleTypeName;
    /** @type {?} */
    RuleSpec.prototype.behaviorTypes;
    /** @type {?} */
    RuleSpec.prototype.objectTypes;
    /** @type {?} */
    RuleSpec.prototype.isLineDrawing;
    /** @type {?} */
    RuleSpec.prototype.dwellTime;
    /** @type {?} */
    RuleSpec.prototype.peopleInGroup;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVsZVNwZWMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vUnVsZVNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVFBLE1BQU0sT0FBTyxRQUFROzs7Ozs7Ozs7O0lBdUJqQixZQUFZLFFBQXVCLEVBQUUsWUFBcUIsRUFBRSxhQUFrQyxFQUFFLFdBQThCLEVBQUUsYUFBdUIsRUFBRSxTQUF1QixFQUFFLGFBQTJCO1FBQ3pNLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7Q0FFSjs7O0lBOUJHLDRCQUE4Qjs7SUFHOUIsZ0NBQTRCOztJQUc1QixpQ0FBeUM7O0lBR3pDLCtCQUFxQzs7SUFHckMsaUNBQThCOztJQUc5Qiw2QkFBOEI7O0lBRzlCLGlDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJ1bGVUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1J1bGVUeXBlQ29kZSc7XG5pbXBvcnQgeyBCZWhhdmlvclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQmVoYXZpb3JUeXBlQ29kZSc7XG5pbXBvcnQgeyBPYmplY3RUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL09iamVjdFR5cGVDb2RlJztcbmltcG9ydCB7IFJ1bGVEZWZhdWx0IH0gZnJvbSAnLi4vY29tbW9uL1J1bGVEZWZhdWx0JztcblxuLyogXG4gICBSdWxlIHNwZWNpZmljYXRpb24gZGVzY3JpYmUgcnVsZSBwYXJhbWV0ZXJzIFxuKi9cbmV4cG9ydCBjbGFzcyBSdWxlU3BlYyB7XG4gXG4gICAgLy8gUnVsZSB0eXBlIGVudW0gY29kZSBcbiAgICBwdWJsaWMgcnVsZVR5cGU6IFJ1bGVUeXBlQ29kZTtcbiBcbiAgICAvLyBSdWxlIHR5cGUgZW51bSBuYW1lIFxuICAgIHB1YmxpYyBydWxlVHlwZU5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBBdmFpbGFibGUgYmVoYXZpb3IgdHlwZXMgZm9yIHRoaXMgcnVsZSBcbiAgICBwdWJsaWMgYmVoYXZpb3JUeXBlczogQmVoYXZpb3JUeXBlQ29kZVtdO1xuIFxuICAgIC8vIEF2YWlsYWJsZSBvYmplY3QgdHlwZXMgZm9yIHRoaXMgcnVsZSBcbiAgICBwdWJsaWMgb2JqZWN0VHlwZXM6IE9iamVjdFR5cGVDb2RlW107XG4gXG4gICAgLy8gSXMgdGhpcyBydWxlIHJlcXVpcmVzIGxpbmUgZHJhd2luZyAodHJ1ZSkgb3IgYXJlYSBkcmF3aW5nIChmYWxzZSkgXG4gICAgcHVibGljIGlzTGluZURyYXdpbmc6IGJvb2xlYW47XG4gXG4gICAgLy8gRHdlbGwgVGltZSBcbiAgICBwdWJsaWMgZHdlbGxUaW1lOiBSdWxlRGVmYXVsdDtcbiBcbiAgICAvLyBOdW1iZXIgb2YgcGVvcGxlIEluIEdyb3VwIChmb3IgZ3JvdXBpbmcgYW5kIG9jY3VwYW5jeSBydWxlcykgXG4gICAgcHVibGljIHBlb3BsZUluR3JvdXA6IFJ1bGVEZWZhdWx0O1xuIFxuICAgIGNvbnN0cnVjdG9yKHJ1bGVUeXBlPzogUnVsZVR5cGVDb2RlLCBydWxlVHlwZU5hbWU/OiBzdHJpbmcsIGJlaGF2aW9yVHlwZXM/OiBCZWhhdmlvclR5cGVDb2RlW10sIG9iamVjdFR5cGVzPzogT2JqZWN0VHlwZUNvZGVbXSwgaXNMaW5lRHJhd2luZz86IGJvb2xlYW4sIGR3ZWxsVGltZT86IFJ1bGVEZWZhdWx0LCBwZW9wbGVJbkdyb3VwPzogUnVsZURlZmF1bHQpIHsgXG4gICAgICAgIHRoaXMucnVsZVR5cGUgPSBydWxlVHlwZTtcbiAgICAgICAgdGhpcy5ydWxlVHlwZU5hbWUgPSBydWxlVHlwZU5hbWU7XG4gICAgICAgIHRoaXMuYmVoYXZpb3JUeXBlcyA9IGJlaGF2aW9yVHlwZXM7XG4gICAgICAgIHRoaXMub2JqZWN0VHlwZXMgPSBvYmplY3RUeXBlcztcbiAgICAgICAgdGhpcy5pc0xpbmVEcmF3aW5nID0gaXNMaW5lRHJhd2luZztcbiAgICAgICAgdGhpcy5kd2VsbFRpbWUgPSBkd2VsbFRpbWU7XG4gICAgICAgIHRoaXMucGVvcGxlSW5Hcm91cCA9IHBlb3BsZUluR3JvdXA7XG4gICAgfVxuXG59XG5cblxuIl19