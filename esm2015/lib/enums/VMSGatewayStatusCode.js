/*
   VMS Gateway status code
*/
export var VMSGatewayStatusCode;
(function (VMSGatewayStatusCode) {
    // Undefined [0] 
    VMSGatewayStatusCode[VMSGatewayStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // VMS gateway is configured but not yet connected [1] 
    VMSGatewayStatusCode[VMSGatewayStatusCode["PENDING"] = 1] = "PENDING";
    // VMS gateway is connected to the system and to the VMS [2] 
    VMSGatewayStatusCode[VMSGatewayStatusCode["ACTIVE"] = 2] = "ACTIVE";
    // VMS gateway in warning state (high latency) [3] 
    VMSGatewayStatusCode[VMSGatewayStatusCode["WARNING"] = 3] = "WARNING";
    // VMS gateway in error state [4] 
    VMSGatewayStatusCode[VMSGatewayStatusCode["ERROR"] = 4] = "ERROR";
})(VMSGatewayStatusCode || (VMSGatewayStatusCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVk1TR2F0ZXdheVN0YXR1c0NvZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL2VudW1zL1ZNU0dhdGV3YXlTdGF0dXNDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO0FBQ0YsTUFBTSxDQUFOLElBQVksb0JBaUJYO0FBakJELFdBQVksb0JBQW9CO0lBRTVCLGlCQUFpQjtJQUNqQix5RUFBYSxDQUFBO0lBRWIsdURBQXVEO0lBQ3ZELHFFQUFXLENBQUE7SUFFWCw2REFBNkQ7SUFDN0QsbUVBQVUsQ0FBQTtJQUVWLG1EQUFtRDtJQUNuRCxxRUFBVyxDQUFBO0lBRVgsa0NBQWtDO0lBQ2xDLGlFQUFTLENBQUE7QUFFYixDQUFDLEVBakJXLG9CQUFvQixLQUFwQixvQkFBb0IsUUFpQi9CIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gICBWTVMgR2F0ZXdheSBzdGF0dXMgY29kZSBcbiovXG5leHBvcnQgZW51bSBWTVNHYXRld2F5U3RhdHVzQ29kZSB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIFZNUyBnYXRld2F5IGlzIGNvbmZpZ3VyZWQgYnV0IG5vdCB5ZXQgY29ubmVjdGVkIFsxXSBcbiAgICBQRU5ESU5HID0gMSxcbiBcbiAgICAvLyBWTVMgZ2F0ZXdheSBpcyBjb25uZWN0ZWQgdG8gdGhlIHN5c3RlbSBhbmQgdG8gdGhlIFZNUyBbMl0gXG4gICAgQUNUSVZFID0gMixcbiBcbiAgICAvLyBWTVMgZ2F0ZXdheSBpbiB3YXJuaW5nIHN0YXRlIChoaWdoIGxhdGVuY3kpIFszXSBcbiAgICBXQVJOSU5HID0gMyxcbiBcbiAgICAvLyBWTVMgZ2F0ZXdheSBpbiBlcnJvciBzdGF0ZSBbNF0gXG4gICAgRVJST1IgPSA0LFxuIFxufSJdfQ==