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
    Rule.prototype.id;
    /** @type {?} */
    Rule.prototype._type;
    /** @type {?} */
    Rule.prototype.createdOn;
    /** @type {?} */
    Rule.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL1J1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBV3BEOzs7OztJQUEwQixnQ0FBVTtJQUFwQzs7SUErREEsQ0FBQztJQUFELFdBQUM7QUFBRCxDQUFDLEFBL0RELENBQTBCLFVBQVUsR0ErRG5DOzs7Ozs7OztJQTVERyx5QkFBeUI7O0lBR3pCLHdCQUF3Qjs7SUFHeEIsb0JBQW9COztJQUdwQiwyQkFBMkI7O0lBRzNCLDBCQUEwQjs7SUFHMUIsc0JBQXVCOztJQUd2QiwwQkFBMEI7O0lBRzFCLDRCQUFzQzs7SUFHdEMsMkJBQXFDOztJQUdyQyx3QkFBa0M7O0lBR2xDLDJCQUFnQzs7SUFHaEMseUJBQXlCOztJQUd6QixpQ0FBaUM7O0lBR2pDLHdCQUErQjs7SUFHL0IsMkJBQTRCOztJQUc1QiwwQkFBMkI7O0lBRzNCLGtCQUFrQjs7SUFHbEIscUJBQXFCOztJQUdyQix5QkFBeUI7O0lBR3pCLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcbmltcG9ydCB7IEJlaGF2aW9yVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9CZWhhdmlvclR5cGVDb2RlJztcbmltcG9ydCB7IE9iamVjdFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvT2JqZWN0VHlwZUNvZGUnO1xuaW1wb3J0IHsgU2V2ZXJpdHlUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1NldmVyaXR5VHlwZUNvZGUnO1xuaW1wb3J0IHsgU2Vuc2l0aXZpdHkgfSBmcm9tICcuLi9jb21tb24vU2Vuc2l0aXZpdHknO1xuaW1wb3J0IHsgUnVsZVBvbHlnb24gfSBmcm9tICcuLi9jb21tb24vUnVsZVBvbHlnb24nO1xuXG4vKiBcbiAgIFJ1bGUgUmVwcmVzZW50cyByZWFsLXRpbWUgYW5hbHl0aWMgcnVsZSwgdGhlIHN0cnVjdHVyZSBpcyBhIHVuaW9uIG9mIGFsbCB0aGUgYXR0cmlidXRlcyB1c2VkIGJ5IGFsbCB0aGUgdHlwZXMgb2ZcbiAgIHJlYWwtdGltZSBydWxlcyAoY3Jvc3NpbmcsIG1vdmluZywgZ3JvdXBpbmcgLi4uKSBoZW5jZSBub3QgYWxsIGF0dHJpYnV0ZXMgYXJlIHVzZWQgZm9yIGV2ZXJ5IHJ1bGUgdHlwZSBcbiovXG5leHBvcnQgY2xhc3MgUnVsZSBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIFNlbnNvciBJZCBcbiAgICBwdWJsaWMgc2Vuc29ySWQ6IHN0cmluZztcbiBcbiAgICAvLyBSdWxlIG5hbWUgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBSdWxlIGRlc2NyaXB0aW9uIFxuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nO1xuIFxuICAgIC8vIFNjaGVkdWxlIElkIFxuICAgIHB1YmxpYyBzY2hlZHVsZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gSW5kaWNhdGUgaWYgdGhlIHJ1bGUgaXMgYWN0aXZlIChkZWZhdWx0KSBvciBpbmFjdGl2ZSBcbiAgICBwdWJsaWMgYWN0aXZlOiBib29sZWFuO1xuIFxuICAgIC8vIFJ1bGUgZXh0ZXJuYWwgaWQgKGhvdyB0aGUgcnVsZSBpcyBpZGVudGlmaWVkIGluIG90aGVyIHN5c3RlbSkgXG4gICAgcHVibGljIGV4dGVybmFsSWQ6IHN0cmluZztcbiBcbiAgICAvLyBSdWxlIGJlaGF2aW9yIHR5cGU6IE1PVklORyB8IENST1NTSU5HIHwgT0NDVVBBTkNZIC4uLiBcbiAgICBwdWJsaWMgYmVoYXZpb3JUeXBlOiBCZWhhdmlvclR5cGVDb2RlO1xuIFxuICAgIC8vIFJ1bGUgb2JqZWN0IHR5cGVzOiBQRVJTT04gfCBWRUhJQ0xFIHwgTU9UT1JDWUNMRSAuLi4gXG4gICAgcHVibGljIG9iamVjdFR5cGVzOiBPYmplY3RUeXBlQ29kZVtdO1xuIFxuICAgIC8vIERlZmF1bHQgc2V2ZXJpdHkgbGV2ZWwgZm9yIHRoaXMgcnVsZTogVU5ERUZJTkVEIHwgTE9XIHwgTUVESVVNIHwgSElHSCB8IENSSVRJQ0FMIFxuICAgIHB1YmxpYyBzZXZlcml0eTogU2V2ZXJpdHlUeXBlQ29kZTtcbiBcbiAgICAvLyBTZW5zaXRpdml0eSAoZm9yIEFub21hbHkpIFxuICAgIHB1YmxpYyBzZW5zaXRpdml0eTogU2Vuc2l0aXZpdHk7XG4gXG4gICAgLy8gRHdlbGwgdGltZSBbc2Vjb25kc10gXG4gICAgcHVibGljIGR3ZWxsVGltZTogbnVtYmVyO1xuIFxuICAgIC8vIE1heCBudW1iZXIgb2YgcGVvcGxlIGluIGdyb3VwIChmb3IgT2NjdXBhbmN5IHJ1bGUpIFxuICAgIHB1YmxpYyBtYXhPYmplY3RzSW5Hcm91cDogbnVtYmVyO1xuIFxuICAgIC8vIExpc3Qgb2YgcG9seWdvbnMgXG4gICAgcHVibGljIHBvbHlnb25zOiBSdWxlUG9seWdvbltdO1xuIFxuICAgIC8vIEZsYWcgdG8gaW5kaWNhdGUgaWYgZXZlbnQgaW1hZ2Ugc2hvdWxkIGJlIGdlbmVyYXRlZCBcbiAgICBwdWJsaWMgY3JlYXRlSW1hZ2U6IGJvb2xlYW47XG4gXG4gICAgLy8gRmxhZyB0byBpbmRpY2F0ZSBpZiBldmVudCBjbGlwIHNob3VsZCBiZSBnZW5lcmF0ZWQgXG4gICAgcHVibGljIGNyZWF0ZUNsaXA6IGJvb2xlYW47XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuXG59XG5cblxuIl19