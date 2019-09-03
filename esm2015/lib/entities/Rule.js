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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL1J1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7QUFZcEQsTUFBTSxPQUFPLElBQUssU0FBUSxVQUFVO0NBNERuQzs7O0lBekRHLHlCQUF5Qjs7SUFHekIsd0JBQXdCOztJQUd4QixvQkFBb0I7O0lBR3BCLDJCQUEyQjs7SUFHM0IsMEJBQTBCOztJQUcxQixzQkFBdUI7O0lBR3ZCLDBCQUEwQjs7SUFHMUIsd0JBQThCOztJQUc5Qiw0QkFBc0M7O0lBR3RDLDJCQUFxQzs7SUFHckMsd0JBQWtDOztJQUdsQywyQkFBZ0M7O0lBR2hDLHlCQUF5Qjs7SUFHekIsaUNBQWlDOztJQUdqQyx3QkFBK0I7O0lBRy9CLGtCQUFrQjs7SUFHbEIscUJBQXFCOztJQUdyQix5QkFBeUI7O0lBR3pCLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcbmltcG9ydCB7IFJ1bGVUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1J1bGVUeXBlQ29kZSc7XG5pbXBvcnQgeyBCZWhhdmlvclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQmVoYXZpb3JUeXBlQ29kZSc7XG5pbXBvcnQgeyBPYmplY3RUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL09iamVjdFR5cGVDb2RlJztcbmltcG9ydCB7IFNldmVyaXR5VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZXZlcml0eVR5cGVDb2RlJztcbmltcG9ydCB7IFNlbnNpdGl2aXR5IH0gZnJvbSAnLi4vY29tbW9uL1NlbnNpdGl2aXR5JztcbmltcG9ydCB7IFJ1bGVQb2x5Z29uIH0gZnJvbSAnLi4vY29tbW9uL1J1bGVQb2x5Z29uJztcblxuLyogXG4gICBSdWxlIFJlcHJlc2VudHMgcmVhbC10aW1lIGFuYWx5dGljIHJ1bGUsIHRoZSBzdHJ1Y3R1cmUgaXMgYSB1bmlvbiBvZiBhbGwgdGhlIGF0dHJpYnV0ZXMgdXNlZCBieSBhbGwgdGhlIHR5cGVzIG9mXG4gICByZWFsLXRpbWUgcnVsZXMgKGNyb3NzaW5nLCBtb3ZpbmcsIGdyb3VwaW5nIC4uLikgaGVuY2Ugbm90IGFsbCBhdHRyaWJ1dGVzIGFyZSB1c2VkIGZvciBldmVyeSBydWxlIHR5cGUgXG4qL1xuZXhwb3J0IGNsYXNzIFJ1bGUgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBTZW5zb3IgSWQgXG4gICAgcHVibGljIHNlbnNvcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gUnVsZSBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gUnVsZSBkZXNjcmlwdGlvbiBcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcbiBcbiAgICAvLyBTY2hlZHVsZSBJZCBcbiAgICBwdWJsaWMgc2NoZWR1bGVJZDogc3RyaW5nO1xuIFxuICAgIC8vIEluZGljYXRlIGlmIHRoZSBydWxlIGlzIGFjdGl2ZSAoZGVmYXVsdCkgb3IgaW5hY3RpdmUgXG4gICAgcHVibGljIGFjdGl2ZTogYm9vbGVhbjtcbiBcbiAgICAvLyBSdWxlIGV4dGVybmFsIGlkIChob3cgdGhlIHJ1bGUgaXMgaWRlbnRpZmllZCBpbiBvdGhlciBzeXN0ZW0pIFxuICAgIHB1YmxpYyBleHRlcm5hbElkOiBzdHJpbmc7XG4gXG4gICAgLy8gUnVsZSB0eXBlOiBNT1ZJTkcgfCBDUk9TU0lORyB8IE9DQ1VQQU5DWSAuLi4gXG4gICAgcHVibGljIHJ1bGVUeXBlOiBSdWxlVHlwZUNvZGU7XG4gXG4gICAgLy8gUnVsZSBiZWhhdmlvciB0eXBlOiBNT1ZJTkcgfCBDUk9TU0lORyB8IE9DQ1VQQU5DWSAuLi4gXG4gICAgcHVibGljIGJlaGF2aW9yVHlwZTogQmVoYXZpb3JUeXBlQ29kZTtcbiBcbiAgICAvLyBSdWxlIG9iamVjdCB0eXBlczogUEVSU09OIHwgVkVISUNMRSB8IE1PVE9SQ1lDTEUgLi4uIFxuICAgIHB1YmxpYyBvYmplY3RUeXBlczogT2JqZWN0VHlwZUNvZGVbXTtcbiBcbiAgICAvLyBEZWZhdWx0IHNldmVyaXR5IGxldmVsIGZvciB0aGlzIHJ1bGU6IFVOREVGSU5FRCB8IExPVyB8IE1FRElVTSB8IEhJR0ggfCBDUklUSUNBTCBcbiAgICBwdWJsaWMgc2V2ZXJpdHk6IFNldmVyaXR5VHlwZUNvZGU7XG4gXG4gICAgLy8gU2Vuc2l0aXZpdHkgKGZvciBBbm9tYWx5KSBcbiAgICBwdWJsaWMgc2Vuc2l0aXZpdHk6IFNlbnNpdGl2aXR5O1xuIFxuICAgIC8vIER3ZWxsIHRpbWUgW3NlY29uZHNdIFxuICAgIHB1YmxpYyBkd2VsbFRpbWU6IG51bWJlcjtcbiBcbiAgICAvLyBNYXggbnVtYmVyIG9mIHBlb3BsZSBpbiBncm91cCAoZm9yIE9jY3VwYW5jeSBydWxlKSBcbiAgICBwdWJsaWMgbWF4T2JqZWN0c0luR3JvdXA6IG51bWJlcjtcbiBcbiAgICAvLyBMaXN0IG9mIHBvbHlnb25zIFxuICAgIHB1YmxpYyBwb2x5Z29uczogUnVsZVBvbHlnb25bXTtcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IGRvY3VtZW50IHR5cGUgKHN5c3RlbSBmaWVsZCkgXG4gICAgcHVibGljIF90eXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgY3JlYXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdXBkYXRlZE9uOiBudW1iZXI7XG4gXG5cbn1cblxuXG4iXX0=