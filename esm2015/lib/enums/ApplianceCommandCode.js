/*
   Appliance command code.
   Message payload includes command specific data
*/
export var ApplianceCommandCode;
(function (ApplianceCommandCode) {
    // Undefined [0] 
    ApplianceCommandCode[ApplianceCommandCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Send capabilities (no payload) [1] 
    ApplianceCommandCode[ApplianceCommandCode["GET_CAPABILITIES"] = 1] = "GET_CAPABILITIES";
    // Set components configuration (or add it if not exists) [2] 
    ApplianceCommandCode[ApplianceCommandCode["SET_COMPONENTS"] = 2] = "SET_COMPONENTS";
    // Remove components (command payload described in ApplianceCommandRemoveChannel) [3] 
    ApplianceCommandCode[ApplianceCommandCode["REMOVE_COMPONENTS"] = 3] = "REMOVE_COMPONENTS";
    // Restart component containers (currently do not implement) [4] 
    ApplianceCommandCode[ApplianceCommandCode["RESTART_COMPONENTS"] = 4] = "RESTART_COMPONENTS";
    // Send list of all running containers (no payload) [5] 
    ApplianceCommandCode[ApplianceCommandCode["LIST_CONTAINERS"] = 5] = "LIST_CONTAINERS";
    // Send logs of specified component (provided in the command payload) [6] 
    ApplianceCommandCode[ApplianceCommandCode["SEND_LOGS"] = 6] = "SEND_LOGS";
    // Send status (no payload) [7] 
    ApplianceCommandCode[ApplianceCommandCode["SEND_STATUS"] = 7] = "SEND_STATUS";
    // Reset appliance credentials (no payload) [8] 
    ApplianceCommandCode[ApplianceCommandCode["RESET_CREDENTIALS"] = 8] = "RESET_CREDENTIALS";
    // Reboot host (no payload) [9] 
    ApplianceCommandCode[ApplianceCommandCode["REBOOT_HOST"] = 9] = "REBOOT_HOST";
    // Open SSH tunnel [10] 
    ApplianceCommandCode[ApplianceCommandCode["OPEN_SSH"] = 10] = "OPEN_SSH";
    // Close SSH tunnel [11] 
    ApplianceCommandCode[ApplianceCommandCode["CLOSE_SSH"] = 11] = "CLOSE_SSH";
    // Reset to factory mode (remove pairing key and all containers except manager) [12] 
    ApplianceCommandCode[ApplianceCommandCode["RESET_DEVICE"] = 12] = "RESET_DEVICE";
    // Discovery - discover all network cameras using ONVIF discovery protocol [13] 
    ApplianceCommandCode[ApplianceCommandCode["ONVIF_DISCOVERY"] = 13] = "ONVIF_DISCOVERY";
    // Start network bandwidth speed test 
    ApplianceCommandCode[ApplianceCommandCode["SPEED_TEST"] = 14] = "SPEED_TEST";
})(ApplianceCommandCode || (ApplianceCommandCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlQ29tbWFuZENvZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnVtcy9BcHBsaWFuY2VDb21tYW5kQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR0U7QUFDRixNQUFNLENBQU4sSUFBWSxvQkErQ1g7QUEvQ0QsV0FBWSxvQkFBb0I7SUFFNUIsaUJBQWlCO0lBQ2pCLHlFQUFhLENBQUE7SUFFYixzQ0FBc0M7SUFDdEMsdUZBQW9CLENBQUE7SUFFcEIsOERBQThEO0lBQzlELG1GQUFrQixDQUFBO0lBRWxCLHNGQUFzRjtJQUN0Rix5RkFBcUIsQ0FBQTtJQUVyQixpRUFBaUU7SUFDakUsMkZBQXNCLENBQUE7SUFFdEIsd0RBQXdEO0lBQ3hELHFGQUFtQixDQUFBO0lBRW5CLDBFQUEwRTtJQUMxRSx5RUFBYSxDQUFBO0lBRWIsZ0NBQWdDO0lBQ2hDLDZFQUFlLENBQUE7SUFFZixnREFBZ0Q7SUFDaEQseUZBQXFCLENBQUE7SUFFckIsZ0NBQWdDO0lBQ2hDLDZFQUFlLENBQUE7SUFFZix3QkFBd0I7SUFDeEIsd0VBQWEsQ0FBQTtJQUViLHlCQUF5QjtJQUN6QiwwRUFBYyxDQUFBO0lBRWQscUZBQXFGO0lBQ3JGLGdGQUFpQixDQUFBO0lBRWpCLGdGQUFnRjtJQUNoRixzRkFBb0IsQ0FBQTtJQUVwQixzQ0FBc0M7SUFDdEMsNEVBQWUsQ0FBQTtBQUVuQixDQUFDLEVBL0NXLG9CQUFvQixLQUFwQixvQkFBb0IsUUErQy9CIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gICBBcHBsaWFuY2UgY29tbWFuZCBjb2RlLlxuICAgTWVzc2FnZSBwYXlsb2FkIGluY2x1ZGVzIGNvbW1hbmQgc3BlY2lmaWMgZGF0YSBcbiovXG5leHBvcnQgZW51bSBBcHBsaWFuY2VDb21tYW5kQ29kZSB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIFNlbmQgY2FwYWJpbGl0aWVzIChubyBwYXlsb2FkKSBbMV0gXG4gICAgR0VUX0NBUEFCSUxJVElFUyA9IDEsXG4gXG4gICAgLy8gU2V0IGNvbXBvbmVudHMgY29uZmlndXJhdGlvbiAob3IgYWRkIGl0IGlmIG5vdCBleGlzdHMpIFsyXSBcbiAgICBTRVRfQ09NUE9ORU5UUyA9IDIsXG4gXG4gICAgLy8gUmVtb3ZlIGNvbXBvbmVudHMgKGNvbW1hbmQgcGF5bG9hZCBkZXNjcmliZWQgaW4gQXBwbGlhbmNlQ29tbWFuZFJlbW92ZUNoYW5uZWwpIFszXSBcbiAgICBSRU1PVkVfQ09NUE9ORU5UUyA9IDMsXG4gXG4gICAgLy8gUmVzdGFydCBjb21wb25lbnQgY29udGFpbmVycyAoY3VycmVudGx5IGRvIG5vdCBpbXBsZW1lbnQpIFs0XSBcbiAgICBSRVNUQVJUX0NPTVBPTkVOVFMgPSA0LFxuIFxuICAgIC8vIFNlbmQgbGlzdCBvZiBhbGwgcnVubmluZyBjb250YWluZXJzIChubyBwYXlsb2FkKSBbNV0gXG4gICAgTElTVF9DT05UQUlORVJTID0gNSxcbiBcbiAgICAvLyBTZW5kIGxvZ3Mgb2Ygc3BlY2lmaWVkIGNvbXBvbmVudCAocHJvdmlkZWQgaW4gdGhlIGNvbW1hbmQgcGF5bG9hZCkgWzZdIFxuICAgIFNFTkRfTE9HUyA9IDYsXG4gXG4gICAgLy8gU2VuZCBzdGF0dXMgKG5vIHBheWxvYWQpIFs3XSBcbiAgICBTRU5EX1NUQVRVUyA9IDcsXG4gXG4gICAgLy8gUmVzZXQgYXBwbGlhbmNlIGNyZWRlbnRpYWxzIChubyBwYXlsb2FkKSBbOF0gXG4gICAgUkVTRVRfQ1JFREVOVElBTFMgPSA4LFxuIFxuICAgIC8vIFJlYm9vdCBob3N0IChubyBwYXlsb2FkKSBbOV0gXG4gICAgUkVCT09UX0hPU1QgPSA5LFxuIFxuICAgIC8vIE9wZW4gU1NIIHR1bm5lbCBbMTBdIFxuICAgIE9QRU5fU1NIID0gMTAsXG4gXG4gICAgLy8gQ2xvc2UgU1NIIHR1bm5lbCBbMTFdIFxuICAgIENMT1NFX1NTSCA9IDExLFxuIFxuICAgIC8vIFJlc2V0IHRvIGZhY3RvcnkgbW9kZSAocmVtb3ZlIHBhaXJpbmcga2V5IGFuZCBhbGwgY29udGFpbmVycyBleGNlcHQgbWFuYWdlcikgWzEyXSBcbiAgICBSRVNFVF9ERVZJQ0UgPSAxMixcbiBcbiAgICAvLyBEaXNjb3ZlcnkgLSBkaXNjb3ZlciBhbGwgbmV0d29yayBjYW1lcmFzIHVzaW5nIE9OVklGIGRpc2NvdmVyeSBwcm90b2NvbCBbMTNdIFxuICAgIE9OVklGX0RJU0NPVkVSWSA9IDEzLFxuIFxuICAgIC8vIFN0YXJ0IG5ldHdvcmsgYmFuZHdpZHRoIHNwZWVkIHRlc3QgXG4gICAgU1BFRURfVEVTVCA9IDE0LFxuIFxufSJdfQ==