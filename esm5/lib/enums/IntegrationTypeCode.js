/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var IntegrationTypeCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // General HTTP/HTTPS based integration [1] 
    HTTP: 1,
    // General Web Socket WS/WSS based integration [2] 
    WS: 2,
    // General SMTP based integration [3] 
    SMTP: 3,
    // Internal email service integration [4] 
    EMAIL: 4,
    // Internal SMS service integration [5] 
    SMS: 5,
    // Immix specific integration (based on smtp protocol) [11] 
    IMMIX: 11,
    // Sentinel specific integration (based on smtp protocol) [12] 
    SENTINEL: 12,
};
export { IntegrationTypeCode };
IntegrationTypeCode[IntegrationTypeCode.UNDEFINED] = 'UNDEFINED';
IntegrationTypeCode[IntegrationTypeCode.HTTP] = 'HTTP';
IntegrationTypeCode[IntegrationTypeCode.WS] = 'WS';
IntegrationTypeCode[IntegrationTypeCode.SMTP] = 'SMTP';
IntegrationTypeCode[IntegrationTypeCode.EMAIL] = 'EMAIL';
IntegrationTypeCode[IntegrationTypeCode.SMS] = 'SMS';
IntegrationTypeCode[IntegrationTypeCode.IMMIX] = 'IMMIX';
IntegrationTypeCode[IntegrationTypeCode.SENTINEL] = 'SENTINEL';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdyYXRpb25UeXBlQ29kZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudW1zL0ludGVncmF0aW9uVHlwZUNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBS0ksaUJBQWlCO0lBQ2pCLFlBQWE7SUFFYiw0Q0FBNEM7SUFDNUMsT0FBUTtJQUVSLG1EQUFtRDtJQUNuRCxLQUFNO0lBRU4sc0NBQXNDO0lBQ3RDLE9BQVE7SUFFUiwwQ0FBMEM7SUFDMUMsUUFBUztJQUVULHdDQUF3QztJQUN4QyxNQUFPO0lBRVAsNERBQTREO0lBQzVELFNBQVU7SUFFViwrREFBK0Q7SUFDL0QsWUFBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICAgSW50ZWdyYXRpb24gdHlwZSBjb2RlIFxuKi9cbmV4cG9ydCBlbnVtIEludGVncmF0aW9uVHlwZUNvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBHZW5lcmFsIEhUVFAvSFRUUFMgYmFzZWQgaW50ZWdyYXRpb24gWzFdIFxuICAgIEhUVFAgPSAxLFxuIFxuICAgIC8vIEdlbmVyYWwgV2ViIFNvY2tldCBXUy9XU1MgYmFzZWQgaW50ZWdyYXRpb24gWzJdIFxuICAgIFdTID0gMixcbiBcbiAgICAvLyBHZW5lcmFsIFNNVFAgYmFzZWQgaW50ZWdyYXRpb24gWzNdIFxuICAgIFNNVFAgPSAzLFxuIFxuICAgIC8vIEludGVybmFsIGVtYWlsIHNlcnZpY2UgaW50ZWdyYXRpb24gWzRdIFxuICAgIEVNQUlMID0gNCxcbiBcbiAgICAvLyBJbnRlcm5hbCBTTVMgc2VydmljZSBpbnRlZ3JhdGlvbiBbNV0gXG4gICAgU01TID0gNSxcbiBcbiAgICAvLyBJbW1peCBzcGVjaWZpYyBpbnRlZ3JhdGlvbiAoYmFzZWQgb24gc210cCBwcm90b2NvbCkgWzExXSBcbiAgICBJTU1JWCA9IDExLFxuIFxuICAgIC8vIFNlbnRpbmVsIHNwZWNpZmljIGludGVncmF0aW9uIChiYXNlZCBvbiBzbXRwIHByb3RvY29sKSBbMTJdIFxuICAgIFNFTlRJTkVMID0gMTIsXG4gXG59Il19