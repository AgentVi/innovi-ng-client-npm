/*
   Websocket client op codes
*/
export var SocketOpCode;
(function (SocketOpCode) {
    // Undefined [0] 
    SocketOpCode[SocketOpCode["Undefined"] = 0] = "Undefined";
    // Entity change notification on add [1] 
    SocketOpCode[SocketOpCode["EntitiesAdd"] = 1] = "EntitiesAdd";
    // Entity change notification on update [2] 
    SocketOpCode[SocketOpCode["EntitiesUpdate"] = 2] = "EntitiesUpdate";
    // Entity change notification on delete [3] 
    SocketOpCode[SocketOpCode["EntitiesDelete"] = 3] = "EntitiesDelete";
    // Request entities change notification for account [100] 
    SocketOpCode[SocketOpCode["EntitiesRequest"] = 100] = "EntitiesRequest";
    // Request live video streaming [1010] 
    SocketOpCode[SocketOpCode["LiveRequest"] = 1010] = "LiveRequest";
    // Request playback video frames [1020] 
    SocketOpCode[SocketOpCode["PlaybackRequest"] = 1020] = "PlaybackRequest";
    // Request pause video frame (renew session) [1021] 
    SocketOpCode[SocketOpCode["PauseRequest"] = 1021] = "PauseRequest";
    // Request for events stream (including filters) [1030] 
    SocketOpCode[SocketOpCode["EventsRequest"] = 1030] = "EventsRequest";
    // Event notification [1031] 
    SocketOpCode[SocketOpCode["EventNotification"] = 1031] = "EventNotification";
    // Health event notification [1032] 
    SocketOpCode[SocketOpCode["HealthEventNotification"] = 1032] = "HealthEventNotification";
    // Closed health event notification [1033] 
    SocketOpCode[SocketOpCode["ClosedHealthEventNotification"] = 1033] = "ClosedHealthEventNotification";
    // Request for health status stream [1040] 
    SocketOpCode[SocketOpCode["HealthRequest"] = 1040] = "HealthRequest";
    // Health status notification [1041] 
    SocketOpCode[SocketOpCode["HealthNotification"] = 1041] = "HealthNotification";
    // SSH open connection request [1101] 
    SocketOpCode[SocketOpCode["SSHOpen"] = 1101] = "SSHOpen";
    // SSH close connection request [1102] 
    SocketOpCode[SocketOpCode["SSHClose"] = 1102] = "SSHClose";
    // SSH send input request [1103] 
    SocketOpCode[SocketOpCode["SSHInput"] = 1103] = "SSHInput";
    // SSH output response [1104] 
    SocketOpCode[SocketOpCode["SSHOutput"] = 1104] = "SSHOutput";
})(SocketOpCode || (SocketOpCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29ja2V0T3BDb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9lbnVtcy9Tb2NrZXRPcENvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRixNQUFNLENBQU4sSUFBWSxZQXdEWDtBQXhERCxXQUFZLFlBQVk7SUFFcEIsaUJBQWlCO0lBQ2pCLHlEQUFhLENBQUE7SUFFYix5Q0FBeUM7SUFDekMsNkRBQWUsQ0FBQTtJQUVmLDRDQUE0QztJQUM1QyxtRUFBa0IsQ0FBQTtJQUVsQiw0Q0FBNEM7SUFDNUMsbUVBQWtCLENBQUE7SUFFbEIsMERBQTBEO0lBQzFELHVFQUFxQixDQUFBO0lBRXJCLHVDQUF1QztJQUN2QyxnRUFBa0IsQ0FBQTtJQUVsQix3Q0FBd0M7SUFDeEMsd0VBQXNCLENBQUE7SUFFdEIsb0RBQW9EO0lBQ3BELGtFQUFtQixDQUFBO0lBRW5CLHdEQUF3RDtJQUN4RCxvRUFBb0IsQ0FBQTtJQUVwQiw2QkFBNkI7SUFDN0IsNEVBQXdCLENBQUE7SUFFeEIsb0NBQW9DO0lBQ3BDLHdGQUE4QixDQUFBO0lBRTlCLDJDQUEyQztJQUMzQyxvR0FBb0MsQ0FBQTtJQUVwQywyQ0FBMkM7SUFDM0Msb0VBQW9CLENBQUE7SUFFcEIscUNBQXFDO0lBQ3JDLDhFQUF5QixDQUFBO0lBRXpCLHNDQUFzQztJQUN0Qyx3REFBYyxDQUFBO0lBRWQsdUNBQXVDO0lBQ3ZDLDBEQUFlLENBQUE7SUFFZixpQ0FBaUM7SUFDakMsMERBQWUsQ0FBQTtJQUVmLDhCQUE4QjtJQUM5Qiw0REFBZ0IsQ0FBQTtBQUVwQixDQUFDLEVBeERXLFlBQVksS0FBWixZQUFZLFFBd0R2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICAgV2Vic29ja2V0IGNsaWVudCBvcCBjb2RlcyBcbiovXG5leHBvcnQgZW51bSBTb2NrZXRPcENvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVW5kZWZpbmVkID0gMCxcbiBcbiAgICAvLyBFbnRpdHkgY2hhbmdlIG5vdGlmaWNhdGlvbiBvbiBhZGQgWzFdIFxuICAgIEVudGl0aWVzQWRkID0gMSxcbiBcbiAgICAvLyBFbnRpdHkgY2hhbmdlIG5vdGlmaWNhdGlvbiBvbiB1cGRhdGUgWzJdIFxuICAgIEVudGl0aWVzVXBkYXRlID0gMixcbiBcbiAgICAvLyBFbnRpdHkgY2hhbmdlIG5vdGlmaWNhdGlvbiBvbiBkZWxldGUgWzNdIFxuICAgIEVudGl0aWVzRGVsZXRlID0gMyxcbiBcbiAgICAvLyBSZXF1ZXN0IGVudGl0aWVzIGNoYW5nZSBub3RpZmljYXRpb24gZm9yIGFjY291bnQgWzEwMF0gXG4gICAgRW50aXRpZXNSZXF1ZXN0ID0gMTAwLFxuIFxuICAgIC8vIFJlcXVlc3QgbGl2ZSB2aWRlbyBzdHJlYW1pbmcgWzEwMTBdIFxuICAgIExpdmVSZXF1ZXN0ID0gMTAxMCxcbiBcbiAgICAvLyBSZXF1ZXN0IHBsYXliYWNrIHZpZGVvIGZyYW1lcyBbMTAyMF0gXG4gICAgUGxheWJhY2tSZXF1ZXN0ID0gMTAyMCxcbiBcbiAgICAvLyBSZXF1ZXN0IHBhdXNlIHZpZGVvIGZyYW1lIChyZW5ldyBzZXNzaW9uKSBbMTAyMV0gXG4gICAgUGF1c2VSZXF1ZXN0ID0gMTAyMSxcbiBcbiAgICAvLyBSZXF1ZXN0IGZvciBldmVudHMgc3RyZWFtIChpbmNsdWRpbmcgZmlsdGVycykgWzEwMzBdIFxuICAgIEV2ZW50c1JlcXVlc3QgPSAxMDMwLFxuIFxuICAgIC8vIEV2ZW50IG5vdGlmaWNhdGlvbiBbMTAzMV0gXG4gICAgRXZlbnROb3RpZmljYXRpb24gPSAxMDMxLFxuIFxuICAgIC8vIEhlYWx0aCBldmVudCBub3RpZmljYXRpb24gWzEwMzJdIFxuICAgIEhlYWx0aEV2ZW50Tm90aWZpY2F0aW9uID0gMTAzMixcbiBcbiAgICAvLyBDbG9zZWQgaGVhbHRoIGV2ZW50IG5vdGlmaWNhdGlvbiBbMTAzM10gXG4gICAgQ2xvc2VkSGVhbHRoRXZlbnROb3RpZmljYXRpb24gPSAxMDMzLFxuIFxuICAgIC8vIFJlcXVlc3QgZm9yIGhlYWx0aCBzdGF0dXMgc3RyZWFtIFsxMDQwXSBcbiAgICBIZWFsdGhSZXF1ZXN0ID0gMTA0MCxcbiBcbiAgICAvLyBIZWFsdGggc3RhdHVzIG5vdGlmaWNhdGlvbiBbMTA0MV0gXG4gICAgSGVhbHRoTm90aWZpY2F0aW9uID0gMTA0MSxcbiBcbiAgICAvLyBTU0ggb3BlbiBjb25uZWN0aW9uIHJlcXVlc3QgWzExMDFdIFxuICAgIFNTSE9wZW4gPSAxMTAxLFxuIFxuICAgIC8vIFNTSCBjbG9zZSBjb25uZWN0aW9uIHJlcXVlc3QgWzExMDJdIFxuICAgIFNTSENsb3NlID0gMTEwMixcbiBcbiAgICAvLyBTU0ggc2VuZCBpbnB1dCByZXF1ZXN0IFsxMTAzXSBcbiAgICBTU0hJbnB1dCA9IDExMDMsXG4gXG4gICAgLy8gU1NIIG91dHB1dCByZXNwb25zZSBbMTEwNF0gXG4gICAgU1NIT3V0cHV0ID0gMTEwNCxcbiBcbn0iXX0=