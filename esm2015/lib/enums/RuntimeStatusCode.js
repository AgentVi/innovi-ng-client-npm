/*
   Runtime status code represents the status of component in the host
*/
export var RuntimeStatusCode;
(function (RuntimeStatusCode) {
    // Undefined [0] 
    RuntimeStatusCode[RuntimeStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Component is defined in the configuration but not running [1] 
    RuntimeStatusCode[RuntimeStatusCode["CONFIGURED"] = 1] = "CONFIGURED";
    // Component is running on the device [2] 
    RuntimeStatusCode[RuntimeStatusCode["RUNNING"] = 2] = "RUNNING";
    // Component is defined in the configuration and running on the device [3] 
    RuntimeStatusCode[RuntimeStatusCode["CONFIGURED_AND_RUNNING"] = 3] = "CONFIGURED_AND_RUNNING";
})(RuntimeStatusCode || (RuntimeStatusCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVudGltZVN0YXR1c0NvZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnVtcy9SdW50aW1lU3RhdHVzQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGLE1BQU0sQ0FBTixJQUFZLGlCQWNYO0FBZEQsV0FBWSxpQkFBaUI7SUFFekIsaUJBQWlCO0lBQ2pCLG1FQUFhLENBQUE7SUFFYixpRUFBaUU7SUFDakUscUVBQWMsQ0FBQTtJQUVkLDBDQUEwQztJQUMxQywrREFBVyxDQUFBO0lBRVgsMkVBQTJFO0lBQzNFLDZGQUEwQixDQUFBO0FBRTlCLENBQUMsRUFkVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBYzVCIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gICBSdW50aW1lIHN0YXR1cyBjb2RlIHJlcHJlc2VudHMgdGhlIHN0YXR1cyBvZiBjb21wb25lbnQgaW4gdGhlIGhvc3QgXG4qL1xuZXhwb3J0IGVudW0gUnVudGltZVN0YXR1c0NvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBDb21wb25lbnQgaXMgZGVmaW5lZCBpbiB0aGUgY29uZmlndXJhdGlvbiBidXQgbm90IHJ1bm5pbmcgWzFdIFxuICAgIENPTkZJR1VSRUQgPSAxLFxuIFxuICAgIC8vIENvbXBvbmVudCBpcyBydW5uaW5nIG9uIHRoZSBkZXZpY2UgWzJdIFxuICAgIFJVTk5JTkcgPSAyLFxuIFxuICAgIC8vIENvbXBvbmVudCBpcyBkZWZpbmVkIGluIHRoZSBjb25maWd1cmF0aW9uIGFuZCBydW5uaW5nIG9uIHRoZSBkZXZpY2UgWzNdIFxuICAgIENPTkZJR1VSRURfQU5EX1JVTk5JTkcgPSAzLFxuIFxufSJdfQ==