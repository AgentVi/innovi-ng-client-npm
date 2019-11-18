/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseEntity } from '../entities/BaseEntity';
/*
   Calendar is a list of absolute time frames (representing events or holidays) to specify active analytics
   Calendar time frames override the schedule e.g. if the current time falls into a non-scheduled time frame (non-active analytics) but also during a calendar time frame, analytics shall be active
*/
export class Calendar extends BaseEntity {
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9DYWxlbmRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7OztBQU1wRCxNQUFNLE9BQU8sUUFBUyxTQUFRLFVBQVU7Q0FpQ3ZDOzs7SUE5QkcsNkJBQXlCOztJQUd6Qiw0QkFBd0I7O0lBR3hCLHdCQUFvQjs7SUFHcEIsK0JBQTJCOztJQUczQiwyQkFBd0I7O0lBR3hCLDhCQUF1Qzs7SUFHdkMsc0JBQWtCOztJQUdsQix5QkFBcUI7O0lBR3JCLDZCQUF5Qjs7SUFHekIsNkJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzb2x1dGVUaW1lRnJhbWUgfSBmcm9tICcuLi9jb21tb24vQWJzb2x1dGVUaW1lRnJhbWUnO1xuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuXG4vKiBcbiAgIENhbGVuZGFyIGlzIGEgbGlzdCBvZiBhYnNvbHV0ZSB0aW1lIGZyYW1lcyAocmVwcmVzZW50aW5nIGV2ZW50cyBvciBob2xpZGF5cykgdG8gc3BlY2lmeSBhY3RpdmUgYW5hbHl0aWNzXG4gICBDYWxlbmRhciB0aW1lIGZyYW1lcyBvdmVycmlkZSB0aGUgc2NoZWR1bGUgZS5nLiBpZiB0aGUgY3VycmVudCB0aW1lIGZhbGxzIGludG8gYSBub24tc2NoZWR1bGVkIHRpbWUgZnJhbWUgKG5vbi1hY3RpdmUgYW5hbHl0aWNzKSBidXQgYWxzbyBkdXJpbmcgYSBjYWxlbmRhciB0aW1lIGZyYW1lLCBhbmFseXRpY3Mgc2hhbGwgYmUgYWN0aXZlIFxuKi9cbmV4cG9ydCBjbGFzcyBDYWxlbmRhciBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZvbGRlciBJZCAodXNlIGVtcHR5IHN0cmluZyB0byBhc3NvY2lhdGUgdGhlIGNhbGVuZGFyIHRvIHRoZSBhY2NvdW50IGxldmVsKSBcbiAgICBwdWJsaWMgZm9sZGVySWQ6IHN0cmluZztcbiBcbiAgICAvLyBDYWxlbmRhciBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gQ2FsZW5kYXIgZGVzY3JpcHRpb24gXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gSXMgdGhpcyBjYWxlbmRhciBpcyBlbmFibGVkIFxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xuIFxuICAgIC8vIExpc3Qgb2YgdGltZSBmcmFtZXMgXG4gICAgcHVibGljIHRpbWVGcmFtZXM6IEFic29sdXRlVGltZUZyYW1lW107XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuXG59XG5cblxuIl19