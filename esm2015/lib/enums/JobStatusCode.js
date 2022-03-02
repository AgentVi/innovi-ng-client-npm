/*
   Job status code
*/
export var JobStatusCode;
(function (JobStatusCode) {
    // Undefined [0] 
    JobStatusCode[JobStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Job is still running [1] 
    JobStatusCode[JobStatusCode["RUNNING"] = 1] = "RUNNING";
    // Job has completed successfully and is ready for download [2] 
    JobStatusCode[JobStatusCode["COMPLETED"] = 2] = "COMPLETED";
    // Job has completed with an error [3] 
    JobStatusCode[JobStatusCode["ERROR"] = 3] = "ERROR";
    // Job has completed successfully and report has been downloaded by the user [4] 
    JobStatusCode[JobStatusCode["DOWNLOADED"] = 4] = "DOWNLOADED";
})(JobStatusCode || (JobStatusCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSm9iU3RhdHVzQ29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvZW51bXMvSm9iU3RhdHVzQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGLE1BQU0sQ0FBTixJQUFZLGFBaUJYO0FBakJELFdBQVksYUFBYTtJQUVyQixpQkFBaUI7SUFDakIsMkRBQWEsQ0FBQTtJQUViLDRCQUE0QjtJQUM1Qix1REFBVyxDQUFBO0lBRVgsZ0VBQWdFO0lBQ2hFLDJEQUFhLENBQUE7SUFFYix1Q0FBdUM7SUFDdkMsbURBQVMsQ0FBQTtJQUVULGlGQUFpRjtJQUNqRiw2REFBYyxDQUFBO0FBRWxCLENBQUMsRUFqQlcsYUFBYSxLQUFiLGFBQWEsUUFpQnhCIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gICBKb2Igc3RhdHVzIGNvZGUgXG4qL1xuZXhwb3J0IGVudW0gSm9iU3RhdHVzQ29kZSB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIEpvYiBpcyBzdGlsbCBydW5uaW5nIFsxXSBcbiAgICBSVU5OSU5HID0gMSxcbiBcbiAgICAvLyBKb2IgaGFzIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHkgYW5kIGlzIHJlYWR5IGZvciBkb3dubG9hZCBbMl0gXG4gICAgQ09NUExFVEVEID0gMixcbiBcbiAgICAvLyBKb2IgaGFzIGNvbXBsZXRlZCB3aXRoIGFuIGVycm9yIFszXSBcbiAgICBFUlJPUiA9IDMsXG4gXG4gICAgLy8gSm9iIGhhcyBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5IGFuZCByZXBvcnQgaGFzIGJlZW4gZG93bmxvYWRlZCBieSB0aGUgdXNlciBbNF0gXG4gICAgRE9XTkxPQURFRCA9IDQsXG4gXG59Il19