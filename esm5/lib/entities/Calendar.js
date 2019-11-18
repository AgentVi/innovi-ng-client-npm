/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   Calendar is a list of absolute time frames (representing events or holidays) to specify active analytics
   Calendar time frames override the schedule e.g. if the current time falls into a scheduled time frame (non-active analytics) but also during a calendar time frame, analytics shall be active
*/
var /*
   Calendar is a list of absolute time frames (representing events or holidays) to specify active analytics
   Calendar time frames override the schedule e.g. if the current time falls into a scheduled time frame (non-active analytics) but also during a calendar time frame, analytics shall be active
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
   Calendar time frames override the schedule e.g. if the current time falls into a scheduled time frame (non-active analytics) but also during a calendar time frame, analytics shall be active
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9DYWxlbmRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7QUFPcEQ7Ozs7O0lBQThCLG9DQUFVO0lBQXhDOztJQWlDQSxDQUFDO0lBQUQsZUFBQztBQUFELENBQUMsQUFqQ0QsQ0FBOEIsVUFBVSxHQWlDdkM7Ozs7Ozs7O0lBOUJHLDZCQUF5Qjs7SUFHekIsNEJBQXdCOztJQUd4Qix3QkFBb0I7O0lBR3BCLCtCQUEyQjs7SUFHM0IsMkJBQXdCOztJQUd4Qiw4QkFBdUM7O0lBR3ZDLHNCQUFrQjs7SUFHbEIseUJBQXFCOztJQUdyQiw2QkFBeUI7O0lBR3pCLDZCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcbmltcG9ydCB7IEFic29sdXRlVGltZUZyYW1lIH0gZnJvbSAnLi4vY29tbW9uL0Fic29sdXRlVGltZUZyYW1lJztcblxuLyogXG4gICBDYWxlbmRhciBpcyBhIGxpc3Qgb2YgYWJzb2x1dGUgdGltZSBmcmFtZXMgKHJlcHJlc2VudGluZyBldmVudHMgb3IgaG9saWRheXMpIHRvIHNwZWNpZnkgYWN0aXZlIGFuYWx5dGljc1xuICAgQ2FsZW5kYXIgdGltZSBmcmFtZXMgb3ZlcnJpZGUgdGhlIHNjaGVkdWxlIGUuZy4gaWYgdGhlIGN1cnJlbnQgdGltZSBmYWxscyBpbnRvIGEgc2NoZWR1bGVkIHRpbWUgZnJhbWUgKG5vbi1hY3RpdmUgYW5hbHl0aWNzKSBidXQgYWxzbyBkdXJpbmcgYSBjYWxlbmRhciB0aW1lIGZyYW1lLCBhbmFseXRpY3Mgc2hhbGwgYmUgYWN0aXZlIFxuKi9cbmV4cG9ydCBjbGFzcyBDYWxlbmRhciBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZvbGRlciBJZCAodXNlIGVtcHR5IHN0cmluZyB0byBhc3NvY2lhdGUgdGhlIGNhbGVuZGFyIHRvIHRoZSBhY2NvdW50IGxldmVsKSBcbiAgICBwdWJsaWMgZm9sZGVySWQ6IHN0cmluZztcbiBcbiAgICAvLyBDYWxlbmRhciBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gQ2FsZW5kYXIgZGVzY3JpcHRpb24gXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gSXMgdGhpcyBjYWxlbmRhciBpcyBlbmFibGVkIFxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xuIFxuICAgIC8vIExpc3Qgb2YgdGltZSBmcmFtZXMgXG4gICAgcHVibGljIHRpbWVGcmFtZXM6IEFic29sdXRlVGltZUZyYW1lW107XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuXG59XG5cblxuIl19