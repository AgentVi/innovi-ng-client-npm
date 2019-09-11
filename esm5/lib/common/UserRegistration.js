/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   User registration data model - used by self registered users
*/
var /*
   User registration data model - used by self registered users
*/
UserRegistration = /** @class */ (function () {
    function UserRegistration(name, email, mobile, defaultAccount, role, type, tempPassword, changePassword, verifyByEmail) {
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
    return UserRegistration;
}());
/*
   User registration data model - used by self registered users
*/
export { UserRegistration };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclJlZ2lzdHJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9Vc2VyUmVnaXN0cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFNQTs7OztJQTZCSSwwQkFBWSxJQUFhLEVBQUUsS0FBYyxFQUFFLE1BQWUsRUFBRSxjQUF1QixFQUFFLElBQXNCLEVBQUUsSUFBbUIsRUFBRSxZQUFxQixFQUFFLGNBQXdCLEVBQUUsYUFBdUI7UUFDdE0sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQUVMLHVCQUFDO0FBQUQsQ0FBQyxBQXpDRCxJQXlDQzs7Ozs7OztJQXRDRyxnQ0FBb0I7O0lBR3BCLGlDQUFxQjs7SUFHckIsa0NBQXNCOztJQUd0QiwwQ0FBOEI7O0lBRzlCLGdDQUE2Qjs7SUFHN0IsZ0NBQTBCOztJQUcxQix3Q0FBNEI7O0lBRzVCLDBDQUErQjs7SUFHL0IseUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWNjb3VudFJvbGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQWNjb3VudFJvbGVDb2RlJztcbmltcG9ydCB7IFVzZXJUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1VzZXJUeXBlQ29kZSc7XG5cbi8qIFxuICAgVXNlciByZWdpc3RyYXRpb24gZGF0YSBtb2RlbCAtIHVzZWQgYnkgc2VsZiByZWdpc3RlcmVkIHVzZXJzIFxuKi9cbmV4cG9ydCBjbGFzcyBVc2VyUmVnaXN0cmF0aW9uIHtcbiBcbiAgICAvLyBVc2VyIG5hbWUgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIGVtYWlsIFxuICAgIHB1YmxpYyBlbWFpbDogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgbW9iaWxlIHBob25lIG51bWJlciAoZm9yIG5vdGlmaWNhdGlvbiBhbmQgdmFsaWRhdGlvbikgXG4gICAgcHVibGljIG1vYmlsZTogc3RyaW5nO1xuIFxuICAgIC8vIERlZmF1bHQgYWNjb3VudCBJZCBcbiAgICBwdWJsaWMgZGVmYXVsdEFjY291bnQ6IHN0cmluZztcbiBcbiAgICAvLyBBY2NvdW50IHJvbGU6IFVOREVGSU5FRCB8IEFETUlOIHwgU1VQRVJWSVNPUiB8IE9QRVJBVE9SIHwgVVNFUiB8IElOU1RBTExFUiBcbiAgICBwdWJsaWMgcm9sZTogQWNjb3VudFJvbGVDb2RlO1xuIFxuICAgIC8vIFVzZXIgdHlwZTogVU5ERUZJTkVEIHwgU1lTQURNSU4gfCBTVVBQT1JUIHwgVVNFUiBcbiAgICBwdWJsaWMgdHlwZTogVXNlclR5cGVDb2RlO1xuIFxuICAgIC8vIFRlbXBvcmFyeSBwYXNzd29yZCAobGVhdmUgZW1wdHkgZm9yIHN5c3RlbSBnZW5lcmF0ZWQgcGFzc3dvcmQpIFxuICAgIHB1YmxpYyB0ZW1wUGFzc3dvcmQ6IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIG11c3QgY2hhbmdlIHBhc3N3b3JkIG9uIG5leHQgbG9naW4gXG4gICAgcHVibGljIGNoYW5nZVBhc3N3b3JkOiBib29sZWFuO1xuIFxuICAgIC8vIEZsYWcgdG8gc2VuZCBlbWFpbCB2ZXJpZmljYXRpb24gdG8gdGhlIHVzZXIgXG4gICAgcHVibGljIHZlcmlmeUJ5RW1haWw6IGJvb2xlYW47XG4gXG4gICAgY29uc3RydWN0b3IobmFtZT86IHN0cmluZywgZW1haWw/OiBzdHJpbmcsIG1vYmlsZT86IHN0cmluZywgZGVmYXVsdEFjY291bnQ/OiBzdHJpbmcsIHJvbGU/OiBBY2NvdW50Um9sZUNvZGUsIHR5cGU/OiBVc2VyVHlwZUNvZGUsIHRlbXBQYXNzd29yZD86IHN0cmluZywgY2hhbmdlUGFzc3dvcmQ/OiBib29sZWFuLCB2ZXJpZnlCeUVtYWlsPzogYm9vbGVhbikgeyBcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5lbWFpbCA9IGVtYWlsO1xuICAgICAgICB0aGlzLm1vYmlsZSA9IG1vYmlsZTtcbiAgICAgICAgdGhpcy5kZWZhdWx0QWNjb3VudCA9IGRlZmF1bHRBY2NvdW50O1xuICAgICAgICB0aGlzLnJvbGUgPSByb2xlO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLnRlbXBQYXNzd29yZCA9IHRlbXBQYXNzd29yZDtcbiAgICAgICAgdGhpcy5jaGFuZ2VQYXNzd29yZCA9IGNoYW5nZVBhc3N3b3JkO1xuICAgICAgICB0aGlzLnZlcmlmeUJ5RW1haWwgPSB2ZXJpZnlCeUVtYWlsO1xuICAgIH1cblxufVxuXG5cbiJdfQ==