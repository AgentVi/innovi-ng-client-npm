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
    Rule.prototype.ruleType;
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
    Rule.prototype.id;
    /** @type {?} */
    Rule.prototype._type;
    /** @type {?} */
    Rule.prototype.createdOn;
    /** @type {?} */
    Rule.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL1J1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBVXBEOzs7OztJQUEwQixnQ0FBVTtJQUFwQzs7SUE0REEsQ0FBQztJQUFELFdBQUM7QUFBRCxDQUFDLEFBNURELENBQTBCLFVBQVUsR0E0RG5DOzs7Ozs7OztJQXpERyx5QkFBeUI7O0lBR3pCLHdCQUF3Qjs7SUFHeEIsb0JBQW9COztJQUdwQiwyQkFBMkI7O0lBRzNCLDBCQUEwQjs7SUFHMUIsc0JBQXVCOztJQUd2QiwwQkFBMEI7O0lBRzFCLHdCQUE4Qjs7SUFHOUIsNEJBQXNDOztJQUd0QywyQkFBcUM7O0lBR3JDLHdCQUFrQzs7SUFHbEMsMkJBQWdDOztJQUdoQyx5QkFBeUI7O0lBR3pCLGlDQUFpQzs7SUFHakMsd0JBQStCOztJQUcvQixrQkFBa0I7O0lBR2xCLHFCQUFxQjs7SUFHckIseUJBQXlCOztJQUd6Qix5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZW5zaXRpdml0eSB9IGZyb20gJy4uL2NvbW1vbi9TZW5zaXRpdml0eSc7XG5pbXBvcnQgeyBSdWxlUG9seWdvbiB9IGZyb20gJy4uL2NvbW1vbi9SdWxlUG9seWdvbic7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5pbXBvcnQgeyBSdWxlVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9SdWxlVHlwZUNvZGUnO1xuaW1wb3J0IHsgQmVoYXZpb3JUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0JlaGF2aW9yVHlwZUNvZGUnO1xuaW1wb3J0IHsgT2JqZWN0VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9PYmplY3RUeXBlQ29kZSc7XG5pbXBvcnQgeyBTZXZlcml0eVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvU2V2ZXJpdHlUeXBlQ29kZSc7XG5cbi8qIFxuICAgUnVsZSBSZXByZXNlbnRzIHJlYWwtdGltZSBhbmFseXRpYyBydWxlLCB0aGUgc3RydWN0dXJlIGlzIGEgdW5pb24gb2YgYWxsIHRoZSBhdHRyaWJ1dGVzIHVzZWQgYnkgYWxsIHRoZSB0eXBlcyBvZlxuICAgcmVhbC10aW1lIHJ1bGVzIChjcm9zc2luZywgbW92aW5nLCBncm91cGluZyAuLi4pIGhlbmNlIG5vdCBhbGwgYXR0cmlidXRlcyBhcmUgdXNlZCBmb3IgZXZlcnkgcnVsZSB0eXBlIFxuKi9cbmV4cG9ydCBjbGFzcyBSdWxlIGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gQWNjb3VudCBJZCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gU2Vuc29yIElkIFxuICAgIHB1YmxpYyBzZW5zb3JJZDogc3RyaW5nO1xuIFxuICAgIC8vIFJ1bGUgbmFtZSBcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIFJ1bGUgZGVzY3JpcHRpb24gXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gU2NoZWR1bGUgSWQgXG4gICAgcHVibGljIHNjaGVkdWxlSWQ6IHN0cmluZztcbiBcbiAgICAvLyBJbmRpY2F0ZSBpZiB0aGUgcnVsZSBpcyBhY3RpdmUgKGRlZmF1bHQpIG9yIGluYWN0aXZlIFxuICAgIHB1YmxpYyBhY3RpdmU6IGJvb2xlYW47XG4gXG4gICAgLy8gUnVsZSBleHRlcm5hbCBpZCAoaG93IHRoZSBydWxlIGlzIGlkZW50aWZpZWQgaW4gb3RoZXIgc3lzdGVtKSBcbiAgICBwdWJsaWMgZXh0ZXJuYWxJZDogc3RyaW5nO1xuIFxuICAgIC8vIFJ1bGUgdHlwZTogTU9WSU5HIHwgQ1JPU1NJTkcgfCBPQ0NVUEFOQ1kgLi4uIFxuICAgIHB1YmxpYyBydWxlVHlwZTogUnVsZVR5cGVDb2RlO1xuIFxuICAgIC8vIFJ1bGUgYmVoYXZpb3IgdHlwZTogTU9WSU5HIHwgQ1JPU1NJTkcgfCBPQ0NVUEFOQ1kgLi4uIFxuICAgIHB1YmxpYyBiZWhhdmlvclR5cGU6IEJlaGF2aW9yVHlwZUNvZGU7XG4gXG4gICAgLy8gUnVsZSBvYmplY3QgdHlwZXM6IFBFUlNPTiB8IFZFSElDTEUgfCBNT1RPUkNZQ0xFIC4uLiBcbiAgICBwdWJsaWMgb2JqZWN0VHlwZXM6IE9iamVjdFR5cGVDb2RlW107XG4gXG4gICAgLy8gRGVmYXVsdCBzZXZlcml0eSBsZXZlbCBmb3IgdGhpcyBydWxlOiBVTkRFRklORUQgfCBMT1cgfCBNRURJVU0gfCBISUdIIHwgQ1JJVElDQUwgXG4gICAgcHVibGljIHNldmVyaXR5OiBTZXZlcml0eVR5cGVDb2RlO1xuIFxuICAgIC8vIFNlbnNpdGl2aXR5IChmb3IgQW5vbWFseSkgXG4gICAgcHVibGljIHNlbnNpdGl2aXR5OiBTZW5zaXRpdml0eTtcbiBcbiAgICAvLyBEd2VsbCB0aW1lIFtzZWNvbmRzXSBcbiAgICBwdWJsaWMgZHdlbGxUaW1lOiBudW1iZXI7XG4gXG4gICAgLy8gTWF4IG51bWJlciBvZiBwZW9wbGUgaW4gZ3JvdXAgKGZvciBPY2N1cGFuY3kgcnVsZSkgXG4gICAgcHVibGljIG1heE9iamVjdHNJbkdyb3VwOiBudW1iZXI7XG4gXG4gICAgLy8gTGlzdCBvZiBwb2x5Z29ucyBcbiAgICBwdWJsaWMgcG9seWdvbnM6IFJ1bGVQb2x5Z29uW107XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuXG59XG5cblxuIl19