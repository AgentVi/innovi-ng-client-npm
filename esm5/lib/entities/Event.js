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
    Event.prototype.startTime;
    /** @type {?} */
    Event.prototype.ruleId;
    /** @type {?} */
    Event.prototype.description;
    /** @type {?} */
    Event.prototype.ruleType;
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
    Event.prototype.objectsInfo;
    /** @type {?} */
    Event.prototype.imageTime;
    /** @type {?} */
    Event.prototype.id;
    /** @type {?} */
    Event.prototype._type;
    /** @type {?} */
    Event.prototype.createdOn;
    /** @type {?} */
    Event.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9FdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQVdwRDs7OztJQUEyQixpQ0FBVTtJQUFyQzs7SUE0REEsQ0FBQztJQUFELFlBQUM7QUFBRCxDQUFDLEFBNURELENBQTJCLFVBQVUsR0E0RHBDOzs7Ozs7O0lBekRHLHlCQUF3Qjs7SUFHeEIsMEJBQXlCOztJQUd6QiwwQkFBeUI7O0lBR3pCLHVCQUFzQjs7SUFHdEIsNEJBQTJCOztJQUczQix5QkFBOEI7O0lBRzlCLDJCQUFrQzs7SUFHbEMsNkJBQXNDOztJQUd0Qyx1QkFBK0I7O0lBRy9CLDRCQUErQjs7SUFHL0IsMEJBQXlCOztJQUd6Qix5QkFBd0I7O0lBR3hCLHlCQUFrQzs7SUFHbEMsNEJBQXNDOztJQUd0QywwQkFBeUI7O0lBR3pCLG1CQUFrQjs7SUFHbEIsc0JBQXFCOztJQUdyQiwwQkFBeUI7O0lBR3pCLDBCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50T2JqZWN0SW5mbyB9IGZyb20gJy4uL2NvbW1vbi9FdmVudE9iamVjdEluZm8nO1xuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuaW1wb3J0IHsgUnVsZVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvUnVsZVR5cGVDb2RlJztcbmltcG9ydCB7IE9iamVjdFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvT2JqZWN0VHlwZUNvZGUnO1xuaW1wb3J0IHsgQmVoYXZpb3JUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0JlaGF2aW9yVHlwZUNvZGUnO1xuaW1wb3J0IHsgRXZlbnRTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvRXZlbnRTdGF0dXNDb2RlJztcbmltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICcuLi9jb21tb24vQ29vcmRpbmF0ZSc7XG5pbXBvcnQgeyBTZXZlcml0eVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvU2V2ZXJpdHlUeXBlQ29kZSc7XG5cbi8qIFxuICAgRGV0ZWN0aW9uIGV2ZW50IHR5cGUgXG4qL1xuZXhwb3J0IGNsYXNzIEV2ZW50IGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gU2Vuc29yIElkIFxuICAgIHB1YmxpYyBzZW5zb3JJZDogc3RyaW5nO1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGV2ZW50IHdhcyBkZXRlY3RlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHN0YXJ0VGltZTogbnVtYmVyO1xuIFxuICAgIC8vIFJ1bGUgSWQgXG4gICAgcHVibGljIHJ1bGVJZDogc3RyaW5nO1xuIFxuICAgIC8vIEV2ZW50IGRlc2NyaXB0aW9uIChmcmVlIHRleHQgYXMgcHJvdmlkZWQgYnkgdGhlIGV2ZW50IHNvdXJjZSAtIGV2ZW50IGVuZ2luZSwgYW5vbWFseSwgY3VzdG9tLCBGUiwgTFBSIC4uLikgXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gQnJlYWNoZWQgcnVsZSB0eXBlIFxuICAgIHB1YmxpYyBydWxlVHlwZTogUnVsZVR5cGVDb2RlO1xuIFxuICAgIC8vIERldGVjdGVkIG9iamVjdCB0eXBlIChVTktOT1dOIHwgUEVSU09OIHwgVkVISUNMRSB8IEJVUyB8IFRSQUNLIC4uLikgXG4gICAgcHVibGljIG9iamVjdFR5cGU6IE9iamVjdFR5cGVDb2RlO1xuIFxuICAgIC8vIERldGVjdGVkIG9iamVjdCB0eXBlIChVTktOT1dOIHwgUEVSU09OIHwgVkVISUNMRSB8IEJVUyB8IFRSQUNLIC4uLikgXG4gICAgcHVibGljIGJlaGF2aW9yVHlwZTogQmVoYXZpb3JUeXBlQ29kZTtcbiBcbiAgICAvLyBWYWxpZGF0aW9uIHN0YXR1cyBmb3IgZXZlbnQgcHJvY2Vzc2luZyB3b3JrZmxvdzogTkVXIHwgT1BFTiB8IENMT1NFIHwgSVJSRUxFVkFOVCB8IEZBTFNFIFxuICAgIHB1YmxpYyBzdGF0dXM6IEV2ZW50U3RhdHVzQ29kZTtcbiBcbiAgICAvLyBFdmVudCBnZW8gbG9jYXRpb24gKFdHUy04NCBjb29yZGluYXRlIHN5c3RlbSkuIFRoaXMgZmllbGQgaXMgYXBwbGljYWJsZSBvbmx5IGlmIHRoZSBzZW5zb3IgaXMgZ2VvLXJlZmVyZW5jZWQuIFxuICAgIHB1YmxpYyBnZW9Mb2NhdGlvbjogQ29vcmRpbmF0ZTtcbiBcbiAgICAvLyBFdmVudCBpbWFnZSBwYXRoIFxuICAgIHB1YmxpYyBpbWFnZVBhdGg6IHN0cmluZztcbiBcbiAgICAvLyBFdmVudCBjbGlwIHBhdGggXG4gICAgcHVibGljIGNsaXBQYXRoOiBzdHJpbmc7XG4gXG4gICAgLy8gRXZlbnQgc2V2ZXJpdHkgbGV2ZWw6IFVOREVGSU5FRCB8IExPVyB8IE1FRElVTSB8IEhJR0ggfCBDUklUSUNBTCBcbiAgICBwdWJsaWMgc2V2ZXJpdHk6IFNldmVyaXR5VHlwZUNvZGU7XG4gXG4gICAgLy8gRGV0ZWN0ZWQgb2JqZWN0IGluZm9ybWF0aW9uIChsb2NhdGlvbiBhbmQgdHlwZSB3aGVuIGl0IHdhcyBkZXRlY3RlZCBpbmNsdWRpbmcgb2JqZWN0IHRyYWplY3RvcnkgaW4gdGhlIHNjZW5lKSBcbiAgICBwdWJsaWMgb2JqZWN0c0luZm86IEV2ZW50T2JqZWN0SW5mb1tdO1xuIFxuICAgIC8vIEV2ZW50IGltYWdlIHRpbWUgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBpbWFnZVRpbWU6IG51bWJlcjtcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IGRvY3VtZW50IHR5cGUgKHN5c3RlbSBmaWVsZCkgXG4gICAgcHVibGljIF90eXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgY3JlYXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdXBkYXRlZE9uOiBudW1iZXI7XG4gXG5cbn1cblxuXG4iXX0=