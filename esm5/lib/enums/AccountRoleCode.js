/*
   Account role code (represent role of user in the account)
*/
export var AccountRoleCode;
(function (AccountRoleCode) {
    // Undefined [0] 
    AccountRoleCode[AccountRoleCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Account administrator can perform all operations [1] 
    AccountRoleCode[AccountRoleCode["ADMIN"] = 1] = "ADMIN";
    // Supervisor can perform all operations on specific folder(s)and can see all modules except Settings [2] 
    AccountRoleCode[AccountRoleCode["SUPERVISOR"] = 2] = "SUPERVISOR";
    // Account operator can perform operations on events only, this user can see administrator and monitor modules but has write permissions on events status only [4] 
    AccountRoleCode[AccountRoleCode["OPERATOR"] = 4] = "OPERATOR";
    // User can see Administrator, Monitor, Investigation and Analytics modules but has write permissions on Reports and investigation modules only [8] 
    AccountRoleCode[AccountRoleCode["USER"] = 8] = "USER";
    // Installer can only connect device to the system and configure cameras, it can see Administrator and Monitor modules only) [16] 
    AccountRoleCode[AccountRoleCode["INSTALLER"] = 16] = "INSTALLER";
})(AccountRoleCode || (AccountRoleCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudFJvbGVDb2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW51bXMvQWNjb3VudFJvbGVDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO0FBQ0YsTUFBTSxDQUFOLElBQVksZUFvQlg7QUFwQkQsV0FBWSxlQUFlO0lBRXZCLGlCQUFpQjtJQUNqQiwrREFBYSxDQUFBO0lBRWIsd0RBQXdEO0lBQ3hELHVEQUFTLENBQUE7SUFFVCwwR0FBMEc7SUFDMUcsaUVBQWMsQ0FBQTtJQUVkLG1LQUFtSztJQUNuSyw2REFBWSxDQUFBO0lBRVosb0pBQW9KO0lBQ3BKLHFEQUFRLENBQUE7SUFFUixrSUFBa0k7SUFDbEksZ0VBQWMsQ0FBQTtBQUVsQixDQUFDLEVBcEJXLGVBQWUsS0FBZixlQUFlLFFBb0IxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICAgQWNjb3VudCByb2xlIGNvZGUgKHJlcHJlc2VudCByb2xlIG9mIHVzZXIgaW4gdGhlIGFjY291bnQpIFxuKi9cbmV4cG9ydCBlbnVtIEFjY291bnRSb2xlQ29kZSB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIEFjY291bnQgYWRtaW5pc3RyYXRvciBjYW4gcGVyZm9ybSBhbGwgb3BlcmF0aW9ucyBbMV0gXG4gICAgQURNSU4gPSAxLFxuIFxuICAgIC8vIFN1cGVydmlzb3IgY2FuIHBlcmZvcm0gYWxsIG9wZXJhdGlvbnMgb24gc3BlY2lmaWMgZm9sZGVyKHMpYW5kIGNhbiBzZWUgYWxsIG1vZHVsZXMgZXhjZXB0IFNldHRpbmdzIFsyXSBcbiAgICBTVVBFUlZJU09SID0gMixcbiBcbiAgICAvLyBBY2NvdW50IG9wZXJhdG9yIGNhbiBwZXJmb3JtIG9wZXJhdGlvbnMgb24gZXZlbnRzIG9ubHksIHRoaXMgdXNlciBjYW4gc2VlIGFkbWluaXN0cmF0b3IgYW5kIG1vbml0b3IgbW9kdWxlcyBidXQgaGFzIHdyaXRlIHBlcm1pc3Npb25zIG9uIGV2ZW50cyBzdGF0dXMgb25seSBbNF0gXG4gICAgT1BFUkFUT1IgPSA0LFxuIFxuICAgIC8vIFVzZXIgY2FuIHNlZSBBZG1pbmlzdHJhdG9yLCBNb25pdG9yLCBJbnZlc3RpZ2F0aW9uIGFuZCBBbmFseXRpY3MgbW9kdWxlcyBidXQgaGFzIHdyaXRlIHBlcm1pc3Npb25zIG9uIFJlcG9ydHMgYW5kIGludmVzdGlnYXRpb24gbW9kdWxlcyBvbmx5IFs4XSBcbiAgICBVU0VSID0gOCxcbiBcbiAgICAvLyBJbnN0YWxsZXIgY2FuIG9ubHkgY29ubmVjdCBkZXZpY2UgdG8gdGhlIHN5c3RlbSBhbmQgY29uZmlndXJlIGNhbWVyYXMsIGl0IGNhbiBzZWUgQWRtaW5pc3RyYXRvciBhbmQgTW9uaXRvciBtb2R1bGVzIG9ubHkpIFsxNl0gXG4gICAgSU5TVEFMTEVSID0gMTYsXG4gXG59Il19