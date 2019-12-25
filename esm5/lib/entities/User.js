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
    User.prototype.lastSignIn;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL1VzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFPcEQ7Ozs7SUFBMEIsZ0NBQVU7SUFBcEM7O0lBK0RBLENBQUM7SUFBRCxXQUFDO0FBQUQsQ0FBQyxBQS9ERCxDQUEwQixVQUFVLEdBK0RuQzs7Ozs7OztJQTVERyxvQkFBb0I7O0lBR3BCLHFCQUFxQjs7SUFHckIsc0JBQXNCOztJQUd0QixvQkFBb0I7O0lBR3BCLG9CQUFvQjs7SUFHcEIsb0JBQTBCOztJQUcxQixzQkFBOEI7O0lBRzlCLDJCQUEyQjs7SUFHM0IsOEJBQThCOztJQUc5QiwwQkFBMEI7O0lBRzFCLGdDQUFnQzs7SUFHaEMsOEJBQStCOztJQUcvQixpQ0FBaUM7O0lBR2pDLDRCQUFtQzs7SUFHbkMsOEJBQThCOztJQUc5QiwyQkFBMkI7O0lBRzNCLGtCQUFrQjs7SUFHbEIscUJBQXFCOztJQUdyQix5QkFBeUI7O0lBR3pCLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY291bnRSb2xlIH0gZnJvbSAnLi4vY29tbW9uL0FjY291bnRSb2xlJztcbmltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcbmltcG9ydCB7IFVzZXJUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1VzZXJUeXBlQ29kZSc7XG5pbXBvcnQgeyBVc2VyU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL1VzZXJTdGF0dXNDb2RlJztcblxuLyogXG4gICBVc2VyIHR5cGUgXG4qL1xuZXhwb3J0IGNsYXNzIFVzZXIgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBVc2VyIG5hbWUgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIGVtYWlsIFxuICAgIHB1YmxpYyBlbWFpbDogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgbW9iaWxlIHBob25lIG51bWJlciAoZm9yIG5vdGlmaWNhdGlvbiBhbmQgdmFsaWRhdGlvbikgXG4gICAgcHVibGljIG1vYmlsZTogc3RyaW5nO1xuIFxuICAgIC8vIFBhc3N3b3JkIHNhbHQgXG4gICAgcHVibGljIHNhbHQ6IHN0cmluZztcbiBcbiAgICAvLyBQYXNzd29yZCBoYXNoIFxuICAgIHB1YmxpYyBoYXNoOiBzdHJpbmc7XG4gXG4gICAgLy8gVXNlciB0eXBlOiBVTkRFRklORUQgfCBTWVNBRE1JTiB8IFNVUFBPUlQgfCBVU0VSIFxuICAgIHB1YmxpYyB0eXBlOiBVc2VyVHlwZUNvZGU7XG4gXG4gICAgLy8gVXNlciBzdGF0dXM6IFVOREVGSU5FRCB8IFBFTkRJTkcgfCBBQ1RJVkUgfCBCTE9DS0VEIHwgU1VTUEVOREVEIFxuICAgIHB1YmxpYyBzdGF0dXM6IFVzZXJTdGF0dXNDb2RlO1xuIFxuICAgIC8vIFdoZW4gdXNlciB3YXMgbGFzdCBzdXNwZW5kZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBzdXNwZW5kZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIE51bWJlciBvZiBTaWduLWluIEF0dGVtcHRzIFxuICAgIHB1YmxpYyBzaWduSW5BdHRlbXB0czogbnVtYmVyO1xuIFxuICAgIC8vIExhc3QgU2lnbi1pbiBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGxhc3RTaWduSW46IG51bWJlcjtcbiBcbiAgICAvLyBMYXN0IEZhaWxlZCBTaWduLWluIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgbGFzdEZhaWxlZFNpZ25JbjogbnVtYmVyO1xuIFxuICAgIC8vIFVzZXIgbXVzdCBjaGFuZ2UgcGFzc3dvcmQgb24gbmV4dCBsb2dpbiBcbiAgICBwdWJsaWMgY2hhbmdlUGFzc3dvcmQ6IGJvb2xlYW47XG4gXG4gICAgLy8gV2hlbiB1c2VyIGNyZWF0ZWQgaGlzIHBhc3N3b3JkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgcGFzc3dvcmRDaGFuZ2VkT246IG51bWJlcjtcbiBcbiAgICAvLyBMaXN0IG9mIGFjY291bnRzIGFuZCByb2xlcyB0aGUgdXNlciBoYXMgYWNjZXNzIHRvIFxuICAgIHB1YmxpYyBhY2NvdW50Um9sZXM6IEFjY291bnRSb2xlW107XG4gXG4gICAgLy8gRGVmYXVsdCBhY2NvdW50IElkIFxuICAgIHB1YmxpYyBkZWZhdWx0QWNjb3VudDogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgZGVzY3JpcHRpb24gXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuXG59XG5cblxuIl19