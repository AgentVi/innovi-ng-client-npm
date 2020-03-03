/*
   Video stream type (source) code
*/
export var StreamTypeCode;
(function (StreamTypeCode) {
    // Undefined [0] 
    StreamTypeCode[StreamTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // RTSP stream [1] 
    StreamTypeCode[StreamTypeCode["RTSP"] = 1] = "RTSP";
    // ONVIF stream [2] 
    StreamTypeCode[StreamTypeCode["ONVIF"] = 2] = "ONVIF";
    // Video clip from file [3] 
    StreamTypeCode[StreamTypeCode["CLIP"] = 3] = "CLIP";
    // RTP stream [4] 
    StreamTypeCode[StreamTypeCode["RTP"] = 4] = "RTP";
    // MULTICAST stream [5] 
    StreamTypeCode[StreamTypeCode["MULTICAST"] = 5] = "MULTICAST";
    // Download clip from http(s) [6] 
    StreamTypeCode[StreamTypeCode["HTTP"] = 6] = "HTTP";
})(StreamTypeCode || (StreamTypeCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyZWFtVHlwZUNvZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnVtcy9TdHJlYW1UeXBlQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGLE1BQU0sQ0FBTixJQUFZLGNBdUJYO0FBdkJELFdBQVksY0FBYztJQUV0QixpQkFBaUI7SUFDakIsNkRBQWEsQ0FBQTtJQUViLG1CQUFtQjtJQUNuQixtREFBUSxDQUFBO0lBRVIsb0JBQW9CO0lBQ3BCLHFEQUFTLENBQUE7SUFFVCw0QkFBNEI7SUFDNUIsbURBQVEsQ0FBQTtJQUVSLGtCQUFrQjtJQUNsQixpREFBTyxDQUFBO0lBRVAsd0JBQXdCO0lBQ3hCLDZEQUFhLENBQUE7SUFFYixrQ0FBa0M7SUFDbEMsbURBQVEsQ0FBQTtBQUVaLENBQUMsRUF2QlcsY0FBYyxLQUFkLGNBQWMsUUF1QnpCIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gICBWaWRlbyBzdHJlYW0gdHlwZSAoc291cmNlKSBjb2RlIFxuKi9cbmV4cG9ydCBlbnVtIFN0cmVhbVR5cGVDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gUlRTUCBzdHJlYW0gWzFdIFxuICAgIFJUU1AgPSAxLFxuIFxuICAgIC8vIE9OVklGIHN0cmVhbSBbMl0gXG4gICAgT05WSUYgPSAyLFxuIFxuICAgIC8vIFZpZGVvIGNsaXAgZnJvbSBmaWxlIFszXSBcbiAgICBDTElQID0gMyxcbiBcbiAgICAvLyBSVFAgc3RyZWFtIFs0XSBcbiAgICBSVFAgPSA0LFxuIFxuICAgIC8vIE1VTFRJQ0FTVCBzdHJlYW0gWzVdIFxuICAgIE1VTFRJQ0FTVCA9IDUsXG4gXG4gICAgLy8gRG93bmxvYWQgY2xpcCBmcm9tIGh0dHAocykgWzZdIFxuICAgIEhUVFAgPSA2LFxuIFxufSJdfQ==