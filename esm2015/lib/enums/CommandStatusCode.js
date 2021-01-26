/*
   Appliance command status
*/
export var CommandStatusCode;
(function (CommandStatusCode) {
    // Undefined [0] 
    CommandStatusCode[CommandStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Command is pending in the device command list  [1] 
    CommandStatusCode[CommandStatusCode["PENDING"] = 1] = "PENDING";
    // Command was accepted by the device manager [2] 
    CommandStatusCode[CommandStatusCode["EXECUTING"] = 2] = "EXECUTING";
    // Command executed successfully [3] 
    CommandStatusCode[CommandStatusCode["COMPLETED"] = 3] = "COMPLETED";
    // Command execution failed [4] 
    CommandStatusCode[CommandStatusCode["FAILED"] = 4] = "FAILED";
    // Command was sent from the command queue to the device manager [5] 
    CommandStatusCode[CommandStatusCode["SENT"] = 5] = "SENT";
})(CommandStatusCode || (CommandStatusCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWFuZFN0YXR1c0NvZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL2VudW1zL0NvbW1hbmRTdGF0dXNDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO0FBQ0YsTUFBTSxDQUFOLElBQVksaUJBb0JYO0FBcEJELFdBQVksaUJBQWlCO0lBRXpCLGlCQUFpQjtJQUNqQixtRUFBYSxDQUFBO0lBRWIsc0RBQXNEO0lBQ3RELCtEQUFXLENBQUE7SUFFWCxrREFBa0Q7SUFDbEQsbUVBQWEsQ0FBQTtJQUViLHFDQUFxQztJQUNyQyxtRUFBYSxDQUFBO0lBRWIsZ0NBQWdDO0lBQ2hDLDZEQUFVLENBQUE7SUFFVixxRUFBcUU7SUFDckUseURBQVEsQ0FBQTtBQUVaLENBQUMsRUFwQlcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQW9CNUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIEFwcGxpYW5jZSBjb21tYW5kIHN0YXR1cyBcbiovXG5leHBvcnQgZW51bSBDb21tYW5kU3RhdHVzQ29kZSB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIENvbW1hbmQgaXMgcGVuZGluZyBpbiB0aGUgZGV2aWNlIGNvbW1hbmQgbGlzdCAgWzFdIFxuICAgIFBFTkRJTkcgPSAxLFxuIFxuICAgIC8vIENvbW1hbmQgd2FzIGFjY2VwdGVkIGJ5IHRoZSBkZXZpY2UgbWFuYWdlciBbMl0gXG4gICAgRVhFQ1VUSU5HID0gMixcbiBcbiAgICAvLyBDb21tYW5kIGV4ZWN1dGVkIHN1Y2Nlc3NmdWxseSBbM10gXG4gICAgQ09NUExFVEVEID0gMyxcbiBcbiAgICAvLyBDb21tYW5kIGV4ZWN1dGlvbiBmYWlsZWQgWzRdIFxuICAgIEZBSUxFRCA9IDQsXG4gXG4gICAgLy8gQ29tbWFuZCB3YXMgc2VudCBmcm9tIHRoZSBjb21tYW5kIHF1ZXVlIHRvIHRoZSBkZXZpY2UgbWFuYWdlciBbNV0gXG4gICAgU0VOVCA9IDUsXG4gXG59Il19