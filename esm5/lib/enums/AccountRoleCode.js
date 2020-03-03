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
    // Identical to USER with no ability to view INVESTIGATION or ANALYTICS module [32] 
    AccountRoleCode[AccountRoleCode["DEMO"] = 32] = "DEMO";
})(AccountRoleCode || (AccountRoleCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudFJvbGVDb2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW51bXMvQWNjb3VudFJvbGVDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO0FBQ0YsTUFBTSxDQUFOLElBQVksZUF1Qlg7QUF2QkQsV0FBWSxlQUFlO0lBRXZCLGlCQUFpQjtJQUNqQiwrREFBYSxDQUFBO0lBRWIsd0RBQXdEO0lBQ3hELHVEQUFTLENBQUE7SUFFVCwwR0FBMEc7SUFDMUcsaUVBQWMsQ0FBQTtJQUVkLG1LQUFtSztJQUNuSyw2REFBWSxDQUFBO0lBRVosb0pBQW9KO0lBQ3BKLHFEQUFRLENBQUE7SUFFUixrSUFBa0k7SUFDbEksZ0VBQWMsQ0FBQTtJQUVkLG9GQUFvRjtJQUNwRixzREFBUyxDQUFBO0FBRWIsQ0FBQyxFQXZCVyxlQUFlLEtBQWYsZUFBZSxRQXVCMUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIEFjY291bnQgcm9sZSBjb2RlIChyZXByZXNlbnQgcm9sZSBvZiB1c2VyIGluIHRoZSBhY2NvdW50KSBcbiovXG5leHBvcnQgZW51bSBBY2NvdW50Um9sZUNvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBBY2NvdW50IGFkbWluaXN0cmF0b3IgY2FuIHBlcmZvcm0gYWxsIG9wZXJhdGlvbnMgWzFdIFxuICAgIEFETUlOID0gMSxcbiBcbiAgICAvLyBTdXBlcnZpc29yIGNhbiBwZXJmb3JtIGFsbCBvcGVyYXRpb25zIG9uIHNwZWNpZmljIGZvbGRlcihzKWFuZCBjYW4gc2VlIGFsbCBtb2R1bGVzIGV4Y2VwdCBTZXR0aW5ncyBbMl0gXG4gICAgU1VQRVJWSVNPUiA9IDIsXG4gXG4gICAgLy8gQWNjb3VudCBvcGVyYXRvciBjYW4gcGVyZm9ybSBvcGVyYXRpb25zIG9uIGV2ZW50cyBvbmx5LCB0aGlzIHVzZXIgY2FuIHNlZSBhZG1pbmlzdHJhdG9yIGFuZCBtb25pdG9yIG1vZHVsZXMgYnV0IGhhcyB3cml0ZSBwZXJtaXNzaW9ucyBvbiBldmVudHMgc3RhdHVzIG9ubHkgWzRdIFxuICAgIE9QRVJBVE9SID0gNCxcbiBcbiAgICAvLyBVc2VyIGNhbiBzZWUgQWRtaW5pc3RyYXRvciwgTW9uaXRvciwgSW52ZXN0aWdhdGlvbiBhbmQgQW5hbHl0aWNzIG1vZHVsZXMgYnV0IGhhcyB3cml0ZSBwZXJtaXNzaW9ucyBvbiBSZXBvcnRzIGFuZCBpbnZlc3RpZ2F0aW9uIG1vZHVsZXMgb25seSBbOF0gXG4gICAgVVNFUiA9IDgsXG4gXG4gICAgLy8gSW5zdGFsbGVyIGNhbiBvbmx5IGNvbm5lY3QgZGV2aWNlIHRvIHRoZSBzeXN0ZW0gYW5kIGNvbmZpZ3VyZSBjYW1lcmFzLCBpdCBjYW4gc2VlIEFkbWluaXN0cmF0b3IgYW5kIE1vbml0b3IgbW9kdWxlcyBvbmx5KSBbMTZdIFxuICAgIElOU1RBTExFUiA9IDE2LFxuIFxuICAgIC8vIElkZW50aWNhbCB0byBVU0VSIHdpdGggbm8gYWJpbGl0eSB0byB2aWV3IElOVkVTVElHQVRJT04gb3IgQU5BTFlUSUNTIG1vZHVsZSBbMzJdIFxuICAgIERFTU8gPSAzMixcbiBcbn0iXX0=