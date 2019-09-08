/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Login data (returned by the API after successful login)
*/
export class LoginData {
    /**
     * @param {?=} accessToken
     * @param {?=} accountRole
     * @param {?=} userId
     * @param {?=} userName
     * @param {?=} userEmail
     * @param {?=} userType
     * @param {?=} userStatus
     * @param {?=} changePassword
     */
    constructor(accessToken, accountRole, userId, userName, userEmail, userType, userStatus, changePassword) {
        this.accessToken = accessToken;
        this.accountRole = accountRole;
        this.userId = userId;
        this.userName = userName;
        this.userEmail = userEmail;
        this.userType = userType;
        this.userStatus = userStatus;
        this.changePassword = changePassword;
    }
}
if (false) {
    /** @type {?} */
    LoginData.prototype.accessToken;
    /** @type {?} */
    LoginData.prototype.accountRole;
    /** @type {?} */
    LoginData.prototype.userId;
    /** @type {?} */
    LoginData.prototype.userName;
    /** @type {?} */
    LoginData.prototype.userEmail;
    /** @type {?} */
    LoginData.prototype.userType;
    /** @type {?} */
    LoginData.prototype.userStatus;
    /** @type {?} */
    LoginData.prototype.changePassword;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5EYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL0xvZ2luRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBT0EsTUFBTSxPQUFPLFNBQVM7Ozs7Ozs7Ozs7O0lBMEJsQixZQUFZLFdBQW9CLEVBQUUsV0FBeUIsRUFBRSxNQUFlLEVBQUUsUUFBaUIsRUFBRSxTQUFrQixFQUFFLFFBQXVCLEVBQUUsVUFBMkIsRUFBRSxjQUF3QjtRQUMvTCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztJQUN6QyxDQUFDO0NBRUo7OztJQWxDRyxnQ0FBMkI7O0lBRzNCLGdDQUFnQzs7SUFHaEMsMkJBQXNCOztJQUd0Qiw2QkFBd0I7O0lBR3hCLDhCQUF5Qjs7SUFHekIsNkJBQThCOztJQUc5QiwrQkFBa0M7O0lBR2xDLG1DQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvVXNlclN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgQWNjb3VudFJvbGUgfSBmcm9tICcuLi9jb21tb24vQWNjb3VudFJvbGUnO1xuaW1wb3J0IHsgVXNlclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvVXNlclR5cGVDb2RlJztcblxuLyogXG4gICBMb2dpbiBkYXRhIChyZXR1cm5lZCBieSB0aGUgQVBJIGFmdGVyIHN1Y2Nlc3NmdWwgbG9naW4pIFxuKi9cbmV4cG9ydCBjbGFzcyBMb2dpbkRhdGEge1xuIFxuICAgIC8vIEFjY2VzcyB0b2tlbiB0byB1c2UgKGZvciB0aGUgZGVmYXVsdCBhY2NvdW50KSBcbiAgICBwdWJsaWMgYWNjZXNzVG9rZW46IHN0cmluZztcbiBcbiAgICAvLyBDdXJyZW50IGFjY291bnQgaWQgYW5kIHJvbGUgXG4gICAgcHVibGljIGFjY291bnRSb2xlOiBBY2NvdW50Um9sZTtcbiBcbiAgICAvLyBVc2VyIElkIFxuICAgIHB1YmxpYyB1c2VySWQ6IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIG5hbWUgXG4gICAgcHVibGljIHVzZXJOYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gVXNlciBlbWFpbCBcbiAgICBwdWJsaWMgdXNlckVtYWlsOiBzdHJpbmc7XG4gXG4gICAgLy8gVXNlciB0eXBlIFxuICAgIHB1YmxpYyB1c2VyVHlwZTogVXNlclR5cGVDb2RlO1xuIFxuICAgIC8vIFVzZXIgc3RhdHVzIFxuICAgIHB1YmxpYyB1c2VyU3RhdHVzOiBVc2VyU3RhdHVzQ29kZTtcbiBcbiAgICAvLyBVc2VyIG11c3QgY2hhbmdlIHBhc3N3b3JkIG9uIG5leHQgbG9naW4gXG4gICAgcHVibGljIGNoYW5nZVBhc3N3b3JkOiBib29sZWFuO1xuIFxuICAgIGNvbnN0cnVjdG9yKGFjY2Vzc1Rva2VuPzogc3RyaW5nLCBhY2NvdW50Um9sZT86IEFjY291bnRSb2xlLCB1c2VySWQ/OiBzdHJpbmcsIHVzZXJOYW1lPzogc3RyaW5nLCB1c2VyRW1haWw/OiBzdHJpbmcsIHVzZXJUeXBlPzogVXNlclR5cGVDb2RlLCB1c2VyU3RhdHVzPzogVXNlclN0YXR1c0NvZGUsIGNoYW5nZVBhc3N3b3JkPzogYm9vbGVhbikgeyBcbiAgICAgICAgdGhpcy5hY2Nlc3NUb2tlbiA9IGFjY2Vzc1Rva2VuO1xuICAgICAgICB0aGlzLmFjY291bnRSb2xlID0gYWNjb3VudFJvbGU7XG4gICAgICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xuICAgICAgICB0aGlzLnVzZXJOYW1lID0gdXNlck5hbWU7XG4gICAgICAgIHRoaXMudXNlckVtYWlsID0gdXNlckVtYWlsO1xuICAgICAgICB0aGlzLnVzZXJUeXBlID0gdXNlclR5cGU7XG4gICAgICAgIHRoaXMudXNlclN0YXR1cyA9IHVzZXJTdGF0dXM7XG4gICAgICAgIHRoaXMuY2hhbmdlUGFzc3dvcmQgPSBjaGFuZ2VQYXNzd29yZDtcbiAgICB9XG5cbn1cblxuXG4iXX0=