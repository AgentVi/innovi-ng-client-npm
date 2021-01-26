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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhbnNmb3JtYXRpb25UeXBlQ29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvZW51bXMvVHJhbnNmb3JtYXRpb25UeXBlQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGLE1BQU0sQ0FBTixJQUFZLHNCQWNYO0FBZEQsV0FBWSxzQkFBc0I7SUFFOUIseUNBQXlDO0lBQ3pDLDZFQUFhLENBQUE7SUFFYixpREFBaUQ7SUFDakQseUVBQVcsQ0FBQTtJQUVYLDZEQUE2RDtJQUM3RCxpRUFBTyxDQUFBO0lBRVAsNkRBQTZEO0lBQzdELGlFQUFPLENBQUE7QUFFWCxDQUFDLEVBZFcsc0JBQXNCLEtBQXRCLHNCQUFzQixRQWNqQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICAgR2VvIHJlZmVyZW5jaW5nIHRyYW5zZm9ybWF0aW9uIGFsZ29yaXRobSBcbiovXG5leHBvcnQgZW51bSBUcmFuc2Zvcm1hdGlvblR5cGVDb2RlIHtcbiBcbiAgICAvLyBUcmFuc2Zvcm1hdGlvbiB0eXBlIG5vdCBzcGVjaWZpZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gTG9jYXRpb24gYW5kIGF6aW11dGggYmFzZWQgdHJhbnNmb3JtYXRpb24gWzFdIFxuICAgIEFaSU1VVEggPSAxLFxuIFxuICAgIC8vIFByb2plY3RpdmUgdHJhbnNmb3JtYXRpb24gYmFzZWQgb24gNCByZWZlcmVuY2UgcG9pbnRzIFsyXSBcbiAgICBQVDQgPSAyLFxuIFxuICAgIC8vIFBvbHlub21pYWwgdHJhbnNmb3JtYXRpb24gYmFzZWQgb24gNiByZWZlcmVuY2UgcG9pbnRzIFszXSBcbiAgICBQVDYgPSAzLFxuIFxufSJdfQ==