/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseEntity } from '../entities/BaseEntity';
/*
   Schedule is a list of recurrent time frames to specify non-active analytics
   Schedule is associated with account and optionally with folder and multiple schedules can be specified.
   When defining a rule, it can be scheduled by one of the schedules associated with the sensor's folder, it's parent folder, it's parent's parent folder and so on up to the account
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9TY2hlZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7QUFRcEQsTUFBTSxPQUFPLFFBQVMsU0FBUSxVQUFVO0NBb0N2Qzs7O0lBakNHLDZCQUF5Qjs7SUFHekIsNEJBQXdCOztJQUd4Qix3QkFBb0I7O0lBR3BCLCtCQUEyQjs7SUFHM0IsMkJBQXdCOztJQUd4Qiw0QkFBd0I7O0lBR3hCLDhCQUF3Qzs7SUFHeEMsc0JBQWtCOztJQUdsQix5QkFBcUI7O0lBR3JCLDZCQUF5Qjs7SUFHekIsNkJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuaW1wb3J0IHsgUmVjdXJyZW50VGltZUZyYW1lIH0gZnJvbSAnLi4vY29tbW9uL1JlY3VycmVudFRpbWVGcmFtZSc7XG5cbi8qIFxuICAgU2NoZWR1bGUgaXMgYSBsaXN0IG9mIHJlY3VycmVudCB0aW1lIGZyYW1lcyB0byBzcGVjaWZ5IG5vbi1hY3RpdmUgYW5hbHl0aWNzXG4gICBTY2hlZHVsZSBpcyBhc3NvY2lhdGVkIHdpdGggYWNjb3VudCBhbmQgb3B0aW9uYWxseSB3aXRoIGZvbGRlciBhbmQgbXVsdGlwbGUgc2NoZWR1bGVzIGNhbiBiZSBzcGVjaWZpZWQuXG4gICBXaGVuIGRlZmluaW5nIGEgcnVsZSwgaXQgY2FuIGJlIHNjaGVkdWxlZCBieSBvbmUgb2YgdGhlIHNjaGVkdWxlcyBhc3NvY2lhdGVkIHdpdGggdGhlIHNlbnNvcidzIGZvbGRlciwgaXQncyBwYXJlbnQgZm9sZGVyLCBpdCdzIHBhcmVudCdzIHBhcmVudCBmb2xkZXIgYW5kIHNvIG9uIHVwIHRvIHRoZSBhY2NvdW50IFxuKi9cbmV4cG9ydCBjbGFzcyBTY2hlZHVsZSBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZvbGRlciBJZCAodXNlIGVtcHR5IHN0cmluZyB0byBhc3NvY2lhdGUgdGhlIHNjaGVkdWxlIHRvIHRoZSBhY2NvdW50IGxldmVsKSBcbiAgICBwdWJsaWMgZm9sZGVySWQ6IHN0cmluZztcbiBcbiAgICAvLyBTY2hlZHVsZSBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gU2NoZWR1bGUgZGVzY3JpcHRpb24gXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gSXMgdGhpcyBzY2hlZHVsZSBpcyBlbmFibGVkIFxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xuIFxuICAgIC8vIEFjY291bnQgdGltZXpvbmUgKElBTkEgZm9ybWF0LCBkZWZhdWx0IGlzIFVUQykgXG4gICAgcHVibGljIHRpbWV6b25lOiBzdHJpbmc7XG4gXG4gICAgLy8gTGlzdCBvZiB0aW1lIGZyYW1lcyBcbiAgICBwdWJsaWMgdGltZUZyYW1lczogUmVjdXJyZW50VGltZUZyYW1lW107XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuXG59XG5cblxuIl19