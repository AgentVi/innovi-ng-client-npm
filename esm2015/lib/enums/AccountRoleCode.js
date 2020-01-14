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
    // Identical to USER with no ability to view INVESTIGATION or ANALYTICS module [32] 
    DEMO: 32,
};
export { AccountRoleCode };
AccountRoleCode[AccountRoleCode.UNDEFINED] = 'UNDEFINED';
AccountRoleCode[AccountRoleCode.ADMIN] = 'ADMIN';
AccountRoleCode[AccountRoleCode.SUPERVISOR] = 'SUPERVISOR';
AccountRoleCode[AccountRoleCode.OPERATOR] = 'OPERATOR';
AccountRoleCode[AccountRoleCode.USER] = 'USER';
AccountRoleCode[AccountRoleCode.INSTALLER] = 'INSTALLER';
AccountRoleCode[AccountRoleCode.DEMO] = 'DEMO';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudFJvbGVDb2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW51bXMvQWNjb3VudFJvbGVDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUtJLGlCQUFpQjtJQUNqQixZQUFhO0lBRWIsd0RBQXdEO0lBQ3hELFFBQVM7SUFFVCwwR0FBMEc7SUFDMUcsYUFBYztJQUVkLG1LQUFtSztJQUNuSyxXQUFZO0lBRVosb0pBQW9KO0lBQ3BKLE9BQVE7SUFFUixrSUFBa0k7SUFDbEksYUFBYztJQUVkLG9GQUFvRjtJQUNwRixRQUFTIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gICBBY2NvdW50IHJvbGUgY29kZSAocmVwcmVzZW50IHJvbGUgb2YgdXNlciBpbiB0aGUgYWNjb3VudCkgXG4qL1xuZXhwb3J0IGVudW0gQWNjb3VudFJvbGVDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gQWNjb3VudCBhZG1pbmlzdHJhdG9yIGNhbiBwZXJmb3JtIGFsbCBvcGVyYXRpb25zIFsxXSBcbiAgICBBRE1JTiA9IDEsXG4gXG4gICAgLy8gU3VwZXJ2aXNvciBjYW4gcGVyZm9ybSBhbGwgb3BlcmF0aW9ucyBvbiBzcGVjaWZpYyBmb2xkZXIocylhbmQgY2FuIHNlZSBhbGwgbW9kdWxlcyBleGNlcHQgU2V0dGluZ3MgWzJdIFxuICAgIFNVUEVSVklTT1IgPSAyLFxuIFxuICAgIC8vIEFjY291bnQgb3BlcmF0b3IgY2FuIHBlcmZvcm0gb3BlcmF0aW9ucyBvbiBldmVudHMgb25seSwgdGhpcyB1c2VyIGNhbiBzZWUgYWRtaW5pc3RyYXRvciBhbmQgbW9uaXRvciBtb2R1bGVzIGJ1dCBoYXMgd3JpdGUgcGVybWlzc2lvbnMgb24gZXZlbnRzIHN0YXR1cyBvbmx5IFs0XSBcbiAgICBPUEVSQVRPUiA9IDQsXG4gXG4gICAgLy8gVXNlciBjYW4gc2VlIEFkbWluaXN0cmF0b3IsIE1vbml0b3IsIEludmVzdGlnYXRpb24gYW5kIEFuYWx5dGljcyBtb2R1bGVzIGJ1dCBoYXMgd3JpdGUgcGVybWlzc2lvbnMgb24gUmVwb3J0cyBhbmQgaW52ZXN0aWdhdGlvbiBtb2R1bGVzIG9ubHkgWzhdIFxuICAgIFVTRVIgPSA4LFxuIFxuICAgIC8vIEluc3RhbGxlciBjYW4gb25seSBjb25uZWN0IGRldmljZSB0byB0aGUgc3lzdGVtIGFuZCBjb25maWd1cmUgY2FtZXJhcywgaXQgY2FuIHNlZSBBZG1pbmlzdHJhdG9yIGFuZCBNb25pdG9yIG1vZHVsZXMgb25seSkgWzE2XSBcbiAgICBJTlNUQUxMRVIgPSAxNixcbiBcbiAgICAvLyBJZGVudGljYWwgdG8gVVNFUiB3aXRoIG5vIGFiaWxpdHkgdG8gdmlldyBJTlZFU1RJR0FUSU9OIG9yIEFOQUxZVElDUyBtb2R1bGUgWzMyXSBcbiAgICBERU1PID0gMzIsXG4gXG59Il19