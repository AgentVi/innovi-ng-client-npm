/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   Audit Log - each entry represents a single action done by user
*/
var /*
   Audit Log - each entry represents a single action done by user
*/
AuditLog = /** @class */ (function (_super) {
    tslib_1.__extends(AuditLog, _super);
    function AuditLog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AuditLog;
}(BaseEntity));
/*
   Audit Log - each entry represents a single action done by user
*/
export { AuditLog };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaXRMb2cuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9BdWRpdExvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUtwRDs7OztJQUE4QixvQ0FBVTtJQUF4Qzs7SUE2Q0EsQ0FBQztJQUFELGVBQUM7QUFBRCxDQUFDLEFBN0NELENBQThCLFVBQVUsR0E2Q3ZDOzs7Ozs7O0lBMUNHLDZCQUF5Qjs7SUFHekIsMEJBQXNCOztJQUd0Qiw0QkFBaUM7O0lBR2pDLDRCQUF3Qjs7SUFHeEIsMEJBQXNCOztJQUd0Qiw0QkFBd0I7O0lBR3hCLDBCQUFzQjs7SUFHdEIsNEJBQXdCOztJQUd4QixnQ0FBNEI7O0lBRzVCLCtCQUEyQjs7SUFHM0Isc0JBQWtCOztJQUdsQix5QkFBcUI7O0lBR3JCLDZCQUF5Qjs7SUFHekIsNkJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWNjb3VudFJvbGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQWNjb3VudFJvbGVDb2RlJztcbmltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcblxuLyogXG4gICBBdWRpdCBMb2cgLSBlYWNoIGVudHJ5IHJlcHJlc2VudHMgYSBzaW5nbGUgYWN0aW9uIGRvbmUgYnkgdXNlciBcbiovXG5leHBvcnQgY2xhc3MgQXVkaXRMb2cgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIElkIFxuICAgIHB1YmxpYyB1c2VySWQ6IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIHJvbGUgaW4gdGhlIGFjY291bnQgd2hlbiB0aGUgYWN0aW9uIHdhcyBwZXJmb3JtZWQgXG4gICAgcHVibGljIHVzZXJSb2xlOiBBY2NvdW50Um9sZUNvZGU7XG4gXG4gICAgLy8gVXNlciBuYW1lIHdoZW4gdGhlIGFjdGlvbiB3YXMgcGVyZm9ybWVkIFxuICAgIHB1YmxpYyB1c2VyTmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIEFjdGlvbiB0aGF0IHdhcyBwZXJmb3JtZWQgXG4gICAgcHVibGljIGFjdGlvbjogc3RyaW5nO1xuIFxuICAgIC8vIENoYW5nZWQgaXRlbSB0eXBlIFxuICAgIHB1YmxpYyBpdGVtVHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIENoYW5nZWQgaXRlbSBJZCBcbiAgICBwdWJsaWMgaXRlbUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gSXRlbSBOYW1lIFxuICAgIHB1YmxpYyBpdGVtTmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIEl0ZW0gdmFsdWUgYmVmb3JlIGNoYW5nZSBbSnNvbl0gXG4gICAgcHVibGljIGJlZm9yZUNoYW5nZTogc3RyaW5nO1xuIFxuICAgIC8vIEl0ZW0gZGVsdGEgYWZ0ZXIgY2hhbmdlIFtKc29uXSBcbiAgICBwdWJsaWMgYWZ0ZXJDaGFuZ2U6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IGRvY3VtZW50IHR5cGUgKHN5c3RlbSBmaWVsZCkgXG4gICAgcHVibGljIF90eXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgY3JlYXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdXBkYXRlZE9uOiBudW1iZXI7XG4gXG5cbn1cblxuXG4iXX0=