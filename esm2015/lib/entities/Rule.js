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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL1J1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7QUFTcEQsTUFBTSxPQUFPLElBQUssU0FBUSxVQUFVO0NBa0VuQzs7O0lBL0RHLHlCQUF5Qjs7SUFHekIsd0JBQXdCOztJQUd4QixvQkFBb0I7O0lBR3BCLDJCQUEyQjs7SUFHM0IsMEJBQTBCOztJQUcxQixzQkFBdUI7O0lBR3ZCLDBCQUEwQjs7SUFHMUIsNEJBQXNDOztJQUd0QywyQkFBcUM7O0lBR3JDLHdCQUFrQzs7SUFHbEMsMkJBQWdDOztJQUdoQyx5QkFBeUI7O0lBR3pCLGlDQUFpQzs7SUFHakMsd0JBQStCOztJQUcvQiwyQkFBNEI7O0lBRzVCLDBCQUEyQjs7SUFHM0IsOEJBQThCOztJQUc5QixrQkFBa0I7O0lBR2xCLHFCQUFxQjs7SUFHckIseUJBQXlCOztJQUd6Qix5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZW5zaXRpdml0eSB9IGZyb20gJy4uL2NvbW1vbi9TZW5zaXRpdml0eSc7XG5pbXBvcnQgeyBSdWxlUG9seWdvbiB9IGZyb20gJy4uL2NvbW1vbi9SdWxlUG9seWdvbic7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5pbXBvcnQgeyBCZWhhdmlvclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQmVoYXZpb3JUeXBlQ29kZSc7XG5pbXBvcnQgeyBPYmplY3RUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL09iamVjdFR5cGVDb2RlJztcbmltcG9ydCB7IFNldmVyaXR5VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZXZlcml0eVR5cGVDb2RlJztcblxuLyogXG4gICBSdWxlIFJlcHJlc2VudHMgcmVhbC10aW1lIGFuYWx5dGljIHJ1bGUsIHRoZSBzdHJ1Y3R1cmUgaXMgYSB1bmlvbiBvZiBhbGwgdGhlIGF0dHJpYnV0ZXMgdXNlZCBieSBhbGwgdGhlIHR5cGVzIG9mXG4gICByZWFsLXRpbWUgcnVsZXMgKGNyb3NzaW5nLCBtb3ZpbmcsIGdyb3VwaW5nIC4uLikgaGVuY2Ugbm90IGFsbCBhdHRyaWJ1dGVzIGFyZSB1c2VkIGZvciBldmVyeSBydWxlIHR5cGUgXG4qL1xuZXhwb3J0IGNsYXNzIFJ1bGUgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBTZW5zb3IgSWQgXG4gICAgcHVibGljIHNlbnNvcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gUnVsZSBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gUnVsZSBkZXNjcmlwdGlvbiBcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcbiBcbiAgICAvLyBTY2hlZHVsZSBJZCBcbiAgICBwdWJsaWMgc2NoZWR1bGVJZDogc3RyaW5nO1xuIFxuICAgIC8vIEluZGljYXRlIGlmIHRoZSBydWxlIGlzIGFjdGl2ZSAoZGVmYXVsdCkgb3IgaW5hY3RpdmUgXG4gICAgcHVibGljIGFjdGl2ZTogYm9vbGVhbjtcbiBcbiAgICAvLyBSdWxlIGV4dGVybmFsIGlkIChob3cgdGhlIHJ1bGUgaXMgaWRlbnRpZmllZCBpbiBvdGhlciBzeXN0ZW0pIFxuICAgIHB1YmxpYyBleHRlcm5hbElkOiBzdHJpbmc7XG4gXG4gICAgLy8gUnVsZSBiZWhhdmlvciB0eXBlOiBNT1ZJTkcgfCBDUk9TU0lORyB8IE9DQ1VQQU5DWSAuLi4gXG4gICAgcHVibGljIGJlaGF2aW9yVHlwZTogQmVoYXZpb3JUeXBlQ29kZTtcbiBcbiAgICAvLyBSdWxlIG9iamVjdCB0eXBlczogUEVSU09OIHwgVkVISUNMRSB8IE1PVE9SQ1lDTEUgLi4uIFxuICAgIHB1YmxpYyBvYmplY3RUeXBlczogT2JqZWN0VHlwZUNvZGVbXTtcbiBcbiAgICAvLyBEZWZhdWx0IHNldmVyaXR5IGxldmVsIGZvciB0aGlzIHJ1bGU6IFVOREVGSU5FRCB8IExPVyB8IE1FRElVTSB8IEhJR0ggfCBDUklUSUNBTCBcbiAgICBwdWJsaWMgc2V2ZXJpdHk6IFNldmVyaXR5VHlwZUNvZGU7XG4gXG4gICAgLy8gU2Vuc2l0aXZpdHkgKGZvciBBbm9tYWx5IHJ1bGUgb25seSkgXG4gICAgcHVibGljIHNlbnNpdGl2aXR5OiBTZW5zaXRpdml0eTtcbiBcbiAgICAvLyBEd2VsbCB0aW1lIFtzZWNvbmRzXSBcbiAgICBwdWJsaWMgZHdlbGxUaW1lOiBudW1iZXI7XG4gXG4gICAgLy8gTWF4IG51bWJlciBvZiBwZW9wbGUgaW4gZ3JvdXAgKGZvciBPY2N1cGFuY3kgcnVsZSkgXG4gICAgcHVibGljIG1heE9iamVjdHNJbkdyb3VwOiBudW1iZXI7XG4gXG4gICAgLy8gTGlzdCBvZiBwb2x5Z29ucyBcbiAgICBwdWJsaWMgcG9seWdvbnM6IFJ1bGVQb2x5Z29uW107XG4gXG4gICAgLy8gRmxhZyB0byBpbmRpY2F0ZSBpZiBldmVudCBpbWFnZSBzaG91bGQgYmUgZ2VuZXJhdGVkIFxuICAgIHB1YmxpYyBjcmVhdGVJbWFnZTogYm9vbGVhbjtcbiBcbiAgICAvLyBGbGFnIHRvIGluZGljYXRlIGlmIGV2ZW50IGNsaXAgc2hvdWxkIGJlIGdlbmVyYXRlZCBcbiAgICBwdWJsaWMgY3JlYXRlQ2xpcDogYm9vbGVhbjtcbiBcbiAgICAvLyBXaGVuIHdhcyB0aGUgbGFzdCBhbm9tYWx5IHRyYWluaW5nIChmb3IgQW5vbWFseSBydWxlIG9ubHkpIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgbGFzdFRyYWluaW5nT246IG51bWJlcjtcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IGRvY3VtZW50IHR5cGUgKHN5c3RlbSBmaWVsZCkgXG4gICAgcHVibGljIF90eXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgY3JlYXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdXBkYXRlZE9uOiBudW1iZXI7XG4gXG5cbn1cblxuXG4iXX0=