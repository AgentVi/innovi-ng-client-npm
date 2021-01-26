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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlQ29tbWFuZENvZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL2VudW1zL0FwcGxpYW5jZUNvbW1hbmRDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRTtBQUNGLE1BQU0sQ0FBTixJQUFZLG9CQStDWDtBQS9DRCxXQUFZLG9CQUFvQjtJQUU1QixpQkFBaUI7SUFDakIseUVBQWEsQ0FBQTtJQUViLHNDQUFzQztJQUN0Qyx1RkFBb0IsQ0FBQTtJQUVwQiw4REFBOEQ7SUFDOUQsbUZBQWtCLENBQUE7SUFFbEIsc0ZBQXNGO0lBQ3RGLHlGQUFxQixDQUFBO0lBRXJCLGlFQUFpRTtJQUNqRSwyRkFBc0IsQ0FBQTtJQUV0Qix3REFBd0Q7SUFDeEQscUZBQW1CLENBQUE7SUFFbkIsMEVBQTBFO0lBQzFFLHlFQUFhLENBQUE7SUFFYixnQ0FBZ0M7SUFDaEMsNkVBQWUsQ0FBQTtJQUVmLGdEQUFnRDtJQUNoRCx5RkFBcUIsQ0FBQTtJQUVyQixnQ0FBZ0M7SUFDaEMsNkVBQWUsQ0FBQTtJQUVmLHdCQUF3QjtJQUN4Qix3RUFBYSxDQUFBO0lBRWIseUJBQXlCO0lBQ3pCLDBFQUFjLENBQUE7SUFFZCxxRkFBcUY7SUFDckYsZ0ZBQWlCLENBQUE7SUFFakIsZ0ZBQWdGO0lBQ2hGLHNGQUFvQixDQUFBO0lBRXBCLHNDQUFzQztJQUN0Qyw0RUFBZSxDQUFBO0FBRW5CLENBQUMsRUEvQ1csb0JBQW9CLEtBQXBCLG9CQUFvQixRQStDL0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIEFwcGxpYW5jZSBjb21tYW5kIGNvZGUuXG4gICBNZXNzYWdlIHBheWxvYWQgaW5jbHVkZXMgY29tbWFuZCBzcGVjaWZpYyBkYXRhIFxuKi9cbmV4cG9ydCBlbnVtIEFwcGxpYW5jZUNvbW1hbmRDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gU2VuZCBjYXBhYmlsaXRpZXMgKG5vIHBheWxvYWQpIFsxXSBcbiAgICBHRVRfQ0FQQUJJTElUSUVTID0gMSxcbiBcbiAgICAvLyBTZXQgY29tcG9uZW50cyBjb25maWd1cmF0aW9uIChvciBhZGQgaXQgaWYgbm90IGV4aXN0cykgWzJdIFxuICAgIFNFVF9DT01QT05FTlRTID0gMixcbiBcbiAgICAvLyBSZW1vdmUgY29tcG9uZW50cyAoY29tbWFuZCBwYXlsb2FkIGRlc2NyaWJlZCBpbiBBcHBsaWFuY2VDb21tYW5kUmVtb3ZlQ2hhbm5lbCkgWzNdIFxuICAgIFJFTU9WRV9DT01QT05FTlRTID0gMyxcbiBcbiAgICAvLyBSZXN0YXJ0IGNvbXBvbmVudCBjb250YWluZXJzIChjdXJyZW50bHkgZG8gbm90IGltcGxlbWVudCkgWzRdIFxuICAgIFJFU1RBUlRfQ09NUE9ORU5UUyA9IDQsXG4gXG4gICAgLy8gU2VuZCBsaXN0IG9mIGFsbCBydW5uaW5nIGNvbnRhaW5lcnMgKG5vIHBheWxvYWQpIFs1XSBcbiAgICBMSVNUX0NPTlRBSU5FUlMgPSA1LFxuIFxuICAgIC8vIFNlbmQgbG9ncyBvZiBzcGVjaWZpZWQgY29tcG9uZW50IChwcm92aWRlZCBpbiB0aGUgY29tbWFuZCBwYXlsb2FkKSBbNl0gXG4gICAgU0VORF9MT0dTID0gNixcbiBcbiAgICAvLyBTZW5kIHN0YXR1cyAobm8gcGF5bG9hZCkgWzddIFxuICAgIFNFTkRfU1RBVFVTID0gNyxcbiBcbiAgICAvLyBSZXNldCBhcHBsaWFuY2UgY3JlZGVudGlhbHMgKG5vIHBheWxvYWQpIFs4XSBcbiAgICBSRVNFVF9DUkVERU5USUFMUyA9IDgsXG4gXG4gICAgLy8gUmVib290IGhvc3QgKG5vIHBheWxvYWQpIFs5XSBcbiAgICBSRUJPT1RfSE9TVCA9IDksXG4gXG4gICAgLy8gT3BlbiBTU0ggdHVubmVsIFsxMF0gXG4gICAgT1BFTl9TU0ggPSAxMCxcbiBcbiAgICAvLyBDbG9zZSBTU0ggdHVubmVsIFsxMV0gXG4gICAgQ0xPU0VfU1NIID0gMTEsXG4gXG4gICAgLy8gUmVzZXQgdG8gZmFjdG9yeSBtb2RlIChyZW1vdmUgcGFpcmluZyBrZXkgYW5kIGFsbCBjb250YWluZXJzIGV4Y2VwdCBtYW5hZ2VyKSBbMTJdIFxuICAgIFJFU0VUX0RFVklDRSA9IDEyLFxuIFxuICAgIC8vIERpc2NvdmVyeSAtIGRpc2NvdmVyIGFsbCBuZXR3b3JrIGNhbWVyYXMgdXNpbmcgT05WSUYgZGlzY292ZXJ5IHByb3RvY29sIFsxM10gXG4gICAgT05WSUZfRElTQ09WRVJZID0gMTMsXG4gXG4gICAgLy8gU3RhcnQgbmV0d29yayBiYW5kd2lkdGggc3BlZWQgdGVzdCBcbiAgICBTUEVFRF9URVNUID0gMTQsXG4gXG59Il19