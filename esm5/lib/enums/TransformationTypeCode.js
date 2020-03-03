/*
   Geo referencing transformation algorithm
*/
export var TransformationTypeCode;
(function (TransformationTypeCode) {
    // Transformation type not specified [0] 
    TransformationTypeCode[TransformationTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Location and azimuth based transformation [1] 
    TransformationTypeCode[TransformationTypeCode["AZIMUTH"] = 1] = "AZIMUTH";
    // Projective transformation based on 4 reference points [2] 
    TransformationTypeCode[TransformationTypeCode["PT4"] = 2] = "PT4";
    // Polynomial transformation based on 6 reference points [3] 
    TransformationTypeCode[TransformationTypeCode["PT6"] = 3] = "PT6";
})(TransformationTypeCode || (TransformationTypeCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhbnNmb3JtYXRpb25UeXBlQ29kZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudW1zL1RyYW5zZm9ybWF0aW9uVHlwZUNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRixNQUFNLENBQU4sSUFBWSxzQkFjWDtBQWRELFdBQVksc0JBQXNCO0lBRTlCLHlDQUF5QztJQUN6Qyw2RUFBYSxDQUFBO0lBRWIsaURBQWlEO0lBQ2pELHlFQUFXLENBQUE7SUFFWCw2REFBNkQ7SUFDN0QsaUVBQU8sQ0FBQTtJQUVQLDZEQUE2RDtJQUM3RCxpRUFBTyxDQUFBO0FBRVgsQ0FBQyxFQWRXLHNCQUFzQixLQUF0QixzQkFBc0IsUUFjakMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIEdlbyByZWZlcmVuY2luZyB0cmFuc2Zvcm1hdGlvbiBhbGdvcml0aG0gXG4qL1xuZXhwb3J0IGVudW0gVHJhbnNmb3JtYXRpb25UeXBlQ29kZSB7XG4gXG4gICAgLy8gVHJhbnNmb3JtYXRpb24gdHlwZSBub3Qgc3BlY2lmaWVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIExvY2F0aW9uIGFuZCBhemltdXRoIGJhc2VkIHRyYW5zZm9ybWF0aW9uIFsxXSBcbiAgICBBWklNVVRIID0gMSxcbiBcbiAgICAvLyBQcm9qZWN0aXZlIHRyYW5zZm9ybWF0aW9uIGJhc2VkIG9uIDQgcmVmZXJlbmNlIHBvaW50cyBbMl0gXG4gICAgUFQ0ID0gMixcbiBcbiAgICAvLyBQb2x5bm9taWFsIHRyYW5zZm9ybWF0aW9uIGJhc2VkIG9uIDYgcmVmZXJlbmNlIHBvaW50cyBbM10gXG4gICAgUFQ2ID0gMyxcbiBcbn0iXX0=