/*
   User status code
*/
export var UserStatusCode;
(function (UserStatusCode) {
    // Undefined [0] 
    UserStatusCode[UserStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // User is registered and pending verification [1] 
    UserStatusCode[UserStatusCode["PENDING"] = 1] = "PENDING";
    // Active user in the system [2] 
    UserStatusCode[UserStatusCode["ACTIVE"] = 2] = "ACTIVE";
    // Blocked user (only account system can unblock the user) [4] 
    UserStatusCode[UserStatusCode["BLOCKED"] = 3] = "BLOCKED";
    // Suspended user (about to be deleted) [8] 
    UserStatusCode[UserStatusCode["SUSPENDED"] = 4] = "SUSPENDED";
})(UserStatusCode || (UserStatusCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclN0YXR1c0NvZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL2VudW1zL1VzZXJTdGF0dXNDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO0FBQ0YsTUFBTSxDQUFOLElBQVksY0FpQlg7QUFqQkQsV0FBWSxjQUFjO0lBRXRCLGlCQUFpQjtJQUNqQiw2REFBYSxDQUFBO0lBRWIsbURBQW1EO0lBQ25ELHlEQUFXLENBQUE7SUFFWCxpQ0FBaUM7SUFDakMsdURBQVUsQ0FBQTtJQUVWLCtEQUErRDtJQUMvRCx5REFBVyxDQUFBO0lBRVgsNENBQTRDO0lBQzVDLDZEQUFhLENBQUE7QUFFakIsQ0FBQyxFQWpCVyxjQUFjLEtBQWQsY0FBYyxRQWlCekIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIFVzZXIgc3RhdHVzIGNvZGUgXG4qL1xuZXhwb3J0IGVudW0gVXNlclN0YXR1c0NvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBVc2VyIGlzIHJlZ2lzdGVyZWQgYW5kIHBlbmRpbmcgdmVyaWZpY2F0aW9uIFsxXSBcbiAgICBQRU5ESU5HID0gMSxcbiBcbiAgICAvLyBBY3RpdmUgdXNlciBpbiB0aGUgc3lzdGVtIFsyXSBcbiAgICBBQ1RJVkUgPSAyLFxuIFxuICAgIC8vIEJsb2NrZWQgdXNlciAob25seSBhY2NvdW50IHN5c3RlbSBjYW4gdW5ibG9jayB0aGUgdXNlcikgWzRdIFxuICAgIEJMT0NLRUQgPSAzLFxuIFxuICAgIC8vIFN1c3BlbmRlZCB1c2VyIChhYm91dCB0byBiZSBkZWxldGVkKSBbOF0gXG4gICAgU1VTUEVOREVEID0gNCxcbiBcbn0iXX0=