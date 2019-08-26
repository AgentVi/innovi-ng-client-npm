/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const IntegrationTypeCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // General SMTP based integration [1] 
    SMTP: 1,
    // Immix integration (based on smtp protocol) [2 
    IMMIX: 2,
    // Sentinel integration (based on smtp protocol) [3] 
    SENTINEL: 3,
    // Web-hook integration (based on http protocol) [4] 
    WEBHOOK: 4,
    // Milestone integration (based on http protocol) [5] 
    MILESTONE: 5,
    // Genetec integration (based on http protocol) [6] 
    GENETEC: 6,
};
export { IntegrationTypeCode };
IntegrationTypeCode[IntegrationTypeCode.UNDEFINED] = 'UNDEFINED';
IntegrationTypeCode[IntegrationTypeCode.SMTP] = 'SMTP';
IntegrationTypeCode[IntegrationTypeCode.IMMIX] = 'IMMIX';
IntegrationTypeCode[IntegrationTypeCode.SENTINEL] = 'SENTINEL';
IntegrationTypeCode[IntegrationTypeCode.WEBHOOK] = 'WEBHOOK';
IntegrationTypeCode[IntegrationTypeCode.MILESTONE] = 'MILESTONE';
IntegrationTypeCode[IntegrationTypeCode.GENETEC] = 'GENETEC';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdyYXRpb25UeXBlQ29kZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudW1zL0ludGVncmF0aW9uVHlwZUNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBS0ksaUJBQWlCO0lBQ2pCLFlBQWE7SUFFYixzQ0FBc0M7SUFDdEMsT0FBUTtJQUVSLGlEQUFpRDtJQUNqRCxRQUFTO0lBRVQscURBQXFEO0lBQ3JELFdBQVk7SUFFWixxREFBcUQ7SUFDckQsVUFBVztJQUVYLHNEQUFzRDtJQUN0RCxZQUFhO0lBRWIsb0RBQW9EO0lBQ3BELFVBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIEludGVncmF0aW9uIHR5cGUgY29kZSBcbiovXG5leHBvcnQgZW51bSBJbnRlZ3JhdGlvblR5cGVDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gR2VuZXJhbCBTTVRQIGJhc2VkIGludGVncmF0aW9uIFsxXSBcbiAgICBTTVRQID0gMSxcbiBcbiAgICAvLyBJbW1peCBpbnRlZ3JhdGlvbiAoYmFzZWQgb24gc210cCBwcm90b2NvbCkgWzIgXG4gICAgSU1NSVggPSAyLFxuIFxuICAgIC8vIFNlbnRpbmVsIGludGVncmF0aW9uIChiYXNlZCBvbiBzbXRwIHByb3RvY29sKSBbM10gXG4gICAgU0VOVElORUwgPSAzLFxuIFxuICAgIC8vIFdlYi1ob29rIGludGVncmF0aW9uIChiYXNlZCBvbiBodHRwIHByb3RvY29sKSBbNF0gXG4gICAgV0VCSE9PSyA9IDQsXG4gXG4gICAgLy8gTWlsZXN0b25lIGludGVncmF0aW9uIChiYXNlZCBvbiBodHRwIHByb3RvY29sKSBbNV0gXG4gICAgTUlMRVNUT05FID0gNSxcbiBcbiAgICAvLyBHZW5ldGVjIGludGVncmF0aW9uIChiYXNlZCBvbiBodHRwIHByb3RvY29sKSBbNl0gXG4gICAgR0VORVRFQyA9IDYsXG4gXG59Il19