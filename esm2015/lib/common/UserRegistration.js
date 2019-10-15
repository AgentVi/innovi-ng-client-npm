/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   User registration data model - used by self registered users
*/
export class UserRegistration {
    /**
     * @param {?=} name
     * @param {?=} email
     * @param {?=} mobile
     * @param {?=} defaultAccount
     * @param {?=} role
     * @param {?=} type
     * @param {?=} tempPassword
     * @param {?=} changePassword
     * @param {?=} verifyByEmail
     */
    constructor(name, email, mobile, defaultAccount, role, type, tempPassword, changePassword, verifyByEmail) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.defaultAccount = defaultAccount;
        this.role = role;
        this.type = type;
        this.tempPassword = tempPassword;
        this.changePassword = changePassword;
        this.verifyByEmail = verifyByEmail;
    }
}
if (false) {
    /** @type {?} */
    UserRegistration.prototype.name;
    /** @type {?} */
    UserRegistration.prototype.email;
    /** @type {?} */
    UserRegistration.prototype.mobile;
    /** @type {?} */
    UserRegistration.prototype.defaultAccount;
    /** @type {?} */
    UserRegistration.prototype.role;
    /** @type {?} */
    UserRegistration.prototype.type;
    /** @type {?} */
    UserRegistration.prototype.tempPassword;
    /** @type {?} */
    UserRegistration.prototype.changePassword;
    /** @type {?} */
    UserRegistration.prototype.verifyByEmail;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclJlZ2lzdHJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9Vc2VyUmVnaXN0cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFNQSxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7Ozs7Ozs7SUE2QnpCLFlBQVksSUFBYSxFQUFFLEtBQWMsRUFBRSxNQUFlLEVBQUUsY0FBdUIsRUFBRSxJQUFzQixFQUFFLElBQW1CLEVBQUUsWUFBcUIsRUFBRSxjQUF3QixFQUFFLGFBQXVCO1FBQ3RNLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7Q0FFSjs7O0lBdENHLGdDQUFvQjs7SUFHcEIsaUNBQXFCOztJQUdyQixrQ0FBc0I7O0lBR3RCLDBDQUE4Qjs7SUFHOUIsZ0NBQTZCOztJQUc3QixnQ0FBMEI7O0lBRzFCLHdDQUE0Qjs7SUFHNUIsMENBQStCOztJQUcvQix5Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9Vc2VyVHlwZUNvZGUnO1xuaW1wb3J0IHsgQWNjb3VudFJvbGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQWNjb3VudFJvbGVDb2RlJztcblxuLyogXG4gICBVc2VyIHJlZ2lzdHJhdGlvbiBkYXRhIG1vZGVsIC0gdXNlZCBieSBzZWxmIHJlZ2lzdGVyZWQgdXNlcnMgXG4qL1xuZXhwb3J0IGNsYXNzIFVzZXJSZWdpc3RyYXRpb24ge1xuIFxuICAgIC8vIFVzZXIgbmFtZSBcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgZW1haWwgXG4gICAgcHVibGljIGVtYWlsOiBzdHJpbmc7XG4gXG4gICAgLy8gVXNlciBtb2JpbGUgcGhvbmUgbnVtYmVyIChmb3Igbm90aWZpY2F0aW9uIGFuZCB2YWxpZGF0aW9uKSBcbiAgICBwdWJsaWMgbW9iaWxlOiBzdHJpbmc7XG4gXG4gICAgLy8gRGVmYXVsdCBhY2NvdW50IElkIFxuICAgIHB1YmxpYyBkZWZhdWx0QWNjb3VudDogc3RyaW5nO1xuIFxuICAgIC8vIEFjY291bnQgcm9sZTogVU5ERUZJTkVEIHwgQURNSU4gfCBTVVBFUlZJU09SIHwgT1BFUkFUT1IgfCBVU0VSIHwgSU5TVEFMTEVSIFxuICAgIHB1YmxpYyByb2xlOiBBY2NvdW50Um9sZUNvZGU7XG4gXG4gICAgLy8gVXNlciB0eXBlOiBVTkRFRklORUQgfCBTWVNBRE1JTiB8IFNVUFBPUlQgfCBVU0VSIFxuICAgIHB1YmxpYyB0eXBlOiBVc2VyVHlwZUNvZGU7XG4gXG4gICAgLy8gVGVtcG9yYXJ5IHBhc3N3b3JkIChsZWF2ZSBlbXB0eSBmb3Igc3lzdGVtIGdlbmVyYXRlZCBwYXNzd29yZCkgXG4gICAgcHVibGljIHRlbXBQYXNzd29yZDogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgbXVzdCBjaGFuZ2UgcGFzc3dvcmQgb24gbmV4dCBsb2dpbiBcbiAgICBwdWJsaWMgY2hhbmdlUGFzc3dvcmQ6IGJvb2xlYW47XG4gXG4gICAgLy8gRmxhZyB0byBzZW5kIGVtYWlsIHZlcmlmaWNhdGlvbiB0byB0aGUgdXNlciBcbiAgICBwdWJsaWMgdmVyaWZ5QnlFbWFpbDogYm9vbGVhbjtcbiBcbiAgICBjb25zdHJ1Y3RvcihuYW1lPzogc3RyaW5nLCBlbWFpbD86IHN0cmluZywgbW9iaWxlPzogc3RyaW5nLCBkZWZhdWx0QWNjb3VudD86IHN0cmluZywgcm9sZT86IEFjY291bnRSb2xlQ29kZSwgdHlwZT86IFVzZXJUeXBlQ29kZSwgdGVtcFBhc3N3b3JkPzogc3RyaW5nLCBjaGFuZ2VQYXNzd29yZD86IGJvb2xlYW4sIHZlcmlmeUJ5RW1haWw/OiBib29sZWFuKSB7IFxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmVtYWlsID0gZW1haWw7XG4gICAgICAgIHRoaXMubW9iaWxlID0gbW9iaWxlO1xuICAgICAgICB0aGlzLmRlZmF1bHRBY2NvdW50ID0gZGVmYXVsdEFjY291bnQ7XG4gICAgICAgIHRoaXMucm9sZSA9IHJvbGU7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMudGVtcFBhc3N3b3JkID0gdGVtcFBhc3N3b3JkO1xuICAgICAgICB0aGlzLmNoYW5nZVBhc3N3b3JkID0gY2hhbmdlUGFzc3dvcmQ7XG4gICAgICAgIHRoaXMudmVyaWZ5QnlFbWFpbCA9IHZlcmlmeUJ5RW1haWw7XG4gICAgfVxuXG59XG5cblxuIl19