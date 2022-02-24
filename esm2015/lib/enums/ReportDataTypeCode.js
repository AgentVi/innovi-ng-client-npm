/*
   Report data type code (defining what columns should be included in a report)
*/
export var ReportDataTypeCode;
(function (ReportDataTypeCode) {
    // Undefined [0] 
    ReportDataTypeCode[ReportDataTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Minimum amount of data, only the essentials [1] 
    ReportDataTypeCode[ReportDataTypeCode["ESSENTIAL"] = 1] = "ESSENTIAL";
    // Often used data [2] 
    ReportDataTypeCode[ReportDataTypeCode["OFTEN_USED"] = 2] = "OFTEN_USED";
    // All exportable data [3] 
    ReportDataTypeCode[ReportDataTypeCode["ALL"] = 3] = "ALL";
})(ReportDataTypeCode || (ReportDataTypeCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3J0RGF0YVR5cGVDb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9lbnVtcy9SZXBvcnREYXRhVHlwZUNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRixNQUFNLENBQU4sSUFBWSxrQkFjWDtBQWRELFdBQVksa0JBQWtCO0lBRTFCLGlCQUFpQjtJQUNqQixxRUFBYSxDQUFBO0lBRWIsbURBQW1EO0lBQ25ELHFFQUFhLENBQUE7SUFFYix1QkFBdUI7SUFDdkIsdUVBQWMsQ0FBQTtJQUVkLDJCQUEyQjtJQUMzQix5REFBTyxDQUFBO0FBRVgsQ0FBQyxFQWRXLGtCQUFrQixLQUFsQixrQkFBa0IsUUFjN0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIFJlcG9ydCBkYXRhIHR5cGUgY29kZSAoZGVmaW5pbmcgd2hhdCBjb2x1bW5zIHNob3VsZCBiZSBpbmNsdWRlZCBpbiBhIHJlcG9ydCkgXG4qL1xuZXhwb3J0IGVudW0gUmVwb3J0RGF0YVR5cGVDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gTWluaW11bSBhbW91bnQgb2YgZGF0YSwgb25seSB0aGUgZXNzZW50aWFscyBbMV0gXG4gICAgRVNTRU5USUFMID0gMSxcbiBcbiAgICAvLyBPZnRlbiB1c2VkIGRhdGEgWzJdIFxuICAgIE9GVEVOX1VTRUQgPSAyLFxuIFxuICAgIC8vIEFsbCBleHBvcnRhYmxlIGRhdGEgWzNdIFxuICAgIEFMTCA9IDMsXG4gXG59Il19