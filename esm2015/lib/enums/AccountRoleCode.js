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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudFJvbGVDb2RlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9lbnVtcy9BY2NvdW50Um9sZUNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRixNQUFNLENBQU4sSUFBWSxlQW9CWDtBQXBCRCxXQUFZLGVBQWU7SUFFdkIsaUJBQWlCO0lBQ2pCLCtEQUFhLENBQUE7SUFFYix3REFBd0Q7SUFDeEQsdURBQVMsQ0FBQTtJQUVULDBHQUEwRztJQUMxRyxpRUFBYyxDQUFBO0lBRWQsbUtBQW1LO0lBQ25LLDZEQUFZLENBQUE7SUFFWixvSkFBb0o7SUFDcEoscURBQVEsQ0FBQTtJQUVSLGtJQUFrSTtJQUNsSSxnRUFBYyxDQUFBO0FBRWxCLENBQUMsRUFwQlcsZUFBZSxLQUFmLGVBQWUsUUFvQjFCIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gICBBY2NvdW50IHJvbGUgY29kZSAocmVwcmVzZW50IHJvbGUgb2YgdXNlciBpbiB0aGUgYWNjb3VudCkgXG4qL1xuZXhwb3J0IGVudW0gQWNjb3VudFJvbGVDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gQWNjb3VudCBhZG1pbmlzdHJhdG9yIGNhbiBwZXJmb3JtIGFsbCBvcGVyYXRpb25zIFsxXSBcbiAgICBBRE1JTiA9IDEsXG4gXG4gICAgLy8gU3VwZXJ2aXNvciBjYW4gcGVyZm9ybSBhbGwgb3BlcmF0aW9ucyBvbiBzcGVjaWZpYyBmb2xkZXIocylhbmQgY2FuIHNlZSBhbGwgbW9kdWxlcyBleGNlcHQgU2V0dGluZ3MgWzJdIFxuICAgIFNVUEVSVklTT1IgPSAyLFxuIFxuICAgIC8vIEFjY291bnQgb3BlcmF0b3IgY2FuIHBlcmZvcm0gb3BlcmF0aW9ucyBvbiBldmVudHMgb25seSwgdGhpcyB1c2VyIGNhbiBzZWUgYWRtaW5pc3RyYXRvciBhbmQgbW9uaXRvciBtb2R1bGVzIGJ1dCBoYXMgd3JpdGUgcGVybWlzc2lvbnMgb24gZXZlbnRzIHN0YXR1cyBvbmx5IFs0XSBcbiAgICBPUEVSQVRPUiA9IDQsXG4gXG4gICAgLy8gVXNlciBjYW4gc2VlIEFkbWluaXN0cmF0b3IsIE1vbml0b3IsIEludmVzdGlnYXRpb24gYW5kIEFuYWx5dGljcyBtb2R1bGVzIGJ1dCBoYXMgd3JpdGUgcGVybWlzc2lvbnMgb24gUmVwb3J0cyBhbmQgaW52ZXN0aWdhdGlvbiBtb2R1bGVzIG9ubHkgWzhdIFxuICAgIFVTRVIgPSA4LFxuIFxuICAgIC8vIEluc3RhbGxlciBjYW4gb25seSBjb25uZWN0IGRldmljZSB0byB0aGUgc3lzdGVtIGFuZCBjb25maWd1cmUgY2FtZXJhcywgaXQgY2FuIHNlZSBBZG1pbmlzdHJhdG9yIGFuZCBNb25pdG9yIG1vZHVsZXMgb25seSkgWzE2XSBcbiAgICBJTlNUQUxMRVIgPSAxNixcbiBcbn0iXX0=