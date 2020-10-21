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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVk1TR2F0ZXdheVN0YXR1c0NvZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnVtcy9WTVNHYXRld2F5U3RhdHVzQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGLE1BQU0sQ0FBTixJQUFZLG9CQWlCWDtBQWpCRCxXQUFZLG9CQUFvQjtJQUU1QixpQkFBaUI7SUFDakIseUVBQWEsQ0FBQTtJQUViLHVEQUF1RDtJQUN2RCxxRUFBVyxDQUFBO0lBRVgsNkRBQTZEO0lBQzdELG1FQUFVLENBQUE7SUFFVixtREFBbUQ7SUFDbkQscUVBQVcsQ0FBQTtJQUVYLGtDQUFrQztJQUNsQyxpRUFBUyxDQUFBO0FBRWIsQ0FBQyxFQWpCVyxvQkFBb0IsS0FBcEIsb0JBQW9CLFFBaUIvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICAgVk1TIEdhdGV3YXkgc3RhdHVzIGNvZGUgXG4qL1xuZXhwb3J0IGVudW0gVk1TR2F0ZXdheVN0YXR1c0NvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBWTVMgZ2F0ZXdheSBpcyBjb25maWd1cmVkIGJ1dCBub3QgeWV0IGNvbm5lY3RlZCBbMV0gXG4gICAgUEVORElORyA9IDEsXG4gXG4gICAgLy8gVk1TIGdhdGV3YXkgaXMgY29ubmVjdGVkIHRvIHRoZSBzeXN0ZW0gYW5kIHRvIHRoZSBWTVMgWzJdIFxuICAgIEFDVElWRSA9IDIsXG4gXG4gICAgLy8gVk1TIGdhdGV3YXkgaW4gd2FybmluZyBzdGF0ZSAoaGlnaCBsYXRlbmN5KSBbM10gXG4gICAgV0FSTklORyA9IDMsXG4gXG4gICAgLy8gVk1TIGdhdGV3YXkgaW4gZXJyb3Igc3RhdGUgWzRdIFxuICAgIEVSUk9SID0gNCxcbiBcbn0iXX0=