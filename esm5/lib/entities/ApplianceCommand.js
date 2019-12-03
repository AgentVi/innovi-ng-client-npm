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
    ApplianceCommand.prototype.reason;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlQ29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL0FwcGxpYW5jZUNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFLcEQ7Ozs7SUFBc0MsNENBQVU7SUFBaEQ7O0lBb0NBLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFwQ0QsQ0FBc0MsVUFBVSxHQW9DL0M7Ozs7Ozs7SUFqQ0cscUNBQXlCOztJQUd6Qix1Q0FBMkI7O0lBRzNCLGtDQUFvQzs7SUFHcEMsa0NBQWlDOztJQUdqQyxrQ0FBc0I7O0lBR3RCLHNDQUE0Qzs7SUFHNUMsd0NBQThCOztJQUc5Qiw4QkFBa0I7O0lBR2xCLGlDQUFxQjs7SUFHckIscUNBQXlCOztJQUd6QixxQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBsaWFuY2VDb21tYW5kQ29kZSB9IGZyb20gJy4uL2VudW1zL0FwcGxpYW5jZUNvbW1hbmRDb2RlJztcbmltcG9ydCB7IENvbW1hbmRTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvQ29tbWFuZFN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgQ29tcG9uZW50Q29uZmlndXJhdGlvbiB9IGZyb20gJy4uL2VudGl0aWVzL0NvbXBvbmVudENvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuXG4vKiBcbiAgIEFwcGxpYW5jZSBjb21tYW5kIC0gcmVwcmVzZW50cyBjb21tYW5kcyBzZW50IHRvIHRoZSBhcHBsaWFuY2UgXG4qL1xuZXhwb3J0IGNsYXNzIEFwcGxpYW5jZUNvbW1hbmQgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBBcHBsaWFuY2UgSWQgXG4gICAgcHVibGljIGFwcGxpYW5jZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gT3BlcmF0aW9uIGNvZGU6IFVOREVGSU5FRCB8IEdFVF9DQVBBQklMSVRJRVMgfCBTRVRfQ09NUE9ORU5UUyB8IFJFTU9WRV9DT01QT05FTlRTIHwgUkVTVEFSVF9DT01QT05FTlRTIHwgTElTVF9DT05UQUlORVJTIC4uLiBcbiAgICBwdWJsaWMgb3BDb2RlOiBBcHBsaWFuY2VDb21tYW5kQ29kZTtcbiBcbiAgICAvLyBDb21tYW5kIHN0YXR1cyBmbGFnOiBQRU5ESU5HIHwgRVhFQ1VUSU5HIHwgQ09NUExFVEVEIHwgRkFJTEVEIFxuICAgIHB1YmxpYyBzdGF0dXM6IENvbW1hbmRTdGF0dXNDb2RlO1xuIFxuICAgIC8vIFRoZSBmYWlsdXJlIHJlYXNvbiBpbiBjYXNlIG9mIEZBSUxFRCBzdGF0dXMgKDQpIFxuICAgIHB1YmxpYyByZWFzb246IHN0cmluZztcbiBcbiAgICAvLyBDb21wb25lbnRzIHRvIGFkZCAocGF5bG9hZCBmb3IgU0VUX0NPTVBPTkVOVFMgb3AtY29kZSkgXG4gICAgcHVibGljIGNvbXBvbmVudHM6IENvbXBvbmVudENvbmZpZ3VyYXRpb25bXTtcbiBcbiAgICAvLyBMaXN0IG9mIGNvbXBvbmVudCBJZHMgdG8gcmVtb3ZlIG9yIHJlc2V0IChwYXlsb2FkIGZvciBSRU1PVkVfQ09NUE9ORU5UUywgUkVTVEFSVF9DT01QT05FTlRTIG9wLWNvZGVzKSBcbiAgICBwdWJsaWMgY29tcG9uZW50SWRzOiBzdHJpbmdbXTtcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IGRvY3VtZW50IHR5cGUgKHN5c3RlbSBmaWVsZCkgXG4gICAgcHVibGljIF90eXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgY3JlYXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdXBkYXRlZE9uOiBudW1iZXI7XG4gXG5cbn1cblxuXG4iXX0=