/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   Schedule is a list of recurrent time frames to specify active analytics
*/
var /*
   Schedule is a list of recurrent time frames to specify active analytics
*/
Schedule = /** @class */ (function (_super) {
    tslib_1.__extends(Schedule, _super);
    function Schedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Schedule;
}(BaseEntity));
/*
   Schedule is a list of recurrent time frames to specify active analytics
*/
export { Schedule };
if (false) {
    /** @type {?} */
    Schedule.prototype.accountId;
    /** @type {?} */
    Schedule.prototype.folderId;
    /** @type {?} */
    Schedule.prototype.name;
    /** @type {?} */
    Schedule.prototype.description;
    /** @type {?} */
    Schedule.prototype.enabled;
    /** @type {?} */
    Schedule.prototype.timezone;
    /** @type {?} */
    Schedule.prototype.timeFrames;
    /** @type {?} */
    Schedule.prototype.id;
    /** @type {?} */
    Schedule.prototype._type;
    /** @type {?} */
    Schedule.prototype.createdOn;
    /** @type {?} */
    Schedule.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9TY2hlZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUtwRDs7OztJQUE4QixvQ0FBVTtJQUF4Qzs7SUFvQ0EsQ0FBQztJQUFELGVBQUM7QUFBRCxDQUFDLEFBcENELENBQThCLFVBQVUsR0FvQ3ZDOzs7Ozs7O0lBakNHLDZCQUF5Qjs7SUFHekIsNEJBQXdCOztJQUd4Qix3QkFBb0I7O0lBR3BCLCtCQUEyQjs7SUFHM0IsMkJBQXdCOztJQUd4Qiw0QkFBd0I7O0lBR3hCLDhCQUF3Qzs7SUFHeEMsc0JBQWtCOztJQUdsQix5QkFBcUI7O0lBR3JCLDZCQUF5Qjs7SUFHekIsNkJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVjdXJyZW50VGltZUZyYW1lIH0gZnJvbSAnLi4vY29tbW9uL1JlY3VycmVudFRpbWVGcmFtZSc7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5cbi8qIFxuICAgU2NoZWR1bGUgaXMgYSBsaXN0IG9mIHJlY3VycmVudCB0aW1lIGZyYW1lcyB0byBzcGVjaWZ5IGFjdGl2ZSBhbmFseXRpY3MgXG4qL1xuZXhwb3J0IGNsYXNzIFNjaGVkdWxlIGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gQWNjb3VudCBJZCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gRm9sZGVyIElkICh1c2UgZW1wdHkgc3RyaW5nIHRvIGFzc29jaWF0ZSB0aGUgc2NoZWR1bGUgdG8gdGhlIGFjY291bnQgbGV2ZWwpIFxuICAgIHB1YmxpYyBmb2xkZXJJZDogc3RyaW5nO1xuIFxuICAgIC8vIFNjaGVkdWxlIG5hbWUgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBTY2hlZHVsZSBkZXNjcmlwdGlvbiBcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcbiBcbiAgICAvLyBJcyB0aGlzIHNjaGVkdWxlIGlzIGVuYWJsZWQgXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XG4gXG4gICAgLy8gQWNjb3VudCB0aW1lem9uZSAoSUFOQSBmb3JtYXQsIGRlZmF1bHQgaXMgVVRDKSBcbiAgICBwdWJsaWMgdGltZXpvbmU6IHN0cmluZztcbiBcbiAgICAvLyBMaXN0IG9mIHRpbWUgZnJhbWVzIFxuICAgIHB1YmxpYyB0aW1lRnJhbWVzOiBSZWN1cnJlbnRUaW1lRnJhbWVbXTtcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IGRvY3VtZW50IHR5cGUgKHN5c3RlbSBmaWVsZCkgXG4gICAgcHVibGljIF90eXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgY3JlYXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdXBkYXRlZE9uOiBudW1iZXI7XG4gXG5cbn1cblxuXG4iXX0=