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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9FdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQVdwRDs7OztJQUEyQixpQ0FBVTtJQUFyQzs7SUErREEsQ0FBQztJQUFELFlBQUM7QUFBRCxDQUFDLEFBL0RELENBQTJCLFVBQVUsR0ErRHBDOzs7Ozs7O0lBNURHLHlCQUF3Qjs7SUFHeEIsMEJBQXlCOztJQUd6QiwwQkFBeUI7O0lBR3pCLHVCQUFzQjs7SUFHdEIsNEJBQTJCOztJQUczQix5QkFBOEI7O0lBRzlCLDJCQUFrQzs7SUFHbEMsNkJBQXNDOztJQUd0Qyx1QkFBK0I7O0lBRy9CLDRCQUErQjs7SUFHL0IsMEJBQXlCOztJQUd6Qix5QkFBd0I7O0lBR3hCLHlCQUFrQzs7SUFHbEMsK0JBQThCOztJQUc5Qiw2QkFBa0M7O0lBR2xDLDhCQUFvQzs7SUFHcEMsbUJBQWtCOztJQUdsQixzQkFBcUI7O0lBR3JCLDBCQUF5Qjs7SUFHekIsMEJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUnVsZVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvUnVsZVR5cGVDb2RlJztcbmltcG9ydCB7IE9iamVjdEluZm8gfSBmcm9tICcuLi9jb21tb24vT2JqZWN0SW5mbyc7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnLi4vY29tbW9uL0Nvb3JkaW5hdGUnO1xuaW1wb3J0IHsgU2V2ZXJpdHlUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1NldmVyaXR5VHlwZUNvZGUnO1xuaW1wb3J0IHsgQm91bmRpbmdCb3ggfSBmcm9tICcuLi9jb21tb24vQm91bmRpbmdCb3gnO1xuaW1wb3J0IHsgT2JqZWN0VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9PYmplY3RUeXBlQ29kZSc7XG5pbXBvcnQgeyBCZWhhdmlvclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQmVoYXZpb3JUeXBlQ29kZSc7XG5pbXBvcnQgeyBFdmVudFN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9FdmVudFN0YXR1c0NvZGUnO1xuXG4vKiBcbiAgIERldGVjdGlvbiBldmVudCB0eXBlIFxuKi9cbmV4cG9ydCBjbGFzcyBFdmVudCBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIFNlbnNvciBJZCBcbiAgICBwdWJsaWMgc2Vuc29ySWQ6IHN0cmluZztcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBldmVudCB3YXMgZGV0ZWN0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBldmVudFRpbWU6IG51bWJlcjtcbiBcbiAgICAvLyBSdWxlIElkIFxuICAgIHB1YmxpYyBydWxlSWQ6IHN0cmluZztcbiBcbiAgICAvLyBFdmVudCBkZXNjcmlwdGlvbiAoZnJlZSB0ZXh0IGFzIHByb3ZpZGVkIGJ5IHRoZSBldmVudCBzb3VyY2UgLSBldmVudCBlbmdpbmUsIGFub21hbHksIGN1c3RvbSwgRlIsIExQUiAuLi4pIFxuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nO1xuIFxuICAgIC8vIEJyZWFjaGVkIHJ1bGUgdHlwZSBcbiAgICBwdWJsaWMgcnVsZVR5cGU6IFJ1bGVUeXBlQ29kZTtcbiBcbiAgICAvLyBEZXRlY3RlZCBvYmplY3QgdHlwZSAoVU5LTk9XTiB8IFBFUlNPTiB8IFZFSElDTEUgfCBCVVMgfCBUUkFDSyAuLi4pIFxuICAgIHB1YmxpYyBvYmplY3RUeXBlOiBPYmplY3RUeXBlQ29kZTtcbiBcbiAgICAvLyBEZXRlY3RlZCBvYmplY3QgdHlwZSAoVU5LTk9XTiB8IFBFUlNPTiB8IFZFSElDTEUgfCBCVVMgfCBUUkFDSyAuLi4pIFxuICAgIHB1YmxpYyBiZWhhdmlvclR5cGU6IEJlaGF2aW9yVHlwZUNvZGU7XG4gXG4gICAgLy8gVmFsaWRhdGlvbiBzdGF0dXMgZm9yIGV2ZW50IHByb2Nlc3Npbmcgd29ya2Zsb3c6IE5FVyB8IE9QRU4gfCBDTE9TRSB8IElSUkVMRVZBTlQgfCBGQUxTRSBcbiAgICBwdWJsaWMgc3RhdHVzOiBFdmVudFN0YXR1c0NvZGU7XG4gXG4gICAgLy8gRXZlbnQgZ2VvIGxvY2F0aW9uIChXR1MtODQgY29vcmRpbmF0ZSBzeXN0ZW0pLiBUaGlzIGZpZWxkIGlzIGFwcGxpY2FibGUgb25seSBpZiB0aGUgc2Vuc29yIGlzIGdlby1yZWZlcmVuY2VkLiBcbiAgICBwdWJsaWMgZ2VvTG9jYXRpb246IENvb3JkaW5hdGU7XG4gXG4gICAgLy8gRXZlbnQgaW1hZ2UgcGF0aCBcbiAgICBwdWJsaWMgaW1hZ2VQYXRoOiBzdHJpbmc7XG4gXG4gICAgLy8gRXZlbnQgY2xpcCBwYXRoIFxuICAgIHB1YmxpYyBjbGlwUGF0aDogc3RyaW5nO1xuIFxuICAgIC8vIEV2ZW50IHNldmVyaXR5IGxldmVsOiBVTkRFRklORUQgfCBMT1cgfCBNRURJVU0gfCBISUdIIHwgQ1JJVElDQUwgXG4gICAgcHVibGljIHNldmVyaXR5OiBTZXZlcml0eVR5cGVDb2RlO1xuIFxuICAgIC8vIEV2ZW50IGltYWdlIHRpbWUgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBldmVudEltYWdlVGltZTogbnVtYmVyO1xuIFxuICAgIC8vIERldGVjdGVkIG9iamVjdCBpbmZvcm1hdGlvbiBcbiAgICBwdWJsaWMgZXZlbnRPYmplY3RzOiBPYmplY3RJbmZvW107XG4gXG4gICAgLy8gRGV0ZWN0ZWQgb2JqZWN0KHMpIGJvdW5kaW5nIGJveChlcykgXG4gICAgcHVibGljIGJvdW5kaW5nQm94ZXM6IEJvdW5kaW5nQm94W107XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuXG59XG5cblxuIl19