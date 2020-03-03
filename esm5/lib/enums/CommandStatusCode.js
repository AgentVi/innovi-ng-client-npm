/*
   Appliance command status
*/
export var CommandStatusCode;
(function (CommandStatusCode) {
    // Undefined [0] 
    CommandStatusCode[CommandStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Pending command [1] 
    CommandStatusCode[CommandStatusCode["PENDING"] = 1] = "PENDING";
    // Command in progress [2] 
    CommandStatusCode[CommandStatusCode["EXECUTING"] = 2] = "EXECUTING";
    // Command completed successfully [3] 
    CommandStatusCode[CommandStatusCode["COMPLETED"] = 3] = "COMPLETED";
    // Command failed [4] 
    CommandStatusCode[CommandStatusCode["FAILED"] = 4] = "FAILED";
})(CommandStatusCode || (CommandStatusCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWFuZFN0YXR1c0NvZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnVtcy9Db21tYW5kU3RhdHVzQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGLE1BQU0sQ0FBTixJQUFZLGlCQWlCWDtBQWpCRCxXQUFZLGlCQUFpQjtJQUV6QixpQkFBaUI7SUFDakIsbUVBQWEsQ0FBQTtJQUViLHVCQUF1QjtJQUN2QiwrREFBVyxDQUFBO0lBRVgsMkJBQTJCO0lBQzNCLG1FQUFhLENBQUE7SUFFYixzQ0FBc0M7SUFDdEMsbUVBQWEsQ0FBQTtJQUViLHNCQUFzQjtJQUN0Qiw2REFBVSxDQUFBO0FBRWQsQ0FBQyxFQWpCVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBaUI1QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICAgQXBwbGlhbmNlIGNvbW1hbmQgc3RhdHVzIFxuKi9cbmV4cG9ydCBlbnVtIENvbW1hbmRTdGF0dXNDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gUGVuZGluZyBjb21tYW5kIFsxXSBcbiAgICBQRU5ESU5HID0gMSxcbiBcbiAgICAvLyBDb21tYW5kIGluIHByb2dyZXNzIFsyXSBcbiAgICBFWEVDVVRJTkcgPSAyLFxuIFxuICAgIC8vIENvbW1hbmQgY29tcGxldGVkIHN1Y2Nlc3NmdWxseSBbM10gXG4gICAgQ09NUExFVEVEID0gMyxcbiBcbiAgICAvLyBDb21tYW5kIGZhaWxlZCBbNF0gXG4gICAgRkFJTEVEID0gNCxcbiBcbn0iXX0=