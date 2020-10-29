/*
   Appliance command status
*/
export var CommandStatusCode;
(function (CommandStatusCode) {
    // Undefined [0] 
    CommandStatusCode[CommandStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Command is pending in the device command list  [1] 
    CommandStatusCode[CommandStatusCode["PENDING"] = 1] = "PENDING";
    // Command was accepted by the device manager [2] 
    CommandStatusCode[CommandStatusCode["EXECUTING"] = 2] = "EXECUTING";
    // Command executed successfully [3] 
    CommandStatusCode[CommandStatusCode["COMPLETED"] = 3] = "COMPLETED";
    // Command execution failed [4] 
    CommandStatusCode[CommandStatusCode["FAILED"] = 4] = "FAILED";
    // Command was sent from the command queue to the device manager [5] 
    CommandStatusCode[CommandStatusCode["SENT"] = 5] = "SENT";
})(CommandStatusCode || (CommandStatusCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWFuZFN0YXR1c0NvZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnVtcy9Db21tYW5kU3RhdHVzQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGLE1BQU0sQ0FBTixJQUFZLGlCQW9CWDtBQXBCRCxXQUFZLGlCQUFpQjtJQUV6QixpQkFBaUI7SUFDakIsbUVBQWEsQ0FBQTtJQUViLHNEQUFzRDtJQUN0RCwrREFBVyxDQUFBO0lBRVgsa0RBQWtEO0lBQ2xELG1FQUFhLENBQUE7SUFFYixxQ0FBcUM7SUFDckMsbUVBQWEsQ0FBQTtJQUViLGdDQUFnQztJQUNoQyw2REFBVSxDQUFBO0lBRVYscUVBQXFFO0lBQ3JFLHlEQUFRLENBQUE7QUFFWixDQUFDLEVBcEJXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFvQjVCIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gICBBcHBsaWFuY2UgY29tbWFuZCBzdGF0dXMgXG4qL1xuZXhwb3J0IGVudW0gQ29tbWFuZFN0YXR1c0NvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBDb21tYW5kIGlzIHBlbmRpbmcgaW4gdGhlIGRldmljZSBjb21tYW5kIGxpc3QgIFsxXSBcbiAgICBQRU5ESU5HID0gMSxcbiBcbiAgICAvLyBDb21tYW5kIHdhcyBhY2NlcHRlZCBieSB0aGUgZGV2aWNlIG1hbmFnZXIgWzJdIFxuICAgIEVYRUNVVElORyA9IDIsXG4gXG4gICAgLy8gQ29tbWFuZCBleGVjdXRlZCBzdWNjZXNzZnVsbHkgWzNdIFxuICAgIENPTVBMRVRFRCA9IDMsXG4gXG4gICAgLy8gQ29tbWFuZCBleGVjdXRpb24gZmFpbGVkIFs0XSBcbiAgICBGQUlMRUQgPSA0LFxuIFxuICAgIC8vIENvbW1hbmQgd2FzIHNlbnQgZnJvbSB0aGUgY29tbWFuZCBxdWV1ZSB0byB0aGUgZGV2aWNlIG1hbmFnZXIgWzVdIFxuICAgIFNFTlQgPSA1LFxuIFxufSJdfQ==