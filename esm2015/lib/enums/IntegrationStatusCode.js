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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdyYXRpb25TdGF0dXNDb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9lbnVtcy9JbnRlZ3JhdGlvblN0YXR1c0NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRixNQUFNLENBQU4sSUFBWSxxQkFpQlg7QUFqQkQsV0FBWSxxQkFBcUI7SUFFN0IsaUJBQWlCO0lBQ2pCLDJFQUFhLENBQUE7SUFFYiwrQ0FBK0M7SUFDL0MsdUVBQVcsQ0FBQTtJQUVYLHNEQUFzRDtJQUN0RCx1RUFBVyxDQUFBO0lBRVgsc0NBQXNDO0lBQ3RDLHVFQUFXLENBQUE7SUFFWCxtQ0FBbUM7SUFDbkMscUVBQVUsQ0FBQTtBQUVkLENBQUMsRUFqQlcscUJBQXFCLEtBQXJCLHFCQUFxQixRQWlCaEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIEludGVncmF0aW9uIHN0YXR1cyBjb2RlIFxuKi9cbmV4cG9ydCBlbnVtIEludGVncmF0aW9uU3RhdHVzQ29kZSB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIE5vbmUgb2YgdGhlIGludGVncmF0aW9uIGFjdGlvbnMgaW52b2tlZCBbMV0gXG4gICAgUEVORElORyA9IDEsXG4gXG4gICAgLy8gU29tZSBvZiB0aGUgaW50ZWdyYXRpb25zIHN1Y2NlZWRlZCBidXQgbm90IGFsbCBbMl0gXG4gICAgUEFSVElBTCA9IDIsXG4gXG4gICAgLy8gQWxsIHRoZSBpbnRlZ3JhdGlvbnMgc3VjY2VlZGVkIFszXSBcbiAgICBTVUNDRVNTID0gMyxcbiBcbiAgICAvLyBBbGwgdGhlIGludGVncmF0aW9ucyBmYWlsZWQgWzRdIFxuICAgIEZBSUxFRCA9IDQsXG4gXG59Il19