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
    // Account user - has access to specific accounts with role based access control [4] 
    UserTypeCode[UserTypeCode["ACCOUNT_USER"] = 4] = "ACCOUNT_USER";
    // Account service - to be used by other systems to perform actions using the API (can't login as a user to the portal)' [5]` 
    UserTypeCode[UserTypeCode["ACCOUNT_SERVICE"] = 5] = "ACCOUNT_SERVICE";
})(UserTypeCode || (UserTypeCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclR5cGVDb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9lbnVtcy9Vc2VyVHlwZUNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRixNQUFNLENBQU4sSUFBWSxZQWlCWDtBQWpCRCxXQUFZLFlBQVk7SUFFcEIsaUJBQWlCO0lBQ2pCLHlEQUFhLENBQUE7SUFFYiw4RkFBOEY7SUFDOUYsdURBQVksQ0FBQTtJQUVaLGtHQUFrRztJQUNsRyxxREFBVyxDQUFBO0lBRVgscUZBQXFGO0lBQ3JGLCtEQUFnQixDQUFBO0lBRWhCLDhIQUE4SDtJQUM5SCxxRUFBbUIsQ0FBQTtBQUV2QixDQUFDLEVBakJXLFlBQVksS0FBWixZQUFZLFFBaUJ2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICAgVXNlciB0eXBlIGNvZGUgXG4qL1xuZXhwb3J0IGVudW0gVXNlclR5cGVDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gU3lzdGVtIGFkbWluaXN0cmF0b3IgaGFzIGFjY2VzcyB0byBhbGwgYWNjb3VudHMgYW5kIHBlcm1pc3Npb25zIHRvIHBlcmZvcm0gYWxsIGFjdGlvbnMgWzFdIFxuICAgIFNZU0FETUlOID0gMSxcbiBcbiAgICAvLyBTdXBwb3J0IHVzZXIgaGFzIHZpZXcgcGVybWlzc2lvbnMgb25seSBmb3IgYWxsIGFjY291bnRzIHRoYXQgZW5hYmxlZCBvcHRpb24gRW5hYmxlIFN1cHBvcnQgWzJdIFxuICAgIFNVUFBPUlQgPSAyLFxuIFxuICAgIC8vIEFjY291bnQgdXNlciAtIGhhcyBhY2Nlc3MgdG8gc3BlY2lmaWMgYWNjb3VudHMgd2l0aCByb2xlIGJhc2VkIGFjY2VzcyBjb250cm9sIFs0XSBcbiAgICBBQ0NPVU5UX1VTRVIgPSA0LFxuIFxuICAgIC8vIEFjY291bnQgc2VydmljZSAtIHRvIGJlIHVzZWQgYnkgb3RoZXIgc3lzdGVtcyB0byBwZXJmb3JtIGFjdGlvbnMgdXNpbmcgdGhlIEFQSSAoY2FuJ3QgbG9naW4gYXMgYSB1c2VyIHRvIHRoZSBwb3J0YWwpJyBbNV1gIFxuICAgIEFDQ09VTlRfU0VSVklDRSA9IDUsXG4gXG59Il19