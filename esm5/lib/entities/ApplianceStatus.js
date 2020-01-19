/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   Appliance status - reported periodically by the appliance
*/
var /*
   Appliance status - reported periodically by the appliance
*/
ApplianceStatus = /** @class */ (function (_super) {
    tslib_1.__extends(ApplianceStatus, _super);
    function ApplianceStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ApplianceStatus;
}(BaseEntity));
/*
   Appliance status - reported periodically by the appliance
*/
export { ApplianceStatus };
if (false) {
    /** @type {?} */
    ApplianceStatus.prototype.applianceId;
    /** @type {?} */
    ApplianceStatus.prototype.accountId;
    /** @type {?} */
    ApplianceStatus.prototype.status;
    /** @type {?} */
    ApplianceStatus.prototype.cpuAvg;
    /** @type {?} */
    ApplianceStatus.prototype.cpuMax;
    /** @type {?} */
    ApplianceStatus.prototype.ram;
    /** @type {?} */
    ApplianceStatus.prototype.loadAvg;
    /** @type {?} */
    ApplianceStatus.prototype.id;
    /** @type {?} */
    ApplianceStatus.prototype._type;
    /** @type {?} */
    ApplianceStatus.prototype.createdOn;
    /** @type {?} */
    ApplianceStatus.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlU3RhdHVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW50aXRpZXMvQXBwbGlhbmNlU3RhdHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBTXBEOzs7O0lBQXFDLDJDQUFVO0lBQS9DOztJQW9DQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLEFBcENELENBQXFDLFVBQVUsR0FvQzlDOzs7Ozs7O0lBakNHLHNDQUEyQjs7SUFHM0Isb0NBQXlCOztJQUd6QixpQ0FBbUM7O0lBR25DLGlDQUFzQjs7SUFHdEIsaUNBQXNCOztJQUd0Qiw4QkFBbUI7O0lBR25CLGtDQUF1Qjs7SUFHdkIsNkJBQWtCOztJQUdsQixnQ0FBcUI7O0lBR3JCLG9DQUF5Qjs7SUFHekIsb0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuaW1wb3J0IHsgQXBwbGlhbmNlU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0FwcGxpYW5jZVN0YXR1c0NvZGUnO1xuXG4vKiBcbiAgIEFwcGxpYW5jZSBzdGF0dXMgLSByZXBvcnRlZCBwZXJpb2RpY2FsbHkgYnkgdGhlIGFwcGxpYW5jZSBcbiovXG5leHBvcnQgY2xhc3MgQXBwbGlhbmNlU3RhdHVzIGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gQXBwbGlhbmNlIElkIFxuICAgIHB1YmxpYyBhcHBsaWFuY2VJZDogc3RyaW5nO1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBzdGF0dXMgXG4gICAgcHVibGljIHN0YXR1czogQXBwbGlhbmNlU3RhdHVzQ29kZTtcbiBcbiAgICAvLyBBdmVyYWdlIENQVSB1c2FnZSBwZXJjZW50YWdlIFsxLTEwMF0gXG4gICAgcHVibGljIGNwdUF2ZzogbnVtYmVyO1xuIFxuICAgIC8vIE1heCBDUFUgdXNhZ2UgcGVyY2VudGFnZSBbMS0xMDBdIFxuICAgIHB1YmxpYyBjcHVNYXg6IG51bWJlcjtcbiBcbiAgICAvLyBSQU0gdXNhZ2UgcGVyY2VudGFnZSBbMS0xMDBdIFxuICAgIHB1YmxpYyByYW06IG51bWJlcjtcbiBcbiAgICAvLyBMb2FkIGF2ZXJhZ2UgcGVyY2VudGFnZSAoY291bGQgYmUgbW9yZSB0aGFuIDEwMCwgZS5nLiBsb2FkIGF2ZXJhZ2Ugb2YgMi4yMSB3aWxsIGJlIHJlcHJlc2VudGVkIGFzIDIyMSkgXG4gICAgcHVibGljIGxvYWRBdmc6IG51bWJlcjtcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IGRvY3VtZW50IHR5cGUgKHN5c3RlbSBmaWVsZCkgXG4gICAgcHVibGljIF90eXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgY3JlYXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdXBkYXRlZE9uOiBudW1iZXI7XG4gXG5cbn1cblxuXG4iXX0=