/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   Integration action describes integration protocol and details to execute
*/
var /*
   Integration action describes integration protocol and details to execute
*/
IntegrationAction = /** @class */ (function (_super) {
    tslib_1.__extends(IntegrationAction, _super);
    function IntegrationAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IntegrationAction;
}(BaseEntity));
/*
   Integration action describes integration protocol and details to execute
*/
export { IntegrationAction };
if (false) {
    /** @type {?} */
    IntegrationAction.prototype.accountId;
    /** @type {?} */
    IntegrationAction.prototype.folderId;
    /** @type {?} */
    IntegrationAction.prototype.name;
    /** @type {?} */
    IntegrationAction.prototype.uri;
    /** @type {?} */
    IntegrationAction.prototype.operation;
    /** @type {?} */
    IntegrationAction.prototype.headers;
    /** @type {?} */
    IntegrationAction.prototype.recipients;
    /** @type {?} */
    IntegrationAction.prototype.subject;
    /** @type {?} */
    IntegrationAction.prototype.body;
    /** @type {?} */
    IntegrationAction.prototype.mimeType;
    /** @type {?} */
    IntegrationAction.prototype.clipRequired;
    /** @type {?} */
    IntegrationAction.prototype.id;
    /** @type {?} */
    IntegrationAction.prototype._type;
    /** @type {?} */
    IntegrationAction.prototype.createdOn;
    /** @type {?} */
    IntegrationAction.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdyYXRpb25BY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9JbnRlZ3JhdGlvbkFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUtwRDs7OztJQUF1Qyw2Q0FBVTtJQUFqRDs7SUFnREEsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBQyxBQWhERCxDQUF1QyxVQUFVLEdBZ0RoRDs7Ozs7OztJQTdDRyxzQ0FBeUI7O0lBR3pCLHFDQUF3Qjs7SUFHeEIsaUNBQW9COztJQUdwQixnQ0FBbUI7O0lBR25CLHNDQUF5Qjs7SUFHekIsb0NBQWlDOztJQUdqQyx1Q0FBNEI7O0lBRzVCLG9DQUF1Qjs7SUFHdkIsaUNBQW9COztJQUdwQixxQ0FBd0I7O0lBR3hCLHlDQUE2Qjs7SUFHN0IsK0JBQWtCOztJQUdsQixrQ0FBcUI7O0lBR3JCLHNDQUF5Qjs7SUFHekIsc0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RyaW5nS2V5VmFsdWUgfSBmcm9tICcuLi9jb21tb24vU3RyaW5nS2V5VmFsdWUnO1xuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuXG4vKiBcbiAgIEludGVncmF0aW9uIGFjdGlvbiBkZXNjcmliZXMgaW50ZWdyYXRpb24gcHJvdG9jb2wgYW5kIGRldGFpbHMgdG8gZXhlY3V0ZSBcbiovXG5leHBvcnQgY2xhc3MgSW50ZWdyYXRpb25BY3Rpb24gZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBGb2xkZXIgSWQgKEVtcHR5IGlmIGludGVncmF0aW9uIGlzIGFzc29jaWF0ZWQgdG8gdGhlIGFjY291bnQgbGV2ZWwpIFxuICAgIHB1YmxpYyBmb2xkZXJJZDogc3RyaW5nO1xuIFxuICAgIC8vIEludGVncmF0aW9uIG5hbWUgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBUaGUgVVJJIGVuY2Fwc3VsYXRlcyBtYW55IG9mIHRoZSBwcm90b2NvbCBzcGVjaWZpY2F0aW9uIChiYXNlZCBvbiBSRkMtMzk4Nik6IHNjaGVtYTovL1t1c2VyOnBhc3N3b3JkXUBob3N0Oltwb3J0XS9bcGF0aF0/W3BhcmFtZXRlcnNdIHN1cHBvcnRlZCBzY2hlbWFzOiBodHRwIHwgaHR0cHMgfCBzbXRwIHwgZW1haWwgXG4gICAgcHVibGljIHVyaTogc3RyaW5nO1xuIFxuICAgIC8vIEhUVFAgcHJvdG9jb2wgT3BlcmF0aW9uOiBHRVQgfCBQT1NUIHwgUFVUIChhcHBsaWNhYmxlIGZvciBodHRwL2h0dHBzIHByb3RvY29scykgXG4gICAgcHVibGljIG9wZXJhdGlvbjogc3RyaW5nO1xuIFxuICAgIC8vIEhUVFAgcHJvdG9jb2wgSGVhZGVycyAoYXBwbGljYWJsZSBmb3IgaHR0cC9odHRwcyBwcm90b2NvbHMpIFxuICAgIHB1YmxpYyBoZWFkZXJzOiBTdHJpbmdLZXlWYWx1ZVtdO1xuIFxuICAgIC8vIFNNVFAgcHJvdG9jb2wgTGlzdCBvZiByZWNpcGllbnRzIChhcHBsaWNhYmxlIGZvciBzbXRwIHByb3RvY29sKSBcbiAgICBwdWJsaWMgcmVjaXBpZW50czogc3RyaW5nW107XG4gXG4gICAgLy8gU01UUCBwcm90b2NvbCBNZXNzYWdlIHN1YmplY3QgdGVtcGxhdGUgKGFwcGxpY2FibGUgZm9yIHNtdHAgcHJvdG9jb2wpIFxuICAgIHB1YmxpYyBzdWJqZWN0OiBzdHJpbmc7XG4gXG4gICAgLy8gTWVzc2FnZSBib2R5IHRlbXBsYXRlIFxuICAgIHB1YmxpYyBib2R5OiBzdHJpbmc7XG4gXG4gICAgLy8gTWVzc2FnZSBjb250ZW50IG1pbWUgdHlwZSBcbiAgICBwdWJsaWMgbWltZVR5cGU6IHN0cmluZztcbiBcbiAgICAvLyBJcyBjbGlwIHJlcXVpcmVkIGZvciB0aGUgaW50ZWdyYXRpb24gXG4gICAgcHVibGljIGNsaXBSZXF1aXJlZDogYm9vbGVhbjtcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IGRvY3VtZW50IHR5cGUgKHN5c3RlbSBmaWVsZCkgXG4gICAgcHVibGljIF90eXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgY3JlYXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdXBkYXRlZE9uOiBudW1iZXI7XG4gXG5cbn1cblxuXG4iXX0=