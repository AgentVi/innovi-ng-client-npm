/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   Appliance status - reported periodically by the appliance
*/
var /*
   Appliance status - reported periodically by the appliance
*/
ApplianceStatus = /** @class */ (function (_super) {
    tslib_1.__extends(ApplianceStatus, _super);
    function ApplianceStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ApplianceStatus;
}(BaseEntity));
/*
   Appliance status - reported periodically by the appliance
*/
export { ApplianceStatus };
if (false) {
    /** @type {?} */
    ApplianceStatus.prototype.applianceId;
    /** @type {?} */
    ApplianceStatus.prototype.cpuAvg;
    /** @type {?} */
    ApplianceStatus.prototype.cpuMax;
    /** @type {?} */
    ApplianceStatus.prototype.ram;
    /** @type {?} */
    ApplianceStatus.prototype.loadAvg;
    /** @type {?} */
    ApplianceStatus.prototype.id;
    /** @type {?} */
    ApplianceStatus.prototype._type;
    /** @type {?} */
    ApplianceStatus.prototype.createdOn;
    /** @type {?} */
    ApplianceStatus.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlU3RhdHVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW50aXRpZXMvQXBwbGlhbmNlU3RhdHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBS3BEOzs7O0lBQXFDLDJDQUFVO0lBQS9DOztJQTZCQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLEFBN0JELENBQXFDLFVBQVUsR0E2QjlDOzs7Ozs7O0lBMUJHLHNDQUEyQjs7SUFHM0IsaUNBQXNCOztJQUd0QixpQ0FBc0I7O0lBR3RCLDhCQUFtQjs7SUFHbkIsa0NBQXVCOztJQUd2Qiw2QkFBa0I7O0lBR2xCLGdDQUFxQjs7SUFHckIsb0NBQXlCOztJQUd6QixvQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5cbi8qIFxuICAgQXBwbGlhbmNlIHN0YXR1cyAtIHJlcG9ydGVkIHBlcmlvZGljYWxseSBieSB0aGUgYXBwbGlhbmNlIFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWFuY2VTdGF0dXMgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBcHBsaWFuY2UgSWQgXG4gICAgcHVibGljIGFwcGxpYW5jZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gQXZlcmFnZSBDUFUgdXNhZ2UgcGVyY2VudGFnZSBbMS0xMDBdIFxuICAgIHB1YmxpYyBjcHVBdmc6IG51bWJlcjtcbiBcbiAgICAvLyBNYXggQ1BVIHVzYWdlIHBlcmNlbnRhZ2UgWzEtMTAwXSBcbiAgICBwdWJsaWMgY3B1TWF4OiBudW1iZXI7XG4gXG4gICAgLy8gUkFNIHVzYWdlIHBlcmNlbnRhZ2UgWzEtMTAwXSBcbiAgICBwdWJsaWMgcmFtOiBudW1iZXI7XG4gXG4gICAgLy8gTG9hZCBhdmVyYWdlIHBlcmNlbnRhZ2UgKGNvdWxkIGJlIG1vcmUgdGhhbiAxMDAsIGUuZy4gbG9hZCBhdmVyYWdlIG9mIDIuMjEgd2lsbCBiZSByZXByZXNlbnRlZCBhcyAyMjEpIFxuICAgIHB1YmxpYyBsb2FkQXZnOiBudW1iZXI7XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxufVxuXG5cbiJdfQ==