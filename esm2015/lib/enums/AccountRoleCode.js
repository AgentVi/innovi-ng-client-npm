/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const AccountRoleCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // Account administrator can perform all operations [1] 
    ADMIN: 1,
    // Supervisor can perform all operations on specific folder(s)and can see all modules except Settings [2] 
    SUPERVISOR: 2,
    // Account operator can perform operations on events only, this user can see administrator and monitor modules but has write permissions on events status only [4] 
    OPERATOR: 4,
    // User can see Administrator, Monitor, Investigation and Analytics modules but has write permissions on Reports and investigation modules only [8] 
    USER: 8,
    // Installer can only connect device to the system and configure cameras, it can see Administrator and Monitor modules only) [16] 
    INSTALLER: 16,
};
export { AccountRoleCode };
AccountRoleCode[AccountRoleCode.UNDEFINED] = 'UNDEFINED';
AccountRoleCode[AccountRoleCode.ADMIN] = 'ADMIN';
AccountRoleCode[AccountRoleCode.SUPERVISOR] = 'SUPERVISOR';
AccountRoleCode[AccountRoleCode.OPERATOR] = 'OPERATOR';
AccountRoleCode[AccountRoleCode.USER] = 'USER';
AccountRoleCode[AccountRoleCode.INSTALLER] = 'INSTALLER';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudFJvbGVDb2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW51bXMvQWNjb3VudFJvbGVDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUtJLGlCQUFpQjtJQUNqQixZQUFhO0lBRWIsd0RBQXdEO0lBQ3hELFFBQVM7SUFFVCwwR0FBMEc7SUFDMUcsYUFBYztJQUVkLG1LQUFtSztJQUNuSyxXQUFZO0lBRVosb0pBQW9KO0lBQ3BKLE9BQVE7SUFFUixrSUFBa0k7SUFDbEksYUFBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICAgQWNjb3VudCByb2xlIGNvZGUgKHJlcHJlc2VudCByb2xlIG9mIHVzZXIgaW4gdGhlIGFjY291bnQpIFxuKi9cbmV4cG9ydCBlbnVtIEFjY291bnRSb2xlQ29kZSB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIEFjY291bnQgYWRtaW5pc3RyYXRvciBjYW4gcGVyZm9ybSBhbGwgb3BlcmF0aW9ucyBbMV0gXG4gICAgQURNSU4gPSAxLFxuIFxuICAgIC8vIFN1cGVydmlzb3IgY2FuIHBlcmZvcm0gYWxsIG9wZXJhdGlvbnMgb24gc3BlY2lmaWMgZm9sZGVyKHMpYW5kIGNhbiBzZWUgYWxsIG1vZHVsZXMgZXhjZXB0IFNldHRpbmdzIFsyXSBcbiAgICBTVVBFUlZJU09SID0gMixcbiBcbiAgICAvLyBBY2NvdW50IG9wZXJhdG9yIGNhbiBwZXJmb3JtIG9wZXJhdGlvbnMgb24gZXZlbnRzIG9ubHksIHRoaXMgdXNlciBjYW4gc2VlIGFkbWluaXN0cmF0b3IgYW5kIG1vbml0b3IgbW9kdWxlcyBidXQgaGFzIHdyaXRlIHBlcm1pc3Npb25zIG9uIGV2ZW50cyBzdGF0dXMgb25seSBbNF0gXG4gICAgT1BFUkFUT1IgPSA0LFxuIFxuICAgIC8vIFVzZXIgY2FuIHNlZSBBZG1pbmlzdHJhdG9yLCBNb25pdG9yLCBJbnZlc3RpZ2F0aW9uIGFuZCBBbmFseXRpY3MgbW9kdWxlcyBidXQgaGFzIHdyaXRlIHBlcm1pc3Npb25zIG9uIFJlcG9ydHMgYW5kIGludmVzdGlnYXRpb24gbW9kdWxlcyBvbmx5IFs4XSBcbiAgICBVU0VSID0gOCxcbiBcbiAgICAvLyBJbnN0YWxsZXIgY2FuIG9ubHkgY29ubmVjdCBkZXZpY2UgdG8gdGhlIHN5c3RlbSBhbmQgY29uZmlndXJlIGNhbWVyYXMsIGl0IGNhbiBzZWUgQWRtaW5pc3RyYXRvciBhbmQgTW9uaXRvciBtb2R1bGVzIG9ubHkpIFsxNl0gXG4gICAgSU5TVEFMTEVSID0gMTYsXG4gXG59Il19