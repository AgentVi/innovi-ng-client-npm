/*
   Integration type code
*/
export var IntegrationTypeCode;
(function (IntegrationTypeCode) {
    // Undefined [0] 
    IntegrationTypeCode[IntegrationTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // General HTTP/HTTPS based integration [1] 
    IntegrationTypeCode[IntegrationTypeCode["HTTP"] = 1] = "HTTP";
    // General Web Socket WS/WSS based integration [2] 
    IntegrationTypeCode[IntegrationTypeCode["WS"] = 2] = "WS";
    // General SMTP based integration [3] 
    IntegrationTypeCode[IntegrationTypeCode["SMTP"] = 3] = "SMTP";
    // Internal email service integration [4] 
    IntegrationTypeCode[IntegrationTypeCode["EMAIL"] = 4] = "EMAIL";
    // Internal SMS service integration [5] 
    IntegrationTypeCode[IntegrationTypeCode["SMS"] = 5] = "SMS";
    // Immix specific integration (based on smtp protocol) [11] 
    IntegrationTypeCode[IntegrationTypeCode["IMMIX"] = 11] = "IMMIX";
    // Sentinel specific integration (based on smtp protocol) [12] 
    IntegrationTypeCode[IntegrationTypeCode["SENTINEL"] = 12] = "SENTINEL";
    // Milestone integration (based on http protocol) [13] 
    IntegrationTypeCode[IntegrationTypeCode["MILESTONE"] = 13] = "MILESTONE";
    // Genetec integration (based on http protocol) [14] 
    IntegrationTypeCode[IntegrationTypeCode["GENETEC"] = 14] = "GENETEC";
    // MOBOTIX  integration [15] 
    IntegrationTypeCode[IntegrationTypeCode["MOBOTIX"] = 15] = "MOBOTIX";
})(IntegrationTypeCode || (IntegrationTypeCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdyYXRpb25UeXBlQ29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvZW51bXMvSW50ZWdyYXRpb25UeXBlQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGLE1BQU0sQ0FBTixJQUFZLG1CQW1DWDtBQW5DRCxXQUFZLG1CQUFtQjtJQUUzQixpQkFBaUI7SUFDakIsdUVBQWEsQ0FBQTtJQUViLDRDQUE0QztJQUM1Qyw2REFBUSxDQUFBO0lBRVIsbURBQW1EO0lBQ25ELHlEQUFNLENBQUE7SUFFTixzQ0FBc0M7SUFDdEMsNkRBQVEsQ0FBQTtJQUVSLDBDQUEwQztJQUMxQywrREFBUyxDQUFBO0lBRVQsd0NBQXdDO0lBQ3hDLDJEQUFPLENBQUE7SUFFUCw0REFBNEQ7SUFDNUQsZ0VBQVUsQ0FBQTtJQUVWLCtEQUErRDtJQUMvRCxzRUFBYSxDQUFBO0lBRWIsdURBQXVEO0lBQ3ZELHdFQUFjLENBQUE7SUFFZCxxREFBcUQ7SUFDckQsb0VBQVksQ0FBQTtJQUVaLDZCQUE2QjtJQUM3QixvRUFBWSxDQUFBO0FBRWhCLENBQUMsRUFuQ1csbUJBQW1CLEtBQW5CLG1CQUFtQixRQW1DOUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIEludGVncmF0aW9uIHR5cGUgY29kZSBcbiovXG5leHBvcnQgZW51bSBJbnRlZ3JhdGlvblR5cGVDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gR2VuZXJhbCBIVFRQL0hUVFBTIGJhc2VkIGludGVncmF0aW9uIFsxXSBcbiAgICBIVFRQID0gMSxcbiBcbiAgICAvLyBHZW5lcmFsIFdlYiBTb2NrZXQgV1MvV1NTIGJhc2VkIGludGVncmF0aW9uIFsyXSBcbiAgICBXUyA9IDIsXG4gXG4gICAgLy8gR2VuZXJhbCBTTVRQIGJhc2VkIGludGVncmF0aW9uIFszXSBcbiAgICBTTVRQID0gMyxcbiBcbiAgICAvLyBJbnRlcm5hbCBlbWFpbCBzZXJ2aWNlIGludGVncmF0aW9uIFs0XSBcbiAgICBFTUFJTCA9IDQsXG4gXG4gICAgLy8gSW50ZXJuYWwgU01TIHNlcnZpY2UgaW50ZWdyYXRpb24gWzVdIFxuICAgIFNNUyA9IDUsXG4gXG4gICAgLy8gSW1taXggc3BlY2lmaWMgaW50ZWdyYXRpb24gKGJhc2VkIG9uIHNtdHAgcHJvdG9jb2wpIFsxMV0gXG4gICAgSU1NSVggPSAxMSxcbiBcbiAgICAvLyBTZW50aW5lbCBzcGVjaWZpYyBpbnRlZ3JhdGlvbiAoYmFzZWQgb24gc210cCBwcm90b2NvbCkgWzEyXSBcbiAgICBTRU5USU5FTCA9IDEyLFxuIFxuICAgIC8vIE1pbGVzdG9uZSBpbnRlZ3JhdGlvbiAoYmFzZWQgb24gaHR0cCBwcm90b2NvbCkgWzEzXSBcbiAgICBNSUxFU1RPTkUgPSAxMyxcbiBcbiAgICAvLyBHZW5ldGVjIGludGVncmF0aW9uIChiYXNlZCBvbiBodHRwIHByb3RvY29sKSBbMTRdIFxuICAgIEdFTkVURUMgPSAxNCxcbiBcbiAgICAvLyBNT0JPVElYICBpbnRlZ3JhdGlvbiBbMTVdIFxuICAgIE1PQk9USVggPSAxNSxcbiBcbn0iXX0=