/*
   Integration status code
*/
export var IntegrationStatusCode;
(function (IntegrationStatusCode) {
    // Undefined [0] 
    IntegrationStatusCode[IntegrationStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // None of the integration actions invoked [1] 
    IntegrationStatusCode[IntegrationStatusCode["PENDING"] = 1] = "PENDING";
    // Some of the integrations succeeded but not all [2] 
    IntegrationStatusCode[IntegrationStatusCode["PARTIAL"] = 2] = "PARTIAL";
    // All the integrations succeeded [3] 
    IntegrationStatusCode[IntegrationStatusCode["SUCCESS"] = 3] = "SUCCESS";
    // All the integrations failed [4] 
    IntegrationStatusCode[IntegrationStatusCode["FAILED"] = 4] = "FAILED";
})(IntegrationStatusCode || (IntegrationStatusCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdyYXRpb25TdGF0dXNDb2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW51bXMvSW50ZWdyYXRpb25TdGF0dXNDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO0FBQ0YsTUFBTSxDQUFOLElBQVkscUJBaUJYO0FBakJELFdBQVkscUJBQXFCO0lBRTdCLGlCQUFpQjtJQUNqQiwyRUFBYSxDQUFBO0lBRWIsK0NBQStDO0lBQy9DLHVFQUFXLENBQUE7SUFFWCxzREFBc0Q7SUFDdEQsdUVBQVcsQ0FBQTtJQUVYLHNDQUFzQztJQUN0Qyx1RUFBVyxDQUFBO0lBRVgsbUNBQW1DO0lBQ25DLHFFQUFVLENBQUE7QUFFZCxDQUFDLEVBakJXLHFCQUFxQixLQUFyQixxQkFBcUIsUUFpQmhDIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gICBJbnRlZ3JhdGlvbiBzdGF0dXMgY29kZSBcbiovXG5leHBvcnQgZW51bSBJbnRlZ3JhdGlvblN0YXR1c0NvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBOb25lIG9mIHRoZSBpbnRlZ3JhdGlvbiBhY3Rpb25zIGludm9rZWQgWzFdIFxuICAgIFBFTkRJTkcgPSAxLFxuIFxuICAgIC8vIFNvbWUgb2YgdGhlIGludGVncmF0aW9ucyBzdWNjZWVkZWQgYnV0IG5vdCBhbGwgWzJdIFxuICAgIFBBUlRJQUwgPSAyLFxuIFxuICAgIC8vIEFsbCB0aGUgaW50ZWdyYXRpb25zIHN1Y2NlZWRlZCBbM10gXG4gICAgU1VDQ0VTUyA9IDMsXG4gXG4gICAgLy8gQWxsIHRoZSBpbnRlZ3JhdGlvbnMgZmFpbGVkIFs0XSBcbiAgICBGQUlMRUQgPSA0LFxuIFxufSJdfQ==