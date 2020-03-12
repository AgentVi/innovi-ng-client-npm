/*
   User type code
*/
export var UserTypeCode;
(function (UserTypeCode) {
    // Undefined [0] 
    UserTypeCode[UserTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // System administrator has access to all accounts and permissions to perform all actions [1] 
    UserTypeCode[UserTypeCode["SYSADMIN"] = 1] = "SYSADMIN";
    // Support user has view permissions only for all accounts that enabled option Enable Support [2] 
    UserTypeCode[UserTypeCode["SUPPORT"] = 2] = "SUPPORT";
    // Presale user has access to all accounts of type DEMO and TRAIL and permissions to perform all actions on these accounts [3] 
    UserTypeCode[UserTypeCode["PRESALE"] = 3] = "PRESALE";
    // Account user - has access to specific accounts with role based access control [4] 
    UserTypeCode[UserTypeCode["ACCOUNT_USER"] = 4] = "ACCOUNT_USER";
    // Account service - to be used by other systems to perform actions using the API (can't login as a user to the portal)' [5]` 
    UserTypeCode[UserTypeCode["ACCOUNT_SERVICE"] = 5] = "ACCOUNT_SERVICE";
})(UserTypeCode || (UserTypeCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclR5cGVDb2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW51bXMvVXNlclR5cGVDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO0FBQ0YsTUFBTSxDQUFOLElBQVksWUFvQlg7QUFwQkQsV0FBWSxZQUFZO0lBRXBCLGlCQUFpQjtJQUNqQix5REFBYSxDQUFBO0lBRWIsOEZBQThGO0lBQzlGLHVEQUFZLENBQUE7SUFFWixrR0FBa0c7SUFDbEcscURBQVcsQ0FBQTtJQUVYLCtIQUErSDtJQUMvSCxxREFBVyxDQUFBO0lBRVgscUZBQXFGO0lBQ3JGLCtEQUFnQixDQUFBO0lBRWhCLDhIQUE4SDtJQUM5SCxxRUFBbUIsQ0FBQTtBQUV2QixDQUFDLEVBcEJXLFlBQVksS0FBWixZQUFZLFFBb0J2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICAgVXNlciB0eXBlIGNvZGUgXG4qL1xuZXhwb3J0IGVudW0gVXNlclR5cGVDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gU3lzdGVtIGFkbWluaXN0cmF0b3IgaGFzIGFjY2VzcyB0byBhbGwgYWNjb3VudHMgYW5kIHBlcm1pc3Npb25zIHRvIHBlcmZvcm0gYWxsIGFjdGlvbnMgWzFdIFxuICAgIFNZU0FETUlOID0gMSxcbiBcbiAgICAvLyBTdXBwb3J0IHVzZXIgaGFzIHZpZXcgcGVybWlzc2lvbnMgb25seSBmb3IgYWxsIGFjY291bnRzIHRoYXQgZW5hYmxlZCBvcHRpb24gRW5hYmxlIFN1cHBvcnQgWzJdIFxuICAgIFNVUFBPUlQgPSAyLFxuIFxuICAgIC8vIFByZXNhbGUgdXNlciBoYXMgYWNjZXNzIHRvIGFsbCBhY2NvdW50cyBvZiB0eXBlIERFTU8gYW5kIFRSQUlMIGFuZCBwZXJtaXNzaW9ucyB0byBwZXJmb3JtIGFsbCBhY3Rpb25zIG9uIHRoZXNlIGFjY291bnRzIFszXSBcbiAgICBQUkVTQUxFID0gMyxcbiBcbiAgICAvLyBBY2NvdW50IHVzZXIgLSBoYXMgYWNjZXNzIHRvIHNwZWNpZmljIGFjY291bnRzIHdpdGggcm9sZSBiYXNlZCBhY2Nlc3MgY29udHJvbCBbNF0gXG4gICAgQUNDT1VOVF9VU0VSID0gNCxcbiBcbiAgICAvLyBBY2NvdW50IHNlcnZpY2UgLSB0byBiZSB1c2VkIGJ5IG90aGVyIHN5c3RlbXMgdG8gcGVyZm9ybSBhY3Rpb25zIHVzaW5nIHRoZSBBUEkgKGNhbid0IGxvZ2luIGFzIGEgdXNlciB0byB0aGUgcG9ydGFsKScgWzVdYCBcbiAgICBBQ0NPVU5UX1NFUlZJQ0UgPSA1LFxuIFxufSJdfQ==