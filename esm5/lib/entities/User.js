/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   User type
*/
var /*
   User type
*/
User = /** @class */ (function (_super) {
    tslib_1.__extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return User;
}(BaseEntity));
/*
   User type
*/
export { User };
if (false) {
    /** @type {?} */
    User.prototype.name;
    /** @type {?} */
    User.prototype.email;
    /** @type {?} */
    User.prototype.mobile;
    /** @type {?} */
    User.prototype.salt;
    /** @type {?} */
    User.prototype.hash;
    /** @type {?} */
    User.prototype.type;
    /** @type {?} */
    User.prototype.status;
    /** @type {?} */
    User.prototype.suspendedOn;
    /** @type {?} */
    User.prototype.signInAttempts;
    /** @type {?} */
    User.prototype.lastFailedSignIn;
    /** @type {?} */
    User.prototype.changePassword;
    /** @type {?} */
    User.prototype.passwordChangedOn;
    /** @type {?} */
    User.prototype.accountRoles;
    /** @type {?} */
    User.prototype.defaultAccount;
    /** @type {?} */
    User.prototype.description;
    /** @type {?} */
    User.prototype.id;
    /** @type {?} */
    User.prototype._type;
    /** @type {?} */
    User.prototype.createdOn;
    /** @type {?} */
    User.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL1VzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFPcEQ7Ozs7SUFBMEIsZ0NBQVU7SUFBcEM7O0lBNERBLENBQUM7SUFBRCxXQUFDO0FBQUQsQ0FBQyxBQTVERCxDQUEwQixVQUFVLEdBNERuQzs7Ozs7OztJQXpERyxvQkFBb0I7O0lBR3BCLHFCQUFxQjs7SUFHckIsc0JBQXNCOztJQUd0QixvQkFBb0I7O0lBR3BCLG9CQUFvQjs7SUFHcEIsb0JBQTBCOztJQUcxQixzQkFBOEI7O0lBRzlCLDJCQUEyQjs7SUFHM0IsOEJBQThCOztJQUc5QixnQ0FBZ0M7O0lBR2hDLDhCQUErQjs7SUFHL0IsaUNBQWlDOztJQUdqQyw0QkFBbUM7O0lBR25DLDhCQUE4Qjs7SUFHOUIsMkJBQTJCOztJQUczQixrQkFBa0I7O0lBR2xCLHFCQUFxQjs7SUFHckIseUJBQXlCOztJQUd6Qix5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY2NvdW50Um9sZSB9IGZyb20gJy4uL2NvbW1vbi9BY2NvdW50Um9sZSc7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5pbXBvcnQgeyBVc2VyVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9Vc2VyVHlwZUNvZGUnO1xuaW1wb3J0IHsgVXNlclN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9Vc2VyU3RhdHVzQ29kZSc7XG5cbi8qIFxuICAgVXNlciB0eXBlIFxuKi9cbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gVXNlciBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gVXNlciBlbWFpbCBcbiAgICBwdWJsaWMgZW1haWw6IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIG1vYmlsZSBwaG9uZSBudW1iZXIgKGZvciBub3RpZmljYXRpb24gYW5kIHZhbGlkYXRpb24pIFxuICAgIHB1YmxpYyBtb2JpbGU6IHN0cmluZztcbiBcbiAgICAvLyBQYXNzd29yZCBzYWx0IFxuICAgIHB1YmxpYyBzYWx0OiBzdHJpbmc7XG4gXG4gICAgLy8gUGFzc3dvcmQgaGFzaCBcbiAgICBwdWJsaWMgaGFzaDogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgdHlwZTogVU5ERUZJTkVEIHwgU1lTQURNSU4gfCBTVVBQT1JUIHwgVVNFUiBcbiAgICBwdWJsaWMgdHlwZTogVXNlclR5cGVDb2RlO1xuIFxuICAgIC8vIFVzZXIgc3RhdHVzOiBVTkRFRklORUQgfCBQRU5ESU5HIHwgQUNUSVZFIHwgQkxPQ0tFRCB8IFNVU1BFTkRFRCBcbiAgICBwdWJsaWMgc3RhdHVzOiBVc2VyU3RhdHVzQ29kZTtcbiBcbiAgICAvLyBXaGVuIHVzZXIgd2FzIGxhc3Qgc3VzcGVuZGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgc3VzcGVuZGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBOdW1iZXIgb2YgU2lnbi1pbiBBdHRlbXB0cyBcbiAgICBwdWJsaWMgc2lnbkluQXR0ZW1wdHM6IG51bWJlcjtcbiBcbiAgICAvLyBMYXN0IEZhaWxlZCBTaWduLWluIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgbGFzdEZhaWxlZFNpZ25JbjogbnVtYmVyO1xuIFxuICAgIC8vIFVzZXIgbXVzdCBjaGFuZ2UgcGFzc3dvcmQgb24gbmV4dCBsb2dpbiBcbiAgICBwdWJsaWMgY2hhbmdlUGFzc3dvcmQ6IGJvb2xlYW47XG4gXG4gICAgLy8gV2hlbiB1c2VyIGNyZWF0ZWQgaGlzIHBhc3N3b3JkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgcGFzc3dvcmRDaGFuZ2VkT246IG51bWJlcjtcbiBcbiAgICAvLyBMaXN0IG9mIGFjY291bnRzIGFuZCByb2xlcyB0aGUgdXNlciBoYXMgYWNjZXNzIHRvIFxuICAgIHB1YmxpYyBhY2NvdW50Um9sZXM6IEFjY291bnRSb2xlW107XG4gXG4gICAgLy8gRGVmYXVsdCBhY2NvdW50IElkIFxuICAgIHB1YmxpYyBkZWZhdWx0QWNjb3VudDogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgZGVzY3JpcHRpb24gXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuXG59XG5cblxuIl19