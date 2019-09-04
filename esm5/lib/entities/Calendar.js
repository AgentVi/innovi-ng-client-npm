/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   Calendar type specifies list of events or holidays
*/
var /*
   Calendar type specifies list of events or holidays
*/
Calendar = /** @class */ (function (_super) {
    tslib_1.__extends(Calendar, _super);
    function Calendar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Calendar;
}(BaseEntity));
/*
   Calendar type specifies list of events or holidays
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9DYWxlbmRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQU1wRDs7OztJQUE4QixvQ0FBVTtJQUF4Qzs7SUFpQ0EsQ0FBQztJQUFELGVBQUM7QUFBRCxDQUFDLEFBakNELENBQThCLFVBQVUsR0FpQ3ZDOzs7Ozs7O0lBOUJHLDZCQUF5Qjs7SUFHekIsNEJBQXdCOztJQUd4Qix3QkFBb0I7O0lBR3BCLCtCQUEyQjs7SUFHM0IsMkJBQXdCOztJQUd4Qiw4QkFBdUM7O0lBR3ZDLHNCQUFrQjs7SUFHbEIseUJBQXFCOztJQUdyQiw2QkFBeUI7O0lBR3pCLDZCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcbmltcG9ydCB7IEFic29sdXRlVGltZUZyYW1lIH0gZnJvbSAnLi4vY29tbW9uL0Fic29sdXRlVGltZUZyYW1lJztcblxuLyogXG4gICBDYWxlbmRhciB0eXBlIHNwZWNpZmllcyBsaXN0IG9mIGV2ZW50cyBvciBob2xpZGF5cyBcbiovXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXIgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBGb2xkZXIgSWQgKHVzZSBlbXB0eSBzdHJpbmcgdG8gYXNzb2NpYXRlIHRoZSBjYWxlbmRhciB0byB0aGUgYWNjb3VudCBsZXZlbCkgXG4gICAgcHVibGljIGZvbGRlcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gQ2FsZW5kYXIgbmFtZSBcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIENhbGVuZGFyIGRlc2NyaXB0aW9uIFxuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nO1xuIFxuICAgIC8vIElzIHRoaXMgY2FsZW5kYXIgaXMgZW5hYmxlZCBcbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcbiBcbiAgICAvLyBMaXN0IG9mIHRpbWUgZnJhbWVzIFxuICAgIHB1YmxpYyB0aW1lRnJhbWVzOiBBYnNvbHV0ZVRpbWVGcmFtZVtdO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgZG9jdW1lbnQgdHlwZSAoc3lzdGVtIGZpZWxkKSBcbiAgICBwdWJsaWMgX3R5cGU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcblxufVxuXG5cbiJdfQ==