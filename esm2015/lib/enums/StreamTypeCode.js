/*
   Video stream type (source) code
*/
export var StreamTypeCode;
(function (StreamTypeCode) {
    // Undefined [0] 
    StreamTypeCode[StreamTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // RTSP stream [1] (streamUrl schema: rtsp://) 
    StreamTypeCode[StreamTypeCode["RTSP"] = 1] = "RTSP";
    // ONVIF stream [2] (streamUrl schema: onvif://) 
    StreamTypeCode[StreamTypeCode["ONVIF"] = 2] = "ONVIF";
    // Video clip from file [3] (streamUrl schema: file:///) 
    StreamTypeCode[StreamTypeCode["CLIP"] = 3] = "CLIP";
    // RTP stream [4] (streamUrl schema: rtp://) 
    StreamTypeCode[StreamTypeCode["RTP"] = 4] = "RTP";
    // MULTICAST stream [5] (streamUrl schema: mcast://) 
    StreamTypeCode[StreamTypeCode["MULTICAST"] = 5] = "MULTICAST";
    // Download clip from http(s) [6] (streamUrl schema: http://  or https://) 
    StreamTypeCode[StreamTypeCode["HTTP"] = 6] = "HTTP";
})(StreamTypeCode || (StreamTypeCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyZWFtVHlwZUNvZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL2VudW1zL1N0cmVhbVR5cGVDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO0FBQ0YsTUFBTSxDQUFOLElBQVksY0F1Qlg7QUF2QkQsV0FBWSxjQUFjO0lBRXRCLGlCQUFpQjtJQUNqQiw2REFBYSxDQUFBO0lBRWIsK0NBQStDO0lBQy9DLG1EQUFRLENBQUE7SUFFUixpREFBaUQ7SUFDakQscURBQVMsQ0FBQTtJQUVULHlEQUF5RDtJQUN6RCxtREFBUSxDQUFBO0lBRVIsNkNBQTZDO0lBQzdDLGlEQUFPLENBQUE7SUFFUCxxREFBcUQ7SUFDckQsNkRBQWEsQ0FBQTtJQUViLDJFQUEyRTtJQUMzRSxtREFBUSxDQUFBO0FBRVosQ0FBQyxFQXZCVyxjQUFjLEtBQWQsY0FBYyxRQXVCekIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIFZpZGVvIHN0cmVhbSB0eXBlIChzb3VyY2UpIGNvZGUgXG4qL1xuZXhwb3J0IGVudW0gU3RyZWFtVHlwZUNvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBSVFNQIHN0cmVhbSBbMV0gKHN0cmVhbVVybCBzY2hlbWE6IHJ0c3A6Ly8pIFxuICAgIFJUU1AgPSAxLFxuIFxuICAgIC8vIE9OVklGIHN0cmVhbSBbMl0gKHN0cmVhbVVybCBzY2hlbWE6IG9udmlmOi8vKSBcbiAgICBPTlZJRiA9IDIsXG4gXG4gICAgLy8gVmlkZW8gY2xpcCBmcm9tIGZpbGUgWzNdIChzdHJlYW1Vcmwgc2NoZW1hOiBmaWxlOi8vLykgXG4gICAgQ0xJUCA9IDMsXG4gXG4gICAgLy8gUlRQIHN0cmVhbSBbNF0gKHN0cmVhbVVybCBzY2hlbWE6IHJ0cDovLykgXG4gICAgUlRQID0gNCxcbiBcbiAgICAvLyBNVUxUSUNBU1Qgc3RyZWFtIFs1XSAoc3RyZWFtVXJsIHNjaGVtYTogbWNhc3Q6Ly8pIFxuICAgIE1VTFRJQ0FTVCA9IDUsXG4gXG4gICAgLy8gRG93bmxvYWQgY2xpcCBmcm9tIGh0dHAocykgWzZdIChzdHJlYW1Vcmwgc2NoZW1hOiBodHRwOi8vICBvciBodHRwczovLykgXG4gICAgSFRUUCA9IDYsXG4gXG59Il19