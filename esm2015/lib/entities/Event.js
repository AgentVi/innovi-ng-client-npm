/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseEntity } from '../entities/BaseEntity';
/*
   Detection event type
*/
export class Event extends BaseEntity {
}
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
    Event.prototype.imageTime;
    /** @type {?} */
    Event.prototype.eventObjects;
    /** @type {?} */
    Event.prototype.id;
    /** @type {?} */
    Event.prototype._type;
    /** @type {?} */
    Event.prototype.createdOn;
    /** @type {?} */
    Event.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9FdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBU3BELE1BQU0sT0FBTyxLQUFNLFNBQVEsVUFBVTtDQTREcEM7OztJQXpERyx5QkFBd0I7O0lBR3hCLDBCQUF5Qjs7SUFHekIsMEJBQXlCOztJQUd6Qix1QkFBc0I7O0lBR3RCLDRCQUEyQjs7SUFHM0IseUJBQThCOztJQUc5QiwyQkFBa0M7O0lBR2xDLDZCQUFzQzs7SUFHdEMsdUJBQStCOztJQUcvQiw0QkFBK0I7O0lBRy9CLDBCQUF5Qjs7SUFHekIseUJBQXdCOztJQUd4Qix5QkFBa0M7O0lBR2xDLDBCQUF5Qjs7SUFHekIsNkJBQWtDOztJQUdsQyxtQkFBa0I7O0lBR2xCLHNCQUFxQjs7SUFHckIsMEJBQXlCOztJQUd6QiwwQkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnLi4vY29tbW9uL0Nvb3JkaW5hdGUnO1xuaW1wb3J0IHsgU2V2ZXJpdHlUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1NldmVyaXR5VHlwZUNvZGUnO1xuaW1wb3J0IHsgT2JqZWN0SW5mbyB9IGZyb20gJy4uL2NvbW1vbi9PYmplY3RJbmZvJztcbmltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcbmltcG9ydCB7IFJ1bGVUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1J1bGVUeXBlQ29kZSc7XG5pbXBvcnQgeyBPYmplY3RUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL09iamVjdFR5cGVDb2RlJztcbmltcG9ydCB7IEJlaGF2aW9yVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9CZWhhdmlvclR5cGVDb2RlJztcbmltcG9ydCB7IEV2ZW50U3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0V2ZW50U3RhdHVzQ29kZSc7XG5cbi8qIFxuICAgRGV0ZWN0aW9uIGV2ZW50IHR5cGUgXG4qL1xuZXhwb3J0IGNsYXNzIEV2ZW50IGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gU2Vuc29yIElkIFxuICAgIHB1YmxpYyBzZW5zb3JJZDogc3RyaW5nO1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGV2ZW50IHdhcyBkZXRlY3RlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGV2ZW50VGltZTogbnVtYmVyO1xuIFxuICAgIC8vIFJ1bGUgSWQgXG4gICAgcHVibGljIHJ1bGVJZDogc3RyaW5nO1xuIFxuICAgIC8vIEV2ZW50IGRlc2NyaXB0aW9uIChmcmVlIHRleHQgYXMgcHJvdmlkZWQgYnkgdGhlIGV2ZW50IHNvdXJjZSAtIGV2ZW50IGVuZ2luZSwgYW5vbWFseSwgY3VzdG9tLCBGUiwgTFBSIC4uLikgXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gQnJlYWNoZWQgcnVsZSB0eXBlIFxuICAgIHB1YmxpYyBydWxlVHlwZTogUnVsZVR5cGVDb2RlO1xuIFxuICAgIC8vIERldGVjdGVkIG9iamVjdCB0eXBlIChVTktOT1dOIHwgUEVSU09OIHwgVkVISUNMRSB8IEJVUyB8IFRSQUNLIC4uLikgXG4gICAgcHVibGljIG9iamVjdFR5cGU6IE9iamVjdFR5cGVDb2RlO1xuIFxuICAgIC8vIERldGVjdGVkIG9iamVjdCB0eXBlIChVTktOT1dOIHwgUEVSU09OIHwgVkVISUNMRSB8IEJVUyB8IFRSQUNLIC4uLikgXG4gICAgcHVibGljIGJlaGF2aW9yVHlwZTogQmVoYXZpb3JUeXBlQ29kZTtcbiBcbiAgICAvLyBWYWxpZGF0aW9uIHN0YXR1cyBmb3IgZXZlbnQgcHJvY2Vzc2luZyB3b3JrZmxvdzogTkVXIHwgT1BFTiB8IENMT1NFIHwgSVJSRUxFVkFOVCB8IEZBTFNFIFxuICAgIHB1YmxpYyBzdGF0dXM6IEV2ZW50U3RhdHVzQ29kZTtcbiBcbiAgICAvLyBFdmVudCBnZW8gbG9jYXRpb24gKFdHUy04NCBjb29yZGluYXRlIHN5c3RlbSkuIFRoaXMgZmllbGQgaXMgYXBwbGljYWJsZSBvbmx5IGlmIHRoZSBzZW5zb3IgaXMgZ2VvLXJlZmVyZW5jZWQuIFxuICAgIHB1YmxpYyBnZW9Mb2NhdGlvbjogQ29vcmRpbmF0ZTtcbiBcbiAgICAvLyBFdmVudCBpbWFnZSBwYXRoIFxuICAgIHB1YmxpYyBpbWFnZVBhdGg6IHN0cmluZztcbiBcbiAgICAvLyBFdmVudCBjbGlwIHBhdGggXG4gICAgcHVibGljIGNsaXBQYXRoOiBzdHJpbmc7XG4gXG4gICAgLy8gRXZlbnQgc2V2ZXJpdHkgbGV2ZWw6IFVOREVGSU5FRCB8IExPVyB8IE1FRElVTSB8IEhJR0ggfCBDUklUSUNBTCBcbiAgICBwdWJsaWMgc2V2ZXJpdHk6IFNldmVyaXR5VHlwZUNvZGU7XG4gXG4gICAgLy8gRXZlbnQgaW1hZ2UgdGltZSBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGltYWdlVGltZTogbnVtYmVyO1xuIFxuICAgIC8vIERldGVjdGVkIG9iamVjdCBpbmZvcm1hdGlvbiBcbiAgICBwdWJsaWMgZXZlbnRPYmplY3RzOiBPYmplY3RJbmZvW107XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuXG59XG5cblxuIl19