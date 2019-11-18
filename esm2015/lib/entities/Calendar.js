/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseEntity } from '../entities/BaseEntity';
/*
   Calendar is a list of absolute time frames (representing events or holidays) to specify active analytics
   Calendar time frames override the schedule e.g. if the current time falls into a scheduled time frame (non-active analytics) but also during a calendar time frame, analytics shall be active
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9DYWxlbmRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7OztBQU9wRCxNQUFNLE9BQU8sUUFBUyxTQUFRLFVBQVU7Q0FpQ3ZDOzs7SUE5QkcsNkJBQXlCOztJQUd6Qiw0QkFBd0I7O0lBR3hCLHdCQUFvQjs7SUFHcEIsK0JBQTJCOztJQUczQiwyQkFBd0I7O0lBR3hCLDhCQUF1Qzs7SUFHdkMsc0JBQWtCOztJQUdsQix5QkFBcUI7O0lBR3JCLDZCQUF5Qjs7SUFHekIsNkJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuaW1wb3J0IHsgQWJzb2x1dGVUaW1lRnJhbWUgfSBmcm9tICcuLi9jb21tb24vQWJzb2x1dGVUaW1lRnJhbWUnO1xuXG4vKiBcbiAgIENhbGVuZGFyIGlzIGEgbGlzdCBvZiBhYnNvbHV0ZSB0aW1lIGZyYW1lcyAocmVwcmVzZW50aW5nIGV2ZW50cyBvciBob2xpZGF5cykgdG8gc3BlY2lmeSBhY3RpdmUgYW5hbHl0aWNzXG4gICBDYWxlbmRhciB0aW1lIGZyYW1lcyBvdmVycmlkZSB0aGUgc2NoZWR1bGUgZS5nLiBpZiB0aGUgY3VycmVudCB0aW1lIGZhbGxzIGludG8gYSBzY2hlZHVsZWQgdGltZSBmcmFtZSAobm9uLWFjdGl2ZSBhbmFseXRpY3MpIGJ1dCBhbHNvIGR1cmluZyBhIGNhbGVuZGFyIHRpbWUgZnJhbWUsIGFuYWx5dGljcyBzaGFsbCBiZSBhY3RpdmUgXG4qL1xuZXhwb3J0IGNsYXNzIENhbGVuZGFyIGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gQWNjb3VudCBJZCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gRm9sZGVyIElkICh1c2UgZW1wdHkgc3RyaW5nIHRvIGFzc29jaWF0ZSB0aGUgY2FsZW5kYXIgdG8gdGhlIGFjY291bnQgbGV2ZWwpIFxuICAgIHB1YmxpYyBmb2xkZXJJZDogc3RyaW5nO1xuIFxuICAgIC8vIENhbGVuZGFyIG5hbWUgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBDYWxlbmRhciBkZXNjcmlwdGlvbiBcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcbiBcbiAgICAvLyBJcyB0aGlzIGNhbGVuZGFyIGlzIGVuYWJsZWQgXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XG4gXG4gICAgLy8gTGlzdCBvZiB0aW1lIGZyYW1lcyBcbiAgICBwdWJsaWMgdGltZUZyYW1lczogQWJzb2x1dGVUaW1lRnJhbWVbXTtcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IGRvY3VtZW50IHR5cGUgKHN5c3RlbSBmaWVsZCkgXG4gICAgcHVibGljIF90eXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgY3JlYXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdXBkYXRlZE9uOiBudW1iZXI7XG4gXG5cbn1cblxuXG4iXX0=