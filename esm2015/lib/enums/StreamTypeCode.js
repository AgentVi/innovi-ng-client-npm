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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyZWFtVHlwZUNvZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnVtcy9TdHJlYW1UeXBlQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGLE1BQU0sQ0FBTixJQUFZLGNBdUJYO0FBdkJELFdBQVksY0FBYztJQUV0QixpQkFBaUI7SUFDakIsNkRBQWEsQ0FBQTtJQUViLCtDQUErQztJQUMvQyxtREFBUSxDQUFBO0lBRVIsaURBQWlEO0lBQ2pELHFEQUFTLENBQUE7SUFFVCx5REFBeUQ7SUFDekQsbURBQVEsQ0FBQTtJQUVSLDZDQUE2QztJQUM3QyxpREFBTyxDQUFBO0lBRVAscURBQXFEO0lBQ3JELDZEQUFhLENBQUE7SUFFYiwyRUFBMkU7SUFDM0UsbURBQVEsQ0FBQTtBQUVaLENBQUMsRUF2QlcsY0FBYyxLQUFkLGNBQWMsUUF1QnpCIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gICBWaWRlbyBzdHJlYW0gdHlwZSAoc291cmNlKSBjb2RlIFxuKi9cbmV4cG9ydCBlbnVtIFN0cmVhbVR5cGVDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gUlRTUCBzdHJlYW0gWzFdIChzdHJlYW1Vcmwgc2NoZW1hOiBydHNwOi8vKSBcbiAgICBSVFNQID0gMSxcbiBcbiAgICAvLyBPTlZJRiBzdHJlYW0gWzJdIChzdHJlYW1Vcmwgc2NoZW1hOiBvbnZpZjovLykgXG4gICAgT05WSUYgPSAyLFxuIFxuICAgIC8vIFZpZGVvIGNsaXAgZnJvbSBmaWxlIFszXSAoc3RyZWFtVXJsIHNjaGVtYTogZmlsZTovLy8pIFxuICAgIENMSVAgPSAzLFxuIFxuICAgIC8vIFJUUCBzdHJlYW0gWzRdIChzdHJlYW1Vcmwgc2NoZW1hOiBydHA6Ly8pIFxuICAgIFJUUCA9IDQsXG4gXG4gICAgLy8gTVVMVElDQVNUIHN0cmVhbSBbNV0gKHN0cmVhbVVybCBzY2hlbWE6IG1jYXN0Oi8vKSBcbiAgICBNVUxUSUNBU1QgPSA1LFxuIFxuICAgIC8vIERvd25sb2FkIGNsaXAgZnJvbSBodHRwKHMpIFs2XSAoc3RyZWFtVXJsIHNjaGVtYTogaHR0cDovLyAgb3IgaHR0cHM6Ly8pIFxuICAgIEhUVFAgPSA2LFxuIFxufSJdfQ==