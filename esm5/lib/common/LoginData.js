/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Login data (returned by the API after successful login)
*/
var /*
   Login data (returned by the API after successful login)
*/
LoginData = /** @class */ (function () {
    function LoginData(accessToken, accountRole, userId, userName, userEmail, userType, userStatus, changePassword) {
        this.accessToken = accessToken;
        this.accountRole = accountRole;
        this.userId = userId;
        this.userName = userName;
        this.userEmail = userEmail;
        this.userType = userType;
        this.userStatus = userStatus;
        this.changePassword = changePassword;
    }
    return LoginData;
}());
/*
   Login data (returned by the API after successful login)
*/
export { LoginData };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5EYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL0xvZ2luRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBT0E7Ozs7SUEwQkksbUJBQVksV0FBb0IsRUFBRSxXQUF5QixFQUFFLE1BQWUsRUFBRSxRQUFpQixFQUFFLFNBQWtCLEVBQUUsUUFBdUIsRUFBRSxVQUEyQixFQUFFLGNBQXdCO1FBQy9MLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3pDLENBQUM7SUFFTCxnQkFBQztBQUFELENBQUMsQUFyQ0QsSUFxQ0M7Ozs7Ozs7SUFsQ0csZ0NBQTJCOztJQUczQixnQ0FBZ0M7O0lBR2hDLDJCQUFzQjs7SUFHdEIsNkJBQXdCOztJQUd4Qiw4QkFBeUI7O0lBR3pCLDZCQUE4Qjs7SUFHOUIsK0JBQWtDOztJQUdsQyxtQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9Vc2VyVHlwZUNvZGUnO1xuaW1wb3J0IHsgVXNlclN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9Vc2VyU3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBBY2NvdW50Um9sZSB9IGZyb20gJy4uL2NvbW1vbi9BY2NvdW50Um9sZSc7XG5cbi8qIFxuICAgTG9naW4gZGF0YSAocmV0dXJuZWQgYnkgdGhlIEFQSSBhZnRlciBzdWNjZXNzZnVsIGxvZ2luKSBcbiovXG5leHBvcnQgY2xhc3MgTG9naW5EYXRhIHtcbiBcbiAgICAvLyBBY2Nlc3MgdG9rZW4gdG8gdXNlIChmb3IgdGhlIGRlZmF1bHQgYWNjb3VudCkgXG4gICAgcHVibGljIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG4gXG4gICAgLy8gQ3VycmVudCBhY2NvdW50IGlkIGFuZCByb2xlIFxuICAgIHB1YmxpYyBhY2NvdW50Um9sZTogQWNjb3VudFJvbGU7XG4gXG4gICAgLy8gVXNlciBJZCBcbiAgICBwdWJsaWMgdXNlcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gVXNlciBuYW1lIFxuICAgIHB1YmxpYyB1c2VyTmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgZW1haWwgXG4gICAgcHVibGljIHVzZXJFbWFpbDogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgdHlwZSBcbiAgICBwdWJsaWMgdXNlclR5cGU6IFVzZXJUeXBlQ29kZTtcbiBcbiAgICAvLyBVc2VyIHN0YXR1cyBcbiAgICBwdWJsaWMgdXNlclN0YXR1czogVXNlclN0YXR1c0NvZGU7XG4gXG4gICAgLy8gVXNlciBtdXN0IGNoYW5nZSBwYXNzd29yZCBvbiBuZXh0IGxvZ2luIFxuICAgIHB1YmxpYyBjaGFuZ2VQYXNzd29yZDogYm9vbGVhbjtcbiBcbiAgICBjb25zdHJ1Y3RvcihhY2Nlc3NUb2tlbj86IHN0cmluZywgYWNjb3VudFJvbGU/OiBBY2NvdW50Um9sZSwgdXNlcklkPzogc3RyaW5nLCB1c2VyTmFtZT86IHN0cmluZywgdXNlckVtYWlsPzogc3RyaW5nLCB1c2VyVHlwZT86IFVzZXJUeXBlQ29kZSwgdXNlclN0YXR1cz86IFVzZXJTdGF0dXNDb2RlLCBjaGFuZ2VQYXNzd29yZD86IGJvb2xlYW4pIHsgXG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBhY2Nlc3NUb2tlbjtcbiAgICAgICAgdGhpcy5hY2NvdW50Um9sZSA9IGFjY291bnRSb2xlO1xuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdGhpcy51c2VyTmFtZSA9IHVzZXJOYW1lO1xuICAgICAgICB0aGlzLnVzZXJFbWFpbCA9IHVzZXJFbWFpbDtcbiAgICAgICAgdGhpcy51c2VyVHlwZSA9IHVzZXJUeXBlO1xuICAgICAgICB0aGlzLnVzZXJTdGF0dXMgPSB1c2VyU3RhdHVzO1xuICAgICAgICB0aGlzLmNoYW5nZVBhc3N3b3JkID0gY2hhbmdlUGFzc3dvcmQ7XG4gICAgfVxuXG59XG5cblxuIl19