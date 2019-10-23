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
     * @param {?=} accountRoles
     * @param {?=} type
     * @param {?=} tempPassword
     * @param {?=} changePassword
     * @param {?=} verifyByEmail
     */
    constructor(name, email, mobile, defaultAccount, accountRoles, type, tempPassword, changePassword, verifyByEmail) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.defaultAccount = defaultAccount;
        this.accountRoles = accountRoles;
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
    UserRegistration.prototype.accountRoles;
    /** @type {?} */
    UserRegistration.prototype.type;
    /** @type {?} */
    UserRegistration.prototype.tempPassword;
    /** @type {?} */
    UserRegistration.prototype.changePassword;
    /** @type {?} */
    UserRegistration.prototype.verifyByEmail;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclJlZ2lzdHJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9Vc2VyUmVnaXN0cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFNQSxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7Ozs7Ozs7SUE2QnpCLFlBQVksSUFBYSxFQUFFLEtBQWMsRUFBRSxNQUFlLEVBQUUsY0FBdUIsRUFBRSxZQUE0QixFQUFFLElBQW1CLEVBQUUsWUFBcUIsRUFBRSxjQUF3QixFQUFFLGFBQXVCO1FBQzVNLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7Q0FFSjs7O0lBdENHLGdDQUFvQjs7SUFHcEIsaUNBQXFCOztJQUdyQixrQ0FBc0I7O0lBR3RCLDBDQUE4Qjs7SUFHOUIsd0NBQW1DOztJQUduQyxnQ0FBMEI7O0lBRzFCLHdDQUE0Qjs7SUFHNUIsMENBQStCOztJQUcvQix5Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY2NvdW50Um9sZSB9IGZyb20gJy4uL2NvbW1vbi9BY2NvdW50Um9sZSc7XG5pbXBvcnQgeyBVc2VyVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9Vc2VyVHlwZUNvZGUnO1xuXG4vKiBcbiAgIFVzZXIgcmVnaXN0cmF0aW9uIGRhdGEgbW9kZWwgLSB1c2VkIGJ5IHNlbGYgcmVnaXN0ZXJlZCB1c2VycyBcbiovXG5leHBvcnQgY2xhc3MgVXNlclJlZ2lzdHJhdGlvbiB7XG4gXG4gICAgLy8gVXNlciBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gVXNlciBlbWFpbCBcbiAgICBwdWJsaWMgZW1haWw6IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIG1vYmlsZSBwaG9uZSBudW1iZXIgKGZvciBub3RpZmljYXRpb24gYW5kIHZhbGlkYXRpb24pIFxuICAgIHB1YmxpYyBtb2JpbGU6IHN0cmluZztcbiBcbiAgICAvLyBEZWZhdWx0IGFjY291bnQgSWQgXG4gICAgcHVibGljIGRlZmF1bHRBY2NvdW50OiBzdHJpbmc7XG4gXG4gICAgLy8gTGlzdCBvZiBhY2NvdW50cyBhbmQgcm9sZXMgdGhlIHVzZXIgaGFzIGFjY2VzcyB0byBcbiAgICBwdWJsaWMgYWNjb3VudFJvbGVzOiBBY2NvdW50Um9sZVtdO1xuIFxuICAgIC8vIFVzZXIgdHlwZTogVU5ERUZJTkVEIHwgU1lTQURNSU4gfCBTVVBQT1JUIHwgVVNFUiBcbiAgICBwdWJsaWMgdHlwZTogVXNlclR5cGVDb2RlO1xuIFxuICAgIC8vIFRlbXBvcmFyeSBwYXNzd29yZCAobGVhdmUgZW1wdHkgZm9yIHN5c3RlbSBnZW5lcmF0ZWQgcGFzc3dvcmQpIFxuICAgIHB1YmxpYyB0ZW1wUGFzc3dvcmQ6IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIG11c3QgY2hhbmdlIHBhc3N3b3JkIG9uIG5leHQgbG9naW4gXG4gICAgcHVibGljIGNoYW5nZVBhc3N3b3JkOiBib29sZWFuO1xuIFxuICAgIC8vIEZsYWcgdG8gc2VuZCBlbWFpbCB2ZXJpZmljYXRpb24gdG8gdGhlIHVzZXIgXG4gICAgcHVibGljIHZlcmlmeUJ5RW1haWw6IGJvb2xlYW47XG4gXG4gICAgY29uc3RydWN0b3IobmFtZT86IHN0cmluZywgZW1haWw/OiBzdHJpbmcsIG1vYmlsZT86IHN0cmluZywgZGVmYXVsdEFjY291bnQ/OiBzdHJpbmcsIGFjY291bnRSb2xlcz86IEFjY291bnRSb2xlW10sIHR5cGU/OiBVc2VyVHlwZUNvZGUsIHRlbXBQYXNzd29yZD86IHN0cmluZywgY2hhbmdlUGFzc3dvcmQ/OiBib29sZWFuLCB2ZXJpZnlCeUVtYWlsPzogYm9vbGVhbikgeyBcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5lbWFpbCA9IGVtYWlsO1xuICAgICAgICB0aGlzLm1vYmlsZSA9IG1vYmlsZTtcbiAgICAgICAgdGhpcy5kZWZhdWx0QWNjb3VudCA9IGRlZmF1bHRBY2NvdW50O1xuICAgICAgICB0aGlzLmFjY291bnRSb2xlcyA9IGFjY291bnRSb2xlcztcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy50ZW1wUGFzc3dvcmQgPSB0ZW1wUGFzc3dvcmQ7XG4gICAgICAgIHRoaXMuY2hhbmdlUGFzc3dvcmQgPSBjaGFuZ2VQYXNzd29yZDtcbiAgICAgICAgdGhpcy52ZXJpZnlCeUVtYWlsID0gdmVyaWZ5QnlFbWFpbDtcbiAgICB9XG5cbn1cblxuXG4iXX0=