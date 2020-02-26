/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseEntity } from '../entities/BaseEntity';
/*
   Rule Represents real-time analytic rule, the structure is a union of all the attributes used by all the types of
   real-time rules (crossing, moving, grouping ...) hence not all attributes are used for every rule type
*/
export class Rule extends BaseEntity {
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL1J1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7QUFPcEQsTUFBTSxPQUFPLElBQUssU0FBUSxVQUFVO0NBcUVuQzs7O0lBbEVHLHlCQUF5Qjs7SUFHekIsd0JBQXdCOztJQUd4QixvQkFBb0I7O0lBR3BCLDJCQUEyQjs7SUFHM0IsMEJBQTBCOztJQUcxQix1QkFBd0I7O0lBR3hCLHNCQUF1Qjs7SUFHdkIsMEJBQTBCOztJQUcxQiw0QkFBc0M7O0lBR3RDLDJCQUFxQzs7SUFHckMsd0JBQWtDOztJQUdsQywyQkFBZ0M7O0lBR2hDLHlCQUF5Qjs7SUFHekIsaUNBQWlDOztJQUdqQyx3QkFBK0I7O0lBRy9CLDJCQUE0Qjs7SUFHNUIsMEJBQTJCOztJQUczQiw4QkFBOEI7O0lBRzlCLGtCQUFrQjs7SUFHbEIscUJBQXFCOztJQUdyQix5QkFBeUI7O0lBR3pCLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9iamVjdFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvT2JqZWN0VHlwZUNvZGUnO1xuaW1wb3J0IHsgU2V2ZXJpdHlUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1NldmVyaXR5VHlwZUNvZGUnO1xuaW1wb3J0IHsgU2Vuc2l0aXZpdHkgfSBmcm9tICcuLi9jb21tb24vU2Vuc2l0aXZpdHknO1xuaW1wb3J0IHsgUnVsZVBvbHlnb24gfSBmcm9tICcuLi9jb21tb24vUnVsZVBvbHlnb24nO1xuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuaW1wb3J0IHsgQmVoYXZpb3JUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0JlaGF2aW9yVHlwZUNvZGUnO1xuXG4vKiBcbiAgIFJ1bGUgUmVwcmVzZW50cyByZWFsLXRpbWUgYW5hbHl0aWMgcnVsZSwgdGhlIHN0cnVjdHVyZSBpcyBhIHVuaW9uIG9mIGFsbCB0aGUgYXR0cmlidXRlcyB1c2VkIGJ5IGFsbCB0aGUgdHlwZXMgb2ZcbiAgIHJlYWwtdGltZSBydWxlcyAoY3Jvc3NpbmcsIG1vdmluZywgZ3JvdXBpbmcgLi4uKSBoZW5jZSBub3QgYWxsIGF0dHJpYnV0ZXMgYXJlIHVzZWQgZm9yIGV2ZXJ5IHJ1bGUgdHlwZSBcbiovXG5leHBvcnQgY2xhc3MgUnVsZSBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIFNlbnNvciBJZCBcbiAgICBwdWJsaWMgc2Vuc29ySWQ6IHN0cmluZztcbiBcbiAgICAvLyBSdWxlIG5hbWUgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBSdWxlIGRlc2NyaXB0aW9uIFxuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nO1xuIFxuICAgIC8vIFNjaGVkdWxlIElkIFxuICAgIHB1YmxpYyBzY2hlZHVsZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gSW5kaWNhdGUgaWYgdGhlIHJ1bGUgaXMgZXhwbGljaXRseSBlbmFibGVkIG9yIGRpc2FibGVkIChieSB1c2VyIG9yIGJ5IEFQSSBjYWxsIC0gZS5nLiBhcm0vZGlzYXJtKSBcbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcbiBcbiAgICAvLyBJbmRpY2F0ZSBpZiB0aGUgcnVsZSBpcyBhY3RpdmUgb3IgaW5hY3RpdmUgZHVlIHRvIGl0J3Mgc2NoZWR1bGUgLyBjYWxlbmRhciB0aW1lIHNsb3RzIFxuICAgIHB1YmxpYyBhY3RpdmU6IGJvb2xlYW47XG4gXG4gICAgLy8gUnVsZSBleHRlcm5hbCBpZCAoaG93IHRoZSBydWxlIGlzIGlkZW50aWZpZWQgaW4gb3RoZXIgc3lzdGVtKSBcbiAgICBwdWJsaWMgZXh0ZXJuYWxJZDogc3RyaW5nO1xuIFxuICAgIC8vIFJ1bGUgYmVoYXZpb3IgdHlwZTogTU9WSU5HIHwgQ1JPU1NJTkcgfCBPQ0NVUEFOQ1kgLi4uIFxuICAgIHB1YmxpYyBiZWhhdmlvclR5cGU6IEJlaGF2aW9yVHlwZUNvZGU7XG4gXG4gICAgLy8gUnVsZSBvYmplY3QgdHlwZXM6IFBFUlNPTiB8IFZFSElDTEUgfCBNT1RPUkNZQ0xFIC4uLiBcbiAgICBwdWJsaWMgb2JqZWN0VHlwZXM6IE9iamVjdFR5cGVDb2RlW107XG4gXG4gICAgLy8gRGVmYXVsdCBzZXZlcml0eSBsZXZlbCBmb3IgdGhpcyBydWxlOiBVTkRFRklORUQgfCBMT1cgfCBNRURJVU0gfCBISUdIIHwgQ1JJVElDQUwgXG4gICAgcHVibGljIHNldmVyaXR5OiBTZXZlcml0eVR5cGVDb2RlO1xuIFxuICAgIC8vIFNlbnNpdGl2aXR5IChmb3IgQW5vbWFseSBydWxlIG9ubHkpIFxuICAgIHB1YmxpYyBzZW5zaXRpdml0eTogU2Vuc2l0aXZpdHk7XG4gXG4gICAgLy8gRHdlbGwgdGltZSBbc2Vjb25kc10gXG4gICAgcHVibGljIGR3ZWxsVGltZTogbnVtYmVyO1xuIFxuICAgIC8vIE1heCBudW1iZXIgb2YgcGVvcGxlIGluIGdyb3VwIChmb3IgT2NjdXBhbmN5IHJ1bGUpIFxuICAgIHB1YmxpYyBtYXhPYmplY3RzSW5Hcm91cDogbnVtYmVyO1xuIFxuICAgIC8vIExpc3Qgb2YgcG9seWdvbnMgXG4gICAgcHVibGljIHBvbHlnb25zOiBSdWxlUG9seWdvbltdO1xuIFxuICAgIC8vIEZsYWcgdG8gaW5kaWNhdGUgaWYgZXZlbnQgaW1hZ2Ugc2hvdWxkIGJlIGdlbmVyYXRlZCBcbiAgICBwdWJsaWMgY3JlYXRlSW1hZ2U6IGJvb2xlYW47XG4gXG4gICAgLy8gRmxhZyB0byBpbmRpY2F0ZSBpZiBldmVudCBjbGlwIHNob3VsZCBiZSBnZW5lcmF0ZWQgXG4gICAgcHVibGljIGNyZWF0ZUNsaXA6IGJvb2xlYW47XG4gXG4gICAgLy8gV2hlbiB3YXMgdGhlIGxhc3QgYW5vbWFseSB0cmFpbmluZyAoZm9yIEFub21hbHkgcnVsZSBvbmx5KSBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGxhc3RUcmFpbmluZ09uOiBudW1iZXI7XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuXG59XG5cblxuIl19