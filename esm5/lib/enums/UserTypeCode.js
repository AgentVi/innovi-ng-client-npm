/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var UserTypeCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // System administrator has access to all accounts and permissions to perform all actions [1] 
    SYSADMIN: 1,
    // Support user has view permissions only for all accounts that enabled option Enable Support [2] 
    SUPPORT: 2,
    // System user - has access to specific accounts with role based access control [4] 
    USER: 4,
    // Account service - to be used by other systems to perform actions using the API (can't login as a user to the portal)' [5]` 
    ACCOUNT_SERVICE: 5,
};
export { UserTypeCode };
UserTypeCode[UserTypeCode.UNDEFINED] = 'UNDEFINED';
UserTypeCode[UserTypeCode.SYSADMIN] = 'SYSADMIN';
UserTypeCode[UserTypeCode.SUPPORT] = 'SUPPORT';
UserTypeCode[UserTypeCode.USER] = 'USER';
UserTypeCode[UserTypeCode.ACCOUNT_SERVICE] = 'ACCOUNT_SERVICE';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclR5cGVDb2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW51bXMvVXNlclR5cGVDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUtJLGlCQUFpQjtJQUNqQixZQUFhO0lBRWIsOEZBQThGO0lBQzlGLFdBQVk7SUFFWixrR0FBa0c7SUFDbEcsVUFBVztJQUVYLG9GQUFvRjtJQUNwRixPQUFRO0lBRVIsOEhBQThIO0lBQzlILGtCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICAgVXNlciB0eXBlIGNvZGUgXG4qL1xuZXhwb3J0IGVudW0gVXNlclR5cGVDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gU3lzdGVtIGFkbWluaXN0cmF0b3IgaGFzIGFjY2VzcyB0byBhbGwgYWNjb3VudHMgYW5kIHBlcm1pc3Npb25zIHRvIHBlcmZvcm0gYWxsIGFjdGlvbnMgWzFdIFxuICAgIFNZU0FETUlOID0gMSxcbiBcbiAgICAvLyBTdXBwb3J0IHVzZXIgaGFzIHZpZXcgcGVybWlzc2lvbnMgb25seSBmb3IgYWxsIGFjY291bnRzIHRoYXQgZW5hYmxlZCBvcHRpb24gRW5hYmxlIFN1cHBvcnQgWzJdIFxuICAgIFNVUFBPUlQgPSAyLFxuIFxuICAgIC8vIFN5c3RlbSB1c2VyIC0gaGFzIGFjY2VzcyB0byBzcGVjaWZpYyBhY2NvdW50cyB3aXRoIHJvbGUgYmFzZWQgYWNjZXNzIGNvbnRyb2wgWzRdIFxuICAgIFVTRVIgPSA0LFxuIFxuICAgIC8vIEFjY291bnQgc2VydmljZSAtIHRvIGJlIHVzZWQgYnkgb3RoZXIgc3lzdGVtcyB0byBwZXJmb3JtIGFjdGlvbnMgdXNpbmcgdGhlIEFQSSAoY2FuJ3QgbG9naW4gYXMgYSB1c2VyIHRvIHRoZSBwb3J0YWwpJyBbNV1gIFxuICAgIEFDQ09VTlRfU0VSVklDRSA9IDUsXG4gXG59Il19