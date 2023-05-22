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
})(IntegrationTypeCode || (IntegrationTypeCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdyYXRpb25UeXBlQ29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvZW51bXMvSW50ZWdyYXRpb25UeXBlQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGLE1BQU0sQ0FBTixJQUFZLG1CQWdDWDtBQWhDRCxXQUFZLG1CQUFtQjtJQUUzQixpQkFBaUI7SUFDakIsdUVBQWEsQ0FBQTtJQUViLDRDQUE0QztJQUM1Qyw2REFBUSxDQUFBO0lBRVIsbURBQW1EO0lBQ25ELHlEQUFNLENBQUE7SUFFTixzQ0FBc0M7SUFDdEMsNkRBQVEsQ0FBQTtJQUVSLDBDQUEwQztJQUMxQywrREFBUyxDQUFBO0lBRVQsd0NBQXdDO0lBQ3hDLDJEQUFPLENBQUE7SUFFUCw0REFBNEQ7SUFDNUQsZ0VBQVUsQ0FBQTtJQUVWLCtEQUErRDtJQUMvRCxzRUFBYSxDQUFBO0lBRWIsdURBQXVEO0lBQ3ZELHdFQUFjLENBQUE7SUFFZCxxREFBcUQ7SUFDckQsb0VBQVksQ0FBQTtBQUVoQixDQUFDLEVBaENXLG1CQUFtQixLQUFuQixtQkFBbUIsUUFnQzlCIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gICBJbnRlZ3JhdGlvbiB0eXBlIGNvZGUgXG4qL1xuZXhwb3J0IGVudW0gSW50ZWdyYXRpb25UeXBlQ29kZSB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIEdlbmVyYWwgSFRUUC9IVFRQUyBiYXNlZCBpbnRlZ3JhdGlvbiBbMV0gXG4gICAgSFRUUCA9IDEsXG4gXG4gICAgLy8gR2VuZXJhbCBXZWIgU29ja2V0IFdTL1dTUyBiYXNlZCBpbnRlZ3JhdGlvbiBbMl0gXG4gICAgV1MgPSAyLFxuIFxuICAgIC8vIEdlbmVyYWwgU01UUCBiYXNlZCBpbnRlZ3JhdGlvbiBbM10gXG4gICAgU01UUCA9IDMsXG4gXG4gICAgLy8gSW50ZXJuYWwgZW1haWwgc2VydmljZSBpbnRlZ3JhdGlvbiBbNF0gXG4gICAgRU1BSUwgPSA0LFxuIFxuICAgIC8vIEludGVybmFsIFNNUyBzZXJ2aWNlIGludGVncmF0aW9uIFs1XSBcbiAgICBTTVMgPSA1LFxuIFxuICAgIC8vIEltbWl4IHNwZWNpZmljIGludGVncmF0aW9uIChiYXNlZCBvbiBzbXRwIHByb3RvY29sKSBbMTFdIFxuICAgIElNTUlYID0gMTEsXG4gXG4gICAgLy8gU2VudGluZWwgc3BlY2lmaWMgaW50ZWdyYXRpb24gKGJhc2VkIG9uIHNtdHAgcHJvdG9jb2wpIFsxMl0gXG4gICAgU0VOVElORUwgPSAxMixcbiBcbiAgICAvLyBNaWxlc3RvbmUgaW50ZWdyYXRpb24gKGJhc2VkIG9uIGh0dHAgcHJvdG9jb2wpIFsxM10gXG4gICAgTUlMRVNUT05FID0gMTMsXG4gXG4gICAgLy8gR2VuZXRlYyBpbnRlZ3JhdGlvbiAoYmFzZWQgb24gaHR0cCBwcm90b2NvbCkgWzE0XSBcbiAgICBHRU5FVEVDID0gMTQsXG4gXG59Il19