/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   Detection event type
*/
var /*
   Detection event type
*/
Event = /** @class */ (function (_super) {
    tslib_1.__extends(Event, _super);
    function Event() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Event;
}(BaseEntity));
/*
   Detection event type
*/
export { Event };
if (false) {
    /** @type {?} */
    Event.prototype.sensorId;
    /** @type {?} */
    Event.prototype.accountId;
    /** @type {?} */
    Event.prototype.eventTime;
    /** @type {?} */
    Event.prototype.ruleId;
    /** @type {?} */
    Event.prototype.description;
    /** @type {?} */
    Event.prototype.objectType;
    /** @type {?} */
    Event.prototype.behaviorType;
    /** @type {?} */
    Event.prototype.status;
    /** @type {?} */
    Event.prototype.geoLocation;
    /** @type {?} */
    Event.prototype.imagePath;
    /** @type {?} */
    Event.prototype.clipPath;
    /** @type {?} */
    Event.prototype.severity;
    /** @type {?} */
    Event.prototype.eventImageTime;
    /** @type {?} */
    Event.prototype.eventObjects;
    /** @type {?} */
    Event.prototype.boundingBoxes;
    /** @type {?} */
    Event.prototype.id;
    /** @type {?} */
    Event.prototype._type;
    /** @type {?} */
    Event.prototype.createdOn;
    /** @type {?} */
    Event.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9FdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQVFwRDs7OztJQUEyQixpQ0FBVTtJQUFyQzs7SUE0REEsQ0FBQztJQUFELFlBQUM7QUFBRCxDQUFDLEFBNURELENBQTJCLFVBQVUsR0E0RHBDOzs7Ozs7O0lBekRHLHlCQUF3Qjs7SUFHeEIsMEJBQXlCOztJQUd6QiwwQkFBeUI7O0lBR3pCLHVCQUFzQjs7SUFHdEIsNEJBQTJCOztJQUczQiwyQkFBa0M7O0lBR2xDLDZCQUFzQzs7SUFHdEMsdUJBQStCOztJQUcvQiw0QkFBK0I7O0lBRy9CLDBCQUF5Qjs7SUFHekIseUJBQXdCOztJQUd4Qix5QkFBa0M7O0lBR2xDLCtCQUE4Qjs7SUFHOUIsNkJBQWtDOztJQUdsQyw4QkFBb0M7O0lBR3BDLG1CQUFrQjs7SUFHbEIsc0JBQXFCOztJQUdyQiwwQkFBeUI7O0lBR3pCLDBCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICcuLi9jb21tb24vQ29vcmRpbmF0ZSc7XG5pbXBvcnQgeyBTZXZlcml0eVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvU2V2ZXJpdHlUeXBlQ29kZSc7XG5pbXBvcnQgeyBPYmplY3RJbmZvIH0gZnJvbSAnLi4vY29tbW9uL09iamVjdEluZm8nO1xuaW1wb3J0IHsgQm91bmRpbmdCb3ggfSBmcm9tICcuLi9jb21tb24vQm91bmRpbmdCb3gnO1xuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuaW1wb3J0IHsgT2JqZWN0VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9PYmplY3RUeXBlQ29kZSc7XG5pbXBvcnQgeyBCZWhhdmlvclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQmVoYXZpb3JUeXBlQ29kZSc7XG5pbXBvcnQgeyBFdmVudFN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9FdmVudFN0YXR1c0NvZGUnO1xuXG4vKiBcbiAgIERldGVjdGlvbiBldmVudCB0eXBlIFxuKi9cbmV4cG9ydCBjbGFzcyBFdmVudCBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIFNlbnNvciBJZCBcbiAgICBwdWJsaWMgc2Vuc29ySWQ6IHN0cmluZztcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBldmVudCB3YXMgZGV0ZWN0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBldmVudFRpbWU6IG51bWJlcjtcbiBcbiAgICAvLyBSdWxlIElkIFxuICAgIHB1YmxpYyBydWxlSWQ6IHN0cmluZztcbiBcbiAgICAvLyBFdmVudCBkZXNjcmlwdGlvbiAoZnJlZSB0ZXh0IGFzIHByb3ZpZGVkIGJ5IHRoZSBldmVudCBzb3VyY2UgLSBldmVudCBlbmdpbmUsIGFub21hbHksIGN1c3RvbSwgRlIsIExQUiAuLi4pIFxuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nO1xuIFxuICAgIC8vIERldGVjdGVkIGJlaGF2aW9yIHR5cGUgKFVOS05PV04gfCBDUk9TU0lORyB8IE1PVklORyB8IEdST1VQSU5HIHwgT0NDVVBBTkNZIC4uLikgXG4gICAgcHVibGljIG9iamVjdFR5cGU6IE9iamVjdFR5cGVDb2RlO1xuIFxuICAgIC8vIERldGVjdGVkIG9iamVjdCB0eXBlIChVTktOT1dOIHwgUEVSU09OIHwgVkVISUNMRSB8IEJVUyB8IFRSQUNLIC4uLikgXG4gICAgcHVibGljIGJlaGF2aW9yVHlwZTogQmVoYXZpb3JUeXBlQ29kZTtcbiBcbiAgICAvLyBWYWxpZGF0aW9uIHN0YXR1cyBmb3IgZXZlbnQgcHJvY2Vzc2luZyB3b3JrZmxvdzogTkVXIHwgT1BFTiB8IENMT1NFIHwgSVJSRUxFVkFOVCB8IEZBTFNFIFxuICAgIHB1YmxpYyBzdGF0dXM6IEV2ZW50U3RhdHVzQ29kZTtcbiBcbiAgICAvLyBFdmVudCBnZW8gbG9jYXRpb24gKFdHUy04NCBjb29yZGluYXRlIHN5c3RlbSkuIFRoaXMgZmllbGQgaXMgYXBwbGljYWJsZSBvbmx5IGlmIHRoZSBzZW5zb3IgaXMgZ2VvLXJlZmVyZW5jZWQuIFxuICAgIHB1YmxpYyBnZW9Mb2NhdGlvbjogQ29vcmRpbmF0ZTtcbiBcbiAgICAvLyBFdmVudCBpbWFnZSBwYXRoIFxuICAgIHB1YmxpYyBpbWFnZVBhdGg6IHN0cmluZztcbiBcbiAgICAvLyBFdmVudCBjbGlwIHBhdGggXG4gICAgcHVibGljIGNsaXBQYXRoOiBzdHJpbmc7XG4gXG4gICAgLy8gRXZlbnQgc2V2ZXJpdHkgbGV2ZWw6IFVOREVGSU5FRCB8IExPVyB8IE1FRElVTSB8IEhJR0ggfCBDUklUSUNBTCBcbiAgICBwdWJsaWMgc2V2ZXJpdHk6IFNldmVyaXR5VHlwZUNvZGU7XG4gXG4gICAgLy8gRXZlbnQgaW1hZ2UgdGltZSBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGV2ZW50SW1hZ2VUaW1lOiBudW1iZXI7XG4gXG4gICAgLy8gRGV0ZWN0ZWQgb2JqZWN0IGluZm9ybWF0aW9uIFxuICAgIHB1YmxpYyBldmVudE9iamVjdHM6IE9iamVjdEluZm9bXTtcbiBcbiAgICAvLyBEZXRlY3RlZCBvYmplY3QocykgYm91bmRpbmcgYm94KGVzKSBcbiAgICBwdWJsaWMgYm91bmRpbmdCb3hlczogQm91bmRpbmdCb3hbXTtcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IGRvY3VtZW50IHR5cGUgKHN5c3RlbSBmaWVsZCkgXG4gICAgcHVibGljIF90eXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgY3JlYXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdXBkYXRlZE9uOiBudW1iZXI7XG4gXG5cbn1cblxuXG4iXX0=