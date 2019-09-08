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
    User.prototype.id;
    /** @type {?} */
    User.prototype._type;
    /** @type {?} */
    User.prototype.createdOn;
    /** @type {?} */
    User.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL1VzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFNcEQ7Ozs7SUFBMEIsZ0NBQVU7SUFBcEM7O0lBeURBLENBQUM7SUFBRCxXQUFDO0FBQUQsQ0FBQyxBQXpERCxDQUEwQixVQUFVLEdBeURuQzs7Ozs7OztJQXRERyxvQkFBb0I7O0lBR3BCLHFCQUFxQjs7SUFHckIsc0JBQXNCOztJQUd0QixvQkFBb0I7O0lBR3BCLG9CQUFvQjs7SUFHcEIsb0JBQTBCOztJQUcxQixzQkFBOEI7O0lBRzlCLDJCQUEyQjs7SUFHM0IsOEJBQThCOztJQUc5QixnQ0FBZ0M7O0lBR2hDLDhCQUErQjs7SUFHL0IsaUNBQWlDOztJQUdqQyw0QkFBbUM7O0lBR25DLDhCQUE4Qjs7SUFHOUIsa0JBQWtCOztJQUdsQixxQkFBcUI7O0lBR3JCLHlCQUF5Qjs7SUFHekIseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlclN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9Vc2VyU3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBBY2NvdW50Um9sZSB9IGZyb20gJy4uL2NvbW1vbi9BY2NvdW50Um9sZSc7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5pbXBvcnQgeyBVc2VyVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9Vc2VyVHlwZUNvZGUnO1xuXG4vKiBcbiAgIFVzZXIgdHlwZSBcbiovXG5leHBvcnQgY2xhc3MgVXNlciBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIFVzZXIgbmFtZSBcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgZW1haWwgXG4gICAgcHVibGljIGVtYWlsOiBzdHJpbmc7XG4gXG4gICAgLy8gVXNlciBtb2JpbGUgcGhvbmUgbnVtYmVyIChmb3Igbm90aWZpY2F0aW9uIGFuZCB2YWxpZGF0aW9uKSBcbiAgICBwdWJsaWMgbW9iaWxlOiBzdHJpbmc7XG4gXG4gICAgLy8gUGFzc3dvcmQgc2FsdCBcbiAgICBwdWJsaWMgc2FsdDogc3RyaW5nO1xuIFxuICAgIC8vIFBhc3N3b3JkIGhhc2ggXG4gICAgcHVibGljIGhhc2g6IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIHR5cGU6IFVOREVGSU5FRCB8IFNZU0FETUlOIHwgU1VQUE9SVCB8IFVTRVIgXG4gICAgcHVibGljIHR5cGU6IFVzZXJUeXBlQ29kZTtcbiBcbiAgICAvLyBVc2VyIHN0YXR1czogVU5ERUZJTkVEIHwgUEVORElORyB8IEFDVElWRSB8IEJMT0NLRUQgfCBTVVNQRU5ERUQgXG4gICAgcHVibGljIHN0YXR1czogVXNlclN0YXR1c0NvZGU7XG4gXG4gICAgLy8gV2hlbiB1c2VyIHdhcyBsYXN0IHN1c3BlbmRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHN1c3BlbmRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gTnVtYmVyIG9mIFNpZ24taW4gQXR0ZW1wdHMgXG4gICAgcHVibGljIHNpZ25JbkF0dGVtcHRzOiBudW1iZXI7XG4gXG4gICAgLy8gTGFzdCBGYWlsZWQgU2lnbi1pbiBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGxhc3RGYWlsZWRTaWduSW46IG51bWJlcjtcbiBcbiAgICAvLyBVc2VyIG11c3QgY2hhbmdlIHBhc3N3b3JkIG9uIG5leHQgbG9naW4gXG4gICAgcHVibGljIGNoYW5nZVBhc3N3b3JkOiBib29sZWFuO1xuIFxuICAgIC8vIFdoZW4gdXNlciBjcmVhdGVkIGhpcyBwYXNzd29yZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHBhc3N3b3JkQ2hhbmdlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gTGlzdCBvZiBhY2NvdW50cyBhbmQgcm9sZXMgdGhlIHVzZXIgaGFzIGFjY2VzcyB0byBcbiAgICBwdWJsaWMgYWNjb3VudFJvbGVzOiBBY2NvdW50Um9sZVtdO1xuIFxuICAgIC8vIERlZmF1bHQgYWNjb3VudCBJZCBcbiAgICBwdWJsaWMgZGVmYXVsdEFjY291bnQ6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IGRvY3VtZW50IHR5cGUgKHN5c3RlbSBmaWVsZCkgXG4gICAgcHVibGljIF90eXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgY3JlYXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdXBkYXRlZE9uOiBudW1iZXI7XG4gXG5cbn1cblxuXG4iXX0=