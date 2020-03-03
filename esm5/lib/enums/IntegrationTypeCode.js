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
})(IntegrationTypeCode || (IntegrationTypeCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdyYXRpb25UeXBlQ29kZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudW1zL0ludGVncmF0aW9uVHlwZUNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRixNQUFNLENBQU4sSUFBWSxtQkEwQlg7QUExQkQsV0FBWSxtQkFBbUI7SUFFM0IsaUJBQWlCO0lBQ2pCLHVFQUFhLENBQUE7SUFFYiw0Q0FBNEM7SUFDNUMsNkRBQVEsQ0FBQTtJQUVSLG1EQUFtRDtJQUNuRCx5REFBTSxDQUFBO0lBRU4sc0NBQXNDO0lBQ3RDLDZEQUFRLENBQUE7SUFFUiwwQ0FBMEM7SUFDMUMsK0RBQVMsQ0FBQTtJQUVULHdDQUF3QztJQUN4QywyREFBTyxDQUFBO0lBRVAsNERBQTREO0lBQzVELGdFQUFVLENBQUE7SUFFViwrREFBK0Q7SUFDL0Qsc0VBQWEsQ0FBQTtBQUVqQixDQUFDLEVBMUJXLG1CQUFtQixLQUFuQixtQkFBbUIsUUEwQjlCIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gICBJbnRlZ3JhdGlvbiB0eXBlIGNvZGUgXG4qL1xuZXhwb3J0IGVudW0gSW50ZWdyYXRpb25UeXBlQ29kZSB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIEdlbmVyYWwgSFRUUC9IVFRQUyBiYXNlZCBpbnRlZ3JhdGlvbiBbMV0gXG4gICAgSFRUUCA9IDEsXG4gXG4gICAgLy8gR2VuZXJhbCBXZWIgU29ja2V0IFdTL1dTUyBiYXNlZCBpbnRlZ3JhdGlvbiBbMl0gXG4gICAgV1MgPSAyLFxuIFxuICAgIC8vIEdlbmVyYWwgU01UUCBiYXNlZCBpbnRlZ3JhdGlvbiBbM10gXG4gICAgU01UUCA9IDMsXG4gXG4gICAgLy8gSW50ZXJuYWwgZW1haWwgc2VydmljZSBpbnRlZ3JhdGlvbiBbNF0gXG4gICAgRU1BSUwgPSA0LFxuIFxuICAgIC8vIEludGVybmFsIFNNUyBzZXJ2aWNlIGludGVncmF0aW9uIFs1XSBcbiAgICBTTVMgPSA1LFxuIFxuICAgIC8vIEltbWl4IHNwZWNpZmljIGludGVncmF0aW9uIChiYXNlZCBvbiBzbXRwIHByb3RvY29sKSBbMTFdIFxuICAgIElNTUlYID0gMTEsXG4gXG4gICAgLy8gU2VudGluZWwgc3BlY2lmaWMgaW50ZWdyYXRpb24gKGJhc2VkIG9uIHNtdHAgcHJvdG9jb2wpIFsxMl0gXG4gICAgU0VOVElORUwgPSAxMixcbiBcbn0iXX0=