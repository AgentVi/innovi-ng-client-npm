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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL1J1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBUXBEOzs7OztJQUEwQixnQ0FBVTtJQUFwQzs7SUFrRUEsQ0FBQztJQUFELFdBQUM7QUFBRCxDQUFDLEFBbEVELENBQTBCLFVBQVUsR0FrRW5DOzs7Ozs7OztJQS9ERyx5QkFBeUI7O0lBR3pCLHdCQUF3Qjs7SUFHeEIsb0JBQW9COztJQUdwQiwyQkFBMkI7O0lBRzNCLDBCQUEwQjs7SUFHMUIsc0JBQXVCOztJQUd2QiwwQkFBMEI7O0lBRzFCLDRCQUFzQzs7SUFHdEMsMkJBQXFDOztJQUdyQyx3QkFBa0M7O0lBR2xDLDJCQUFnQzs7SUFHaEMseUJBQXlCOztJQUd6QixpQ0FBaUM7O0lBR2pDLHdCQUErQjs7SUFHL0IsMkJBQTRCOztJQUc1QiwwQkFBMkI7O0lBRzNCLDhCQUE4Qjs7SUFHOUIsa0JBQWtCOztJQUdsQixxQkFBcUI7O0lBR3JCLHlCQUF5Qjs7SUFHekIseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2V2ZXJpdHlUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1NldmVyaXR5VHlwZUNvZGUnO1xuaW1wb3J0IHsgU2Vuc2l0aXZpdHkgfSBmcm9tICcuLi9jb21tb24vU2Vuc2l0aXZpdHknO1xuaW1wb3J0IHsgUnVsZVBvbHlnb24gfSBmcm9tICcuLi9jb21tb24vUnVsZVBvbHlnb24nO1xuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuaW1wb3J0IHsgQmVoYXZpb3JUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0JlaGF2aW9yVHlwZUNvZGUnO1xuaW1wb3J0IHsgT2JqZWN0VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9PYmplY3RUeXBlQ29kZSc7XG5cbi8qIFxuICAgUnVsZSBSZXByZXNlbnRzIHJlYWwtdGltZSBhbmFseXRpYyBydWxlLCB0aGUgc3RydWN0dXJlIGlzIGEgdW5pb24gb2YgYWxsIHRoZSBhdHRyaWJ1dGVzIHVzZWQgYnkgYWxsIHRoZSB0eXBlcyBvZlxuICAgcmVhbC10aW1lIHJ1bGVzIChjcm9zc2luZywgbW92aW5nLCBncm91cGluZyAuLi4pIGhlbmNlIG5vdCBhbGwgYXR0cmlidXRlcyBhcmUgdXNlZCBmb3IgZXZlcnkgcnVsZSB0eXBlIFxuKi9cbmV4cG9ydCBjbGFzcyBSdWxlIGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gQWNjb3VudCBJZCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gU2Vuc29yIElkIFxuICAgIHB1YmxpYyBzZW5zb3JJZDogc3RyaW5nO1xuIFxuICAgIC8vIFJ1bGUgbmFtZSBcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIFJ1bGUgZGVzY3JpcHRpb24gXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gU2NoZWR1bGUgSWQgXG4gICAgcHVibGljIHNjaGVkdWxlSWQ6IHN0cmluZztcbiBcbiAgICAvLyBJbmRpY2F0ZSBpZiB0aGUgcnVsZSBpcyBhY3RpdmUgKGRlZmF1bHQpIG9yIGluYWN0aXZlIFxuICAgIHB1YmxpYyBhY3RpdmU6IGJvb2xlYW47XG4gXG4gICAgLy8gUnVsZSBleHRlcm5hbCBpZCAoaG93IHRoZSBydWxlIGlzIGlkZW50aWZpZWQgaW4gb3RoZXIgc3lzdGVtKSBcbiAgICBwdWJsaWMgZXh0ZXJuYWxJZDogc3RyaW5nO1xuIFxuICAgIC8vIFJ1bGUgYmVoYXZpb3IgdHlwZTogTU9WSU5HIHwgQ1JPU1NJTkcgfCBPQ0NVUEFOQ1kgLi4uIFxuICAgIHB1YmxpYyBiZWhhdmlvclR5cGU6IEJlaGF2aW9yVHlwZUNvZGU7XG4gXG4gICAgLy8gUnVsZSBvYmplY3QgdHlwZXM6IFBFUlNPTiB8IFZFSElDTEUgfCBNT1RPUkNZQ0xFIC4uLiBcbiAgICBwdWJsaWMgb2JqZWN0VHlwZXM6IE9iamVjdFR5cGVDb2RlW107XG4gXG4gICAgLy8gRGVmYXVsdCBzZXZlcml0eSBsZXZlbCBmb3IgdGhpcyBydWxlOiBVTkRFRklORUQgfCBMT1cgfCBNRURJVU0gfCBISUdIIHwgQ1JJVElDQUwgXG4gICAgcHVibGljIHNldmVyaXR5OiBTZXZlcml0eVR5cGVDb2RlO1xuIFxuICAgIC8vIFNlbnNpdGl2aXR5IChmb3IgQW5vbWFseSBydWxlIG9ubHkpIFxuICAgIHB1YmxpYyBzZW5zaXRpdml0eTogU2Vuc2l0aXZpdHk7XG4gXG4gICAgLy8gRHdlbGwgdGltZSBbc2Vjb25kc10gXG4gICAgcHVibGljIGR3ZWxsVGltZTogbnVtYmVyO1xuIFxuICAgIC8vIE1heCBudW1iZXIgb2YgcGVvcGxlIGluIGdyb3VwIChmb3IgT2NjdXBhbmN5IHJ1bGUpIFxuICAgIHB1YmxpYyBtYXhPYmplY3RzSW5Hcm91cDogbnVtYmVyO1xuIFxuICAgIC8vIExpc3Qgb2YgcG9seWdvbnMgXG4gICAgcHVibGljIHBvbHlnb25zOiBSdWxlUG9seWdvbltdO1xuIFxuICAgIC8vIEZsYWcgdG8gaW5kaWNhdGUgaWYgZXZlbnQgaW1hZ2Ugc2hvdWxkIGJlIGdlbmVyYXRlZCBcbiAgICBwdWJsaWMgY3JlYXRlSW1hZ2U6IGJvb2xlYW47XG4gXG4gICAgLy8gRmxhZyB0byBpbmRpY2F0ZSBpZiBldmVudCBjbGlwIHNob3VsZCBiZSBnZW5lcmF0ZWQgXG4gICAgcHVibGljIGNyZWF0ZUNsaXA6IGJvb2xlYW47XG4gXG4gICAgLy8gV2hlbiB3YXMgdGhlIGxhc3QgYW5vbWFseSB0cmFpbmluZyAoZm9yIEFub21hbHkgcnVsZSBvbmx5KSBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGxhc3RUcmFpbmluZ09uOiBudW1iZXI7XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuXG59XG5cblxuIl19