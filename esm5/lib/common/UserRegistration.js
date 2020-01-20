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
    function UserRegistration(name, email, mobile, defaultAccount, accountRoles, type, tempPassword, changePassword, verifyByEmail, description) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.defaultAccount = defaultAccount;
        this.accountRoles = accountRoles;
        this.type = type;
        this.tempPassword = tempPassword;
        this.changePassword = changePassword;
        this.verifyByEmail = verifyByEmail;
        this.description = description;
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
    UserRegistration.prototype.accountRoles;
    /** @type {?} */
    UserRegistration.prototype.type;
    /** @type {?} */
    UserRegistration.prototype.tempPassword;
    /** @type {?} */
    UserRegistration.prototype.changePassword;
    /** @type {?} */
    UserRegistration.prototype.verifyByEmail;
    /** @type {?} */
    UserRegistration.prototype.description;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclJlZ2lzdHJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9Vc2VyUmVnaXN0cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFNQTs7OztJQWdDSSwwQkFBWSxJQUFhLEVBQUUsS0FBYyxFQUFFLE1BQWUsRUFBRSxjQUF1QixFQUFFLFlBQTRCLEVBQUUsSUFBbUIsRUFBRSxZQUFxQixFQUFFLGNBQXdCLEVBQUUsYUFBdUIsRUFBRSxXQUFvQjtRQUNsTyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBRUwsdUJBQUM7QUFBRCxDQUFDLEFBN0NELElBNkNDOzs7Ozs7O0lBMUNHLGdDQUFvQjs7SUFHcEIsaUNBQXFCOztJQUdyQixrQ0FBc0I7O0lBR3RCLDBDQUE4Qjs7SUFHOUIsd0NBQW1DOztJQUduQyxnQ0FBMEI7O0lBRzFCLHdDQUE0Qjs7SUFHNUIsMENBQStCOztJQUcvQix5Q0FBOEI7O0lBRzlCLHVDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY291bnRSb2xlIH0gZnJvbSAnLi4vY29tbW9uL0FjY291bnRSb2xlJztcbmltcG9ydCB7IFVzZXJUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1VzZXJUeXBlQ29kZSc7XG5cbi8qIFxuICAgVXNlciByZWdpc3RyYXRpb24gZGF0YSBtb2RlbCAtIHVzZWQgYnkgc2VsZiByZWdpc3RlcmVkIHVzZXJzIFxuKi9cbmV4cG9ydCBjbGFzcyBVc2VyUmVnaXN0cmF0aW9uIHtcbiBcbiAgICAvLyBVc2VyIG5hbWUgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIGVtYWlsIFxuICAgIHB1YmxpYyBlbWFpbDogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgbW9iaWxlIHBob25lIG51bWJlciAoZm9yIG5vdGlmaWNhdGlvbiBhbmQgdmFsaWRhdGlvbikgXG4gICAgcHVibGljIG1vYmlsZTogc3RyaW5nO1xuIFxuICAgIC8vIERlZmF1bHQgYWNjb3VudCBJZCBcbiAgICBwdWJsaWMgZGVmYXVsdEFjY291bnQ6IHN0cmluZztcbiBcbiAgICAvLyBMaXN0IG9mIGFjY291bnRzIGFuZCByb2xlcyB0aGUgdXNlciBoYXMgYWNjZXNzIHRvIFxuICAgIHB1YmxpYyBhY2NvdW50Um9sZXM6IEFjY291bnRSb2xlW107XG4gXG4gICAgLy8gVXNlciB0eXBlOiBVTkRFRklORUQgfCBTWVNBRE1JTiB8IFNVUFBPUlQgfCBVU0VSIFxuICAgIHB1YmxpYyB0eXBlOiBVc2VyVHlwZUNvZGU7XG4gXG4gICAgLy8gVGVtcG9yYXJ5IHBhc3N3b3JkIChsZWF2ZSBlbXB0eSBmb3Igc3lzdGVtIGdlbmVyYXRlZCBwYXNzd29yZCkgXG4gICAgcHVibGljIHRlbXBQYXNzd29yZDogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgbXVzdCBjaGFuZ2UgcGFzc3dvcmQgb24gbmV4dCBsb2dpbiBcbiAgICBwdWJsaWMgY2hhbmdlUGFzc3dvcmQ6IGJvb2xlYW47XG4gXG4gICAgLy8gRmxhZyB0byBzZW5kIGVtYWlsIHZlcmlmaWNhdGlvbiB0byB0aGUgdXNlciBcbiAgICBwdWJsaWMgdmVyaWZ5QnlFbWFpbDogYm9vbGVhbjtcbiBcbiAgICAvLyBVc2VyIGRlc2NyaXB0aW9uIFxuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nO1xuIFxuICAgIGNvbnN0cnVjdG9yKG5hbWU/OiBzdHJpbmcsIGVtYWlsPzogc3RyaW5nLCBtb2JpbGU/OiBzdHJpbmcsIGRlZmF1bHRBY2NvdW50Pzogc3RyaW5nLCBhY2NvdW50Um9sZXM/OiBBY2NvdW50Um9sZVtdLCB0eXBlPzogVXNlclR5cGVDb2RlLCB0ZW1wUGFzc3dvcmQ/OiBzdHJpbmcsIGNoYW5nZVBhc3N3b3JkPzogYm9vbGVhbiwgdmVyaWZ5QnlFbWFpbD86IGJvb2xlYW4sIGRlc2NyaXB0aW9uPzogc3RyaW5nKSB7IFxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmVtYWlsID0gZW1haWw7XG4gICAgICAgIHRoaXMubW9iaWxlID0gbW9iaWxlO1xuICAgICAgICB0aGlzLmRlZmF1bHRBY2NvdW50ID0gZGVmYXVsdEFjY291bnQ7XG4gICAgICAgIHRoaXMuYWNjb3VudFJvbGVzID0gYWNjb3VudFJvbGVzO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLnRlbXBQYXNzd29yZCA9IHRlbXBQYXNzd29yZDtcbiAgICAgICAgdGhpcy5jaGFuZ2VQYXNzd29yZCA9IGNoYW5nZVBhc3N3b3JkO1xuICAgICAgICB0aGlzLnZlcmlmeUJ5RW1haWwgPSB2ZXJpZnlCeUVtYWlsO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuXG59XG5cblxuIl19