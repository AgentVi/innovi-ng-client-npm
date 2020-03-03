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
    // System user - has access to specific accounts with role based access control [4] 
    UserTypeCode[UserTypeCode["USER"] = 4] = "USER";
    // Account service - to be used by other systems to perform actions using the API (can't login as a user to the portal)' [5]` 
    UserTypeCode[UserTypeCode["ACCOUNT_SERVICE"] = 5] = "ACCOUNT_SERVICE";
})(UserTypeCode || (UserTypeCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclR5cGVDb2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW51bXMvVXNlclR5cGVDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO0FBQ0YsTUFBTSxDQUFOLElBQVksWUFpQlg7QUFqQkQsV0FBWSxZQUFZO0lBRXBCLGlCQUFpQjtJQUNqQix5REFBYSxDQUFBO0lBRWIsOEZBQThGO0lBQzlGLHVEQUFZLENBQUE7SUFFWixrR0FBa0c7SUFDbEcscURBQVcsQ0FBQTtJQUVYLG9GQUFvRjtJQUNwRiwrQ0FBUSxDQUFBO0lBRVIsOEhBQThIO0lBQzlILHFFQUFtQixDQUFBO0FBRXZCLENBQUMsRUFqQlcsWUFBWSxLQUFaLFlBQVksUUFpQnZCIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gICBVc2VyIHR5cGUgY29kZSBcbiovXG5leHBvcnQgZW51bSBVc2VyVHlwZUNvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBTeXN0ZW0gYWRtaW5pc3RyYXRvciBoYXMgYWNjZXNzIHRvIGFsbCBhY2NvdW50cyBhbmQgcGVybWlzc2lvbnMgdG8gcGVyZm9ybSBhbGwgYWN0aW9ucyBbMV0gXG4gICAgU1lTQURNSU4gPSAxLFxuIFxuICAgIC8vIFN1cHBvcnQgdXNlciBoYXMgdmlldyBwZXJtaXNzaW9ucyBvbmx5IGZvciBhbGwgYWNjb3VudHMgdGhhdCBlbmFibGVkIG9wdGlvbiBFbmFibGUgU3VwcG9ydCBbMl0gXG4gICAgU1VQUE9SVCA9IDIsXG4gXG4gICAgLy8gU3lzdGVtIHVzZXIgLSBoYXMgYWNjZXNzIHRvIHNwZWNpZmljIGFjY291bnRzIHdpdGggcm9sZSBiYXNlZCBhY2Nlc3MgY29udHJvbCBbNF0gXG4gICAgVVNFUiA9IDQsXG4gXG4gICAgLy8gQWNjb3VudCBzZXJ2aWNlIC0gdG8gYmUgdXNlZCBieSBvdGhlciBzeXN0ZW1zIHRvIHBlcmZvcm0gYWN0aW9ucyB1c2luZyB0aGUgQVBJIChjYW4ndCBsb2dpbiBhcyBhIHVzZXIgdG8gdGhlIHBvcnRhbCknIFs1XWAgXG4gICAgQUNDT1VOVF9TRVJWSUNFID0gNSxcbiBcbn0iXX0=