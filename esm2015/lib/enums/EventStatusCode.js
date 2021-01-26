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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRTdGF0dXNDb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9lbnVtcy9FdmVudFN0YXR1c0NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRixNQUFNLENBQU4sSUFBWSxlQXVCWDtBQXZCRCxXQUFZLGVBQWU7SUFFdkIsaUJBQWlCO0lBQ2pCLCtEQUFhLENBQUE7SUFFYixpQkFBaUI7SUFDakIsbURBQU8sQ0FBQTtJQUVQLGdDQUFnQztJQUNoQyxxREFBUSxDQUFBO0lBRVIsMkNBQTJDO0lBQzNDLG1FQUFlLENBQUE7SUFFZiw0Q0FBNEM7SUFDNUMscUVBQWdCLENBQUE7SUFFaEIsOEJBQThCO0lBQzlCLDJFQUFtQixDQUFBO0lBRW5CLGdDQUFnQztJQUNoQywrRUFBcUIsQ0FBQTtBQUV6QixDQUFDLEVBdkJXLGVBQWUsS0FBZixlQUFlLFFBdUIxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICAgRXZlbnQgc3RhdHVzIGNvZGUgXG4qL1xuZXhwb3J0IGVudW0gRXZlbnRTdGF0dXNDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gTmV3IGV2ZW50IFsxXSBcbiAgICBORVcgPSAxLFxuIFxuICAgIC8vIE9wZW4gKGluLXByb2dyZXNzKSBldmVudCBbMl0gXG4gICAgT1BFTiA9IDIsXG4gXG4gICAgLy8gQ2xvc2VkIGV2ZW50ICh0YWdnZWQgYXMgVHJ1ZSBldmVudCkgWzZdIFxuICAgIENMT1NFRF9UUlVFID0gNixcbiBcbiAgICAvLyBDbG9zZWQgZXZlbnQgKHRhZ2dlZCBhcyBGYWxzZSBldmVudCkgWzddIFxuICAgIENMT1NFRF9GQUxTRSA9IDcsXG4gXG4gICAgLy8gUmVsZXZhbnQgYW5vbWFseSBldmVudCBbOF0gXG4gICAgQ0xPU0VEX1JFTEVWQU5UID0gOCxcbiBcbiAgICAvLyBJcnJlbGV2YW50IGFub21hbHkgZXZlbnQgWzldIFxuICAgIENMT1NFRF9JUlJFTEVWQU5UID0gOSxcbiBcbn0iXX0=