/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var ColorCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // No color [1] 
    NONE: 1,
    // Unknown color [2] 
    UNKNOWN: 2,
    // Multiple colors [3] 
    MULTICOLORED: 3,
    // White [4] 
    WHITE: 4,
    // Black [5] 
    BLACK: 5,
    // Gray [6] 
    GRAY: 6,
    // Blue [7] 
    BLUE: 7,
    // Brown [8] 
    BROWN: 8,
    // Green [9] 
    GREEN: 9,
    // Yellow [10] 
    YELLOW: 10,
    // Orange [11] 
    ORANGE: 11,
    // Red [12] 
    RED: 12,
    // Pink [13] 
    PINK: 13,
    // Purple [14] 
    PURPLE: 14,
    // Cyan [15] 
    CYAN: 15,
    // Silver [16] 
    SILVER: 16,
};
export { ColorCode };
ColorCode[ColorCode.UNDEFINED] = 'UNDEFINED';
ColorCode[ColorCode.NONE] = 'NONE';
ColorCode[ColorCode.UNKNOWN] = 'UNKNOWN';
ColorCode[ColorCode.MULTICOLORED] = 'MULTICOLORED';
ColorCode[ColorCode.WHITE] = 'WHITE';
ColorCode[ColorCode.BLACK] = 'BLACK';
ColorCode[ColorCode.GRAY] = 'GRAY';
ColorCode[ColorCode.BLUE] = 'BLUE';
ColorCode[ColorCode.BROWN] = 'BROWN';
ColorCode[ColorCode.GREEN] = 'GREEN';
ColorCode[ColorCode.YELLOW] = 'YELLOW';
ColorCode[ColorCode.ORANGE] = 'ORANGE';
ColorCode[ColorCode.RED] = 'RED';
ColorCode[ColorCode.PINK] = 'PINK';
ColorCode[ColorCode.PURPLE] = 'PURPLE';
ColorCode[ColorCode.CYAN] = 'CYAN';
ColorCode[ColorCode.SILVER] = 'SILVER';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sb3JDb2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW51bXMvQ29sb3JDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUtJLGlCQUFpQjtJQUNqQixZQUFhO0lBRWIsZ0JBQWdCO0lBQ2hCLE9BQVE7SUFFUixxQkFBcUI7SUFDckIsVUFBVztJQUVYLHVCQUF1QjtJQUN2QixlQUFnQjtJQUVoQixhQUFhO0lBQ2IsUUFBUztJQUVULGFBQWE7SUFDYixRQUFTO0lBRVQsWUFBWTtJQUNaLE9BQVE7SUFFUixZQUFZO0lBQ1osT0FBUTtJQUVSLGFBQWE7SUFDYixRQUFTO0lBRVQsYUFBYTtJQUNiLFFBQVM7SUFFVCxlQUFlO0lBQ2YsVUFBVztJQUVYLGVBQWU7SUFDZixVQUFXO0lBRVgsWUFBWTtJQUNaLE9BQVE7SUFFUixhQUFhO0lBQ2IsUUFBUztJQUVULGVBQWU7SUFDZixVQUFXO0lBRVgsYUFBYTtJQUNiLFFBQVM7SUFFVCxlQUFlO0lBQ2YsVUFBVyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICAgRGV0ZWN0ZWQgY29sb3Igb2Ygb2JqZWN0IChvciBwYXJ0aWFsIG9iamVjdCkgXG4qL1xuZXhwb3J0IGVudW0gQ29sb3JDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gTm8gY29sb3IgWzFdIFxuICAgIE5PTkUgPSAxLFxuIFxuICAgIC8vIFVua25vd24gY29sb3IgWzJdIFxuICAgIFVOS05PV04gPSAyLFxuIFxuICAgIC8vIE11bHRpcGxlIGNvbG9ycyBbM10gXG4gICAgTVVMVElDT0xPUkVEID0gMyxcbiBcbiAgICAvLyBXaGl0ZSBbNF0gXG4gICAgV0hJVEUgPSA0LFxuIFxuICAgIC8vIEJsYWNrIFs1XSBcbiAgICBCTEFDSyA9IDUsXG4gXG4gICAgLy8gR3JheSBbNl0gXG4gICAgR1JBWSA9IDYsXG4gXG4gICAgLy8gQmx1ZSBbN10gXG4gICAgQkxVRSA9IDcsXG4gXG4gICAgLy8gQnJvd24gWzhdIFxuICAgIEJST1dOID0gOCxcbiBcbiAgICAvLyBHcmVlbiBbOV0gXG4gICAgR1JFRU4gPSA5LFxuIFxuICAgIC8vIFllbGxvdyBbMTBdIFxuICAgIFlFTExPVyA9IDEwLFxuIFxuICAgIC8vIE9yYW5nZSBbMTFdIFxuICAgIE9SQU5HRSA9IDExLFxuIFxuICAgIC8vIFJlZCBbMTJdIFxuICAgIFJFRCA9IDEyLFxuIFxuICAgIC8vIFBpbmsgWzEzXSBcbiAgICBQSU5LID0gMTMsXG4gXG4gICAgLy8gUHVycGxlIFsxNF0gXG4gICAgUFVSUExFID0gMTQsXG4gXG4gICAgLy8gQ3lhbiBbMTVdIFxuICAgIENZQU4gPSAxNSxcbiBcbiAgICAvLyBTaWx2ZXIgWzE2XSBcbiAgICBTSUxWRVIgPSAxNixcbiBcbn0iXX0=