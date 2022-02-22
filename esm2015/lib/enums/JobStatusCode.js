/*
   Job status code
*/
export var JobStatusCode;
(function (JobStatusCode) {
    // Undefined [0] 
    JobStatusCode[JobStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Job is still running [1] 
    JobStatusCode[JobStatusCode["RUNNING"] = 1] = "RUNNING";
    // Job has completed successfully [2] 
    JobStatusCode[JobStatusCode["COMPLETED"] = 2] = "COMPLETED";
    // Job has completed with an error [3] 
    JobStatusCode[JobStatusCode["ERROR"] = 3] = "ERROR";
})(JobStatusCode || (JobStatusCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSm9iU3RhdHVzQ29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvZW51bXMvSm9iU3RhdHVzQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGLE1BQU0sQ0FBTixJQUFZLGFBY1g7QUFkRCxXQUFZLGFBQWE7SUFFckIsaUJBQWlCO0lBQ2pCLDJEQUFhLENBQUE7SUFFYiw0QkFBNEI7SUFDNUIsdURBQVcsQ0FBQTtJQUVYLHNDQUFzQztJQUN0QywyREFBYSxDQUFBO0lBRWIsdUNBQXVDO0lBQ3ZDLG1EQUFTLENBQUE7QUFFYixDQUFDLEVBZFcsYUFBYSxLQUFiLGFBQWEsUUFjeEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIEpvYiBzdGF0dXMgY29kZSBcbiovXG5leHBvcnQgZW51bSBKb2JTdGF0dXNDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gSm9iIGlzIHN0aWxsIHJ1bm5pbmcgWzFdIFxuICAgIFJVTk5JTkcgPSAxLFxuIFxuICAgIC8vIEpvYiBoYXMgY29tcGxldGVkIHN1Y2Nlc3NmdWxseSBbMl0gXG4gICAgQ09NUExFVEVEID0gMixcbiBcbiAgICAvLyBKb2IgaGFzIGNvbXBsZXRlZCB3aXRoIGFuIGVycm9yIFszXSBcbiAgICBFUlJPUiA9IDMsXG4gXG59Il19