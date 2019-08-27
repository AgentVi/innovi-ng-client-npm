/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseEntity } from '../entities/BaseEntity';
/*
   Audit Log - each entry represents a single action done by user
*/
export class AuditLog extends BaseEntity {
}
if (false) {
    /** @type {?} */
    AuditLog.prototype.accountId;
    /** @type {?} */
    AuditLog.prototype.userId;
    /** @type {?} */
    AuditLog.prototype.userRole;
    /** @type {?} */
    AuditLog.prototype.userName;
    /** @type {?} */
    AuditLog.prototype.action;
    /** @type {?} */
    AuditLog.prototype.itemType;
    /** @type {?} */
    AuditLog.prototype.itemId;
    /** @type {?} */
    AuditLog.prototype.itemName;
    /** @type {?} */
    AuditLog.prototype.beforeChange;
    /** @type {?} */
    AuditLog.prototype.afterChange;
    /** @type {?} */
    AuditLog.prototype.id;
    /** @type {?} */
    AuditLog.prototype._type;
    /** @type {?} */
    AuditLog.prototype.createdOn;
    /** @type {?} */
    AuditLog.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaXRMb2cuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9BdWRpdExvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBS3BELE1BQU0sT0FBTyxRQUFTLFNBQVEsVUFBVTtDQTZDdkM7OztJQTFDRyw2QkFBeUI7O0lBR3pCLDBCQUFzQjs7SUFHdEIsNEJBQWlDOztJQUdqQyw0QkFBd0I7O0lBR3hCLDBCQUFzQjs7SUFHdEIsNEJBQXdCOztJQUd4QiwwQkFBc0I7O0lBR3RCLDRCQUF3Qjs7SUFHeEIsZ0NBQTRCOztJQUc1QiwrQkFBMkI7O0lBRzNCLHNCQUFrQjs7SUFHbEIseUJBQXFCOztJQUdyQiw2QkFBeUI7O0lBR3pCLDZCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY291bnRSb2xlQ29kZSB9IGZyb20gJy4uL2VudW1zL0FjY291bnRSb2xlQ29kZSc7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5cbi8qIFxuICAgQXVkaXQgTG9nIC0gZWFjaCBlbnRyeSByZXByZXNlbnRzIGEgc2luZ2xlIGFjdGlvbiBkb25lIGJ5IHVzZXIgXG4qL1xuZXhwb3J0IGNsYXNzIEF1ZGl0TG9nIGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gQWNjb3VudCBJZCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gVXNlciBJZCBcbiAgICBwdWJsaWMgdXNlcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gVXNlciByb2xlIGluIHRoZSBhY2NvdW50IHdoZW4gdGhlIGFjdGlvbiB3YXMgcGVyZm9ybWVkIFxuICAgIHB1YmxpYyB1c2VyUm9sZTogQWNjb3VudFJvbGVDb2RlO1xuIFxuICAgIC8vIFVzZXIgbmFtZSB3aGVuIHRoZSBhY3Rpb24gd2FzIHBlcmZvcm1lZCBcbiAgICBwdWJsaWMgdXNlck5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBBY3Rpb24gdGhhdCB3YXMgcGVyZm9ybWVkIFxuICAgIHB1YmxpYyBhY3Rpb246IHN0cmluZztcbiBcbiAgICAvLyBDaGFuZ2VkIGl0ZW0gdHlwZSBcbiAgICBwdWJsaWMgaXRlbVR5cGU6IHN0cmluZztcbiBcbiAgICAvLyBDaGFuZ2VkIGl0ZW0gSWQgXG4gICAgcHVibGljIGl0ZW1JZDogc3RyaW5nO1xuIFxuICAgIC8vIEl0ZW0gTmFtZSBcbiAgICBwdWJsaWMgaXRlbU5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBJdGVtIHZhbHVlIGJlZm9yZSBjaGFuZ2UgW0pzb25dIFxuICAgIHB1YmxpYyBiZWZvcmVDaGFuZ2U6IHN0cmluZztcbiBcbiAgICAvLyBJdGVtIGRlbHRhIGFmdGVyIGNoYW5nZSBbSnNvbl0gXG4gICAgcHVibGljIGFmdGVyQ2hhbmdlOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuXG59XG5cblxuIl19