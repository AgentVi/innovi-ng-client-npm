/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   Integration target describes connectivity attributes of the integrated system
*/
var /*
   Integration target describes connectivity attributes of the integrated system
*/
IntegrationTarget = /** @class */ (function (_super) {
    tslib_1.__extends(IntegrationTarget, _super);
    function IntegrationTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IntegrationTarget;
}(BaseEntity));
/*
   Integration target describes connectivity attributes of the integrated system
*/
export { IntegrationTarget };
if (false) {
    /** @type {?} */
    IntegrationTarget.prototype.accountId;
    /** @type {?} */
    IntegrationTarget.prototype.name;
    /** @type {?} */
    IntegrationTarget.prototype.type;
    /** @type {?} */
    IntegrationTarget.prototype.host;
    /** @type {?} */
    IntegrationTarget.prototype.port;
    /** @type {?} */
    IntegrationTarget.prototype.user;
    /** @type {?} */
    IntegrationTarget.prototype.password;
    /** @type {?} */
    IntegrationTarget.prototype.url;
    /** @type {?} */
    IntegrationTarget.prototype.operation;
    /** @type {?} */
    IntegrationTarget.prototype.headers;
    /** @type {?} */
    IntegrationTarget.prototype.id;
    /** @type {?} */
    IntegrationTarget.prototype._type;
    /** @type {?} */
    IntegrationTarget.prototype.createdOn;
    /** @type {?} */
    IntegrationTarget.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdyYXRpb25UYXJnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9JbnRlZ3JhdGlvblRhcmdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQU9wRDs7OztJQUF1Qyw2Q0FBVTtJQUFqRDs7SUE2Q0EsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBQyxBQTdDRCxDQUF1QyxVQUFVLEdBNkNoRDs7Ozs7OztJQTFDRyxzQ0FBeUI7O0lBR3pCLGlDQUFvQjs7SUFHcEIsaUNBQWlDOztJQUdqQyxpQ0FBb0I7O0lBR3BCLGlDQUFvQjs7SUFHcEIsaUNBQW9COztJQUdwQixxQ0FBd0I7O0lBR3hCLGdDQUFtQjs7SUFHbkIsc0NBQXlCOztJQUd6QixvQ0FBaUM7O0lBR2pDLCtCQUFrQjs7SUFHbEIsa0NBQXFCOztJQUdyQixzQ0FBeUI7O0lBR3pCLHNDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcbmltcG9ydCB7IEludGVncmF0aW9uVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9JbnRlZ3JhdGlvblR5cGVDb2RlJztcbmltcG9ydCB7IFN0cmluZ0tleVZhbHVlIH0gZnJvbSAnLi4vY29tbW9uL1N0cmluZ0tleVZhbHVlJztcblxuLyogXG4gICBJbnRlZ3JhdGlvbiB0YXJnZXQgZGVzY3JpYmVzIGNvbm5lY3Rpdml0eSBhdHRyaWJ1dGVzIG9mIHRoZSBpbnRlZ3JhdGVkIHN5c3RlbSBcbiovXG5leHBvcnQgY2xhc3MgSW50ZWdyYXRpb25UYXJnZXQgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBJbnRlZ3JhdGlvbiBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gSW50ZWdyYXRpb24gdHlwZSBcbiAgICBwdWJsaWMgdHlwZTogSW50ZWdyYXRpb25UeXBlQ29kZTtcbiBcbiAgICAvLyBIb3N0IG5hbWUgb3IgaXAgYWRkcmVzcyAoYXBwbGljYWJsZSBmb3IgYWxsIHByb3RvY29scykgXG4gICAgcHVibGljIGhvc3Q6IHN0cmluZztcbiBcbiAgICAvLyBQb3J0IG51bWJlciAoYXBwbGljYWJsZSBmb3IgYWxsIHByb3RvY29scykgXG4gICAgcHVibGljIHBvcnQ6IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIChhcHBsaWNhYmxlIGZvciBhbGwgcHJvdG9jb2xzKSBcbiAgICBwdWJsaWMgdXNlcjogc3RyaW5nO1xuIFxuICAgIC8vIFBhc3N3b3JkIChhcHBsaWNhYmxlIGZvciBhbGwgcHJvdG9jb2xzKSBcbiAgICBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZztcbiBcbiAgICAvLyBIVFRQIHByb3RvY29sIFVSTCBwYXRoIChhcHBsaWNhYmxlIGZvciBodHRwL2h0dHBzIHByb3RvY29scykgXG4gICAgcHVibGljIHVybDogc3RyaW5nO1xuIFxuICAgIC8vIEhUVFAgcHJvdG9jb2wgT3BlcmF0aW9uOiBHRVQgfCBQT1NUIHwgUFVUIChhcHBsaWNhYmxlIGZvciBodHRwL2h0dHBzIHByb3RvY29scykgXG4gICAgcHVibGljIG9wZXJhdGlvbjogc3RyaW5nO1xuIFxuICAgIC8vIEhUVFAgcHJvdG9jb2wgSGVhZGVycyAoYXBwbGljYWJsZSBmb3IgaHR0cC9odHRwcyBwcm90b2NvbHMpIFxuICAgIHB1YmxpYyBoZWFkZXJzOiBTdHJpbmdLZXlWYWx1ZVtdO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgZG9jdW1lbnQgdHlwZSAoc3lzdGVtIGZpZWxkKSBcbiAgICBwdWJsaWMgX3R5cGU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcblxufVxuXG5cbiJdfQ==