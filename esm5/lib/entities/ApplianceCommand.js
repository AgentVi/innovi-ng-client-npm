/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   Appliance command - represents commands sent to the appliance
*/
var /*
   Appliance command - represents commands sent to the appliance
*/
ApplianceCommand = /** @class */ (function (_super) {
    tslib_1.__extends(ApplianceCommand, _super);
    function ApplianceCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ApplianceCommand;
}(BaseEntity));
/*
   Appliance command - represents commands sent to the appliance
*/
export { ApplianceCommand };
if (false) {
    /** @type {?} */
    ApplianceCommand.prototype.accountId;
    /** @type {?} */
    ApplianceCommand.prototype.applianceId;
    /** @type {?} */
    ApplianceCommand.prototype.opCode;
    /** @type {?} */
    ApplianceCommand.prototype.status;
    /** @type {?} */
    ApplianceCommand.prototype.components;
    /** @type {?} */
    ApplianceCommand.prototype.componentIds;
    /** @type {?} */
    ApplianceCommand.prototype.id;
    /** @type {?} */
    ApplianceCommand.prototype._type;
    /** @type {?} */
    ApplianceCommand.prototype.createdOn;
    /** @type {?} */
    ApplianceCommand.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlQ29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL0FwcGxpYW5jZUNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFNcEQ7Ozs7SUFBc0MsNENBQVU7SUFBaEQ7O0lBaUNBLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFqQ0QsQ0FBc0MsVUFBVSxHQWlDL0M7Ozs7Ozs7SUE5QkcscUNBQXlCOztJQUd6Qix1Q0FBMkI7O0lBRzNCLGtDQUFvQzs7SUFHcEMsa0NBQWlDOztJQUdqQyxzQ0FBNEM7O0lBRzVDLHdDQUE4Qjs7SUFHOUIsOEJBQWtCOztJQUdsQixpQ0FBcUI7O0lBR3JCLHFDQUF5Qjs7SUFHekIscUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZFN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9Db21tYW5kU3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBDb21wb25lbnRDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vZW50aXRpZXMvQ29tcG9uZW50Q29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5pbXBvcnQgeyBBcHBsaWFuY2VDb21tYW5kQ29kZSB9IGZyb20gJy4uL2VudW1zL0FwcGxpYW5jZUNvbW1hbmRDb2RlJztcblxuLyogXG4gICBBcHBsaWFuY2UgY29tbWFuZCAtIHJlcHJlc2VudHMgY29tbWFuZHMgc2VudCB0byB0aGUgYXBwbGlhbmNlIFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWFuY2VDb21tYW5kIGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gQWNjb3VudCBJZCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gQXBwbGlhbmNlIElkIFxuICAgIHB1YmxpYyBhcHBsaWFuY2VJZDogc3RyaW5nO1xuIFxuICAgIC8vIE9wZXJhdGlvbiBjb2RlOiBVTkRFRklORUQgfCBHRVRfQ0FQQUJJTElUSUVTIHwgU0VUX0NPTVBPTkVOVFMgfCBSRU1PVkVfQ09NUE9ORU5UUyB8IFJFU1RBUlRfQ09NUE9ORU5UUyB8IExJU1RfQ09OVEFJTkVSUyAuLi4gXG4gICAgcHVibGljIG9wQ29kZTogQXBwbGlhbmNlQ29tbWFuZENvZGU7XG4gXG4gICAgLy8gQ29tbWFuZCBzdGF0dXMgZmxhZzogUEVORElORyB8IEVYRUNVVElORyB8IENPTVBMRVRFRCB8IEZBSUxFRCBcbiAgICBwdWJsaWMgc3RhdHVzOiBDb21tYW5kU3RhdHVzQ29kZTtcbiBcbiAgICAvLyBDb21wb25lbnRzIHRvIGFkZCAocGF5bG9hZCBmb3IgU0VUX0NPTVBPTkVOVFMgb3AtY29kZSkgXG4gICAgcHVibGljIGNvbXBvbmVudHM6IENvbXBvbmVudENvbmZpZ3VyYXRpb25bXTtcbiBcbiAgICAvLyBMaXN0IG9mIGNvbXBvbmVudCBJZHMgdG8gcmVtb3ZlIG9yIHJlc2V0IChwYXlsb2FkIGZvciBSRU1PVkVfQ09NUE9ORU5UUywgUkVTVEFSVF9DT01QT05FTlRTIG9wLWNvZGVzKSBcbiAgICBwdWJsaWMgY29tcG9uZW50SWRzOiBzdHJpbmdbXTtcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IGRvY3VtZW50IHR5cGUgKHN5c3RlbSBmaWVsZCkgXG4gICAgcHVibGljIF90eXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgY3JlYXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdXBkYXRlZE9uOiBudW1iZXI7XG4gXG5cbn1cblxuXG4iXX0=