/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   Rule Represents real-time analytic rule, the structure is a union of all the attributes used by all the types of
   real-time rules (crossing, moving, grouping ...) hence not all attributes are used for every rule type
*/
var /*
   Rule Represents real-time analytic rule, the structure is a union of all the attributes used by all the types of
   real-time rules (crossing, moving, grouping ...) hence not all attributes are used for every rule type
*/
Rule = /** @class */ (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Rule;
}(BaseEntity));
/*
   Rule Represents real-time analytic rule, the structure is a union of all the attributes used by all the types of
   real-time rules (crossing, moving, grouping ...) hence not all attributes are used for every rule type
*/
export { Rule };
if (false) {
    /** @type {?} */
    Rule.prototype.accountId;
    /** @type {?} */
    Rule.prototype.sensorId;
    /** @type {?} */
    Rule.prototype.name;
    /** @type {?} */
    Rule.prototype.description;
    /** @type {?} */
    Rule.prototype.scheduleId;
    /** @type {?} */
    Rule.prototype.enabled;
    /** @type {?} */
    Rule.prototype.active;
    /** @type {?} */
    Rule.prototype.externalId;
    /** @type {?} */
    Rule.prototype.behaviorType;
    /** @type {?} */
    Rule.prototype.objectTypes;
    /** @type {?} */
    Rule.prototype.severity;
    /** @type {?} */
    Rule.prototype.sensitivity;
    /** @type {?} */
    Rule.prototype.dwellTime;
    /** @type {?} */
    Rule.prototype.maxObjectsInGroup;
    /** @type {?} */
    Rule.prototype.polygons;
    /** @type {?} */
    Rule.prototype.createImage;
    /** @type {?} */
    Rule.prototype.createClip;
    /** @type {?} */
    Rule.prototype.lastTrainingOn;
    /** @type {?} */
    Rule.prototype.id;
    /** @type {?} */
    Rule.prototype._type;
    /** @type {?} */
    Rule.prototype.createdOn;
    /** @type {?} */
    Rule.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL1J1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBU3BEOzs7OztJQUEwQixnQ0FBVTtJQUFwQzs7SUFxRUEsQ0FBQztJQUFELFdBQUM7QUFBRCxDQUFDLEFBckVELENBQTBCLFVBQVUsR0FxRW5DOzs7Ozs7OztJQWxFRyx5QkFBeUI7O0lBR3pCLHdCQUF3Qjs7SUFHeEIsb0JBQW9COztJQUdwQiwyQkFBMkI7O0lBRzNCLDBCQUEwQjs7SUFHMUIsdUJBQXdCOztJQUd4QixzQkFBdUI7O0lBR3ZCLDBCQUEwQjs7SUFHMUIsNEJBQXNDOztJQUd0QywyQkFBcUM7O0lBR3JDLHdCQUFrQzs7SUFHbEMsMkJBQWdDOztJQUdoQyx5QkFBeUI7O0lBR3pCLGlDQUFpQzs7SUFHakMsd0JBQStCOztJQUcvQiwyQkFBNEI7O0lBRzVCLDBCQUEyQjs7SUFHM0IsOEJBQThCOztJQUc5QixrQkFBa0I7O0lBR2xCLHFCQUFxQjs7SUFHckIseUJBQXlCOztJQUd6Qix5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZW5zaXRpdml0eSB9IGZyb20gJy4uL2NvbW1vbi9TZW5zaXRpdml0eSc7XG5pbXBvcnQgeyBSdWxlUG9seWdvbiB9IGZyb20gJy4uL2NvbW1vbi9SdWxlUG9seWdvbic7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5pbXBvcnQgeyBCZWhhdmlvclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQmVoYXZpb3JUeXBlQ29kZSc7XG5pbXBvcnQgeyBPYmplY3RUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL09iamVjdFR5cGVDb2RlJztcbmltcG9ydCB7IFNldmVyaXR5VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZXZlcml0eVR5cGVDb2RlJztcblxuLyogXG4gICBSdWxlIFJlcHJlc2VudHMgcmVhbC10aW1lIGFuYWx5dGljIHJ1bGUsIHRoZSBzdHJ1Y3R1cmUgaXMgYSB1bmlvbiBvZiBhbGwgdGhlIGF0dHJpYnV0ZXMgdXNlZCBieSBhbGwgdGhlIHR5cGVzIG9mXG4gICByZWFsLXRpbWUgcnVsZXMgKGNyb3NzaW5nLCBtb3ZpbmcsIGdyb3VwaW5nIC4uLikgaGVuY2Ugbm90IGFsbCBhdHRyaWJ1dGVzIGFyZSB1c2VkIGZvciBldmVyeSBydWxlIHR5cGUgXG4qL1xuZXhwb3J0IGNsYXNzIFJ1bGUgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBTZW5zb3IgSWQgXG4gICAgcHVibGljIHNlbnNvcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gUnVsZSBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gUnVsZSBkZXNjcmlwdGlvbiBcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcbiBcbiAgICAvLyBTY2hlZHVsZSBJZCBcbiAgICBwdWJsaWMgc2NoZWR1bGVJZDogc3RyaW5nO1xuIFxuICAgIC8vIEluZGljYXRlIGlmIHRoZSBydWxlIGlzIGV4cGxpY2l0bHkgZW5hYmxlZCBvciBkaXNhYmxlZCAoYnkgdXNlciBvciBieSBBUEkgY2FsbCAtIGUuZy4gYXJtL2Rpc2FybSkgXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XG4gXG4gICAgLy8gSW5kaWNhdGUgaWYgdGhlIHJ1bGUgaXMgYWN0aXZlIG9yIGluYWN0aXZlIGR1ZSB0byBpdCdzIHNjaGVkdWxlIC8gY2FsZW5kYXIgdGltZSBzbG90cyBcbiAgICBwdWJsaWMgYWN0aXZlOiBib29sZWFuO1xuIFxuICAgIC8vIFJ1bGUgZXh0ZXJuYWwgaWQgKGhvdyB0aGUgcnVsZSBpcyBpZGVudGlmaWVkIGluIG90aGVyIHN5c3RlbSkgXG4gICAgcHVibGljIGV4dGVybmFsSWQ6IHN0cmluZztcbiBcbiAgICAvLyBSdWxlIGJlaGF2aW9yIHR5cGU6IE1PVklORyB8IENST1NTSU5HIHwgT0NDVVBBTkNZIC4uLiBcbiAgICBwdWJsaWMgYmVoYXZpb3JUeXBlOiBCZWhhdmlvclR5cGVDb2RlO1xuIFxuICAgIC8vIFJ1bGUgb2JqZWN0IHR5cGVzOiBQRVJTT04gfCBWRUhJQ0xFIHwgTU9UT1JDWUNMRSAuLi4gXG4gICAgcHVibGljIG9iamVjdFR5cGVzOiBPYmplY3RUeXBlQ29kZVtdO1xuIFxuICAgIC8vIERlZmF1bHQgc2V2ZXJpdHkgbGV2ZWwgZm9yIHRoaXMgcnVsZTogVU5ERUZJTkVEIHwgTE9XIHwgTUVESVVNIHwgSElHSCB8IENSSVRJQ0FMIFxuICAgIHB1YmxpYyBzZXZlcml0eTogU2V2ZXJpdHlUeXBlQ29kZTtcbiBcbiAgICAvLyBTZW5zaXRpdml0eSAoZm9yIEFub21hbHkgcnVsZSBvbmx5KSBcbiAgICBwdWJsaWMgc2Vuc2l0aXZpdHk6IFNlbnNpdGl2aXR5O1xuIFxuICAgIC8vIER3ZWxsIHRpbWUgW3NlY29uZHNdIFxuICAgIHB1YmxpYyBkd2VsbFRpbWU6IG51bWJlcjtcbiBcbiAgICAvLyBNYXggbnVtYmVyIG9mIHBlb3BsZSBpbiBncm91cCAoZm9yIE9jY3VwYW5jeSBydWxlKSBcbiAgICBwdWJsaWMgbWF4T2JqZWN0c0luR3JvdXA6IG51bWJlcjtcbiBcbiAgICAvLyBMaXN0IG9mIHBvbHlnb25zIFxuICAgIHB1YmxpYyBwb2x5Z29uczogUnVsZVBvbHlnb25bXTtcbiBcbiAgICAvLyBGbGFnIHRvIGluZGljYXRlIGlmIGV2ZW50IGltYWdlIHNob3VsZCBiZSBnZW5lcmF0ZWQgXG4gICAgcHVibGljIGNyZWF0ZUltYWdlOiBib29sZWFuO1xuIFxuICAgIC8vIEZsYWcgdG8gaW5kaWNhdGUgaWYgZXZlbnQgY2xpcCBzaG91bGQgYmUgZ2VuZXJhdGVkIFxuICAgIHB1YmxpYyBjcmVhdGVDbGlwOiBib29sZWFuO1xuIFxuICAgIC8vIFdoZW4gd2FzIHRoZSBsYXN0IGFub21hbHkgdHJhaW5pbmcgKGZvciBBbm9tYWx5IHJ1bGUgb25seSkgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBsYXN0VHJhaW5pbmdPbjogbnVtYmVyO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgZG9jdW1lbnQgdHlwZSAoc3lzdGVtIGZpZWxkKSBcbiAgICBwdWJsaWMgX3R5cGU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcblxufVxuXG5cbiJdfQ==