/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseEntity } from '../entities/BaseEntity';
/*
   Account entity in the system represents customer account which groups set of folders, cameras, rules, integrations and customer specific operational configuration
*/
export class Account extends BaseEntity {
}
if (false) {
    /** @type {?} */
    Account.prototype.name;
    /** @type {?} */
    Account.prototype.key;
    /** @type {?} */
    Account.prototype.type;
    /** @type {?} */
    Account.prototype.status;
    /** @type {?} */
    Account.prototype.suspendedOn;
    /** @type {?} */
    Account.prototype.groups;
    /** @type {?} */
    Account.prototype.geoArea;
    /** @type {?} */
    Account.prototype.geoLocation;
    /** @type {?} */
    Account.prototype.timezone;
    /** @type {?} */
    Account.prototype.expiredOn;
    /** @type {?} */
    Account.prototype.maxChannels;
    /** @type {?} */
    Account.prototype.id;
    /** @type {?} */
    Account.prototype._type;
    /** @type {?} */
    Account.prototype.createdOn;
    /** @type {?} */
    Account.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL0FjY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUtwRCxNQUFNLE9BQU8sT0FBUSxTQUFRLFVBQVU7Q0ErQ3RDOzs7SUE1Q0csdUJBQW9COztJQUdwQixzQkFBbUI7O0lBR25CLHVCQUE2Qjs7SUFHN0IseUJBQWlDOztJQUdqQyw4QkFBMkI7O0lBRzNCLHlCQUF3Qjs7SUFHeEIsMEJBQTZCOztJQUc3Qiw4QkFBK0I7O0lBRy9CLDJCQUF3Qjs7SUFHeEIsNEJBQXlCOztJQUd6Qiw4QkFBMkI7O0lBRzNCLHFCQUFrQjs7SUFHbEIsd0JBQXFCOztJQUdyQiw0QkFBeUI7O0lBR3pCLDRCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY291bnRUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0FjY291bnRUeXBlQ29kZSc7XG5pbXBvcnQgeyBBY2NvdW50U3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0FjY291bnRTdGF0dXNDb2RlJztcbmltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICcuLi9jb21tb24vQ29vcmRpbmF0ZSc7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5cbi8qIFxuICAgQWNjb3VudCBlbnRpdHkgaW4gdGhlIHN5c3RlbSByZXByZXNlbnRzIGN1c3RvbWVyIGFjY291bnQgd2hpY2ggZ3JvdXBzIHNldCBvZiBmb2xkZXJzLCBjYW1lcmFzLCBydWxlcywgaW50ZWdyYXRpb25zIGFuZCBjdXN0b21lciBzcGVjaWZpYyBvcGVyYXRpb25hbCBjb25maWd1cmF0aW9uIFxuKi9cbmV4cG9ydCBjbGFzcyBBY2NvdW50IGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gQWNjb3VudCBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gQWNjb3VudCBrZXkgXG4gICAgcHVibGljIGtleTogc3RyaW5nO1xuIFxuICAgIC8vIEFjY291bnQgVHlwZTogVU5ERUZJTkVEIHwgREVNTyB8IFRSSUFMIHwgUEFSVE5FUiB8IENVU1RPTUVSIFxuICAgIHB1YmxpYyB0eXBlOiBBY2NvdW50VHlwZUNvZGU7XG4gXG4gICAgLy8gQWNjb3VudCBzdGF0dXM6IFVOREVGSU5FRCB8IEFDVElWRSB8IFNVU1BFTkRFRCBcbiAgICBwdWJsaWMgc3RhdHVzOiBBY2NvdW50U3RhdHVzQ29kZTtcbiBcbiAgICAvLyBXaGVuIHRoZSBhY2NvdW50IHdhcyBzdXNwZW5kZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIHNlY29uZCBpbmxpbmUgZmllbGQgZG9jdW1lbnRhdGlvbiBcbiAgICBwdWJsaWMgc3VzcGVuZGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBMaXN0IG9mIGFzc29jaWF0ZWQgYWNjb3VudCBncm91cHMgKGZvciBmZWF0dXJlIHRvZ2dsZSkgXG4gICAgcHVibGljIGdyb3Vwczogc3RyaW5nW107XG4gXG4gICAgLy8gQWNjb3VudCBnZW8gYXJlYSBwb2x5Z29uICh0aGUgYm91bmRpbmcgcG9seWdvbiBvZiB0aGUgYXJlYSkgXG4gICAgcHVibGljIGdlb0FyZWE6IENvb3JkaW5hdGVbXTtcbiBcbiAgICAvLyBBY2NvdW50IGdlbyBsb2NhdGlvbiAodGhlIGNlbnRlciBjb29yZGluYXRlIG9mIHRoZSBhY2NvdW50IHJlZ2lvbikgXG4gICAgcHVibGljIGdlb0xvY2F0aW9uOiBDb29yZGluYXRlO1xuIFxuICAgIC8vIEFjY291bnQgdGltZXpvbmUgKElBTkEgZm9ybWF0LCBkZWZhdWx0IGlzIFVUQykgXG4gICAgcHVibGljIHRpbWV6b25lOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgYWNjb3VudCB3aWxsIGJlIGV4cGlyZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdICgwIG1lYW5zIG5vIGV4cGlyYXRpb24gdGltZSkgXG4gICAgcHVibGljIGV4cGlyZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIExpbWl0IHRoZSBudW1iZXIgb2YgY2hhbm5lbHMgcGVyIGFjY291bnQgKDAgbWVhbnMgbm8gbGltaXQpIFxuICAgIHB1YmxpYyBtYXhDaGFubmVsczogbnVtYmVyO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgZG9jdW1lbnQgdHlwZSAoc3lzdGVtIGZpZWxkKSBcbiAgICBwdWJsaWMgX3R5cGU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcbn1cblxuXG4iXX0=