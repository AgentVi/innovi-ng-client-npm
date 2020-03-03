/*
   Event status code
*/
export var EventStatusCode;
(function (EventStatusCode) {
    // Undefined [0] 
    EventStatusCode[EventStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // New event [1] 
    EventStatusCode[EventStatusCode["NEW"] = 1] = "NEW";
    // Open (in-progress) event [2] 
    EventStatusCode[EventStatusCode["OPEN"] = 2] = "OPEN";
    // Closed event (tagged as True event) [6] 
    EventStatusCode[EventStatusCode["CLOSED_TRUE"] = 6] = "CLOSED_TRUE";
    // Closed event (tagged as False event) [7] 
    EventStatusCode[EventStatusCode["CLOSED_FALSE"] = 7] = "CLOSED_FALSE";
    // Relevant anomaly event [8] 
    EventStatusCode[EventStatusCode["CLOSED_RELEVANT"] = 8] = "CLOSED_RELEVANT";
    // Irrelevant anomaly event [9] 
    EventStatusCode[EventStatusCode["CLOSED_IRRELEVANT"] = 9] = "CLOSED_IRRELEVANT";
})(EventStatusCode || (EventStatusCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRTdGF0dXNDb2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW51bXMvRXZlbnRTdGF0dXNDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO0FBQ0YsTUFBTSxDQUFOLElBQVksZUF1Qlg7QUF2QkQsV0FBWSxlQUFlO0lBRXZCLGlCQUFpQjtJQUNqQiwrREFBYSxDQUFBO0lBRWIsaUJBQWlCO0lBQ2pCLG1EQUFPLENBQUE7SUFFUCxnQ0FBZ0M7SUFDaEMscURBQVEsQ0FBQTtJQUVSLDJDQUEyQztJQUMzQyxtRUFBZSxDQUFBO0lBRWYsNENBQTRDO0lBQzVDLHFFQUFnQixDQUFBO0lBRWhCLDhCQUE4QjtJQUM5QiwyRUFBbUIsQ0FBQTtJQUVuQixnQ0FBZ0M7SUFDaEMsK0VBQXFCLENBQUE7QUFFekIsQ0FBQyxFQXZCVyxlQUFlLEtBQWYsZUFBZSxRQXVCMUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIEV2ZW50IHN0YXR1cyBjb2RlIFxuKi9cbmV4cG9ydCBlbnVtIEV2ZW50U3RhdHVzQ29kZSB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIE5ldyBldmVudCBbMV0gXG4gICAgTkVXID0gMSxcbiBcbiAgICAvLyBPcGVuIChpbi1wcm9ncmVzcykgZXZlbnQgWzJdIFxuICAgIE9QRU4gPSAyLFxuIFxuICAgIC8vIENsb3NlZCBldmVudCAodGFnZ2VkIGFzIFRydWUgZXZlbnQpIFs2XSBcbiAgICBDTE9TRURfVFJVRSA9IDYsXG4gXG4gICAgLy8gQ2xvc2VkIGV2ZW50ICh0YWdnZWQgYXMgRmFsc2UgZXZlbnQpIFs3XSBcbiAgICBDTE9TRURfRkFMU0UgPSA3LFxuIFxuICAgIC8vIFJlbGV2YW50IGFub21hbHkgZXZlbnQgWzhdIFxuICAgIENMT1NFRF9SRUxFVkFOVCA9IDgsXG4gXG4gICAgLy8gSXJyZWxldmFudCBhbm9tYWx5IGV2ZW50IFs5XSBcbiAgICBDTE9TRURfSVJSRUxFVkFOVCA9IDksXG4gXG59Il19