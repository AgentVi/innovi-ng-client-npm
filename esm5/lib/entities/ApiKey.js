/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   API Key is used per application (e.g. Portal, Console, Mobile App) or service (e.g. Health Service, Search Service ...) for identifying the consumer.
   The access to sets of REST endpoints is restricted according the API key.
   API key also dictates the default session TTL per application (e.g. 20 minutes for Portal or Console, 30 days for Mobile app)
*/
var /*
   API Key is used per application (e.g. Portal, Console, Mobile App) or service (e.g. Health Service, Search Service ...) for identifying the consumer.
   The access to sets of REST endpoints is restricted according the API key.
   API key also dictates the default session TTL per application (e.g. 20 minutes for Portal or Console, 30 days for Mobile app)
*/
ApiKey = /** @class */ (function (_super) {
    tslib_1.__extends(ApiKey, _super);
    function ApiKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ApiKey;
}(BaseEntity));
/*
   API Key is used per application (e.g. Portal, Console, Mobile App) or service (e.g. Health Service, Search Service ...) for identifying the consumer.
   The access to sets of REST endpoints is restricted according the API key.
   API key also dictates the default session TTL per application (e.g. 20 minutes for Portal or Console, 30 days for Mobile app)
*/
export { ApiKey };
if (false) {
    /** @type {?} */
    ApiKey.prototype.appName;
    /** @type {?} */
    ApiKey.prototype.appKey;
    /** @type {?} */
    ApiKey.prototype.version;
    /** @type {?} */
    ApiKey.prototype.isSystemKey;
    /** @type {?} */
    ApiKey.prototype.isEnabled;
    /** @type {?} */
    ApiKey.prototype.id;
    /** @type {?} */
    ApiKey.prototype._type;
    /** @type {?} */
    ApiKey.prototype.createdOn;
    /** @type {?} */
    ApiKey.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBpS2V5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW50aXRpZXMvQXBpS2V5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7QUFPcEQ7Ozs7OztJQUE0QixrQ0FBVTtJQUF0Qzs7SUE2QkEsQ0FBQztJQUFELGFBQUM7QUFBRCxDQUFDLEFBN0JELENBQTRCLFVBQVUsR0E2QnJDOzs7Ozs7Ozs7SUExQkcseUJBQXVCOztJQUd2Qix3QkFBc0I7O0lBR3RCLHlCQUF1Qjs7SUFHdkIsNkJBQTRCOztJQUc1QiwyQkFBMEI7O0lBRzFCLG9CQUFrQjs7SUFHbEIsdUJBQXFCOztJQUdyQiwyQkFBeUI7O0lBR3pCLDJCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcblxuLyogXG4gICBBUEkgS2V5IGlzIHVzZWQgcGVyIGFwcGxpY2F0aW9uIChlLmcuIFBvcnRhbCwgQ29uc29sZSwgTW9iaWxlIEFwcCkgb3Igc2VydmljZSAoZS5nLiBIZWFsdGggU2VydmljZSwgU2VhcmNoIFNlcnZpY2UgLi4uKSBmb3IgaWRlbnRpZnlpbmcgdGhlIGNvbnN1bWVyLlxuICAgVGhlIGFjY2VzcyB0byBzZXRzIG9mIFJFU1QgZW5kcG9pbnRzIGlzIHJlc3RyaWN0ZWQgYWNjb3JkaW5nIHRoZSBBUEkga2V5LlxuICAgQVBJIGtleSBhbHNvIGRpY3RhdGVzIHRoZSBkZWZhdWx0IHNlc3Npb24gVFRMIHBlciBhcHBsaWNhdGlvbiAoZS5nLiAyMCBtaW51dGVzIGZvciBQb3J0YWwgb3IgQ29uc29sZSwgMzAgZGF5cyBmb3IgTW9iaWxlIGFwcCkgXG4qL1xuZXhwb3J0IGNsYXNzIEFwaUtleSBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFwcGxpY2F0aW9uIE5hbWUgXG4gICAgcHVibGljIGFwcE5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBBcHBsaWNhdGlvbiBrZXkgXG4gICAgcHVibGljIGFwcEtleTogc3RyaW5nO1xuIFxuICAgIC8vIEtleSB2ZXJzaW9uIChmb3Iga2V5IHJvdGF0aW9uKSBcbiAgICBwdWJsaWMgdmVyc2lvbjogbnVtYmVyO1xuIFxuICAgIC8vIEZsYWcgdG8gaW5kaWNhdGUgaWYgdGhpcyBhIHN5c3RlbSBrZXkgb3IgdXNlciBkZWZpbmVkIGtleSBcbiAgICBwdWJsaWMgaXNTeXN0ZW1LZXk6IGJvb2xlYW47XG4gXG4gICAgLy8gRmxhZyB0byBpbmRpY2F0ZSBpZiB0aGUga2V5IGlzIGVuYWJsZWQgXG4gICAgcHVibGljIGlzRW5hYmxlZDogYm9vbGVhbjtcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IGRvY3VtZW50IHR5cGUgKHN5c3RlbSBmaWVsZCkgXG4gICAgcHVibGljIF90eXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgY3JlYXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdXBkYXRlZE9uOiBudW1iZXI7XG4gXG59XG5cblxuIl19