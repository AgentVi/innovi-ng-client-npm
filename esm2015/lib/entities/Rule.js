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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL1J1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7QUFPcEQsTUFBTSxPQUFPLElBQUssU0FBUSxVQUFVO0NBK0RuQzs7O0lBNURHLHlCQUF5Qjs7SUFHekIsd0JBQXdCOztJQUd4QixvQkFBb0I7O0lBR3BCLDJCQUEyQjs7SUFHM0IsMEJBQTBCOztJQUcxQixzQkFBdUI7O0lBR3ZCLDBCQUEwQjs7SUFHMUIsNEJBQXNDOztJQUd0QywyQkFBcUM7O0lBR3JDLHdCQUFrQzs7SUFHbEMsMkJBQWdDOztJQUdoQyx5QkFBeUI7O0lBR3pCLGlDQUFpQzs7SUFHakMsd0JBQStCOztJQUcvQiwyQkFBNEI7O0lBRzVCLDBCQUEyQjs7SUFHM0Isa0JBQWtCOztJQUdsQixxQkFBcUI7O0lBR3JCLHlCQUF5Qjs7SUFHekIseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JqZWN0VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9PYmplY3RUeXBlQ29kZSc7XG5pbXBvcnQgeyBTZXZlcml0eVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvU2V2ZXJpdHlUeXBlQ29kZSc7XG5pbXBvcnQgeyBTZW5zaXRpdml0eSB9IGZyb20gJy4uL2NvbW1vbi9TZW5zaXRpdml0eSc7XG5pbXBvcnQgeyBSdWxlUG9seWdvbiB9IGZyb20gJy4uL2NvbW1vbi9SdWxlUG9seWdvbic7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5pbXBvcnQgeyBCZWhhdmlvclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQmVoYXZpb3JUeXBlQ29kZSc7XG5cbi8qIFxuICAgUnVsZSBSZXByZXNlbnRzIHJlYWwtdGltZSBhbmFseXRpYyBydWxlLCB0aGUgc3RydWN0dXJlIGlzIGEgdW5pb24gb2YgYWxsIHRoZSBhdHRyaWJ1dGVzIHVzZWQgYnkgYWxsIHRoZSB0eXBlcyBvZlxuICAgcmVhbC10aW1lIHJ1bGVzIChjcm9zc2luZywgbW92aW5nLCBncm91cGluZyAuLi4pIGhlbmNlIG5vdCBhbGwgYXR0cmlidXRlcyBhcmUgdXNlZCBmb3IgZXZlcnkgcnVsZSB0eXBlIFxuKi9cbmV4cG9ydCBjbGFzcyBSdWxlIGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gQWNjb3VudCBJZCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gU2Vuc29yIElkIFxuICAgIHB1YmxpYyBzZW5zb3JJZDogc3RyaW5nO1xuIFxuICAgIC8vIFJ1bGUgbmFtZSBcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIFJ1bGUgZGVzY3JpcHRpb24gXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gU2NoZWR1bGUgSWQgXG4gICAgcHVibGljIHNjaGVkdWxlSWQ6IHN0cmluZztcbiBcbiAgICAvLyBJbmRpY2F0ZSBpZiB0aGUgcnVsZSBpcyBhY3RpdmUgKGRlZmF1bHQpIG9yIGluYWN0aXZlIFxuICAgIHB1YmxpYyBhY3RpdmU6IGJvb2xlYW47XG4gXG4gICAgLy8gUnVsZSBleHRlcm5hbCBpZCAoaG93IHRoZSBydWxlIGlzIGlkZW50aWZpZWQgaW4gb3RoZXIgc3lzdGVtKSBcbiAgICBwdWJsaWMgZXh0ZXJuYWxJZDogc3RyaW5nO1xuIFxuICAgIC8vIFJ1bGUgYmVoYXZpb3IgdHlwZTogTU9WSU5HIHwgQ1JPU1NJTkcgfCBPQ0NVUEFOQ1kgLi4uIFxuICAgIHB1YmxpYyBiZWhhdmlvclR5cGU6IEJlaGF2aW9yVHlwZUNvZGU7XG4gXG4gICAgLy8gUnVsZSBvYmplY3QgdHlwZXM6IFBFUlNPTiB8IFZFSElDTEUgfCBNT1RPUkNZQ0xFIC4uLiBcbiAgICBwdWJsaWMgb2JqZWN0VHlwZXM6IE9iamVjdFR5cGVDb2RlW107XG4gXG4gICAgLy8gRGVmYXVsdCBzZXZlcml0eSBsZXZlbCBmb3IgdGhpcyBydWxlOiBVTkRFRklORUQgfCBMT1cgfCBNRURJVU0gfCBISUdIIHwgQ1JJVElDQUwgXG4gICAgcHVibGljIHNldmVyaXR5OiBTZXZlcml0eVR5cGVDb2RlO1xuIFxuICAgIC8vIFNlbnNpdGl2aXR5IChmb3IgQW5vbWFseSkgXG4gICAgcHVibGljIHNlbnNpdGl2aXR5OiBTZW5zaXRpdml0eTtcbiBcbiAgICAvLyBEd2VsbCB0aW1lIFtzZWNvbmRzXSBcbiAgICBwdWJsaWMgZHdlbGxUaW1lOiBudW1iZXI7XG4gXG4gICAgLy8gTWF4IG51bWJlciBvZiBwZW9wbGUgaW4gZ3JvdXAgKGZvciBPY2N1cGFuY3kgcnVsZSkgXG4gICAgcHVibGljIG1heE9iamVjdHNJbkdyb3VwOiBudW1iZXI7XG4gXG4gICAgLy8gTGlzdCBvZiBwb2x5Z29ucyBcbiAgICBwdWJsaWMgcG9seWdvbnM6IFJ1bGVQb2x5Z29uW107XG4gXG4gICAgLy8gRmxhZyB0byBpbmRpY2F0ZSBpZiBldmVudCBpbWFnZSBzaG91bGQgYmUgZ2VuZXJhdGVkIFxuICAgIHB1YmxpYyBjcmVhdGVJbWFnZTogYm9vbGVhbjtcbiBcbiAgICAvLyBGbGFnIHRvIGluZGljYXRlIGlmIGV2ZW50IGNsaXAgc2hvdWxkIGJlIGdlbmVyYXRlZCBcbiAgICBwdWJsaWMgY3JlYXRlQ2xpcDogYm9vbGVhbjtcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IGRvY3VtZW50IHR5cGUgKHN5c3RlbSBmaWVsZCkgXG4gICAgcHVibGljIF90eXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgY3JlYXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdXBkYXRlZE9uOiBudW1iZXI7XG4gXG5cbn1cblxuXG4iXX0=