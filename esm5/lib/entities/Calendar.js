/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   Calendar is a list of absolute time frames (representing events or holidays) to specify active analytics
   Calendar time frames override the schedule e.g. if the current time falls into a non-scheduled time frame (non-active analytics) but also during a calendar time frame, analytics shall be active
*/
var /*
   Calendar is a list of absolute time frames (representing events or holidays) to specify active analytics
   Calendar time frames override the schedule e.g. if the current time falls into a non-scheduled time frame (non-active analytics) but also during a calendar time frame, analytics shall be active
*/
Calendar = /** @class */ (function (_super) {
    tslib_1.__extends(Calendar, _super);
    function Calendar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Calendar;
}(BaseEntity));
/*
   Calendar is a list of absolute time frames (representing events or holidays) to specify active analytics
   Calendar time frames override the schedule e.g. if the current time falls into a non-scheduled time frame (non-active analytics) but also during a calendar time frame, analytics shall be active
*/
export { Calendar };
if (false) {
    /** @type {?} */
    Calendar.prototype.accountId;
    /** @type {?} */
    Calendar.prototype.folderId;
    /** @type {?} */
    Calendar.prototype.name;
    /** @type {?} */
    Calendar.prototype.description;
    /** @type {?} */
    Calendar.prototype.enabled;
    /** @type {?} */
    Calendar.prototype.timeFrames;
    /** @type {?} */
    Calendar.prototype.id;
    /** @type {?} */
    Calendar.prototype._type;
    /** @type {?} */
    Calendar.prototype.createdOn;
    /** @type {?} */
    Calendar.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9DYWxlbmRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7QUFNcEQ7Ozs7O0lBQThCLG9DQUFVO0lBQXhDOztJQWlDQSxDQUFDO0lBQUQsZUFBQztBQUFELENBQUMsQUFqQ0QsQ0FBOEIsVUFBVSxHQWlDdkM7Ozs7Ozs7O0lBOUJHLDZCQUF5Qjs7SUFHekIsNEJBQXdCOztJQUd4Qix3QkFBb0I7O0lBR3BCLCtCQUEyQjs7SUFHM0IsMkJBQXdCOztJQUd4Qiw4QkFBdUM7O0lBR3ZDLHNCQUFrQjs7SUFHbEIseUJBQXFCOztJQUdyQiw2QkFBeUI7O0lBR3pCLDZCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic29sdXRlVGltZUZyYW1lIH0gZnJvbSAnLi4vY29tbW9uL0Fic29sdXRlVGltZUZyYW1lJztcbmltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcblxuLyogXG4gICBDYWxlbmRhciBpcyBhIGxpc3Qgb2YgYWJzb2x1dGUgdGltZSBmcmFtZXMgKHJlcHJlc2VudGluZyBldmVudHMgb3IgaG9saWRheXMpIHRvIHNwZWNpZnkgYWN0aXZlIGFuYWx5dGljc1xuICAgQ2FsZW5kYXIgdGltZSBmcmFtZXMgb3ZlcnJpZGUgdGhlIHNjaGVkdWxlIGUuZy4gaWYgdGhlIGN1cnJlbnQgdGltZSBmYWxscyBpbnRvIGEgbm9uLXNjaGVkdWxlZCB0aW1lIGZyYW1lIChub24tYWN0aXZlIGFuYWx5dGljcykgYnV0IGFsc28gZHVyaW5nIGEgY2FsZW5kYXIgdGltZSBmcmFtZSwgYW5hbHl0aWNzIHNoYWxsIGJlIGFjdGl2ZSBcbiovXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXIgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBGb2xkZXIgSWQgKHVzZSBlbXB0eSBzdHJpbmcgdG8gYXNzb2NpYXRlIHRoZSBjYWxlbmRhciB0byB0aGUgYWNjb3VudCBsZXZlbCkgXG4gICAgcHVibGljIGZvbGRlcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gQ2FsZW5kYXIgbmFtZSBcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIENhbGVuZGFyIGRlc2NyaXB0aW9uIFxuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nO1xuIFxuICAgIC8vIElzIHRoaXMgY2FsZW5kYXIgaXMgZW5hYmxlZCBcbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcbiBcbiAgICAvLyBMaXN0IG9mIHRpbWUgZnJhbWVzIFxuICAgIHB1YmxpYyB0aW1lRnJhbWVzOiBBYnNvbHV0ZVRpbWVGcmFtZVtdO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgZG9jdW1lbnQgdHlwZSAoc3lzdGVtIGZpZWxkKSBcbiAgICBwdWJsaWMgX3R5cGU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcblxufVxuXG5cbiJdfQ==