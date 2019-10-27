/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseEntity } from '../entities/BaseEntity';
/*
   Schedule is a list of recurrent time frames to specify active analytics
*/
export class Schedule extends BaseEntity {
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9TY2hlZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBTXBELE1BQU0sT0FBTyxRQUFTLFNBQVEsVUFBVTtDQW9DdkM7OztJQWpDRyw2QkFBeUI7O0lBR3pCLDRCQUF3Qjs7SUFHeEIsd0JBQW9COztJQUdwQiwrQkFBMkI7O0lBRzNCLDJCQUF3Qjs7SUFHeEIsNEJBQXdCOztJQUd4Qiw4QkFBd0M7O0lBR3hDLHNCQUFrQjs7SUFHbEIseUJBQXFCOztJQUdyQiw2QkFBeUI7O0lBR3pCLDZCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcbmltcG9ydCB7IFJlY3VycmVudFRpbWVGcmFtZSB9IGZyb20gJy4uL2NvbW1vbi9SZWN1cnJlbnRUaW1lRnJhbWUnO1xuXG4vKiBcbiAgIFNjaGVkdWxlIGlzIGEgbGlzdCBvZiByZWN1cnJlbnQgdGltZSBmcmFtZXMgdG8gc3BlY2lmeSBhY3RpdmUgYW5hbHl0aWNzIFxuKi9cbmV4cG9ydCBjbGFzcyBTY2hlZHVsZSBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZvbGRlciBJZCAodXNlIGVtcHR5IHN0cmluZyB0byBhc3NvY2lhdGUgdGhlIHNjaGVkdWxlIHRvIHRoZSBhY2NvdW50IGxldmVsKSBcbiAgICBwdWJsaWMgZm9sZGVySWQ6IHN0cmluZztcbiBcbiAgICAvLyBTY2hlZHVsZSBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gU2NoZWR1bGUgZGVzY3JpcHRpb24gXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gSXMgdGhpcyBzY2hlZHVsZSBpcyBlbmFibGVkIFxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xuIFxuICAgIC8vIEFjY291bnQgdGltZXpvbmUgKElBTkEgZm9ybWF0LCBkZWZhdWx0IGlzIFVUQykgXG4gICAgcHVibGljIHRpbWV6b25lOiBzdHJpbmc7XG4gXG4gICAgLy8gTGlzdCBvZiB0aW1lIGZyYW1lcyBcbiAgICBwdWJsaWMgdGltZUZyYW1lczogUmVjdXJyZW50VGltZUZyYW1lW107XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuXG59XG5cblxuIl19