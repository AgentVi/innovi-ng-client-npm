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
    function UserRegistration(name, email, mobile, defaultAccount, accountRoles, type, tempPassword, changePassword, verifyByEmail) {
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclJlZ2lzdHJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9Vc2VyUmVnaXN0cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFNQTs7OztJQTZCSSwwQkFBWSxJQUFhLEVBQUUsS0FBYyxFQUFFLE1BQWUsRUFBRSxjQUF1QixFQUFFLFlBQTRCLEVBQUUsSUFBbUIsRUFBRSxZQUFxQixFQUFFLGNBQXdCLEVBQUUsYUFBdUI7UUFDNU0sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQUVMLHVCQUFDO0FBQUQsQ0FBQyxBQXpDRCxJQXlDQzs7Ozs7OztJQXRDRyxnQ0FBb0I7O0lBR3BCLGlDQUFxQjs7SUFHckIsa0NBQXNCOztJQUd0QiwwQ0FBOEI7O0lBRzlCLHdDQUFtQzs7SUFHbkMsZ0NBQTBCOztJQUcxQix3Q0FBNEI7O0lBRzVCLDBDQUErQjs7SUFHL0IseUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvVXNlclR5cGVDb2RlJztcbmltcG9ydCB7IEFjY291bnRSb2xlIH0gZnJvbSAnLi4vY29tbW9uL0FjY291bnRSb2xlJztcblxuLyogXG4gICBVc2VyIHJlZ2lzdHJhdGlvbiBkYXRhIG1vZGVsIC0gdXNlZCBieSBzZWxmIHJlZ2lzdGVyZWQgdXNlcnMgXG4qL1xuZXhwb3J0IGNsYXNzIFVzZXJSZWdpc3RyYXRpb24ge1xuIFxuICAgIC8vIFVzZXIgbmFtZSBcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgZW1haWwgXG4gICAgcHVibGljIGVtYWlsOiBzdHJpbmc7XG4gXG4gICAgLy8gVXNlciBtb2JpbGUgcGhvbmUgbnVtYmVyIChmb3Igbm90aWZpY2F0aW9uIGFuZCB2YWxpZGF0aW9uKSBcbiAgICBwdWJsaWMgbW9iaWxlOiBzdHJpbmc7XG4gXG4gICAgLy8gRGVmYXVsdCBhY2NvdW50IElkIFxuICAgIHB1YmxpYyBkZWZhdWx0QWNjb3VudDogc3RyaW5nO1xuIFxuICAgIC8vIExpc3Qgb2YgYWNjb3VudHMgYW5kIHJvbGVzIHRoZSB1c2VyIGhhcyBhY2Nlc3MgdG8gXG4gICAgcHVibGljIGFjY291bnRSb2xlczogQWNjb3VudFJvbGVbXTtcbiBcbiAgICAvLyBVc2VyIHR5cGU6IFVOREVGSU5FRCB8IFNZU0FETUlOIHwgU1VQUE9SVCB8IFVTRVIgXG4gICAgcHVibGljIHR5cGU6IFVzZXJUeXBlQ29kZTtcbiBcbiAgICAvLyBUZW1wb3JhcnkgcGFzc3dvcmQgKGxlYXZlIGVtcHR5IGZvciBzeXN0ZW0gZ2VuZXJhdGVkIHBhc3N3b3JkKSBcbiAgICBwdWJsaWMgdGVtcFBhc3N3b3JkOiBzdHJpbmc7XG4gXG4gICAgLy8gVXNlciBtdXN0IGNoYW5nZSBwYXNzd29yZCBvbiBuZXh0IGxvZ2luIFxuICAgIHB1YmxpYyBjaGFuZ2VQYXNzd29yZDogYm9vbGVhbjtcbiBcbiAgICAvLyBGbGFnIHRvIHNlbmQgZW1haWwgdmVyaWZpY2F0aW9uIHRvIHRoZSB1c2VyIFxuICAgIHB1YmxpYyB2ZXJpZnlCeUVtYWlsOiBib29sZWFuO1xuIFxuICAgIGNvbnN0cnVjdG9yKG5hbWU/OiBzdHJpbmcsIGVtYWlsPzogc3RyaW5nLCBtb2JpbGU/OiBzdHJpbmcsIGRlZmF1bHRBY2NvdW50Pzogc3RyaW5nLCBhY2NvdW50Um9sZXM/OiBBY2NvdW50Um9sZVtdLCB0eXBlPzogVXNlclR5cGVDb2RlLCB0ZW1wUGFzc3dvcmQ/OiBzdHJpbmcsIGNoYW5nZVBhc3N3b3JkPzogYm9vbGVhbiwgdmVyaWZ5QnlFbWFpbD86IGJvb2xlYW4pIHsgXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZW1haWwgPSBlbWFpbDtcbiAgICAgICAgdGhpcy5tb2JpbGUgPSBtb2JpbGU7XG4gICAgICAgIHRoaXMuZGVmYXVsdEFjY291bnQgPSBkZWZhdWx0QWNjb3VudDtcbiAgICAgICAgdGhpcy5hY2NvdW50Um9sZXMgPSBhY2NvdW50Um9sZXM7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMudGVtcFBhc3N3b3JkID0gdGVtcFBhc3N3b3JkO1xuICAgICAgICB0aGlzLmNoYW5nZVBhc3N3b3JkID0gY2hhbmdlUGFzc3dvcmQ7XG4gICAgICAgIHRoaXMudmVyaWZ5QnlFbWFpbCA9IHZlcmlmeUJ5RW1haWw7XG4gICAgfVxuXG59XG5cblxuIl19