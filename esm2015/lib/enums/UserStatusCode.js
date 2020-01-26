/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const UserStatusCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // User is registered and pending verification [1] 
    PENDING: 1,
    // Active user in the system [2] 
    ACTIVE: 2,
    // Blocked user (only account system can unblock the user) [4] 
    BLOCKED: 3,
    // Suspended user (about to be deleted) [8] 
    SUSPENDED: 4,
};
export { UserStatusCode };
UserStatusCode[UserStatusCode.UNDEFINED] = 'UNDEFINED';
UserStatusCode[UserStatusCode.PENDING] = 'PENDING';
UserStatusCode[UserStatusCode.ACTIVE] = 'ACTIVE';
UserStatusCode[UserStatusCode.BLOCKED] = 'BLOCKED';
UserStatusCode[UserStatusCode.SUSPENDED] = 'SUSPENDED';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclN0YXR1c0NvZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnVtcy9Vc2VyU3RhdHVzQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLSSxpQkFBaUI7SUFDakIsWUFBYTtJQUViLG1EQUFtRDtJQUNuRCxVQUFXO0lBRVgsaUNBQWlDO0lBQ2pDLFNBQVU7SUFFViwrREFBK0Q7SUFDL0QsVUFBVztJQUVYLDRDQUE0QztJQUM1QyxZQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gICBVc2VyIHN0YXR1cyBjb2RlIFxuKi9cbmV4cG9ydCBlbnVtIFVzZXJTdGF0dXNDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gVXNlciBpcyByZWdpc3RlcmVkIGFuZCBwZW5kaW5nIHZlcmlmaWNhdGlvbiBbMV0gXG4gICAgUEVORElORyA9IDEsXG4gXG4gICAgLy8gQWN0aXZlIHVzZXIgaW4gdGhlIHN5c3RlbSBbMl0gXG4gICAgQUNUSVZFID0gMixcbiBcbiAgICAvLyBCbG9ja2VkIHVzZXIgKG9ubHkgYWNjb3VudCBzeXN0ZW0gY2FuIHVuYmxvY2sgdGhlIHVzZXIpIFs0XSBcbiAgICBCTE9DS0VEID0gMyxcbiBcbiAgICAvLyBTdXNwZW5kZWQgdXNlciAoYWJvdXQgdG8gYmUgZGVsZXRlZCkgWzhdIFxuICAgIFNVU1BFTkRFRCA9IDQsXG4gXG59Il19