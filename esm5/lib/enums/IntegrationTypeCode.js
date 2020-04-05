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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdyYXRpb25UeXBlQ29kZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudW1zL0ludGVncmF0aW9uVHlwZUNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRixNQUFNLENBQU4sSUFBWSxtQkFnQ1g7QUFoQ0QsV0FBWSxtQkFBbUI7SUFFM0IsaUJBQWlCO0lBQ2pCLHVFQUFhLENBQUE7SUFFYiw0Q0FBNEM7SUFDNUMsNkRBQVEsQ0FBQTtJQUVSLG1EQUFtRDtJQUNuRCx5REFBTSxDQUFBO0lBRU4sc0NBQXNDO0lBQ3RDLDZEQUFRLENBQUE7SUFFUiwwQ0FBMEM7SUFDMUMsK0RBQVMsQ0FBQTtJQUVULHdDQUF3QztJQUN4QywyREFBTyxDQUFBO0lBRVAsNERBQTREO0lBQzVELGdFQUFVLENBQUE7SUFFViwrREFBK0Q7SUFDL0Qsc0VBQWEsQ0FBQTtJQUViLHVEQUF1RDtJQUN2RCx3RUFBYyxDQUFBO0lBRWQscURBQXFEO0lBQ3JELG9FQUFZLENBQUE7QUFFaEIsQ0FBQyxFQWhDVyxtQkFBbUIsS0FBbkIsbUJBQW1CLFFBZ0M5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICAgSW50ZWdyYXRpb24gdHlwZSBjb2RlIFxuKi9cbmV4cG9ydCBlbnVtIEludGVncmF0aW9uVHlwZUNvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBHZW5lcmFsIEhUVFAvSFRUUFMgYmFzZWQgaW50ZWdyYXRpb24gWzFdIFxuICAgIEhUVFAgPSAxLFxuIFxuICAgIC8vIEdlbmVyYWwgV2ViIFNvY2tldCBXUy9XU1MgYmFzZWQgaW50ZWdyYXRpb24gWzJdIFxuICAgIFdTID0gMixcbiBcbiAgICAvLyBHZW5lcmFsIFNNVFAgYmFzZWQgaW50ZWdyYXRpb24gWzNdIFxuICAgIFNNVFAgPSAzLFxuIFxuICAgIC8vIEludGVybmFsIGVtYWlsIHNlcnZpY2UgaW50ZWdyYXRpb24gWzRdIFxuICAgIEVNQUlMID0gNCxcbiBcbiAgICAvLyBJbnRlcm5hbCBTTVMgc2VydmljZSBpbnRlZ3JhdGlvbiBbNV0gXG4gICAgU01TID0gNSxcbiBcbiAgICAvLyBJbW1peCBzcGVjaWZpYyBpbnRlZ3JhdGlvbiAoYmFzZWQgb24gc210cCBwcm90b2NvbCkgWzExXSBcbiAgICBJTU1JWCA9IDExLFxuIFxuICAgIC8vIFNlbnRpbmVsIHNwZWNpZmljIGludGVncmF0aW9uIChiYXNlZCBvbiBzbXRwIHByb3RvY29sKSBbMTJdIFxuICAgIFNFTlRJTkVMID0gMTIsXG4gXG4gICAgLy8gTWlsZXN0b25lIGludGVncmF0aW9uIChiYXNlZCBvbiBodHRwIHByb3RvY29sKSBbMTNdIFxuICAgIE1JTEVTVE9ORSA9IDEzLFxuIFxuICAgIC8vIEdlbmV0ZWMgaW50ZWdyYXRpb24gKGJhc2VkIG9uIGh0dHAgcHJvdG9jb2wpIFsxNF0gXG4gICAgR0VORVRFQyA9IDE0LFxuIFxufSJdfQ==